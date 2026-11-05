import { Link } from 'react-router-dom';
import Button from '../../components/Botao/Button';
import FeatureCard from '../../components/Cards/FeatureCard';

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between gap-[40px] bg-[#10172a] p-[40px_20px] md:p-[60px_40px] rounded-[16px] mb-[50px] border border-[#00f5c8]/20 text-center md:text-left">
        <div className="flex-1">
          <h2 className="text-[2.2rem] md:text-[3rem] text-white mb-[20px] leading-[1.2] font-bold">
            O futuro sustentável rende benefícios reais.
          </h2>
          <p className="text-[1.1rem] md:text-[1.2rem] text-[#94a3b8] mb-[30px]">
            O sistema inteligente da <strong className="text-[#00f5c8]">ECOUP</strong> para a SoulUp transforma o seu impacto ambiental em Pontos Ecoa. Participe, acompanhe os registros da solução e conheça as recompensas propostas para a comunidade.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button to="/participar">Começar agora</Button>
            <LinkSecundario />
          </div>
        </div>
        <div className="flex-1 text-center">
          <img
            src="/img/hero-image.png"
            alt="Logo sustentável com planeta Terra, folhas verdes e circuitos tecnológicos"
            className="max-w-full rounded-[12px]"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[50px]">
        <FeatureCard
          title="1. Ação no Dia a Dia"
          description="Registre atitudes sustentáveis com uma descrição simples e um link de evidência."
          icon="📱"
        />
        <FeatureCard
          title="2. Pontos Ecoa"
          description="Cada categoria possui uma pontuação de referência para ilustrar o impacto da ação."
          icon="⚙️"
        />
        <FeatureCard
          title="3. Recompensas"
          description="Conheça os benefícios e o objetivo do ranking pensado para a SoulUp."
          icon="🎁"
        />
      </section>
    </>
  );
}

function LinkSecundario() {
  return (
    <Link
      to="/dashboard"
      className="inline-block border border-[#00f5c8] text-[#00f5c8] py-[14px] px-[28px] font-bold rounded-[30px] hover:bg-[#00f5c8]/10 transition-colors"
    >
      Ver análise da SoulUp
    </Link>
  );
}
