import MemberCard from '../../components/Cards/MemberCard';

export default function Integrantes() {
  const membros = [
    { nome: "Maria Eduarda Escandor", rm: "568216", turma: "1TDSPO", foto: "/img/foto-maria1.jpeg", linkedin: "https://www.linkedin.com/in/maria-eduarda-escandor-5b1587359/", github: "https://github.com/mariabatistaescandor-gif" },
    { nome: "Erick Menezes", rm: "570325", turma: "1TDSPF", foto: "/img/foto-erick.jpeg", linkedin: "https://www.linkedin.com/in/erick-menezes-b53009232/", github: "https://github.com/DevErick-658" },
    { nome: "Maria Eduarda Lopes de Lima", rm: "572425", turma: "1TDSPO", foto: "/img/foto-maria2.png", linkedin: "https://www.linkedin.com/in/maria-eduarda-lopes-de-lima-1291b6289/", github: "https://github.com/mariaeduardaalima" },
    { nome: "Matheus Yudi ", rm: " 571245", turma: "1TDSPF", foto: "/img/matheus.png", linkedin: "https://www.linkedin.com/in/matheus-yudi7/", github: "https://github.com/ogmatheus7" },
    { nome: "Nicolas Sousa", rm: "574141", turma: "1TDSPH", foto: "/img/foto-nicolas.jpg", linkedin: "https://www.linkedin.com/in/nicolas-sousaa/", github: "https://github.com/nicolaspk" }
  ];

  return (
    <section className="bg-[#10172a] p-[30px] md:p-[40px] rounded-[12px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] border border-white/5 text-center md:text-left">
      <h2 className="text-white text-[2.2rem] mb-[20px] border-b-[2px] border-[#00f5c8] inline-block pb-[10px] font-bold">Quem Somos</h2>
      <p className="text-[#94a3b8] text-[1.1rem] mb-[40px]">Conheça o time de engenharia de produto por trás da ECOUP.</p>
      
      <div className="flex flex-wrap justify-center gap-[30px] w-full">
        {membros.map((membro, index) => (
          <MemberCard key={index} {...membro} />
        ))}
      </div>
    </section>
  );
}