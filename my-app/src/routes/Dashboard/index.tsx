import { useState } from 'react';

export default function Dashboard() {
  const [modalAtivo, setModalAtivo] = useState(false);
  const [metricaAtual, setMetricaAtual] = useState({ titulo: '', valor: '' });

  const handleOpenModal = (titulo: string, valor: string) => {
    setMetricaAtual({ titulo, valor });
    setModalAtivo(true);
  };

  return (
    <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5">
      <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[15px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Análise de Dados e Solução ECOUP</h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px]">O painel abaixo apresenta o diagnóstico do problema enfrentado pela SoulUp e como o nosso sistema atua para reverter este cenário.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] mb-[50px]">
        <article onClick={() => handleOpenModal('Total de Usuários', '61.242')} className="bg-[#121a2f] p-[30px_20px] rounded-[12px] text-center border border-white/5 cursor-pointer transition-all duration-250 hover:-translate-y-[5px] hover:border-[#00f5c8] hover:shadow-[0_0_30px_rgba(0,245,200,0.25)]">
          <h3 className="text-[#94a3b8] text-[1.1rem] mb-[10px] font-bold">Total de Usuários</h3>
          <p className="text-[#00f5c8] text-[2.2rem] font-bold">61.242</p>
        </article>

        <article onClick={() => handleOpenModal('Usuários Ativos', '9.599')} className="bg-[#121a2f] p-[30px_20px] rounded-[12px] text-center border-l-[4px] border-l-[#ff4d6d] cursor-pointer transition-all duration-250 hover:-translate-y-[5px] hover:border-[#00f5c8] hover:shadow-[0_0_30px_rgba(0,245,200,0.25)]">
          <h3 className="text-[#94a3b8] text-[1.1rem] mb-[10px] font-bold">Usuários Ativos</h3>
          <p className="text-[#00f5c8] text-[2.2rem] font-bold">9.599 <span className="text-[#ff4d6d] text-[1.2rem] ml-[5px] block md:inline">(-77%)</span></p>
        </article>

        <article onClick={() => handleOpenModal('Novos Usuários', '2.875')} className="bg-[#121a2f] p-[30px_20px] rounded-[12px] text-center border-l-[4px] border-l-[#ff4d6d] cursor-pointer transition-all duration-250 hover:-translate-y-[5px] hover:border-[#00f5c8] hover:shadow-[0_0_30px_rgba(0,245,200,0.25)]">
          <h3 className="text-[#94a3b8] text-[1.1rem] mb-[10px] font-bold">Novos Usuários</h3>
          <p className="text-[#00f5c8] text-[2.2rem] font-bold">2.875 <span className="text-[#ff4d6d] text-[1.2rem] ml-[5px] block md:inline">(-68%)</span></p>
        </article>

        <article onClick={() => handleOpenModal('Ações (Eventos)', '183.057')} className="bg-[#121a2f] p-[30px_20px] rounded-[12px] text-center border-l-[4px] border-l-[#ff4d6d] cursor-pointer transition-all duration-250 hover:-translate-y-[5px] hover:border-[#00f5c8] hover:shadow-[0_0_30px_rgba(0,245,200,0.25)]">
          <h3 className="text-[#94a3b8] text-[1.1rem] mb-[10px] font-bold">Ações (Eventos)</h3>
          <p className="text-[#00f5c8] text-[2.2rem] font-bold">183.057 <span className="text-[#ff4d6d] text-[1.2rem] ml-[5px] block md:inline">(-75%)</span></p>
        </article>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
        <div className="bg-[#121a2f] p-[25px_15px] md:p-[40px_30px] rounded-[12px] border border-white/5">
          <h3 className="text-white text-[1.4rem] font-bold mb-[20px]">Volume de Eventos por Mês (2026)</h3>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col md:flex-row md:items-center gap-[5px] md:gap-[15px]"><span className="font-bold text-[#94a3b8] w-[100px] text-left">Janeiro</span><div className="bg-[#00f5c8] text-[#050816] p-[10px_15px] rounded-[6px] font-bold w-[70%] text-center">50.823</div></div>
            <div className="flex flex-col md:flex-row md:items-center gap-[5px] md:gap-[15px]"><span className="font-bold text-[#94a3b8] w-[100px] text-left">Fevereiro</span><div className="bg-[#00f5c8] text-[#050816] p-[10px_15px] rounded-[6px] font-bold w-[65%] text-center">47.241</div></div>
            <div className="flex flex-col md:flex-row md:items-center gap-[5px] md:gap-[15px]"><span className="font-bold text-[#94a3b8] w-[100px] text-left">Março</span><div className="bg-[#00f5c8] text-[#050816] p-[10px_15px] rounded-[6px] font-bold w-[90%] text-center">70.420</div></div>
            <div className="flex flex-col md:flex-row md:items-center gap-[5px] md:gap-[15px]"><span className="font-bold text-[#94a3b8] w-[100px] text-left">Abril</span><div className="bg-[#ff4d6d] text-white p-[10px_15px] rounded-[6px] font-bold w-[30%] text-center shadow-[0_0_10px_rgba(255,51,102,0.5)]">14.573 (Queda)</div></div>
          </div>
        </div>

        <div className="bg-[#121a2f] p-[25px_15px] md:p-[40px_30px] rounded-[12px] border border-white/5">
          <h3 className="text-white text-[1.4rem] font-bold mb-[15px]">A Nossa Solução</h3>
          <p className="text-[#94a3b8] text-[1rem] md:text-[1.1rem] mb-[15px] text-left"><strong className="text-[#00f5c8]">O Problema:</strong> Os dados indicam queda drástica a partir de Abril, demonstrando baixa retenção e falta de incentivo contínuo.</p>
          <p className="text-[#94a3b8] text-[1rem] md:text-[1.1rem] text-left"><strong className="text-[#00f5c8]">Como resolvemos:</strong> A ECOUP aplica gamificação sustentável baseada em Pontos Ecoa. Cada ação gera recompensas reais na conta de energia, aumentando engajamento e reduzindo abandono da plataforma.</p>
        </div>
      </div>

      {modalAtivo && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#0b132b]/95 flex justify-center items-center z-[9999]">
          <div className="bg-[#10172a] p-[30px_15px] md:p-[45px_30px] rounded-[18px] text-center max-w-[480px] w-[95%] border-[2px] border-[#00f5c8] shadow-[0_0_35px_rgba(0,210,138,0.35)]">
            <div className="text-[3rem] md:text-[4rem] mb-[15px]">📊</div>
            <h2 className="text-white text-[1.4rem] md:text-[1.6rem] font-bold mb-[15px]">{metricaAtual.titulo}</h2>
            <p className="text-[#00f5c8] text-[1.6rem] md:text-[2.2rem] font-bold mb-[20px]">{metricaAtual.valor}</p>
            <p className="text-[#94a3b8] text-[1rem] md:text-[1.1rem] mb-[30px]">A nossa gamificação atua para melhorar e estabilizar este indicador corporativo.</p>
            <button onClick={() => setModalAtivo(false)} className="bg-[#00f5c8] text-[#050816] py-[12px] px-[30px] font-bold rounded-[30px] border-none uppercase tracking-[1px] cursor-pointer hover:bg-[#00ddb3]">Entendido</button>
          </div>
        </div>
      )}
    </section>
  );
}