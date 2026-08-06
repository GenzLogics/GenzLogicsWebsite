type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md animate-pop-in">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-slate-600">{description}</p>
    </div>
  );
}
