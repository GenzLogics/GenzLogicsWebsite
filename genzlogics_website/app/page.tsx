import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";

const services = [
  ["AI & Generative AI", "LLM systems, automation workflows, RAG products, and business-focused agent experiences."],
  ["Custom Software", "Product architecture, internal systems, dashboards, and workflows that support real operations."],
  ["Web & Mobile", "Responsive product experiences that look sharp, load fast, and keep users engaged."],
  ["Cloud & DevOps", "Deployment pipelines, cloud architecture, monitoring, and reliable production support."],
];

const metrics = [
  ["1+", "Years building digital products"],
  ["5+", "Projects delivered across SaaS and AI"],
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
      <section className="hero-canvas border-b border-border">
        <span className="hero-orb left-[-6%] top-[8%] h-56 w-56 bg-brand-green/30" />
        <span className="hero-orb right-[4%] top-[18%] h-72 w-72 bg-brand-green/20" style={{ animationDelay: "1.4s" }} />
        <span className="hero-orb bottom-[-8%] left-[32%] h-48 w-48 bg-brand-green/15" style={{ animationDelay: "2.2s" }} />
        <div className="hero-content mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">
              Software development &amp; AI solutions
            </p>
            <h1 className="reveal reveal-d1 mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-heading sm:text-6xl lg:text-[5rem] leading-[0.92]">
              We build <span className="accent-text">software</span> that moves your business forward.
            </h1>
            <p className="reveal reveal-d2 mt-7 max-w-xl text-lg leading-8 text-muted">
              GenZLogics helps startups and businesses turn ideas, manual processes, and technical problems into useful digital products and AI-powered systems.
            </p>

            <div className="reveal reveal-d3 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary text-center">
                Start a project
              </Link>
              <Link href="/services" className="btn-secondary text-center">
                Explore services
              </Link>
            </div>

            <div className="reveal reveal-d4 mt-12 grid gap-4 sm:grid-cols-3">
              {metrics.map(([value, label]) => (
                <div key={label} className="rounded-[1.2rem] border border-border bg-surface/80 px-4 py-4 backdrop-blur-sm">
                  <div className="text-xl font-semibold tracking-tight text-heading">{value}</div>
                  <div className="mt-2 text-xs leading-5 text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">What we do</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">Technology focused on outcomes.</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map(([title, desc], index) => (
              <Link key={title} href="/services" className="group service-card surface block p-8 reveal" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">0{index + 1}</p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted text-muted transition-all duration-300 group-hover:scale-105 group-hover:border-brand-green/30 group-hover:bg-brand-green group-hover:text-white">
                    <span className="text-lg leading-none">→</span>
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-heading">{title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{desc}</p>
                <span className="mt-8 inline-flex items-center rounded-full border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-heading transition group-hover:border-brand-green/30 group-hover:bg-brand-green group-hover:text-white">
                  Learn more <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">Built for momentum, not just code.</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted">
              We combine strategic thinking, product sense, and engineering execution so the solution moves the business forward instead of becoming a complicated side project.
            </p>
          </div>

          <div className="space-y-5 reveal">
            {results.map(([title, description]) => (
              <div key={title} className="rounded-[1.5rem] border border-border bg-surface p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-brand-green">✓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-heading">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-inverse text-inverse-text">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="reveal max-w-3xl" style={{ animationDelay: "80ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">How we work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A clear process from idea to launch.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map(([step, title, text]) => (
              <div
                key={step}
                className="card-lift rounded-[1.5rem] border border-white/10 bg-white/5 p-5 reveal"
                style={{ animationDelay: `${220 + Number(step) * 120}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">{step}</p>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-inverse-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="surface rounded-[2rem] p-8 sm:p-10 lg:p-14 reveal">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-green">Let&apos;s build</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
                  Have a problem worth solving?
                </h2>
              </div>
              <Link href="/contact" className="btn-primary">
                Talk to us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
