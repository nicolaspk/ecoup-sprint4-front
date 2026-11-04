export default function Faq() {
  const faqData = [
    {
      pergunta: "O que são os Pontos Ecoa?",
      resposta: "Os Pontos Ecoa são a moeda virtual de engajamento do sistema SoulUp. Eles são atribuídos automaticamente (variando de 0 a 100) após o nosso Algoritmo validar uma ação sustentável real submetida por você na plataforma SoulUp."
    },
    {
      pergunta: "Como eu ganho o subsídio na conta de luz?",
      resposta: "Os pontos que você acumula posicionam o seu perfil em um ranking geral. O usuário que atingir o topo do ranking de engajamento no ciclo vigente recebe, como recompensa máxima, o subsídio integral da sua fatura de energia elétrica."
    },
    {
      pergunta: "Como as minhas ações são validadas?",
      resposta: "Você deve enviar um vídeo ou foto comprovando a ação sustentável. O nosso sistema analisa o material utilizando algoritmos de reconhecimento para garantir a autenticidade e evitar fraudes antes de gerar a pontuação."
    },
    {
      pergunta: "Os meus dados estão seguros?",
      resposta: "Sim. A ECOUP desenvolveu o sistema com rigorosas regras de segurança. Adotamos validação e sanitização de dados, proteção de endpoints e minimização de dados coletados, separando informações pessoais das métricas analíticas."
    }
  ];

  return (
    <section className="max-w-[900px] mx-auto bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] border border-white/5">
      <h2 className="text-white text-[2.2rem] mb-[20px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Perguntas Frequentes (FAQ)</h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px]">Esclarecimentos gerais sobre o funcionamento do sistema de gamificação e os Pontos Ecoa.</p>
      
      <div className="flex flex-col gap-[20px]">
        {faqData.map((item, index) => (
          <article key={index} className="flex flex-col md:flex-row items-center md:items-start gap-[20px] bg-[#050816] p-[25px] rounded-[12px] border border-white/5 border-l-[6px] border-l-[#00f5c8]">
            <div className="text-[2.2rem] flex-shrink-0 mt-[5px]" aria-hidden="true">💡</div>
            <div className="text-center md:text-left">
              <h3 className="text-white text-[1.3rem] mb-[10px] font-bold">{item.pergunta}</h3>
              <p className="text-[#94a3b8] text-[1.05rem] leading-[1.6] text-center md:text-justify">{item.resposta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}