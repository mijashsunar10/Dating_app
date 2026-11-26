import Image from "next/image";

import srijana from "../../public/photos/srijana.jpg";
import prakriti from "../../public/photos/prakriti.jpg";
import aarav from "../../public/photos/aarav.jpg";

const steps = [
  {
    n: "01",
    tag: "~2 minutes",
    tint: "from-rose-100 via-rose-50 to-white",
    title: "Create your profile",
    text: "Add a few photos, answer a prompt and verify with a quick selfie. Done in under two minutes.",
    visual: <ProfileVisual />,
  },
  {
    n: "02",
    tag: "Mutual likes only",
    tint: "from-peach/70 via-rose-50 to-white",
    title: "Match & chat",
    text: "Like someone and if they like you back, it's a match. Start the conversation your way.",
    visual: <MatchVisual />,
  },
  {
    n: "03",
    tag: "This weekend",
    tint: "from-plum-100 via-plum-50 to-white",
    title: "Meet for real",
    text: "Plan a date at a spot you both love and share it with a friend for peace of mind.",
    visual: <DateVisual />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative isolate mx-auto w-full max-w-7xl scroll-mt-6 px-6 pb-24 pt-10">
      {/* soft background glows — blend into the page, no hard edges */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-rose-100/70 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-peach/50 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-plum-50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 shadow-sm ring-1 ring-rose-100">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> How it works
        </p>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-plum-900 sm:text-5xl">
          From hello to <span className="text-love italic">first date</span> in three steps.
        </h2>
        <p className="mt-4 text-lg text-plum-700">Simple, safe and designed to get you off the app and onto a real date.</p>
      </div>

      <div className="relative mt-16">
        {/* curved dashed connector */}
        <svg className="absolute left-[16.66%] top-0 hidden h-14 w-[66.68%] md:block" viewBox="0 0 600 56" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="hiw-line" x1="0" x2="1">
              <stop offset="0" stopColor="#ffc4d3" />
              <stop offset="0.5" stopColor="#f43f6e" />
              <stop offset="1" stopColor="#ff7a5c" />
            </linearGradient>
          </defs>
          <path d="M0 28 C 75 -4, 225 -4, 300 28 S 525 60, 600 28" stroke="url(#hiw-line)" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>

        <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <li key={s.n} className="group flex flex-col items-center">
              <span className="bg-love relative grid h-14 w-14 place-items-center rounded-full font-display text-xl font-semibold text-white shadow-lg shadow-rose-500/30 ring-[6px] ring-cream transition duration-300 group-hover:scale-110">
                {s.n}
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-rose-400/30 [animation-duration:2.5s]" />
              </span>

              <div className="mt-8 w-full overflow-hidden rounded-[1.75rem] bg-white/80 shadow-[0_10px_40px_-12px_rgba(244,63,110,0.18)] backdrop-blur transition duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_50px_-12px_rgba(244,63,110,0.3)]">
                <div className={`relative grid h-56 place-items-center overflow-hidden bg-gradient-to-br ${s.tint}`}>
                  <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[8rem] font-bold leading-none text-white/60">
                    {s.n}
                  </span>
                  <div className="relative transition duration-500 group-hover:scale-105">{s.visual}</div>
                </div>
                <div className="px-6 pb-7 pt-6 text-left">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-600">
                    <span className="h-1 w-1 rounded-full bg-rose-500" /> {s.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-plum-900">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-plum-700">{s.text}</p>
                </div>
                <div className="bg-love h-1 w-0 transition-all duration-500 group-hover:w-full" />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16 flex flex-col items-center gap-3">
        <a
          href="#"
          className="bg-love group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-500/40"
        >
          Create my free profile
          <span className="transition group-hover:translate-x-1">→</span>
        </a>
        <p className="text-sm text-plum-500">Free to join · Takes less than 2 minutes</p>
      </div>
    </section>
  );
}

function ProfileVisual() {
  return (
    <div className="w-52 rounded-2xl bg-white p-4 shadow-lg shadow-plum-900/5">
      <div className="flex items-center gap-3">
        <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-rose-200">
          <Image src={prakriti} alt="" fill sizes="48px" className="object-cover" />
        </span>
        <div className="text-left">
          <p className="text-sm font-semibold text-plum-900">Prakriti, 23</p>
          <p className="text-xs font-medium text-sky-600">✔ Verified</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-[11px] font-medium text-plum-500">
        <span>Profile complete</span>
        <span className="text-plum-900">90%</span>
      </div>
      <div className="mt-1.5 h-1.5 rounded-full bg-rose-50">
        <div className="bg-love h-full w-[90%] rounded-full" />
      </div>
    </div>
  );
}

function MatchVisual() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="relative h-16 w-16 overflow-hidden rounded-full shadow-md ring-4 ring-white">
          <Image src={srijana} alt="" fill sizes="64px" className="object-cover" />
        </span>
        <span className="bg-love z-10 -mx-2.5 grid h-9 w-9 place-items-center rounded-full text-sm text-white ring-4 ring-white">♥</span>
        <span className="relative h-16 w-16 overflow-hidden rounded-full shadow-md ring-4 ring-white">
          <Image src={aarav} alt="" fill sizes="64px" className="object-cover" />
        </span>
      </div>
      <p className="mt-3 font-display text-lg font-semibold italic text-plum-900">It&apos;s a match!</p>
      <p className="mt-2 rounded-2xl rounded-bl-md bg-white px-3.5 py-2 text-xs text-plum-800 shadow-sm">Namaste! Chiya this weekend? ☕</p>
    </div>
  );
}

function DateVisual() {
  return (
    <div className="w-52 rounded-2xl bg-white p-4 text-left shadow-lg shadow-plum-900/5">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-plum-500">Upcoming date</p>
      <p className="mt-1.5 text-sm font-semibold text-plum-900">☕ Himalayan Java, Thamel</p>
      <p className="mt-0.5 text-xs text-plum-500">Saturday · 4:00 PM</p>
      <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[11px] font-medium text-emerald-700">
        🛡 Shared with a friend
      </div>
    </div>
  );
}
