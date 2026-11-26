"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Links that start with "/#" scroll to a section on the home page until that section gets its own page.
const links = [
  { label: "Discover", href: "/discover" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Stories", href: "/#stories" },
  { label: "Safety", href: "/#safety" },
  { label: "FAQ", href: "/#faq" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-plum-900/5 bg-white/75 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight text-plum-900">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-love text-lg text-white shadow-lg shadow-rose-500/30">♥</span>
          Amora
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          {links.map((l) => {
            const active = l.href === pathname;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 transition hover:text-rose-600 ${active ? "text-rose-600" : "text-plum-700"}`}
              >
                {l.label}
                {active && <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-love" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/discover" className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-plum-800 transition hover:bg-white/70 sm:block">
            Log in
          </Link>
          <Link href="/discover" className="rounded-full bg-plum-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-plum-800">
            Join free
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full text-plum-900 ring-1 ring-plum-900/10 transition hover:bg-white md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-plum-900/5 bg-white/95 px-6 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-3 py-3 text-base font-medium ${l.href === pathname ? "bg-rose-50 text-rose-600" : "text-plum-800"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
