import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";

const work = [
  ["AI & RAG Systems", "Knowledge assistants and retrieval systems that connect internal information with useful, context-aware AI experiences.", "AI / GenAI"],
  ["Automation Platforms", "Agent and workflow systems that reduce repetitive work across operations, support, and internal processes.", "Automation"],
  ["Business Applications", "Tailored dashboards, APIs, and software built around the actual workflows and decisions a business depends on.", "Software"],
  ["Product Systems", "Integrated digital tools designed for launch readiness, growth, and clear operational ownership.", "Product"],
];

export default function WorkPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Selected work</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            Work built around meaningful business problems.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            A simple look at the kinds of systems we build—from AI experiences to internal automation and product platforms.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {work.map(([title, description, category], index) => (
            <article key={title} className="grid gap-6 rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_12px_32px_rgba(15,23,42,0.04)] md:grid-cols-[80px_1fr_180px] md:items-center reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{description}</p>
              </div>
              <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600">{category}</span>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-5 sm:flex-row">
          <Link href="/projects" className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0a7b35]">
            View projects
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50">
            Discuss your project →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
