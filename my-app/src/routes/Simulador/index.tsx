import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { buscarUsuario, cadastrarAcao } from '../../services/api';
import { categoriasAcao, obterPontosPorCategoria } from '../../types/types';
import type { CategoriaAcao, DadosAcao, Usuario } from '../../types/types';

type FormularioAcao = { titulo: string; categoria: CategoriaAcao; linkEvidencia: string };

// A sessão usa a mesma chave do cadastro. Após unir as branches,
// a equipe pode centralizar estas funções em services/participante.ts.
function obterParticipante(): number | null {
  const valor = window.sessionStorage.getItem('ecoup-participante');
  const codigo = Number(valor);
  return valor && Number.isInteger(codigo) && codigo > 0 ? codigo : null;
}

function sairDoParticipante(): void {
  window.sessionStorage.removeItem('ecoup-participante');
}

export default function Simulador() {
  const navegar = useNavigate();
  const localizacao = useLocation();
  const nomeCadastro = (localizacao.state as { cadastroConcluido?: string } | null)?.cadastroConcluido;
  const [participante, setParticipante] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormularioAcao>();

  useEffect(() => {
    register('categoria', { required: 'Escolha a categoria' });
  }, [register]);

  useEffect(() => {
    async function carregar() {
      const codigo = obterParticipante();
      if (codigo !== null) {
        try {
          setParticipante(await buscarUsuario(codigo));
        } catch {
          sairDoParticipante();
          setErro('Não foi possível confirmar seu cadastro.');
        }
      }
      setCarregando(false);
    }
    carregar();
  }, []);

  async function registrarAcao(dados: FormularioAcao) {
    if (!participante) return;
    setEnviando(true);
    setErro('');
    try {
      const registro: DadosAcao = { ...dados, usuarioCodigo: participante.codigo };
      const acao = await cadastrarAcao(registro);
      navegar(`/acoes/${acao.codigo}`, { state: { acaoRegistrada: acao.titulo } });
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível cadastrar a ação.');
    } finally {
      setEnviando(false);
    }
  }

  const categoriaSelecionada = watch('categoria');
  const titulo = watch('titulo');
  const pontosEstimados = categoriaSelecionada ? obterPontosPorCategoria(categoriaSelecionada) : 0;
  const campo = 'w-full p-[14px] bg-[#050816] border border-white/15 focus:border-[#00f5c8] rounded-[10px] text-white outline-none';

  const descricaoCategoria = useMemo(() => {
    return categoriasAcao.find((item) => item.nome === categoriaSelecionada)?.descricao ?? 'Escolha uma categoria para visualizar a pontuação de referência.';
  }, [categoriaSelecionada]);

  return (
    <section className="space-y-7">
      <div className="mb-2">
        <p className="text-[#00f5c8] text-xs font-semibold uppercase tracking-widest mb-3">Sua jornada sustentável</p>
        <h2 className="text-white text-[2rem] md:text-[2.3rem] font-bold mb-3">Registrar ação</h2>
        <div className="w-20 h-1 rounded-full bg-[#00f5c8] mb-4" />
        <p className="text-[#94a3b8] max-w-[760px] leading-7">
          Conte o que você fez pelo meio ambiente, escolha uma categoria e envie o link da evidência.
        </p>
      </div>

      {participante && nomeCadastro && (
        <div role="status" aria-live="polite" className="flex items-start gap-3 rounded-[14px] border border-[#00f5c8]/40 bg-[#00f5c8]/10 p-4 sm:p-5">
          <span aria-hidden="true" className="text-[#00f5c8] text-xl font-bold">✓</span>
          <div>
            <p className="text-[#00f5c8] font-bold text-lg">Bem-vindo à ECOUP, {nomeCadastro}!</p>
            <p className="text-[#d5e4e8] text-sm sm:text-base mt-1">Seu cadastro foi realizado com sucesso. Agora você pode registrar sua primeira ação sustentável.</p>
          </div>
        </div>
      )}

      {carregando && <p role="status" className="text-[#94a3b8]">Carregando participante...</p>}

      {!carregando && !participante && (
        <div className="p-6 bg-[#10172a] rounded-xl border border-white/10 max-w-[680px]">
          <p className="mb-4 text-[#94a3b8]">Antes de registrar sua primeira ação, faça seu cadastro na ECOUP.</p>
          <Link to="/participar" className="inline-block bg-[#00f5c8] text-[#050816] font-bold rounded-lg py-3 px-5">
            Fazer meu cadastro
          </Link>
        </div>
      )}

      {participante && (
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-6 items-stretch">
          <form noValidate onSubmit={handleSubmit(registrarAcao)} className="space-y-6 bg-[#10172a] rounded-[18px] p-6 sm:p-8 border border-white/10">
            <div className="flex flex-wrap justify-between gap-4 items-start">
              <div>
                <p className="text-[#94a3b8] text-sm uppercase tracking-[1px]">Registrando como</p>
                <p className="text-white text-lg font-bold mt-1">{participante.nome}</p>
                <p className="text-[#94a3b8] text-sm">#{participante.codigo} · {participante.email}</p>
              </div>
              <Link to="/participar" className="text-[#00f5c8] border border-[#00f5c8]/40 rounded-lg px-4 py-2 text-sm font-bold hover:bg-[#00f5c8]/10">
                Trocar participante
              </Link>
            </div>

            <div>
              <label className="block font-bold mb-2 text-white" htmlFor="titulo">Qual foi a sua atitude sustentável?</label>
              <input
                id="titulo"
                maxLength={200}
                placeholder="Ex.: Fui de bicicleta para a faculdade"
                className={campo}
                {...register('titulo', {
                  required: 'Descreva a atitude',
                  maxLength: { value: 200, message: 'Máximo de 200 caracteres' },
                })}
              />
              {errors.titulo && <p role="alert" className="text-[#ff8ba0] mt-2">{errors.titulo.message}</p>}
            </div>

            <div>
              <p className="block font-bold mb-3 text-white">Escolha a categoria</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch auto-rows-fr">
                {categoriasAcao.map((categoria) => {
                  const selecionada = categoriaSelecionada === categoria.nome;
                  return (
                    <button
                      key={categoria.nome}
                      type="button"
                      aria-pressed={selecionada}
                      onClick={() => setValue('categoria', categoria.nome, { shouldValidate: true })}
                      className={`text-left h-full min-h-[142px] sm:min-h-[188px] p-4 rounded-[14px] border transition-all flex flex-col ${selecionada ? 'border-[#00f5c8] bg-[#0d1730]' : 'border-white/10 bg-[#0b132b] hover:border-[#00f5c8]/45'}`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-2xl">{categoria.icone}</span>
                        <span className="text-[#00f5c8] text-sm font-bold">+{categoria.pontos} pts</span>
                      </div>
                      <h3 className="text-white font-bold text-base sm:text-lg">{categoria.nome}</h3>
                      <p className="text-[#94a3b8] text-sm mt-2 leading-5 flex-1">{categoria.descricao}</p>
                    </button>
                  );
                })}
              </div>
              {errors.categoria && <p role="alert" className="text-[#ff8ba0] mt-2">{errors.categoria.message}</p>}
            </div>

            <div>
              <label className="block font-bold mb-2 text-white" htmlFor="linkEvidencia">Link da evidência</label>
              <input
                id="linkEvidencia"
                type="url"
                maxLength={1000}
                placeholder="https://exemplo.com/video"
                className={campo}
                {...register('linkEvidencia', {
                  required: 'Informe a URL da evidência',
                  pattern: { value: /^https?:\/\/.+/i, message: 'Use uma URL que comece com http:// ou https://' },
                  maxLength: { value: 1000, message: 'Máximo de 1000 caracteres' },
                })}
              />
              {errors.linkEvidencia && <p role="alert" className="text-[#ff8ba0] mt-2">{errors.linkEvidencia.message}</p>}
              <p className="text-[#94a3b8] text-sm mt-2">Use um link de teste. O protótipo registra a ação, mas não faz upload do vídeo.</p>
            </div>

            {erro && <p role="alert" className="text-[#ff8ba0]">{erro}</p>}

            <button type="submit" disabled={enviando} className="bg-[#00f5c8] text-[#050816] rounded-[12px] py-3 px-6 font-bold disabled:opacity-50">
              {enviando ? 'Salvando...' : 'Registrar ação'}
            </button>
          </form>

          <aside className="flex flex-col gap-5 h-full min-w-0">
            <div className="rounded-[18px] bg-[#10172a] p-6 border border-[#00f5c8]/20">
              <p className="text-[#94a3b8] text-sm uppercase tracking-[1px] mb-2">Resumo da ação</p>
              <h3 className="text-white text-2xl font-bold">{titulo?.trim() ? titulo : 'Sua atitude aparecerá aqui'}</h3>
              <p className="text-[#94a3b8] mt-3 leading-7">{descricaoCategoria}</p>
              <div className="mt-5 p-4 rounded-[14px] bg-[#0b132b] border border-white/10">
                <p className="text-[#94a3b8]">Pontuação de referência</p>
                <p className="text-[#00f5c8] text-4xl font-bold mt-1">{pontosEstimados} pts</p>
                <p className="text-[#94a3b8] text-sm mt-2">A pontuação exibida é uma simulação visual do protótipo para representar o ganho esperado pela categoria escolhida.</p>
              </div>
            </div>

            <div className="rounded-[18px] bg-[#10172a] p-6 border border-white/10 flex-1 flex flex-col">
              <h3 className="text-white text-xl font-bold mb-3">Próximos passos</h3>
              <ol className="list-decimal pl-5 text-[#94a3b8] space-y-3 leading-7 flex-1 xl:flex xl:flex-col xl:justify-evenly">
                <li>Descreva sua ação e selecione uma categoria.</li>
                <li>Informe o link de uma evidência.</li>
                <li>Conclua o registro e acompanhe a página Ações.</li>
              </ol>
              <Link to="/acoes" className="text-[#00f5c8] underline inline-block mt-5 self-start">Ver ações registradas</Link>
            </div>
          </aside>
        </div>
      )}

      {erro && !participante && <p role="alert" className="text-[#ff8ba0]">{erro}</p>}
    </section>
  );
}
