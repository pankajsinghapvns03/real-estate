"use client";

import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Industries", "#industries"],
  ["About Us", "#about"],
  ["Contact Us", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030914]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="bg-gradient-to-br from-cyan-300 to-blue-600 bg-clip-text text-4xl font-black italic text-transparent">
            M
          </span>
          <span className="text-xl font-bold tracking-tight">
            Mend<span className="text-cyan-300">Sec</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-500/20 transition hover:scale-105 sm:inline-flex"
        >
          Schedule a Call →
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/15 px-3 py-2 text-xl lg:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#061120] px-5 py-4 lg:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-sm text-slate-200 hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold"
          >
            Schedule a Call →
          </a>
        </nav>
      )}
    </header>
  );
}