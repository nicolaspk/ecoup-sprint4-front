// Contratos baseados nos TOs da API Java ECOUP.
export interface Usuario {
  codigo: number;
  nome: string;
  email: string;
}

export type CategoriaAcao = 'Mobilidade' | 'Reciclagem' | 'Energia';
export type StatusAcao = 'REGISTRADA' | 'PENDENTE' | 'APROVADA' | 'REJEITADA';

export interface Acao {
  codigo: number;
  usuarioCodigo: number;
  titulo: string;
  categoria: CategoriaAcao;
  linkEvidencia: string;
  dataRegistro: string;
  status: StatusAcao;
}

// Intersection Types: todos os campos usados para cadastrar/editar uma ação.
export type DadosAcao = {
  usuarioCodigo: number;
  titulo: string;
  categoria: CategoriaAcao;
} & {
  linkEvidencia: string;
};

export type DadosUsuario = {
  nome: string;
  email: string;
};

export const categoriasAcao: { nome: CategoriaAcao; pontos: number; descricao: string; icone: string }[] = [
  { nome: 'Mobilidade', pontos: 30, descricao: 'Caminhada, bicicleta, carona ou transporte coletivo.', icone: '🚲' },
  { nome: 'Reciclagem', pontos: 40, descricao: 'Separação correta e descarte responsável de resíduos.', icone: '♻️' },
  { nome: 'Energia', pontos: 50, descricao: 'Ações ligadas à economia e ao uso consciente de energia.', icone: '💡' },
];

export function obterPontosPorCategoria(categoria: CategoriaAcao): number {
  return categoriasAcao.find((item) => item.nome === categoria)?.pontos ?? 0;
}

export function obterLabelStatus(status: StatusAcao): string {
  if (status === 'REGISTRADA' || status === 'PENDENTE') return 'Registrada';
  if (status === 'APROVADA') return 'Validada';
  return 'Revisar';
}
