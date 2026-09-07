"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.jpeg" alt="GenZLogics" width={42} height={42} className="rounded-xl object-cover" priority />
          <div className="leading-none">
            <span className="block text-base font-bold tracking-tight text-brand-black">GenZLogics</span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">Software & Digital</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#097a2e] md:inline-flex">
          Start a project
        </Link>

        <button type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 md:hidden">
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="mx-auto max-w-7xl space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-brand-green px-3 py-3 text-center text-sm font-semibold text-white">
              Start a project
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
