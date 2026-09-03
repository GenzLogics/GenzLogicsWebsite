"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-6 rounded-[2rem] border border-slate-200 bg-white px-5 py-5 shadow-sm sm:px-8 sm:py-6 animate-fade-up delay-1">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="GenZLogics logo"
            width={56}
            height={56}
            loading="eager"
            className="rounded-2xl object-cover"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">GenZLogics</p>
            <p className="text-xs text-slate-400">IT & Digital Solutions</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {menuOpen ? (
        <div className="mt-4 space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
