import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";

const services = [
  ["AI & Generative AI", "LLM systems, automation workflows, RAG products, and business-focused agent experiences."],
  ["Custom Software", "Product architecture, internal systems, dashboards, and workflows that support real operations."],
  ["Web & Mobile", "Responsive product experiences that look sharp, load fast, and keep users engaged."],
  ["Cloud & DevOps", "Deployment pipelines, cloud architecture, monitoring, and reliable production support."],
];

const metrics = [
  ["5+", "Years building digital products"],
  ["20+", "Projects delivered across SaaS and AI"],
  ["99%", "Focus on outcome, clarity, and speed"],
];

const process = [
  ["01", "Discover", "We map the problem, users, and technical constraints before the first line of product code."],
  ["02", "Design", "We shape the right solution, interface, and system flow around the real business outcome."],
  ["03", "Build", "We iterate quickly, ship working value, and keep technical decisions transparent and practical."],
  ["04", "Scale", "We optimize, monitor, and improve after launch so the product keeps performing."],
];

const results = [
  ["Founder-ready MVPs", "Launch product ideas with clarity and speed."],
  ["Operational automation", "Reduce manual effort with workflow-driven systems."],
  ["AI that fits the workflow", "Deploy useful AI that supports the business, not hype."],
];

export default function Home() {
  return (
    <PageShell>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Software development & AI solutions</p>
              <h1 className="mt-6 max-w-xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[5rem] leading-[0.92]">
                We build software that moves your business forward.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                GenZLogics helps startups and businesses turn ideas, manual processes, and technical problems into useful digital products and AI-powered systems.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="rounded-full bg-brand-green px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0a7b35]">
                  Start a project
                </Link>
                <Link href="/services" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50">
                  Explore services
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-[1.2rem] border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="text-xl font-semibold tracking-tight text-slate-950">{value}</div>
                    <div className="mt-2 text-xs leading-5 text-slate-600">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="mx-auto max-w-lg rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Operational overview</p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Product system</h2>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">Live</span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      ["AI workflows", "72% automation gain"],
                      ["Web products", "14 launches this year"],
                      ["Cloud infrastructure", "99.9% uptime focus"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                            <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
                          </div>
                          <div className="h-10 w-10 rounded-full border border-slate-200 bg-white p-2">
                            <div className="h-full w-full rounded-full bg-gradient-to-br from-brand-green to-emerald-300" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-white">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      <span>Delivery flow</span>
                      <span>Q3</span>
                    </div>
                    <div className="mt-5 flex items-end gap-2">
                      {[42, 56, 70, 88, 64, 90].map((height, index) => (
                        <div key={height} className="flex-1 rounded-t-xl bg-gradient-to-t from-brand-green to-emerald-300/80" style={{ height: `${height}px`, opacity: 0.56 + index * 0.07 }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">What we do</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Technology focused on outcomes.</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map(([title, desc], index) => (
              <article key={title} className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] reveal" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">0{index + 1}</p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-300 transition-all duration-300 group-hover:scale-105 group-hover:border-brand-green/30 group-hover:bg-brand-green group-hover:text-white">
                    <span className="text-lg leading-none">→</span>
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{desc}</p>
                <Link href="/services" className="mt-8 inline-flex items-center text-sm font-semibold text-slate-950">
                  Learn more <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Built for momentum, not just code.</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              We combine strategic thinking, product sense, and engineering execution so the solution moves the business forward instead of becoming a complicated side project.
            </p>
          </div>

          <div className="space-y-5 reveal">
            {results.map(([title, description]) => (
              <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-green/10 text-sm font-bold text-brand-green">✓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="reveal max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">How we work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A clear process from idea to launch.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map(([step, title, text]) => (
              <div key={step} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700 hover:bg-slate-900 reveal">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{step}</p>
                <h3 className="mt-8 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-14 reveal">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Let’s build</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Have a problem worth solving?
                </h2>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0a7b35]">
                Talk to us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
