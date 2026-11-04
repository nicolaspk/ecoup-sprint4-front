import { useState, useEffect } from 'react';

export default function Simulador() {
  const [step, setStep] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [acaoTitulo, setAcaoTitulo] = useState('');
  const [pontosPendentes, setPontosPendentes] = useState(0);
  const [mensagem, setMensagem] = useState('Aguardando o início da jornada...');
  const [isAnalisando, setIsAnalisando] = useState(false);
  const [modalSucesso, setModalSucesso] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;    
    if (isAnalisando) {
      setMensagem('A IA da ECOUP está analisando sua evidência...');
      timer = setTimeout(() => {
        setIsAnalisando(false);
        const novosPontos = Math.min(pontos + pontosPendentes, 100);
        setPontos(novosPontos);
        setMensagem(`Evidência Validada! Ganhou +${pontosPendentes} Pontos Ecoa!`);
        
        if (novosPontos >= 100) {
          setTimeout(() => setModalSucesso(true), 800);
        } else {
          setTimeout(() => {
            setAcaoTitulo('');
            setPontosPendentes(0);
            setMensagem('Aguardando nova ação para alcançar os 100 pontos...');
            setStep(1);
          }, 2500);
        }
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isAnalisando, pontos, pontosPendentes]);

  const iniciarSimulacao = () => {
    setStep(1);
    setMensagem('Descreva a sua ação e escolha uma categoria...');
  };

  const avancarParaEnvio = () => {
    if (acaoTitulo === '') {
      setErro(true);
      return;
    }
    setErro(false);
    setStep(2);
    setMensagem('Aguardando o envio do arquivo da galeria...');
  };

  const reiniciarCiclo = () => {
    setModalSucesso(false);
    setPontos(0);
    setAcaoTitulo('');
    setPontosPendentes(0);
    setStep(1);
    setMensagem('Pronto para um novo ciclo de sustentabilidade.');
  };

  const categorias = [
    { nome: 'Mobilidade', pts: 30 },
    { nome: 'Reciclagem', pts: 40 },
    { nome: 'Energia', pts: 50 },
    { nome: 'Outros', pts: 20 },
  ];

  return (
    <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] border border-white/5">
      <h2 className="text-white text-[2rem] md:text-[2.2rem] mb-[15px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Protótipo da Jornada do Usuário</h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px]">Siga o fluxo interativo para entender como a ECOUP valida ações customizadas.</p>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[35px] items-start">
        
        <div className="bg-[#10172a] p-[25px] md:p-[45px_35px] rounded-[14px] border border-white/5 min-h-[450px] flex flex-col justify-center">
          
          {step === 0 && (
            <div className="text-center">
              <div className="text-[4rem] mb-[20px]">🎮</div>
              <h3 className="text-[#00f5c8] font-bold text-[1.8rem] mb-[20px]">Bem-vindo ao Protótipo ECOUP</h3>
              <p className="text-[#94a3b8] text-[1.1rem] leading-[1.8] mb-[30px]">Assuma o papel de um utilizador. Você registrará o nome da sua atitude sustentável, escolherá a categoria e enviará um arquivo para a nossa IA analisar.</p>
              <button onClick={iniciarSimulacao} className="bg-[#00f5c8] text-[#050816] py-[15px] px-[30px] font-bold rounded-[30px] uppercase hover:bg-[#00ddb3] cursor-pointer">Iniciar Simulação</button>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="text-white text-[1.6rem] flex items-center gap-[15px] mb-[30px]">
                <span className="bg-[#00f5c8] text-[#050816] w-[36px] h-[36px] flex justify-center items-center rounded-full font-bold">1</span> 
                Qual foi sua atitude sustentável?
              </h3>
              
              <div className="mb-[30px]">
                <label className="text-white block mb-[10px] font-bold">Título / Nome da Ação:</label>
                <input 
                  type="text" 
                  value={acaoTitulo}
                  onChange={(e) => setAcaoTitulo(e.target.value)}
                  placeholder="Ex: Fui de bicicleta para a faculdade..." 
                  className={`w-full p-[15px] bg-[#050816] border ${erro ? 'border-[#ff4d6d]' : 'border-white/15 focus:border-[#00f5c8]'} rounded-[8px] text-white outline-none`}
                />
                {erro && <span className="text-[#ff4d6d] text-[0.95rem] font-bold mt-[8px] block">Você precisa digitar um título para avançar</span>}
              </div>

              <p className="text-[#94a3b8] font-bold mb-[20px]">Selecione a categoria para cálculo de impacto:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mb-[40px]">
                {categorias.map((cat, index) => (
                  <button 
                    key={index}
                    onClick={() => setPontosPendentes(cat.pts)}
                    className={`p-[20px] rounded-[12px] border bg-[#050816] text-center cursor-pointer ${pontosPendentes === cat.pts ? 'border-[#00f5c8]' : 'border-white/5 hover:border-[#00f5c8]/50'}`}
                  >
                    <h4 className="text-white font-bold mb-[5px]">{cat.nome}</h4>
                    <span className="text-[#00f5c8] font-bold text-[0.9rem]">Até {cat.pts} pts</span>
                  </button>
                ))}
              </div>

              {pontosPendentes > 0 && (
                <button onClick={avancarParaEnvio} className="w-full bg-[#00f5c8] text-[#050816] py-[15px] font-bold rounded-[8px] uppercase hover:bg-[#00ddb3] cursor-pointer">Avançar para Envio</button>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <h3 className="text-white text-[1.6rem] flex items-center justify-center gap-[15px] mb-[30px]">
                <span className="bg-[#00f5c8] text-[#050816] w-[36px] h-[36px] flex justify-center items-center rounded-full font-bold">2</span> 
                Evidência Real
              </h3>
              <div className="p-[40px_20px] bg-[#050816] border-[2px] border-dashed border-[#00f5c8] rounded-[12px] flex flex-col items-center gap-[20px]">
                <div className="text-[4rem]">📸</div>
                <div>
                  <p className="text-white mb-[5px]">Ação selecionada:</p>
                  <h4 className="text-[#00f5c8] text-[1.5rem] font-bold">{acaoTitulo}</h4>
                </div>
                {isAnalisando === false ? (
                  <button onClick={() => setIsAnalisando(true)} className="bg-[#00f5c8] text-[#050816] py-[15px] px-[30px] font-bold rounded-[8px] uppercase hover:bg-[#00ddb3] cursor-pointer w-full max-w-[350px]">Analisar Evidência na IA</button>
                ) : (
                  <button disabled className="bg-[#00f5c8]/50 text-[#050816] py-[15px] px-[30px] font-bold rounded-[8px] uppercase cursor-not-allowed w-full max-w-[350px]">Analisando...</button>
                )}
              </div>
            </div>
          )}
        </div>

        <aside className="flex flex-col gap-[25px]">
          <div className="bg-[#10172a] p-[30px] rounded-[14px] border border-[#00f5c8]/20">
            <div className="flex flex-col items-center gap-[10px] mb-[15px]">
              <h4 className="text-white font-bold text-[1.2rem]">Seus Pontos Ecoa</h4>
              <span className="text-[#00f5c8] font-bold text-[1.8rem]">{pontos} / 100</span>
            </div>
            <div className="w-full bg-[#121a2f] h-[30px] rounded-[20px] overflow-hidden mb-[20px]">
              <div 
                className="h-full bg-[#00f5c8]" 
                style={{ width: `${pontos}%` }}
              ></div>
            </div>
            <p className="text-[#94a3b8] text-[1rem] text-center">Atingir 100 pontos desbloqueia o subsídio na conta de energia!</p>
          </div>

          <div className="bg-[#060b19] p-[30px_20px] border border-white/5 rounded-[10px] flex flex-col items-center justify-center min-h-[100px] text-center">
            <p className={isAnalisando ? 'text-[#94a3b8]' : 'text-[#00f5c8] font-bold'}>{mensagem}</p>
          </div>
        </aside>
      </div>

      {modalSucesso && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#0b132b]/95 flex justify-center items-center z-[9999]">
          <div className="bg-[#10172a] p-[45px_30px] rounded-[18px] text-center max-w-[480px] w-[95%] border-[2px] border-[#00f5c8]">
            <div className="text-[5rem] mb-[15px]">🏆</div>
            <h2 className="text-white text-[2rem] font-bold mb-[15px]">PARABÉNS!</h2>
            <p className="text-[#00f5c8] text-[1.3rem] font-bold mb-[20px]">Você atingiu 100 Pontos Ecoa!</p>
            <p className="text-[#94a3b8] text-[1.1rem] mb-[30px]">O seu subsídio para a conta de energia elétrica foi desbloqueado com sucesso no sistema da SoulUp!</p>
            <button onClick={reiniciarCiclo} className="bg-[#00f5c8] text-[#050816] py-[15px] px-[30px] font-bold rounded-[30px] uppercase hover:bg-[#00ddb3] cursor-pointer">Começar Novo Ciclo</button>
          </div>
        </div>
      )}
    </section>
  );
}