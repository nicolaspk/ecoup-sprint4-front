interface MemberCardProps {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  linkedin: string;
  github: string;
}

export default function MemberCard({ nome, rm, turma, foto, linkedin, github }: MemberCardProps) {
  return (
    <div className="bg-[#10172a] rounded-[16px] p-[35px_20px] text-center border border-white/5 flex flex-col items-center w-full max-w-[300px] hover:border-[#00f5c8]">
      <div className="w-[130px] h-[130px] rounded-full mb-[20px] border-[3px] border-[#00f5c8] overflow-hidden bg-[#050816] flex justify-center items-center">
        <img src={foto} alt={`Fotografia de ${nome}`} className="w-full h-auto block" />
      </div>
      <div className="mb-[15px]">
        <h3 className="text-[1.3rem] text-white mb-[8px] font-bold">{nome}</h3>
        <p className="text-[0.95rem] text-[#94a3b8] mb-[6px]">RM: {rm}</p>
        <span className="inline-block bg-[#00f5c8]/10 text-[#00f5c8] p-[4px_14px] rounded-[15px] text-[0.85rem] font-bold">{turma}</span>
      </div>
      <div className="flex gap-[12px] w-full mt-[25px]">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 text-[0.85rem] font-bold p-[10px_0] rounded-[8px] text-center bg-white/5 text-white border border-white/10 hover:bg-white/15 hover:border-white">LinkedIn</a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1 text-[0.85rem] font-bold p-[10px_0] rounded-[8px] text-center bg-white/5 text-white border border-white/10 hover:bg-white/15 hover:border-white">GitHub</a>
      </div>
    </div>
  );
}