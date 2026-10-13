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
      <div className="hero-canvas">
        <span className="hero-orb right-[8%] top-[6%] h-52 w-52 bg-brand-green/20" />
        <div className="hero-content mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">About GenZLogics</p>
            <h1 className="reveal reveal-d1 mt-6 text-4xl font-semibold tracking-[-0.06em] text-heading sm:text-5xl lg:text-6xl">
              A practical software partner for businesses ready to move faster.
            </h1>
            <p className="reveal reveal-d2 mt-7 max-w-2xl text-lg leading-8 text-muted">
              We blend software engineering, AI implementation, and product thinking to build systems that solve real operational challenges and unlock new opportunities.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map(([title, description], index) => (
              <article key={title} className="card-lift surface p-7 reveal" style={{ animationDelay: `${index * 120}ms` }}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">0{index + 1}</p>
                <h2 className="mt-8 text-2xl font-semibold tracking-tight text-heading">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-[2rem] border border-border bg-surface-muted p-8 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Our approach</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">Simple process. Real outcomes.</h2>
              </div>

              <div className="space-y-5">
                {strengths.map(([title, text]) => (
                  <div key={title} className="rounded-[1.25rem] border border-border bg-surface p-5">
                    <h3 className="text-lg font-semibold text-heading">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-5 sm:flex-row">
            <Link href="/services" className="btn-primary">
              Explore services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
