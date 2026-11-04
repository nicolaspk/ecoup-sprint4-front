// sessionStorage foi estudado nas aulas. Aqui ele só lembra o código
// do participante enquanto a aba estiver aberta; NÃO substitui login.
const CHAVE = 'ecoup-participante';

export function obterParticipante(): number | null {
  const valor = window.sessionStorage.getItem(CHAVE);
  const codigo = Number(valor);
  if (!valor || !Number.isInteger(codigo) || codigo <= 0) return null;
  return codigo;
}

export function guardarParticipante(codigo: number): void {
  window.sessionStorage.setItem(CHAVE, String(codigo));
}

export function sairDoParticipante(): void {
  window.sessionStorage.removeItem(CHAVE);
}
