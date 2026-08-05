type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-slate-600">“{quote}”</p>
      <p className="mt-6 text-sm font-semibold text-slate-950">{name}</p>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  );
}
