import Footer from "@/src/components/landing/Footer";
import ContactForm from "@/src/components/landing/ContactForm";
import FeatureCard from "@/src/components/landing/FeatureCard";
import Header from "@/src/components/landing/Header";
import Reveal from "@/src/components/landing/Reveal";
import SectionHeader from "@/src/components/landing/SectionHeader";
import ServicesList from "@/src/components/landing/ServicesList";
import StatCard from "@/src/components/landing/StatCard";
import { services } from "@/src/data/services";

const workflow = [
  {
    title: "Understand",
    description: "I start by understanding the actual problem, not just the feature request. Clear requirements mean fewer rewrites.",
  },
  {
    title: "Build",
    description: "I write production-oriented code using the right stack for the job — Python, FastAPI, LangChain, or whatever fits.",
  },
  {
    title: "Deliver",
    description: "I ship working software with proper testing, documentation, and a clear path for iteration.",
  },
];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-950 animate-page-enter">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10">
        <Header />

        <Reveal className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" delay={1}>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Muhammad Aqeel
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              I build AI-powered applications and automation workflows with Python and modern AI tools.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I'm a Python Developer and AI Engineer with 1.5+ years of hands-on experience building production-oriented AI applications. I specialize in LLMs, RAG, AI Agents, and workflow automation using FastAPI, LangChain, LangGraph, Docker, and AWS.
            </p>
            <Reveal className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center" delay={2}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold !text-white transition hover:bg-slate-800 hover:!text-white animate-btn-enter"
              >
                Work with me
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 animate-btn-enter"
              >
                See what I do
              </a>
            </Reveal>
          </div>

          <Reveal className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm" delay={3}>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Core stack
            </p>
            <div className="mt-8 grid gap-5">
              <StatCard value="Python" label="Primary language" />
              <StatCard value="FastAPI" label="Backend framework" />
              <StatCard value="LangChain / LangGraph" label="AI orchestration" />
              <StatCard value="Docker / AWS" label="Deployment" />
            </div>
          </Reveal>
        </Reveal>

        <Reveal className="space-y-8 py-16" delay={4}>
          <section id="services">
          <SectionHeader
            eyebrow="Services"
            title="What I can help with."
            body="I work on end-to-end AI and software projects, from prototyping to production. Here are the main areas I focus on."
          />
          <ServicesList items={services} />
          </section>
        </Reveal>

        <Reveal className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-lg sm:px-10" delay={5}>
          <section id="approach">
          <SectionHeader
            eyebrow="Approach"
            title="How I work."
            body="I keep things straightforward: understand the problem, build cleanly, deliver on time. No unnecessary complexity."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {workflow.map((item) => (
              <div key={item.title}>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="mt-3 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
          </section>
        </Reveal>

        <Reveal className="space-y-8 py-16" delay={6}>
          <section id="about">
          <SectionHeader
            eyebrow="About"
            title="A bit about me."
            body="Hi, I'm Muhammad Aqeel. I'm a Python Developer and AI Engineer with 1.5+ years of hands-on experience building production-oriented AI applications and automation workflows. My expertise includes Python, FastAPI, LangChain, LangGraph, Generative AI, LLMs, RAG, Vector Databases, AI Agents, AI Automation, Workflow Automation, No-Code/Low-Code Automation, Docker, and AWS. I have experience designing AI-powered automation flows that streamline business processes, integrate APIs and external services, and reduce manual workflows through intelligent agents and automated decision-making. I'm currently open to AI/ML, GenAI, AI Automation, and Python Developer opportunities and available to join immediately."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Production-focused"
              description="I build things that are meant to run in production, not just in notebooks. Clean code, proper testing, and real deployment."
            />
            <FeatureCard
              title="Fast iteration"
              description="I move quickly without cutting corners. You'll get working software early, with room to refine based on feedback."
            />
            <FeatureCard
              title="Clear communication"
              description="I explain technical decisions in plain language. No jargon walls, no surprises."
            />
          </div>
          </section>
        </Reveal>

        <Reveal className="rounded-[2rem] border border-slate-200 bg-white px-8 py-12 shadow-sm sm:px-10" delay={7}>
          <section id="contact">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Get in touch
              </p>
              <h2 className="text-3xl font-semibold text-slate-950">Let's talk about your project.</h2>
              <p className="text-slate-600">
                Tell me what you're building or what problem you're trying to solve. I'll get back to you within a day.
              </p>
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-950">Email</p>
                <a href="mailto:contact@genzlogics.com" className="mt-4 block text-sm text-slate-700 hover:text-slate-950">
                  contact@genzlogics.com
                </a>
                <p className="mt-4 text-sm font-semibold text-slate-950">Phone</p>
                <p className="mt-2 text-sm text-slate-600">+92 3174680971</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <ContactForm />
            </div>
          </div>
          </section>
        </Reveal>
      </div>

      <Reveal delay={8}>
          <Footer />
        </Reveal>

      <Reveal className="fixed bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold !text-white shadow-xl shadow-slate-900/10 transition hover:bg-slate-800 hover:!text-white md:bottom-8 md:right-8" delay={8}>
        <a href="mailto:contact@genzlogics.com">Contact me</a>
      </Reveal>
    </main>
  );
}
