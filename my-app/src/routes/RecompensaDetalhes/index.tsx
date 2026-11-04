import { useParams, useNavigate } from 'react-router-dom';

export default function RecompensaDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const detalhes = id === '1' 
    ? {
        titulo: "Subsídio Total na Energia",
        descricao: "Ao conquistar o 1º lugar no ranking mensal de Pontos Ecoa, você garante 100% de isenção na sua próxima fatura de energia elétrica. O benefício é processado automaticamente pelo sistema da SoulUp no ciclo de faturamento seguinte.",
        icone: "🏆"
      }
    : {
        titulo: "Subsídio Parcial na Energia",
        descricao: "Ficando em 2º ou 3º lugar no ranking mensal, você é recompensado com um desconto de até 50% na sua conta de luz. Continue registrando suas ações sustentáveis para alcançar o topo!",
        icone: "🥈"
      };

  return (
    <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] border border-white/5 text-center max-w-[600px] mx-auto shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
      <div className="text-[4rem] mb-[20px]">{detalhes.icone}</div>
      <h2 className="text-[#00f5c8] text-[2rem] font-bold mb-[20px]">{detalhes.titulo}</h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px] leading-[1.8]">
        {detalhes.descricao}
      </p>
      
      <button 
        onClick={() => navigate('/recompensas')} 
        className="bg-[#00f5c8] text-[#050816] py-[12px] px-[30px] font-bold rounded-[30px] uppercase tracking-[1px] hover:bg-[#00ddb3] cursor-pointer"
      >
        Voltar ao Catálogo
      </button>
    </section>
  );
}