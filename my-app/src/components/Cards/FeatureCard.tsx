interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function FeatureCard({ title, description, icon = "🌱" }: FeatureCardProps) {
  return (
    <article className="bg-[#10172a] p-[30px] rounded-[12px] text-center border-t-[4px] border-[#00f5c8]">
      <div className="text-[3rem] mb-[15px]" aria-hidden="true">{icon}</div>
      <h3 className="mb-[15px] text-[#00f5c8] font-bold text-[1.2rem]">{title}</h3>
      <p className="text-[#94a3b8] text-[1.05rem] leading-[1.6]">{description}</p>
    </article>
  );
}