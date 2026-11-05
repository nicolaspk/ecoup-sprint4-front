export default function Faq() {
  const faqData = [
    {
      pergunta: 'O que são os Pontos Ecoa?',
      resposta: 'Os Pontos Ecoa representam o reconhecimento pelas ações sustentáveis realizadas na comunidade SoulUp. Na proposta da ECOUP, a pontuação considera o impacto da ação e ajuda a formar o ranking mensal. Na demonstração, os pontos exibidos são estimativas por categoria.'
    },
    {
      pergunta: 'Como registro uma ação sustentável?',
      resposta: 'Comece fazendo seu cadastro na ECOUP. Depois, abra Registrar ação, descreva o que você fez, escolha uma categoria e informe um link de evidência. Você poderá consultar o registro na página Ações.'
    },
    {
      pergunta: 'Como as minhas ações são validadas?',
      resposta: 'A proposta da ECOUP é analisar evidências com inteligência artificial para confirmar a atitude e calcular seu impacto. No protótipo atual, o registro é salvo com o link enviado, enquanto a avaliação automatizada ainda é uma funcionalidade planejada.'
    },
    {
      pergunta: 'Como posso ganhar um subsídio na conta de luz?',
      resposta: 'A ideia é promover um ranking mensal de engajamento sustentável: o primeiro colocado poderá receber o pagamento integral da conta de energia, e o segundo e o terceiro, subsídios parciais de até 50%. Esses benefícios fazem parte da proposta da solução e não são concedidos automaticamente nesta demonstração.'
    },
    {
      pergunta: 'Onde acompanho minhas ações?',
      resposta: 'Acesse a página Ações para consultar os registros da ECOUP. Cada ação tem sua própria página de detalhes, com categoria, data e link da evidência. A pontuação mostrada no site é ilustrativa.'
    },
    {
      pergunta: 'Os meus dados estão seguros?',
      resposta: 'Esta versão é um protótipo de demonstração. Os cadastros e as ações são registrados em um banco Oracle por meio da API Java, mas ainda não há autenticação individual. Por isso, use apenas informações fictícias nos testes e não envie links privados.'
    }
  ];

  return (
    <section className="max-w-[900px] mx-auto bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] border border-white/5">
      <h2 className="text-white text-[2.2rem] mb-[20px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Perguntas Frequentes (FAQ)</h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px]">Conheça a proposta da ECOUP e saiba como experimentar suas funcionalidades.</p>
      <div className="flex flex-col gap-[20px]">
        {faqData.map((item, index) => (
          <article key={index} className="flex flex-col md:flex-row items-center md:items-start gap-[20px] bg-[#050816] p-[25px] rounded-[12px] border border-white/5 border-l-[6px] border-l-[#00f5c8]">
            <div className="text-[2.2rem] flex-shrink-0 mt-[5px]" aria-hidden="true">💡</div>
            <div className="text-center md:text-left">
              <h3 className="text-white text-[1.3rem] mb-[10px] font-bold">{item.pergunta}</h3>
              <p className="text-[#94a3b8] text-[1.05rem] leading-[1.65] text-left">{item.resposta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
