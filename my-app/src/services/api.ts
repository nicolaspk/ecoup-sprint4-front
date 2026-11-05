import type { Acao, DadosAcao, DadosUsuario, Usuario } from '../types/types';


const URL_API = (import.meta.env.VITE_API_URL || 'http://localhost:8080').replace(/\/$/, '');

async function verificarResposta(resposta: Response, descricao: string): Promise<void> {
  if (!resposta.ok) {
    if (resposta.status === 404) throw new Error('Registro não encontrado.');
    if (resposta.status === 400) throw new Error('Confira os dados preenchidos.');
    throw new Error(`${descricao} (HTTP ${resposta.status}).`);
  }
}

export async function cadastrarUsuario(dados: DadosUsuario): Promise<Usuario> {
  const resposta = await fetch(`${URL_API}/api/usuarios`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });
  await verificarResposta(resposta, 'Não foi possível cadastrar o participante');
  return await resposta.json() as Usuario;
}

export async function buscarUsuario(codigo: number): Promise<Usuario> {
  const resposta = await fetch(`${URL_API}/api/usuarios/${codigo}`);
  await verificarResposta(resposta, 'Não foi possível consultar o participante');
  return await resposta.json() as Usuario;
}

export async function cadastrarAcao(dados: DadosAcao): Promise<Acao> {
  const resposta = await fetch(`${URL_API}/api/acoes`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });
  await verificarResposta(resposta, 'Não foi possível registrar a ação');
  return await resposta.json() as Acao;
}

export async function listarAcoes(): Promise<Acao[]> {
  const resposta = await fetch(`${URL_API}/api/acoes`);
  await verificarResposta(resposta, 'Não foi possível carregar as ações');
  return await resposta.json() as Acao[];
}

export async function buscarAcao(codigo: number): Promise<Acao> {
  const resposta = await fetch(`${URL_API}/api/acoes/${codigo}`);
  await verificarResposta(resposta, 'Não foi possível consultar a ação');
  return await resposta.json() as Acao;
}
