import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { buscarUsuario, cadastrarUsuario } from '../../services/api';
import { guardarParticipante, obterParticipante, sairDoParticipante } from '../../services/participante';
import type { DadosUsuario, Usuario } from '../../types/types';

export default function Participar() {
  const navegar = useNavigate();
  const [participante, setParticipante] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<DadosUsuario>();

  useEffect(() => {
    async function carregar() {
      const codigo = obterParticipante();
      if (codigo !== null) {
        try { setParticipante(await buscarUsuario(codigo)); }
        catch { sairDoParticipante(); }
      }
      setCarregando(false);
    }
    carregar();
  }, []);

  async function cadastrar(dados: DadosUsuario) {
    setSalvando(true);
    setErro('');
    try {
      const novo = await cadastrarUsuario(dados);
      guardarParticipante(novo.codigo);
      navegar('/simulador', { state: { cadastroConcluido: novo.nome } });
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível concluir seu cadastro.');
    } finally {
      setSalvando(false);
    }
  }

  const campo = 'w-full p-3.5 bg-[#050816] border border-white/20 focus:border-[#00f5c8] rounded-[10px] text-white outline-none';

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-[1200px] mx-auto">
      <div className="bg-[#10172a] border border-white/10 rounded-[18px] p-6 sm:p-8 h-full min-w-0">
        <p className="text-[#00f5c8] text-xs font-semibold uppercase tracking-wider mb-3">Sua jornada começa aqui</p>
        <h2 className="text-white text-3xl font-bold">Participe da ECOUP</h2>
        <p className="text-[#94a3b8] mt-3 mb-8 leading-7">Faça seu cadastro para registrar suas ações sustentáveis e acompanhar sua jornada na ECOUP.</p>

        {carregando && <p role="status" className="text-[#94a3b8]">Carregando seu cadastro...</p>}

        {!carregando && participante && (
          <div className="bg-[#0b132b] rounded-[16px] border border-[#00f5c8]/25 p-5 space-y-4">
            <p className="text-[#94a3b8] text-sm">Você está participando como</p>
            <div>
              <p className="text-white text-xl font-bold break-words">{participante.nome}</p>
              <p className="text-[#94a3b8] mt-1 break-words">{participante.email}</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link to="/simulador" className="bg-[#00f5c8] text-[#050816] font-bold rounded-lg py-3 px-5">Registrar ação</Link>
              <button type="button" className="border border-white/35 rounded-lg px-4 py-3 cursor-pointer hover:border-[#00f5c8]/40" onClick={() => { sairDoParticipante(); setParticipante(null); }}>
                Usar outro cadastro
              </button>
            </div>
          </div>
        )}

        {!carregando && !participante && (
          <form noValidate onSubmit={handleSubmit(cadastrar)} className="space-y-5">
            <div>
              <label htmlFor="nome" className="block mb-2 font-bold">Seu nome</label>
              <input id="nome" className={campo} placeholder="Como você se chama?" {...register('nome', { required: 'Informe seu nome', maxLength: { value: 120, message: 'Máximo de 120 caracteres' } })} />
              {errors.nome && <p className="text-[#ff8ba0] mt-2" role="alert">{errors.nome.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-bold">Seu e-mail</label>
              <input id="email" type="email" className={campo} placeholder="seuemail@exemplo.com" {...register('email', { required: 'Informe seu e-mail', maxLength: { value: 150, message: 'Máximo de 150 caracteres' }, pattern: { value: /^\S+@\S+\.\S+$/, message: 'E-mail inválido' } })} />
              {errors.email && <p className="text-[#ff8ba0] mt-2" role="alert">{errors.email.message}</p>}
            </div>
            {erro && <p role="alert" className="text-[#ff8ba0]">{erro}</p>}
            <button type="submit" disabled={salvando} className="bg-[#00f5c8] text-[#050816] rounded-lg px-6 py-3 font-bold disabled:opacity-50">
              {salvando ? 'Cadastrando...' : 'Começar minha jornada'}
            </button>
            <p className="text-[#94a3b8] text-xs leading-5">Esta versão é uma demonstração. Utilize somente dados fictícios, pois ainda não existe autenticação individual.</p>
          </form>
        )}
      </div>

      <aside className="bg-[#10172a] border border-white/10 rounded-[18px] p-6 sm:p-8 h-full min-w-0 flex flex-col">
        <h3 className="text-white text-2xl font-bold mb-5">Como funciona</h3>
        <div className="grid grid-cols-1 grid-rows-3 gap-3 flex-1 min-h-[330px] lg:min-h-0">
          <div className="flex items-center gap-4 bg-[#0b132b] border border-white/10 rounded-[14px] p-4 min-w-0">
            <span className="w-9 h-9 shrink-0 rounded-full bg-[#00f5c8]/10 text-[#00f5c8] flex items-center justify-center font-bold">1</span>
            <div><p className="text-white font-bold">Entre na ECOUP</p><p className="text-[#94a3b8] text-sm leading-6 mt-1">Informe seu nome e e-mail para começar.</p></div>
          </div>
          <div className="flex items-center gap-4 bg-[#0b132b] border border-white/10 rounded-[14px] p-4 min-w-0">
            <span className="w-9 h-9 shrink-0 rounded-full bg-[#00f5c8]/10 text-[#00f5c8] flex items-center justify-center font-bold">2</span>
            <div><p className="text-white font-bold">Registre uma ação</p><p className="text-[#94a3b8] text-sm leading-6 mt-1">Descreva sua atitude e informe a evidência.</p></div>
          </div>
          <div className="flex items-center gap-4 bg-[#0b132b] border border-white/10 rounded-[14px] p-4 min-w-0">
            <span className="w-9 h-9 shrink-0 rounded-full bg-[#00f5c8]/10 text-[#00f5c8] flex items-center justify-center font-bold">3</span>
            <div><p className="text-white font-bold">Acompanhe suas ações</p><p className="text-[#94a3b8] text-sm leading-6 mt-1">Veja os registros e conheça os Pontos Ecoa.</p></div>
          </div>
        </div>
      </aside>
    </section>
  );
}
