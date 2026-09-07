import Link from "next/link";

type Props = { title: string; description: string; number: string };

export default function ServiceCard({ title, description, number }: Props) {
  return (
    <Link href="/services" className="group block rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40">
      <div className="flex items-start justify-between gap-6">
        <span className="text-xs font-semibold tracking-widest text-slate-400">{number}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-300 transition group-hover:translate-x-1 group-hover:border-brand-green/30 group-hover:bg-brand-green group-hover:text-white">↗</span>
      </div>
      <h3 className="mt-12 text-xl font-semibold tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-950 transition group-hover:border-brand-green/30 group-hover:bg-brand-green group-hover:text-white">
        Learn more <span className="ml-2">→</span>
      </span>
    </Link>
  );
}
