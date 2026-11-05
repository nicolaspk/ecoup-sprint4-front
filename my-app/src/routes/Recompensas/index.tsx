import { useNavigate } from 'react-router-dom';
import FeatureCard from '../../components/Cards/FeatureCard';

export default function Recompensas() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] border border-white/5 text-center md:text-left">
      <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[15px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Catálogo de Recompensas</h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px]">Conheça as recompensas planejadas para os futuros líderes do ranking de Pontos Ecoa.</p>

      <p className="text-[#94a3b8] mb-6">Benefícios propostos no plano da ECOUP. A API atual não calcula ranking nem concede pagamentos automaticamente.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full">
        <div className="flex flex-col items-center">
          <FeatureCard title="Subsídio Total na Energia" description="A proposta prevê subsídio integral para o primeiro lugar do ranking." icon="⚡" />
          <button onClick={() => navigate('/recompensas/1')} className="mt-[15px] bg-transparent border border-[#00f5c8] text-[#00f5c8] py-[10px] px-[20px] rounded-[8px] font-bold hover:bg-[#00f5c8]/10 cursor-pointer w-full max-w-[250px]">Ver Detalhes do Prêmio 1</button>
        </div>
        
        <div className="flex flex-col items-center">
          <FeatureCard title="Subsídio Parcial na Energia" description="A proposta prevê subsídios parciais para o segundo e terceiro lugares." icon="⚡" />
          <button onClick={() => navigate('/recompensas/2')} className="mt-[15px] bg-transparent border border-[#00f5c8] text-[#00f5c8] py-[10px] px-[20px] rounded-[8px] font-bold hover:bg-[#00f5c8]/10 cursor-pointer w-full max-w-[250px]">Ver Detalhes do Prêmio 2</button>
        </div>
      </div>
    </section>
  );
}