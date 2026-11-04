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
            O sistema inteligente da <strong className="text-[#00f5c8]">ECOUP</strong> para a SoulUp transforma o seu impacto ambiental em Pontos Ecoa. Participe, suba no ranking e conquiste subsídios na sua fatura de energia.
          </p>
          <Button to="/dashboard">Ver Análise e Solução</Button>
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
          description="Envie registros das suas atitudes sustentáveis pelo app." 
          icon="📱"
        />
        <FeatureCard 
          title="2. Validação pelo Algoritmo" 
          description="Nossa solução processa a ação e atribui uma pontuação justa." 
          icon="⚙️"
        />
        <FeatureCard 
          title="3. Recompensas" 
          description="Troque seus pontos acumulados por descontos reais." 
          icon="🎁"
        />
      </section>
    </>
  );
}