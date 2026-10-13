import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";
import ServiceCarousel from "@/src/components/site/ServiceCarousel";

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
      <div className="hero-canvas">
        <span className="hero-orb left-[10%] top-[4%] h-56 w-56 bg-brand-green/18" />
        <div className="hero-content mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="reveal text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Services</p>
            <h1 className="reveal reveal-d1 mt-6 text-4xl font-semibold tracking-[-0.06em] text-heading sm:text-5xl lg:text-6xl">
              From idea to working product, built around what matters.
            </h1>
            <p className="reveal reveal-d2 mt-7 max-w-2xl text-lg leading-8 text-muted">
              We build across AI, software engineering, cloud, product design, and digital operations—keeping the stack practical, focused, and useful for the business.
            </p>
          </div>

          <div className="mt-14 reveal">
            <ServiceCarousel services={services.map(([title, description]) => ({ title, description }))} />
          </div>

          <div className="project-cta mt-20 rounded-[2rem] p-8 text-inverse-text sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Need clarity</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Not sure which service fits best?</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-inverse-muted">
                  Tell us the problem, the business goal, and the current setup. We can shape the right technical path before development begins.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Discuss your project →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
