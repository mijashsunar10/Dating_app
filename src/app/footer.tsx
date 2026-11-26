const columns = [
  { title: "Amora", links: [{ label: "Discover", href: "#features" }, { label: "How it works", href: "#how-it-works" }, { label: "Love stories", href: "#stories" }, { label: "Premium", href: "#" }] },
  { title: "Safety", links: [{ label: "Safety tips", href: "#safety" }, { label: "Verification", href: "#safety" }, { label: "Report a user", href: "#" }, { label: "Community guidelines", href: "#" }] },
  { title: "Company", links: [{ label: "About us", href: "#" }, { label: "Careers", href: "#" }, { label: "Press", href: "#" }, { label: "FAQ", href: "#faq" }] },
];

const socials = [
  { label: "Instagram", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM17.5 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" },
  { label: "Facebook", path: "M14 8V6.5c0-.8.2-1.5 1.5-1.5H17V2h-2.6C11.6 2 11 3.9 11 5.9V8H9v3h2v11h3V11h2.5l.5-3h-3Z" },
  { label: "TikTok", path: "M16.5 2h-3v13.2a2.8 2.8 0 1 1-2-2.7V9.4a5.8 5.8 0 1 0 5 5.8V8.6a7 7 0 0 0 4 1.3v-3a4 4 0 0 1-4-4V2Z" },
];

export default function Footer() {
  return (
    <footer className="relative isolate mx-auto w-full max-w-7xl px-6 pb-10">
      {/* Final CTA */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-100 via-rose-50 to-peach/70 px-6 py-14 text-center shadow-[0_20px_60px_-20px_rgba(244,63,110,0.3)] sm:px-12">
        <span className="pointer-events-none absolute -left-6 -top-10 select-none text-[9rem] leading-none text-white/60">♥</span>
        <span className="pointer-events-none absolute -bottom-12 -right-4 select-none text-[11rem] leading-none text-white/60">♥</span>
        <h2 className="relative mx-auto max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-plum-900 sm:text-5xl">
          Your next chiya date is <span className="text-love italic">one swipe away.</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-lg text-plum-700">Join thousands of verified singles across Nepal. Free, safe and made for you.</p>
        <a
          href="#"
          className="bg-love group relative mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-500/40"
        >
          Start matching — it&apos;s free <span className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Links */}
      <div className="mt-16 grid gap-10 border-t border-rose-100 pt-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#" className="flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight text-plum-900">
            <span className="bg-love grid h-10 w-10 place-items-center rounded-2xl text-lg text-white shadow-lg shadow-rose-500/30">♥</span>
            Amora
          </a>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-plum-700">Real people. Real connections. The dating platform made for how Nepal actually dates.</p>
          <div className="mt-6 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-plum-700 shadow-sm ring-1 ring-plum-900/5 transition hover:-translate-y-0.5 hover:bg-rose-50 hover:text-rose-600"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
                  <path d={s.path} fillRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold uppercase tracking-wider text-plum-900">{c.title}</p>
            <ul className="mt-4 space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[15px] text-plum-700 transition hover:text-rose-600">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-rose-100 pt-6 text-sm text-plum-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Amora. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Made with <span className="text-rose-500">♥</span> in Nepal 🇳🇵
        </p>
        <div className="flex gap-5">
          <a href="#" className="transition hover:text-rose-600">Privacy</a>
          <a href="#" className="transition hover:text-rose-600">Terms</a>
          <a href="#" className="transition hover:text-rose-600">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
