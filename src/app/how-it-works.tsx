import Image from "next/image";

import srijana from "../../public/photos/srijana.jpg";
import prakriti from "../../public/photos/prakriti.jpg";
import aarav from "../../public/photos/aarav.jpg";

const steps = [
  {
    n: "01",
    tag: "~2 minutes",
    title: "Create your profile",
    text: "Add a few photos, answer a prompt and verify with a quick selfie. Done in under two minutes.",
    visual: <ProfileVisual />,
  },
  {
    n: "02",
    tag: "Mutual likes only",
    title: "Match & chat",
    text: "Like someone and if they like you back, it's a match. Start the conversation your way.",
    visual: <MatchVisual />,
  },
  {
    n: "03",
    tag: "This weekend",
    title: "Meet for real",
    text: "Plan a date at a spot you both love and share it with a friend for peace of mind.",
    visual: <DateVisual />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-7xl scroll-mt-6 px-6 pb-24 pt-4">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-plum-900 px-6 py-16 text-white shadow-2xl shadow-plum-900/30 sm:px-10 lg:px-14 lg:py-20">
        {/* glows + dot texture */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-rose-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-coral/20 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-plum-500/30 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> How it works
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            From hello to <span className="text-love italic">first date</span> in three steps.
          </h2>
          <p className="mt-4 text-lg text-plum-100/70">Simple, safe and designed to get you off the app and onto a real date.</p>
        </div>

        <div className="relative mt-16">
          {/* connector line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-gradient-to-r from-rose-400/0 via-rose-400/60 to-rose-400/0 md:block" />

          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((s) => (
              <li key={s.n} className="group flex flex-col items-center text-center">
                <span className="bg-love grid h-14 w-14 place-items-center rounded-full font-display text-xl font-semibold text-white shadow-lg shadow-rose-500/40 ring-8 ring-plum-900 transition duration-300 group-hover:scale-110">
                  {s.n}
                </span>
                <div className="mt-8 w-full rounded-3xl bg-white/[0.06] p-3 ring-1 ring-white/10 backdrop-blur-sm transition duration-300 group-hover:-translate-y-1.5 group-hover:bg-white/[0.09] group-hover:ring-rose-400/40">
                  <div className="relative grid h-56 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500/25 via-plum-800 to-plum-800">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-400/20 blur-2xl" />
                    <div className="relative transition duration-300 group-hover:scale-[1.03]">{s.visual}</div>
                  </div>
                  <div className="px-4 pb-5 pt-6">
                    <span className="inline-block rounded-full bg-rose-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-200">
                      {s.tag}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-plum-100/70">{s.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mt-14 flex flex-col items-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-plum-900 shadow-lg shadow-rose-500/20 transition hover:-translate-y-0.5 hover:bg-rose-50"
          >
            Create my free profile
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <p className="text-sm text-plum-100/60">Free to join · Takes less than 2 minutes</p>
        </div>
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
      <p className="mt-3 font-display text-lg font-semibold italic text-white">It&apos;s a match!</p>
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
