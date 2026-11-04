import { useEffect, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { buscarUsuario, cadastrarAcao } from '../../services/api';
import type { CategoriaAcao, Usuario } from '../../types/types';

export default function Simulador() {
  const navegar = useNavigate();
  const [participante, setParticipante] = useState<Usuario | null>(null);
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState<CategoriaAcao>('Mobilidade');
  const [linkEvidencia, setLinkEvidencia] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregarParticipante() {
      const codigo = Number(window.sessionStorage.getItem('ecoup-participante'));
      if (Number.isInteger(codigo) && codigo > 0) {
        try {
          setParticipante(await buscarUsuario(codigo));
        } catch {
          setErro('Não foi possível consultar o participante cadastrado.');
        }
      }
      setCarregando(false);
    }
    carregarParticipante();
  }, []);

  async function registrar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (!participante) return;
    setErro('');
    setSalvando(true);
    try {
      const acao = await cadastrarAcao({
        usuarioCodigo: participante.codigo,
        titulo: titulo.trim(),
        categoria,
        linkEvidencia: linkEvidencia.trim(),
      });
      navegar(`/acoes/${acao.codigo}`);
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível registrar a ação.');
    } finally {
      setSalvando(false);
    }
  }

  return (
    <section className="max-w-[850px] mx-auto space-y-6">
      <h2 className="text-white text-3xl font-bold">Registrar ação sustentável</h2>
      {carregando && <p className="text-[#94a3b8]">Carregando participante...</p>}
      {!carregando && !participante && (
        <p className="text-[#94a3b8]">Antes de registrar uma ação, <Link to="/participar" className="text-[#00f5c8] underline">cadastre-se na ECOUP</Link>.</p>
      )}
      {participante && (
        <form onSubmit={registrar} className="bg-[#10172a] border border-white/10 rounded-xl p-6 space-y-5">
          <p className="text-[#94a3b8]">Registrando como: <strong className="text-white">{participante.nome}</strong></p>
          <label className="block text-white">Título
            <input required maxLength={200} value={titulo} onChange={e => setTitulo(e.target.value)} className="block mt-2 w-full rounded-lg bg-[#050816] border border-white/20 p-3" />
          </label>
          <label className="block text-white">Categoria
            <select value={categoria} onChange={e => setCategoria(e.target.value as CategoriaAcao)} className="block mt-2 w-full rounded-lg bg-[#050816] border border-white/20 p-3">
              <option value="Mobilidade">Mobilidade</option>
              <option value="Reciclagem">Reciclagem</option>
              <option value="Energia">Energia</option>
            </select>
          </label>
          <label className="block text-white">Link da evidência
            <input type="url" required maxLength={1000} value={linkEvidencia} onChange={e => setLinkEvidencia(e.target.value)} className="block mt-2 w-full rounded-lg bg-[#050816] border border-white/20 p-3" />
          </label>
          {erro && <p role="alert" className="text-[#ff8ba0]">{erro}</p>}
          <button disabled={salvando} type="submit" className="rounded-lg bg-[#00f5c8] text-[#050816] font-bold py-3 px-5 disabled:opacity-50">{salvando ? 'Salvando...' : 'Registrar ação'}</button>
        </form>
      )}
      {erro && !participante && <p role="alert" className="text-[#ff8ba0]">{erro}</p>}
    </section>
  );
}
