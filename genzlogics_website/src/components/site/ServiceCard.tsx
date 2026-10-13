import Link from "next/link";

type Props = { title: string; description: string; number: string };

export default function ServiceCard({ title, description, number }: Props) {
  return (
    <Link href="/services" className="group service-card surface block rounded-2xl p-7">
      <div className="flex items-start justify-between gap-6">
        <span className="text-xs font-semibold tracking-widest text-muted">{number}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-muted text-muted transition group-hover:translate-x-1 group-hover:border-brand-green/30 group-hover:bg-brand-green group-hover:text-white">↗</span>
      </div>
      <h3 className="mt-12 text-xl font-semibold tracking-tight text-heading">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <span className="mt-6 inline-flex items-center rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-heading transition group-hover:border-brand-green/30 group-hover:bg-brand-green group-hover:text-white">
        Learn more <span className="ml-2">→</span>
      </span>
    </Link>
  );
}
