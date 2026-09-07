"use client";

import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";
import { useState } from "react";

const projects = [
  {
    title: "KhataApp",
    category: "Custom Software",
    description: "Production-ready ERP and khata management system with modules for customers, vendors, sales, purchases, stock, expenses, investors, and reminders.",
    tech: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "Python"],
    tags: ["Custom Software", "ERP", "Accounting"],
    status: "in-progress",
    company: "Client Project",
  },
  {
    title: "Cause System",
    category: "AI / SaaS",
    description: "Multi-tenant AI chatbot platform with Internet, Company, and Combination modes over vectorized knowledge bases for business use cases.",
    tech: ["Django", "LangGraph", "LangChain", "Celery", "PostgreSQL", "Redis", "pgvector"],
    tags: ["AI", "SaaS", "Web App", "Chatbot"],
    status: "completed",
    company: "Prograsec",
  },
  {
    title: "Cause News",
    category: "AI / Web",
    description: "AI fact-verification engine with hybrid RAG, deep semantic search, and graph-based relationship visualization for research workflows.",
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "Neo4j", "NetworkX", "MCP"],
    tags: ["AI", "Web App", "RAG", "Fact Checking"],
    status: "completed",
    company: "Prograsec",
  },
  {
    title: "NutriHygiene",
    category: "AI / Mobile",
    description: "Pakistan-first AI nutrition platform with a calorie calculator, 7-day diet-plan generator, and Pakistani food database.",
    tech: ["Python", "LangGraph", "pgvector", "PostgreSQL", "OpenAI", "Anthropic", "Gemini"],
    tags: ["AI", "Mobile App", "Nutrition", "Python"],
    status: "completed",
    company: "Prograsec",
  },
  {
    title: "ShopStack",
    category: "Web App / E-Commerce",
    description: "FastAPI microservices backend with product, user, auth, and order services, containerized with Docker and paired with a Next.js storefront.",
    tech: ["FastAPI", "Python", "Docker", "Next.js", "Kafka"],
    tags: ["Web App", "E-Commerce", "Microservices", "Personal Project"],
    status: "completed",
    company: "Practice Project",
  },
  {
    title: "AI-Powered Cryptocurrency Auto Trading Bot",
    category: "AI / Trading",
    description: "AI-powered trading bot analyzing live market data with RSI, MACD, and Bollinger Bands to detect opportunities and automate trades with risk controls.",
    tech: ["Python", "FastAPI", "Binance API", "Machine Learning", "Technical Analysis"],
    tags: ["AI", "Automation", "Trading Bot"],
    status: "completed",
    company: "National Textile University",
  },
  {
    title: "QuickCart",
    category: "Web App / E-Commerce",
    description: "Django e-commerce platform with product catalog, category filtering, search, contact form, order placement, and tracking by order ID.",
    tech: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    tags: ["Web App", "E-Commerce", "Personal Project"],
    status: "completed",
    company: "Practice Project",
  },
  {
    title: "DevJournal",
    category: "Web App / Blog",
    description: "Django blog app with authentication, article publishing, nested comments, search, and contact flows.",
    tech: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    tags: ["Web App", "Blog", "Personal Project"],
    status: "completed",
    company: "Practice Project",
  },
  {
    title: "FitPulse",
    category: "Mobile App / Flutter",
    description: "Flutter fitness app with Firebase auth and Firestore, featuring multiple calculators and dedicated screens for classes and trainers.",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth"],
    tags: ["Mobile App", "Flutter", "Personal Project"],
    status: "completed",
    company: "National Textile University",
  },
  {
    title: "Hand Gesture Recognition",
    category: "AI / Computer Vision",
    description: "CNN-based hand gesture classification on the LeapGestRecog dataset using TensorFlow/Keras for model training and evaluation.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    tags: ["AI", "Computer Vision", "Personal Project"],
    status: "completed",
    company: "National Textile University",
  },
  {
    title: "FitPortal",
    category: "Web App",
    description: "Gym and fitness portal web app with class listings, trainer profiles, membership flows, and responsive UI built with Django and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Django"],
    tags: ["Web App", "Gym", "Personal Project"],
    status: "completed",
    company: "National Textile University",
  },
];

const filters = ["All", "AI", "Web App", "SaaS", "Mobile App", "Automation", "Custom Software", "Personal Project"];

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
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Projects</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            Selected work across AI, software, and digital products.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            A look at the kinds of products, automations, and digital systems we have built for real business and research needs.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-2"><span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />Completed</span>
          <span className="inline-flex items-center gap-2"><span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-green" />In Progress</span>
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

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article key={`${project.title}-${index}`} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_12px_32px_rgba(15,23,42,0.04)] reveal" style={{ animationDelay: `${index * 90}ms` }}>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{project.category}</span>
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusStyles[project.status] ?? statusStyles.upcoming}`}>
                  {statusLabels[project.status] ?? "Upcoming"}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h2>
              {project.company && <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500">{project.company}</p>}
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">{item}</span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
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

        <div className="mt-16">
          <Link href="/contact" className="inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0a7b35]">
            Discuss your project →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
