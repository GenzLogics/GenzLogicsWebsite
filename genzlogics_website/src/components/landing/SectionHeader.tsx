type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export default function SectionHeader({ eyebrow, title, body }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-slate-950">{title}</h2>
      {body ? <p className="mt-4 text-slate-600">{body}</p> : null}
    </div>
  );
}
