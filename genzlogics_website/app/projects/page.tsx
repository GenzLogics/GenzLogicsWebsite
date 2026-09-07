"use client";

import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";
import { useState } from "react";

const projects = [
  {
    title: "KhataApp",
    category: "Custom Software",
    description:
      "Production-ready ERP and khata management system with modules for customers, vendors, sales, purchases, stock, expenses, investors, and reminders.",
    tech: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "Python"],
    tags: ["Custom Software", "ERP", "Accounting"],
    status: "in-progress",
    company: "Client Project",
  },
  {
    title: "AI-Powered Cryptocurrency Auto Trading Bot",
    category: "AI / Trading",
    description:
      "AI-powered trading bot that analyzes live market data with RSI, MACD, and Bollinger Bands, predicts trends, and executes automated trades with risk management.",
    tech: ["Python", "FastAPI", "Binance API", "Machine Learning", "Technical Analysis"],
    tags: ["AI", "Automation", "Trading Bot"],
    status: "completed",
    company: "National Textile University",
  },
  {
    title: "Cause System",
    category: "AI / SaaS",
    description:
      "Multi-tenant AI chatbot platform with Internet, Company, and Combination modes over vectorized knowledge bases.",
    tech: ["Django", "LangGraph", "LangChain", "Celery", "PostgreSQL", "Redis", "pgvector"],
    tags: ["AI", "SaaS", "Web App", "Chatbot"],
    status: "completed",
    company: "Prograsec",
  },
  {
    title: "Cause News",
    category: "AI / Web",
    description:
      "AI fact-verification engine with hybrid RAG, deep semantic search, and Neo4j/NetworkX relationship visualization.",
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "Neo4j", "NetworkX", "MCP"],
    tags: ["AI", "Web App", "RAG", "Fact Checking"],
    status: "completed",
    company: "Prograsec",
  },
  {
    title: "NutriHygiene",
    category: "AI / Mobile",
    description:
      "Pakistan-first AI nutrition platform with a calorie calculator, 7-day diet-plan generator, and Pakistani food database.",
    tech: ["Python", "LangGraph", "pgvector", "PostgreSQL", "OpenAI", "Anthropic", "Gemini"],
    tags: ["AI", "Mobile App", "Nutrition", "Python"],
    status: "completed",
    company: "Prograsec",
  },
];

const filters = ["All", "AI", "Web App", "SaaS", "Mobile App", "Automation", "Custom Software"];

const statusStyles: Record<string, string> = {
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "in-progress": "bg-brand-green/10 text-brand-green border-brand-green/20",
  upcoming: "bg-slate-100 text-slate-600 border-slate-200",
};

const statusLabels: Record<string, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  upcoming: "Upcoming",
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Projects</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">
          Selected work.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          A look at the projects I have worked on across AI, web apps, SaaS, and automation.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-2"><span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />Completed</span>
          <span className="inline-flex items-center gap-2"><span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-green" />In Progress</span>
          <span className="inline-flex items-center gap-2"><span className="inline-flex h-2.5 w-2.5 rounded-full bg-slate-400" />Upcoming</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? "border-brand-green bg-brand-green text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{project.category}</span>
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusStyles[project.status] ?? statusStyles.upcoming}`}>
                  {statusLabels[project.status] ?? "Upcoming"}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">{project.title}</h2>
              {project.company && <p className="mt-1 text-xs text-slate-500">{project.company}</p>}
              <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">{item}</span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-12 text-center text-sm text-slate-500">No projects found for this filter.</p>
        )}

        <Link href="/contact" className="mt-14 inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white">
          Discuss your project →
        </Link>
      </div>
    </PageShell>
  );
}
