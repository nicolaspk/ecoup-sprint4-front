import { useForm, type SubmitHandler } from 'react-hook-form';

interface ContatoFormInputs {
  nome: string;
  email: string;
  mensagem: string;
}

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<ContatoFormInputs>();

  const onSubmit: SubmitHandler<ContatoFormInputs> = (data) => {
    console.log("Dados capturados com sucesso:", data);
    reset();
  };

  return (
    <section className="text-center max-w-[600px] mx-auto mb-[60px] flex flex-col items-center">
      <h2 className="text-white text-[2.2rem] mb-[20px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">
        Fale com a ECOUP
      </h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px]">
        Tem dúvidas sobre a implementação da gamificação ou deseja suporte comercial? Envie sua mensagem para a nossa equipe.
      </p>

      <div className="w-full bg-[#10172a] p-[40px_20px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5 border-t-[4px] border-t-[#00f5c8]">
        
        {isSubmitSuccessful && (
          <div className="mb-[20px] p-[15px] bg-[#00f5c8]/10 border border-[#00f5c8] text-[#00f5c8] rounded-[8px] font-bold">
            Mensagem enviada com sucesso!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px] text-left">
          
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="nome" className="text-white font-bold">Nome Completo</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              className={`w-full p-[15px] bg-[#050816] rounded-[8px] text-white outline-none transition-all duration-250 ${errors.nome ? 'border-[2px] border-[#ff4d6d] shadow-[0_0_10px_rgba(255,77,109,0.3)]' : 'border border-white/15 focus:border-[#00f5c8] focus:shadow-[0_0_12px_rgba(0,210,138,0.3)]'}`}
              {...register("nome", { required: "O nome é obrigatório" })}
            />
            {errors.nome && <span className="text-[#ff4d6d] text-[0.9rem] font-bold mt-[4px]">{errors.nome.message}</span>}
          </div>

          <div className="flex flex-col gap-[8px]">
            <label htmlFor="email" className="text-white font-bold">E-mail Corporativo</label>
            <input
              id="email"
              type="email"
              placeholder="exemplo@soulup.com"
              className={`w-full p-[15px] bg-[#050816] rounded-[8px] text-white outline-none transition-all duration-250 ${errors.email ? 'border-[2px] border-[#ff4d6d] shadow-[0_0_10px_rgba(255,77,109,0.3)]' : 'border border-white/15 focus:border-[#00f5c8] focus:shadow-[0_0_12px_rgba(0,210,138,0.3)]'}`}
              {...register("email", { 
                required: "O e-mail é obrigatório",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Insira um formato de e-mail válido"
                }
              })}
            />
            {errors.email && <span className="text-[#ff4d6d] text-[0.9rem] font-bold mt-[4px]">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-[8px]">
            <label htmlFor="mensagem" className="text-white font-bold">Sua Mensagem</label>
            <textarea
              id="mensagem"
              rows={4}
              placeholder="Como podemos ajudar?"
              className={`w-full p-[15px] bg-[#050816] rounded-[8px] text-white outline-none transition-all duration-250 resize-none ${errors.mensagem ? 'border-[2px] border-[#ff4d6d] shadow-[0_0_10px_rgba(255,77,109,0.3)]' : 'border border-white/15 focus:border-[#00f5c8] focus:shadow-[0_0_12px_rgba(0,210,138,0.3)]'}`}
              {...register("mensagem", { required: "A mensagem não pode estar vazia" })}
            ></textarea>
            {errors.mensagem && <span className="text-[#ff4d6d] text-[0.9rem] font-bold mt-[4px]">{errors.mensagem.message}</span>}
          </div>

          <button 
            type="submit" 
            className="w-full mt-[10px] bg-[#00f5c8] text-[#050816] py-[15px] px-[30px] font-bold rounded-[30px] transition-all duration-250 border-none text-center uppercase tracking-[1px] shadow-[0_0_30px_rgba(0,245,200,0.25)] hover:bg-[#00ddb3] hover:-translate-y-[3px] hover:shadow-[0_0_25px_rgba(0,210,138,0.8)] cursor-pointer"
          >
            Enviar Mensagem
          </button>

        </form>
      </div>
    </section>
  );
}