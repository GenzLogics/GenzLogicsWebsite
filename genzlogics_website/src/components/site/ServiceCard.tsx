type Props = { title: string; description: string; number: string };

export default function ServiceCard({ title, description, number }: Props) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40">
      <div className="flex items-start justify-between gap-6"><span className="text-xs font-semibold tracking-widest text-slate-400">{number}</span><span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-950">↗</span></div>
      <h3 className="mt-12 text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
