"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageShell from "@/src/components/site/PageShell";

const projects = [
  {
    img: "/assets/project4/one.png",
    title: "AI-Powered Cryptocurrency Auto Trading Bot",
    company: "Final Year Project - National Textile University",
    category: "AI",
    description:
      "Final year project: automated cryptocurrency trading bot for Binance Futures with a Next.js frontend and FastAPI backend. Encrypts user API keys, streams live market data, and runs async trading loops across configurable sessions with multiple strategies—trend following, breakout, momentum, and scalping—using SMA/RSI indicators. Supports leverage, risk-per-trade sizing, dynamic stop-loss/take-profit, start/stop bot controls, and order/trade history tracking with MongoDB persistence.",
    techStack: ["Python", "FastAPI", "Next.js", "React", "Tailwind CSS", "MongoDB", "python-binance", "pandas", "numpy", "WebSockets"],
    tags: ["AI", "Automation", "Trading Bot"],
    status: "completed",
  },
  {
    img: "/assets/project9/one.jpeg",
    title: "FitPulse",
    company: "National Textile University",
    category: "Mobile App",
    description:
      "Flutter fitness app with Firebase authentication and Firestore persistence. Implements email/password signup and login with password validation, plus role-based access for regular users and an admin dashboard for managing users and membership registrations. Offers three membership tiers—Standard, Ultimate, and Professional—with a validated registration flow. Includes dedicated screens for classes and trainer profiles, plus six in-app health calculators: BMI, calorie requirement, heart rate zones, ideal body weight, macronutrient breakdown, and water intake. Supports dark and light theme toggling.",
    techStack: ["Flutter", "Dart", "Firebase", "Firebase Auth", "Cloud Firestore", "font_awesome_flutter", "google_fonts"],
    tags: ["Mobile App", "Flutter", "Personal Project"],
    status: "completed",
  },
  {
    img: "/assets/project11/one.jpeg",
    title: "FitPortal",
    company: "National Textile University",
    category: "Web App",
    description:
      "Responsive gym membership and fitness portal built with Next.js 14 and Tailwind CSS. Features a landing page, classes catalog, trainer profiles, pricing tiers, and a validated membership registration form. Includes an admin dashboard for reviewing, editing, and deleting registrations, with MongoDB persistence via Mongoose and REST API routes.",
    techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Mongoose", "Framer Motion", "Swiper", "React Icons"],
    tags: ["Web App", "Gym", "Personal Project"],
    status: "completed",
  },
  /*
  {
    img: "/assets/project10/one.png",
    title: "Hand Gesture Recognition",
    company: "National Textile University",
    category: "AI",
    description:
      "CNN-based hand gesture classification on the LeapGestRecog dataset using TensorFlow/Keras for model training and evaluation.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    tags: ["AI", "Computer Vision", "Personal Project"],
    status: "completed",
  },
  */
  {
    img: "/assets/project1/one.png",
    title: "Cause System",
    company: "Prograsec",
    category: "Web App",
    description:
      "Multi-tenant conversational AI platform with a Next.js studio frontend and Django backend. Supports document upload, RAG over vector and relational stores, LangGraph stateful agent workflows, and multi-provider LLM orchestration (OpenAI, Claude, Gemini, Groq, HuggingFace, Ollama, Vertex AI). Includes knowledge-graph reasoning with Neo4j, async task processing via Celery and Redis, BigQuery analytics, and agent tools for PDF, speech, translation, and spreadsheet operations.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "D3", "Framer Motion", "Django", "LangChain", "LangGraph", "Neo4j", "PostgreSQL", "Redis", "Celery", "BigQuery", "DRF", "Docker"],
    tags: ["AI", "SaaS", "Web App", "Chatbot"],
    status: "completed",
  },
  {
    img: "/assets/project2/one.png",
    title: "Cause News",
    company: "Prograsec",
    category: "Web App",
    description:
      "AI fact-verification and credibility scoring platform with a Next.js frontend and FastAPI backend. Uses LangGraph agents and Model Context Protocol (MCP) to verify claims against live web sources, combining dense vector retrieval with BM25 keyword search. Stores and traverses claim-corroboration networks in Neo4j, visualizes entity relationships with D3 and Neo4j NVL, and renders evidence summaries with React Markdown.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "D3", "FastAPI", "Python", "LangChain", "LangGraph", "Neo4j", "NetworkX", "MCP", "React Markdown"],
    tags: ["AI", "Web App", "RAG", "Fact Checking"],
    status: "completed",
  },
  {
    img: "/assets/project3/one.png",
    title: "NutriHygiene",
    company: "Prograsec",
    category: "Mobile App",
    description:
      "AI-powered clinical nutrition and wellness platform built across mobile, web, and admin surfaces. The React Native mobile app uses Expo, React Navigation, TanStack Query, and Firebase for chat, diet plans, meal tracking, water intake, weight stats, onboarding, and subscriptions. The Next.js marketing site and admin panel provide content pages, calculators, waitlist, subscription management, and PDF export. The FastAPI backend orchestrates LangChain/LangGraph agents, pgvector semantic search, Chroma, and PostgreSQL to generate personalized Pakistani meal plans, BMR analytics, and AI nutritionist conversations with streaming and OTP auth.",
    techStack: ["React Native", "Expo", "Next.js", "FastAPI", "Python", "LangChain", "LangGraph", "PostgreSQL", "pgvector", "Chroma", "Firebase", "Tailwind CSS", "TanStack Query", "React Hook Form", "Zod"],
    tags: ["AI", "Mobile App", "Nutrition", "Python"],
    status: "completed",
  },
  {
    img: "/assets/project5/one.jpeg",
    title: "LedgerFlow",
    company: "Client Project",
    category: "Custom Software",
    description:
      "Full-stack business accounting and ledger management system with a FastAPI backend and Next.js frontend. Covers customers, vendors, cash sales, sales and purchase invoices, stock control, expenses, investors, and automated reminders. Includes an analytics dashboard, PDF invoice export, form validation with React Hook Form and Zod, and Dockerized deployment.",
    techStack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "Docker", "Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Axios", "React Hook Form", "Zod", "jsPDF"],
    tags: ["Custom Software", "ERP", "Accounting"],
    status: "in-progress",
  },
  /*
  {
    img: "/assets/project6/one.png",
    title: "ShopStack",
    company: "Practice Project",
    category: "Web App",
    description:
      "FastAPI microservices backend with product, user, auth, and order services, containerized with Docker and paired with a Next.js storefront.",
    techStack: ["FastAPI", "Python", "Docker", "Next.js", "Kafka"],
    tags: ["Web App", "E-Commerce", "Microservices", "Personal Project"],
    status: "completed",
  },
  */
  /*
  {
    img: "/assets/project7/one.png",
    title: "QuickCart",
    company: "Practice Project",
    category: "Web App",
    description:
      "Django e-commerce platform with product catalog, category filtering, search, contact form, order placement, and tracking by order ID.",
    techStack: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    tags: ["Web App", "E-Commerce", "Personal Project"],
    status: "completed",
  },
  */
  /*
  {
    img: "/assets/project8/one.png",
    title: "DevJournal",
    company: "Practice Project",
    category: "Web App",
    description:
      "Django blog app with authentication, article publishing, nested comments, search, and contact flows.",
    techStack: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    tags: ["Web App", "Blog", "Personal Project"],
    status: "completed",
  },
  */
];

const filters = ["All", "AI", "Web App", "Mobile App", "Custom Software"];

function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped((prev) => !prev)}
      className="relative w-full h-[520px] sm:h-[500px] perspective-1200 cursor-pointer select-none"
      tabIndex={0}
      role="button"
      aria-label={`Project card for ${project.title}. Click to ${isFlipped ? "flip to image" : "flip to details"}.`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute inset-0 w-full h-full surface rounded-[1.75rem] p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#0b8b36]/40 backface-hidden group"
        >
          <div className="relative w-full h-[220px] sm:h-[210px] rounded-[1.25rem] overflow-hidden bg-black/5" style={{ position: "relative" }}>
            {!imgError ? (
              <button
                type="button"
                className="project-image-button"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsImageOpen(true);
                }}
                aria-label={`View full-size image of ${project.title}`}
              >
                <Image
                  src={project.img}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  unoptimized
                  onError={() => setImgError(true)}
                />
                <span className="project-image-label">View image</span>
              </button>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#0b8b36]/10 p-4 text-center">
                <span className="text-xl font-bold text-[#0b8b36]">{project.title}</span>
              </div>
            )}
          </div>

            <span className="soft-chip absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm">
              {project.category}
            </span>

            <span className="absolute top-3 right-3 rounded-full bg-slate-950/75 text-white backdrop-blur-md px-2.5 py-1 text-[11px] font-medium flex items-center gap-1 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <span>Flip</span>
              <span className="text-xs">↻</span>
            </span>

            <div className="flex-1 flex flex-col justify-between pt-4">
            <div>
              {project.company && (
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {project.company}
                </p>
              )}
              <h3 className="text-xl font-bold tracking-tight text-slate-950 mt-1 line-clamp-2">
                {project.title}
              </h3>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0b8b36]">
              <span className="flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-x-1">
                Inspect Architecture & Stack <span className="text-sm leading-none">→</span>
              </span>
              <span className="rounded-full bg-[#0b8b36]/10 px-2.5 py-1 text-[11px] text-[#0b8b36]">
                Click Card to Flip ↻
              </span>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full surface-strong rounded-[1.75rem] p-6 flex flex-col justify-between overflow-y-auto border border-slate-200 shadow-2xl backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="soft-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                {project.company && (
                  <span className="text-xs text-slate-500 hidden sm:inline truncate max-w-[200px]">
                    • {project.company}
                  </span>
                )}
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-[#0b8b36]/10 text-[#0b8b36] px-3 py-1 text-xs font-semibold">
                <span>Image</span>
                <span className="text-xs">↺</span>
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-950 mt-3">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0b8b36] mb-2">
                Tech Stack & Architecture
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 transition-colors hover:border-[#0b8b36] hover:text-[#0b8b36]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#0b8b36] hover:underline transition-all">
              Click Card to Flip Back ↺
            </span>
          </div>
        </div>
      </motion.div>

      {isImageOpen && (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} full-size image`}
          onClick={(event) => {
            event.stopPropagation();
            setIsImageOpen(false);
          }}
        >
          <button
            type="button"
            className="project-lightbox-close"
            onClick={(event) => {
              event.stopPropagation();
              setIsImageOpen(false);
            }}
            aria-label="Close full-size image"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="project-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <Image
              src={project.img}
              width={1600}
              height={1100}
              alt={`${project.title} full-size preview`}
              className="project-lightbox-image"
              unoptimized
            />
            <p>{project.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Projects</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
            Selected work across AI, software, and digital products.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Interactive project showcase: click any card to flip and inspect the system architecture,
            database models, and technology stack.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />Completed
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#0b8b36]" />In Progress
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? "border-[#0b8b36] bg-[#0b8b36] text-white shadow-md shadow-[#0b8b36]/15 scale-[1.03]"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[#0b8b36] hover:text-slate-950"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="w-full max-w-5xl mt-14">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="mt-12 text-center text-sm text-slate-500">No projects found for this filter.</p>
        )}

        <div className="mt-16">
          <Link href="/contact" className="inline-flex rounded-full bg-[#0b8b36] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#097a2e]">
            Discuss your project →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
