import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";

const solutions = [
  ["For startups", "Turn a raw idea into a focused MVP, product roadmap, and live system without overbuilding before demand is proven."],
  ["For growing businesses", "Replace manual work with connected systems, AI-powered automation, dashboards, and operational tools that scale."],
  ["For AI products", "Build useful LLM experiences, AI workflows, and retrieval systems that fit into real business operations and user flows."],
];

export default function SolutionsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Solutions</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            Technology that fits the way your business actually works.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            We don’t start with the fanciest stack. We start with the problem, workflow, and outcome, then design the smallest useful solution around them.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {solutions.map(([title, description], index) => (
            <article key={title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_12px_32px_rgba(15,23,42,0.04)] reveal" style={{ animationDelay: `${index * 120}ms` }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">0{index + 1}</p>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Workflow mapping</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Have a specific process in mind?</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                We can help turn a messy workflow into a clear technical plan before the first build cycle begins.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0a7b35]">
              Start a conversation →
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
