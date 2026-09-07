import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";

const services = [
  ["AI & Generative AI", "LLM applications, RAG systems, AI workflows, assistants, and automation that support real business tasks."],
  ["AI Automation", "Streamline repetitive operations with practical workflows, integrations, and decision-support tools."],
  ["Custom Software", "SaaS products, dashboards, internal tools, and business systems designed around your real processes."],
  ["Web Development", "Fast, polished web products built for usability, conversions, and product growth."],
  ["Mobile Development", "Mobile experiences that feel natural and useful, built for the people who actually use them."],
  ["Cloud & DevOps", "Infrastructure planning, deployments, CI/CD, observability, and production support."],
  ["Python & FastAPI", "Reliable API backends, integrations, scoring services, and automation pipelines in Python."],
  ["UI/UX & Product Design", "Simple, clear interfaces and product flows that improve clarity and reduce friction."],
  ["Data & Analytics", "Dashboards, data pipelines, and analytics systems that turn raw information into decisions."],
  ["RAG & Search Systems", "Semantic search and retrieval systems that connect your knowledge with accurate AI responses."],
  ["API & Integration", "Secure and maintainable integrations between your tools, systems, and external services."],
  ["Product Strategy", "We help scope ideas into viable technical directions before complex build work begins."],
];

export default function ServicesPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            From idea to working product, built around what matters.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            We build across AI, software engineering, cloud, product design, and digital operations—keeping the stack practical, focused, and useful for the business.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map(([title, description], index) => (
            <article key={title} className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_12px_32px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.08)] reveal" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">0{index + 1}</span>
                <span className="transition group-hover:translate-x-1 group-hover:text-slate-950">↗</span>
              </div>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Need clarity</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Not sure which service fits best?</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                Tell us the problem, the business goal, and the current setup. We can shape the right technical path before development begins.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0a7b35]">
              Discuss your project →
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
