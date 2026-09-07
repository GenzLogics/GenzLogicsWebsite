import Link from "next/link";
import ServiceCard from "@/src/components/site/ServiceCard";
import PageShell from "@/src/components/site/PageShell";

const services = [
  ["AI & Generative AI", "LLM applications, RAG systems, AI agents, intelligent assistants, and business automation."],
  ["Custom Software", "Business software, SaaS products, APIs, dashboards, and internal tools built around real workflows."],
  ["Web & Mobile", "Fast, responsive web applications and mobile experiences designed for people, not demos."],
  ["Cloud & DevOps", "Dockerized deployments, AWS infrastructure, CI/CD, monitoring, and reliable production environments."],
];

const process = [["01", "Discover", "We understand the business, users, constraints, and outcome before writing unnecessary code."], ["02", "Build", "We design a focused solution and build in small, useful iterations so progress stays visible."], ["03", "Launch", "We test, deploy, document, and leave you with software that is ready to use and improve."]];

export default function Home() {
  return <PageShell>
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Software development & AI solutions</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">We build software that moves your business forward.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">GenZLogics helps startups and businesses turn ideas, manual processes, and technical problems into useful digital products and AI-powered systems.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="rounded-full bg-brand-green px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#097a2e]">Start a project</Link><Link href="/services" className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-slate-50">Explore services</Link></div>
        </div>
        <div className="mt-20 grid border-y border-slate-200 sm:grid-cols-3">
          {[['01','Business-first'],['02','AI when it helps'],['03','Built for production']].map(([n,t])=><div key={n} className="border-b border-slate-200 py-7 last:border-0 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0"><p className="text-xs font-semibold tracking-widest text-slate-400">{n}</p><p className="mt-3 font-semibold text-slate-950">{t}</p></div>)}
        </div>
      </div>
    </section>

    <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">What we do</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Technology focused on outcomes.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2">{services.map(([title, desc], i)=><article key={title} className="rounded-2xl border border-slate-200 bg-white p-8"><p className="text-xs font-semibold tracking-widest text-slate-400">0{i+1}</p><h3 className="mt-10 text-xl font-semibold text-slate-950">{title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{desc}</p><Link href="/services" className="mt-7 inline-block text-sm font-semibold text-slate-950">Learn more →</Link></article>)}</div></div></section>

    <section className="bg-white"><div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How we work</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Simple process. Serious execution.</h2></div><div className="divide-y divide-slate-200 border-y border-slate-200">{process.map(([n,t,d])=><div key={n} className="grid gap-5 py-8 sm:grid-cols-[60px_160px_1fr]"><span className="text-xs font-semibold tracking-widest text-slate-400">{n}</span><h3 className="font-semibold text-slate-950">{t}</h3><p className="text-sm leading-6 text-slate-600">{d}</p></div>)}</div></div></section>

    <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-8"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Let's build</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Have a problem worth solving?</h2><p className="mt-5 text-lg leading-8 text-slate-300">Tell us what you are trying to build. We will help you figure out the right technical path.</p><Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">Talk to us →</Link></div></div></section>
  </PageShell>;
}
