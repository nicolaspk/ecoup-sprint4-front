
import FeatureCard from '../../components/Cards/FeatureCard';

export default function Sobre() {
  return (
    <>
      <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5 mb-[35px]">
        <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[20px] border-b-[2px] border-b-[#00f5c8] inline-block pb-[10px] font-bold">
          Propósito e Visão Geral
        </h2>

        <div className="text-[1.05rem] md:text-[1.1rem] text-white/90 text-left md:text-justify mb-[20px]">
          <p>
            O <strong className="text-[#00f5c8]">propósito</strong> da ECOUP
            é incentivar práticas sustentáveis por meio da tecnologia e da
            gamificação. Nossa <strong className="text-[#00f5c8]">visão</strong> é
            oferecer à comunidade <strong className="text-[#00f5c8]">SoulUp</strong> uma
            solução que valorize atitudes positivas para o meio ambiente.
            Nesta versão, o protótipo permite cadastrar participantes,
            registrar ações sustentáveis e consultar os registros por
            meio da API Java.
          </p>
        </div>
      </section>

      <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5 mb-[35px]">
        <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[20px] border-b-[2px] border-b-[#00f5c8] inline-block pb-[10px] font-bold">
          Contexto do Projeto
        </h2>

        <div className="text-[1.05rem] md:text-[1.1rem] text-white/90 text-left md:text-justify mb-[20px]">
          <p>
            A SoulUp é uma plataforma voltada ao impacto sustentável.
            Os dados utilizados no estudo de caso da ECOUP indicam
            uma redução significativa do engajamento em abril de 2026,
            incluindo uma queda de 77% nos usuários ativos e de
            75% no volume de eventos. Esse contexto evidencia a
            necessidade de mecanismos de incentivo e retenção que
            estimulem a participação contínua da comunidade.
          </p>
        </div>
      </section>

      <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5 mb-[35px]">
        <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[20px] border-b-[2px] border-b-[#00f5c8] inline-block pb-[10px] font-bold">
          Solução Proposta
        </h2>

        <div className="text-[1.05rem] md:text-[1.1rem] text-white/90 text-left md:text-justify mb-[20px]">
          <p>
            A ECOUP propõe uma solução de{' '}
            <strong className="text-[#00f5c8]">Gamificação Sustentável</strong>.
            O protótipo permite registrar ações com categoria e link
            de evidência, armazenando as informações por meio de
            uma API Java integrada ao banco Oracle. Os{' '}
            <strong className="text-[#00f5c8]">Pontos Ecoa</strong>{' '}
            apresentados na interface são estimativas ilustrativas
            por categoria. A validação automática por inteligência
            artificial, o ranking mensal e os subsídios na conta
            de energia fazem parte da evolução planejada para
            a solução e ainda não são executados automaticamente
            nesta versão.
          </p>
        </div>
      </section>

      <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5">
        <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[20px] border-b-[2px] border-b-[#00f5c8] inline-block pb-[10px] font-bold">
          Tecnologias
        </h2>

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
