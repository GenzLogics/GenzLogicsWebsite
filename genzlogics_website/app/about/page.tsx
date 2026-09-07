import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";

const values = [
  ["Engineering", "Clean, maintainable systems designed for real operations, not just working demos."],
  ["AI with purpose", "We apply automation where it creates value, reduces friction, and supports decisions."],
  ["Product mindset", "We focus on outcomes, usability, and traction, not just technical complexity."],
];

const strengths = [
  ["Strategy-first", "We begin by understanding business goals, constraints, and the user journey before writing code."],
  ["Execution clarity", "Our process keeps teams informed, decisions transparent, and progress measurable."],
  ["Long-term fit", "We build systems that can evolve with the business instead of becoming a one-time project."],
];

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">About GenZLogics</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            A practical software partner for businesses ready to move faster.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            We blend software engineering, AI implementation, and product thinking to build systems that solve real operational challenges and unlock new opportunities.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map(([title, description], index) => (
            <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_12px_32px_rgba(15,23,42,0.04)] reveal" style={{ animationDelay: `${index * 120}ms` }}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">0{index + 1}</p>
              <h2 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Our approach</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Simple process. Real outcomes.</h2>
            </div>

            <div className="space-y-5">
              {strengths.map(([title, text]) => (
                <div key={title} className="rounded-[1.25rem] border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 sm:flex-row">
          <Link href="/services" className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0a7b35]">
            Explore services
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50">
            Work with us
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
