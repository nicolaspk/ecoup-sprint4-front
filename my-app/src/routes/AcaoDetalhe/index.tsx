import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { buscarAcao } from '../../services/api';
import { obterLabelStatus, obterPontosPorCategoria } from '../../types/types';
import type { Acao } from '../../types/types';

export default function AcaoDetalhe() {
  const { codigo } = useParams<{ codigo: string }>();
  const localizacao = useLocation();
  const tituloRegistrado = (localizacao.state as { acaoRegistrada?: string } | null)?.acaoRegistrada;
  const [acao, setAcao] = useState<Acao | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregar() {
      try {
        const numero = Number(codigo);
        if (!Number.isInteger(numero) || numero <= 0) throw new Error('Código da ação inválido.');
        setAcao(await buscarAcao(numero));
      } catch (e) {
        setErro(e instanceof Error ? e.message : 'Ação não encontrada.');
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [codigo]);

  return (
    <section className="bg-[#10172a] rounded-[18px] border border-white/10 p-6 sm:p-10 max-w-[860px] mx-auto space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[#94a3b8] text-sm uppercase tracking-[1px] mb-2">Detalhes da atitude</p>
          <h2 className="text-white text-3xl font-bold">Registro ECOUP</h2>
        </div>
        <Link to="/acoes" className="text-[#00f5c8] border border-[#00f5c8]/40 rounded-lg px-4 py-2 font-bold hover:bg-[#00f5c8]/10">
          Voltar às ações
        </Link>
      </div>

      {tituloRegistrado && (
        <div role="status" aria-live="polite" className="flex items-start gap-3 rounded-[14px] border border-[#00f5c8]/40 bg-[#00f5c8]/10 p-4 sm:p-5">
          <span aria-hidden="true" className="text-[#00f5c8] text-xl font-bold">✓</span>
          <div>
            <p className="text-[#00f5c8] font-bold text-lg">Ação registrada com sucesso!</p>
            <p className="text-[#d5e4e8] text-sm sm:text-base mt-1 break-words">“{tituloRegistrado}” foi salva. Você pode consultar os detalhes do registro abaixo.</p>
          </div>
        </div>
      )}

      {carregando && <p role="status" className="text-[#94a3b8]">Consultando API...</p>}
      {erro && <p role="alert" className="text-[#ff8ba0]">{erro}</p>}

      {acao && (
        <>
          <div className="rounded-[18px] bg-[#0b132b] border border-white/10 p-6">
            <div className="flex flex-wrap justify-between gap-4 items-start">
              <div>
                <p className="text-[#00f5c8] text-sm font-bold">{acao.categoria}</p>
                <h3 className="text-white text-2xl font-bold mt-2 break-words">{acao.titulo}</h3>
              </div>
              <span className="rounded-full border border-[#00f5c8]/30 bg-[#00f5c8]/10 px-3 py-1 text-sm font-bold text-[#00f5c8]">#{acao.codigo}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-[14px] bg-[#10172a] p-4 border border-white/10">
                <p className="text-[#94a3b8] text-sm">Data do registro</p>
                <p className="text-white font-bold mt-1">{acao.dataRegistro}</p>
              </div>
              <div className="rounded-[14px] bg-[#10172a] p-4 border border-white/10">
                <p className="text-[#94a3b8] text-sm">Pontuação estimada</p>
                <p className="text-[#00f5c8] font-bold text-2xl mt-1">{obterPontosPorCategoria(acao.categoria)} pts</p>
              </div>
              <div className="rounded-[14px] bg-[#10172a] p-4 border border-white/10">
                <p className="text-[#94a3b8] text-sm">Status visual</p>
                <p className="text-white font-bold mt-1">{obterLabelStatus(acao.status)}</p>
              </div>
              <div className="rounded-[14px] bg-[#10172a] p-4 border border-white/10">
                <p className="text-[#94a3b8] text-sm">Evidência enviada</p>
                <a href={acao.linkEvidencia} target="_blank" rel="noreferrer" className="text-[#00f5c8] underline break-all mt-1 inline-block">
                  Abrir link informado
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[18px] bg-[#0b132b] border border-white/10 p-6">
            <h4 className="text-white text-xl font-bold mb-3">Observação do protótipo</h4>
            <p className="text-[#94a3b8] leading-7">
              A pontuação exibida nesta página é uma referência visual baseada na categoria da atitude. O objetivo é representar, de forma simples, como a jornada da ECOUP pode valorizar ações sustentáveis dentro do projeto.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
