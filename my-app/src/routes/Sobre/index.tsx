import FeatureCard from '../../components/Cards/FeatureCard';

export default function Sobre() {
  return (
    <>
      <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5 mb-[35px]">
        <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[20px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Propósito e Visão Geral</h2>
        <div className="text-[1.05rem] md:text-[1.1rem] text-white/90 text-left md:text-justify mb-[20px]">
          <p>O <strong className="text-[#00f5c8]">propósito</strong> da ECOUP é reconectar a sociedade com práticas sustentáveis através da tecnologia, criando soluções aplicáveis ao mundo real. A nossa <strong className="text-[#00f5c8]">visão geral</strong> é implementar um sistema ao ecossistema da <strong className="text-[#00f5c8]">SoulUp</strong> onde o usuário é valorizado e recompensado continuamente pelo seu impacto positivo no meio ambiente.</p>
        </div>
      </section>

      <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5 mb-[35px]">
        <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[20px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Contexto do Projeto</h2>
        <div className="text-[1.05rem] md:text-[1.1rem] text-white/90 text-left md:text-justify mb-[20px]">
          <p>A SoulUp é a primeira rede social de impacto sustentável do Brasil. Contudo, dados revelaram uma anomalia comportamental drástica em abril de 2026: uma redução de 77% nos usuários ativos e 75% no volume de eventos. Esse <strong className="text-[#00f5c8]">contexto</strong> evidencia a necessidade urgente de uma mecânica de retenção mais forte para combatemos a fadiga dos usuários e o declínio no engajamento.</p>
        </div>
      </section>

      <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5 mb-[35px]">
        <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[20px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Solução Proposta</h2>
        <div className="text-[1.05rem] md:text-[1.1rem] text-white/90 text-left md:text-justify mb-[20px]">
          <p>A ECOUP propõe um sistema automatizado de <strong className="text-[#00f5c8]">Gamificação Sustentável</strong>. Por meio de algoritmos, avaliamos o impacto ambiental das ações dos usuários e as convertemos em <strong className="text-[#00f5c8]">Pontos Ecoa</strong> (de 0 a 100). O nosso grande diferencial está na recompensa real e escalável: o usuário com maior pontuação no ranking oficial recebe um subsídio integral na sua conta de energia elétrica, garantindo uma motivação real e duradoura.</p>
        </div>
      </section>

      <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5">
        <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[20px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Tecnologias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] mt-[20px]">
          <FeatureCard 
            title="React, Vite & TypeScript" 
            description="Estruturação semântica, componentização moderna e tipagem estática rigorosa." 
            icon="⚛️"
          />
          <FeatureCard 
            title="Tailwind CSS" 
            description="Estilização utilitária focada em responsividade (Mobile-First) e UI Dark Theme." 
            icon="🎨"
          />
        </div>
      </section>
    </>
  );
}