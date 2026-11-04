import { Link } from 'react-router-dom';
export default function NaoEncontrada() {
  return <section className="bg-[#10172a] border border-white/10 p-10 rounded-xl text-center">
    <h2 className="text-white text-3xl font-bold mb-4">Página não encontrada</h2>
    <p className="text-[#94a3b8] mb-6">O endereço informado não corresponde a uma página da ECOUP.</p>
    <Link to="/" className="text-[#00f5c8] underline">Voltar ao início</Link>
  </section>;
}
