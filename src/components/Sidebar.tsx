'use client'

import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <aside className="hidden md:flex sticky top-0 h-screen w-72 flex-col gap-10 border-r border-slate-200 bg-white/90 px-6 py-8 text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-100">
        <div className="space-y-6">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-lg">
            SM
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-sky-500">Associate Software Engineer</p>
            <h1 className="mt-4 text-2xl font-semibold">Shayyanne Marasigan</h1>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              I build modern frontend systems with clean design and strong engineering.
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 transition hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <p className="font-semibold">Open to roles</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Available for frontend positions and remote product work.
          </p>
        </div>
      </aside>

      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="md:hidden fixed right-5 top-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-xl"
        aria-label="Open navigation"
      >
        <span className="text-lg">☰</span>
      </button>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 flex items-start bg-slate-950/60 px-4 py-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-950">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-sky-500">Navigation</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">Menu</h2>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-3 text-base text-slate-700 dark:text-slate-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
