import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarAcoes } from '../../services/api';
import { obterLabelStatus, obterPontosPorCategoria } from '../../types/types';
import type { Acao } from '../../types/types';

export default function Acoes() {
  const [acoes, setAcoes] = useState<Acao[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregar() {
      try { setAcoes(await listarAcoes()); }
      catch (e) { setErro(e instanceof Error ? e.message : 'Falha ao consultar as ações.'); }
      finally { setCarregando(false); }
    }
    carregar();
  }, []);

  const totalPontos = useMemo(() => {
    return acoes.reduce((total, acao) => total + obterPontosPorCategoria(acao.categoria), 0);
  }, [acoes]);

  return (
    <section className="space-y-7 max-w-[1200px] mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-5 pb-5 border-b border-white/15">
        <div>
          <p className="text-[#00f5c8] text-xs font-semibold uppercase tracking-widest mb-2">Histórico da ECOUP</p>
          <h2 className="text-white text-3xl md:text-[2.2rem] font-bold">Ações sustentáveis</h2>
          <p className="text-[#94a3b8] mt-3 max-w-[700px] leading-7">Consulte as ações registradas na ECOUP e a pontuação ilustrativa associada à categoria de cada registro.</p>
        </div>
        <Link to="/simulador" className="bg-[#00f5c8] text-[#050816] font-bold px-5 py-3 rounded-[12px] hover:bg-[#00ddb3] whitespace-nowrap">
          Registrar ação
        </Link>
      </div>

      {carregando && <p role="status" className="text-[#94a3b8]">Carregando ações...</p>}
      {erro && <p role="alert" className="text-[#ff8ba0] rounded-lg bg-[#10172a] p-5">{erro} Verifique se a API Java está no ar.</p>}

      {!carregando && !erro && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch auto-rows-fr">
            <div className="bg-[#10172a] rounded-[16px] border border-white/10 p-5 h-full min-h-[122px] flex flex-col justify-between">
              <p className="text-[#94a3b8]">Ações registradas</p>
              <p className="text-[#00f5c8] text-3xl font-bold mt-2">{acoes.length}</p>
            </div>
            <div className="bg-[#10172a] rounded-[16px] border border-white/10 p-5 h-full min-h-[122px] flex flex-col justify-between">
              <p className="text-[#94a3b8]">Pontos Ecoa ilustrativos</p>
              <p className="text-[#00f5c8] text-3xl font-bold mt-2">{totalPontos}</p>
            </div>
            <div className="bg-[#10172a] rounded-[16px] border border-white/10 p-5 h-full min-h-[122px] flex flex-col justify-between">
              <p className="text-[#94a3b8]">Categorias utilizadas</p>
              <p className="text-[#00f5c8] text-3xl font-bold mt-2">{new Set(acoes.map((acao) => acao.categoria)).size}</p>
            </div>
          </div>

          <div className="bg-[#10172a] rounded-[18px] border border-white/10 p-5 sm:p-7">
            <h3 className="text-white text-xl font-bold mb-5">Histórico de ações</h3>
            {acoes.length === 0 ? (
              <p className="text-[#94a3b8] leading-7">Nenhuma ação registrada ainda. <Link to="/simulador" className="text-[#00f5c8] underline">Registre sua primeira ação.</Link></p>
            ) : (
              <div className="space-y-3">
                {acoes.map((acao) => (
                  <article key={acao.codigo} className="bg-[#0b132b] border border-white/10 rounded-[14px] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#00f5c8]/35 transition-colors">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="text-[#00f5c8] font-bold">{acao.categoria}</span>
                        <span className="text-[#64748b]">·</span>
                        <span className="text-[#94a3b8]">Registro #{acao.codigo}</span>
                      </div>
                      <h4 className="text-white text-lg font-bold mt-2 break-words">{acao.titulo}</h4>
                      <p className="text-[#94a3b8] mt-2 text-sm">{acao.dataRegistro} · {obterLabelStatus(acao.status)}</p>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-5 shrink-0">
                      <div>
                        <p className="text-[#94a3b8] text-xs">Pontos estimados</p>
                        <p className="text-[#00f5c8] font-bold text-xl">{obterPontosPorCategoria(acao.categoria)} pts</p>
                      </div>
                      <Link to={`/acoes/${acao.codigo}`} className="text-[#00f5c8] border border-[#00f5c8]/30 px-4 py-2 rounded-lg font-semibold hover:bg-[#00f5c8]/10 whitespace-nowrap">Ver detalhes</Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
          <p className="text-[#94a3b8] text-sm text-center mx-auto max-w-[860px] leading-6">Os Pontos Ecoa mostrados nesta demonstração são estimativas por categoria, não pontos aprovados por inteligência artificial.</p>
        </>
      )}
    </section>
  );
}
