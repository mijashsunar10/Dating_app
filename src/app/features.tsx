"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import srijana from "../../public/photos/srijana.jpg";
import prakriti from "../../public/photos/prakriti.jpg";
import anisha from "../../public/photos/anisha.jpg";
import aarav from "../../public/photos/aarav.jpg";
import rohan from "../../public/photos/rohan.jpg";

const features = [
  { key: "prompts", icon: "💬", title: "Profiles with personality", desc: "Prompts, voice intros and photos you can react to. Like an answer, not just a face.", chip: "Voice intro · 0:24" },
  { key: "verify", icon: "✔", title: "Every person is verified", desc: "Live selfie check on every profile and an optional ID badge. No bots, no catfish.", chip: "Selfie match 99.8%" },
  { key: "match", icon: "✦", title: "Compatibility that's real", desc: "We match on values, lifestyle and intentions — then show you exactly why you clicked.", chip: "94% compatible" },
  { key: "video", icon: "🎥", title: "Video date first", desc: "Vibe-check face to face inside Amora. No phone number ever shared.", chip: "Live · 04:12" },
  { key: "safety", icon: "🛡", title: "Safety on every date", desc: "Share your date plan with a friend, live check-ins and one-tap help.", chip: "Shared with Didi" },
] as const;

type Key = (typeof features)[number]["key"];

const DURATION = 5000;

export default function Features() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % features.length), DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);

  const f = features[active];

  return (
    <section id="features" className="relative mx-auto w-full max-w-7xl scroll-mt-6 px-6 pb-24 pt-10 lg:pt-4">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-50 via-white to-plum-50 px-6 shadow-xl shadow-rose-500/5 ring-1 ring-rose-100 py-12 sm:px-12 lg:px-16 lg:py-14">
        {/* glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-rose-200/70 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-10 h-[24rem] w-[24rem] rounded-full bg-peach/60 blur-[120px]" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-24">
          {/* Left: heading + feature tabs */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">Why Amora</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-plum-900 sm:text-5xl">
              Dating, <span className="text-love italic">done right.</span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-plum-700">The best of every dating app — safer, smarter and made for Nepal.</p>

            <div className="mt-8 space-y-1.5" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              {features.map((item, i) => {
                const on = i === active;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActive(i)}
                    className={`group relative block w-full overflow-hidden rounded-2xl p-4 text-left transition ${on ? "bg-white shadow-lg shadow-rose-500/10 ring-1 ring-rose-100" : "hover:bg-white/70"}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-lg transition ${on ? "bg-love text-white shadow-lg shadow-rose-500/40" : "bg-rose-50 text-rose-500"}`}>
                        {item.icon}
                      </span>
                      <span className={`text-lg font-semibold transition ${on ? "text-plum-900" : "text-plum-500 group-hover:text-plum-800"}`}>{item.title}</span>
                    </div>
                    <div className={`grid transition-all duration-500 ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <p className="overflow-hidden pl-[3.75rem] text-[15px] leading-relaxed text-plum-700">
                        <span className="block pt-1.5">{item.desc}</span>
                      </p>
                    </div>
                    {on && (
                      <span
                        key={`${active}-${paused}`}
                        className="absolute bottom-0 left-0 h-[3px] bg-love"
                        style={paused ? { width: "100%" } : { animation: `progress ${DURATION}ms linear forwards` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: phone that changes per feature */}
          <div className="relative isolate mx-auto">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-rose-300/50 via-coral/25 to-plum-100/60 blur-3xl" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose-200/70" />
            <div key={f.key + "-chip"} className="animate-pop absolute -left-24 top-28 z-10 hidden whitespace-nowrap rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-plum-900 shadow-xl ring-1 ring-plum-900/5 sm:block">
              <span className="mr-1.5 text-rose-500">{f.icon}</span>
              {f.chip}
            </div>
            <div className="rounded-[2.8rem] bg-gradient-to-b from-plum-700 via-plum-900 to-plum-900 p-[9px] shadow-[0_40px_80px_-20px_rgba(28,15,46,0.45),inset_0_0_0_2px_rgba(255,255,255,0.08)]">
              <div className="relative h-[540px] w-[270px] overflow-hidden rounded-[2.3rem] bg-cream">
                <span className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
                <div key={f.key} className="animate-pop h-full">
                  <Screen k={f.key} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Screen({ k }: { k: Key }) {
  if (k === "prompts")
    return (
      <div className="h-full overflow-hidden px-3 pt-10">
        <div className="relative h-56 overflow-hidden rounded-3xl">
          <Image src={prakriti} alt="" fill sizes="260px" placeholder="blur" className="object-cover" />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-plum-900">
            Prakriti, 23 <span className="text-sky-500">✔</span>
          </span>
        </div>
        <div className="mt-3 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-plum-900/5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-plum-500">My ideal Saturday</p>
          <p className="mt-1 font-display text-lg font-semibold leading-snug text-plum-900">Sunrise at Sarangkot, then dal bhat by Phewa lake.</p>
        </div>
        <div className="mt-3 flex items-center gap-3 rounded-full bg-white p-2 pr-4 shadow-sm ring-1 ring-plum-900/5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-love text-xs text-white">▶</span>
          <span className="flex h-5 flex-1 items-center gap-[3px]">
            {[4, 8, 5, 10, 6, 12, 7, 9, 4, 11, 6, 8, 5, 9].map((h, i) => (
              <span key={i} className="w-[3px] rounded-full bg-rose-400" style={{ height: h * 1.5 }} />
            ))}
          </span>
          <span className="text-[11px] font-medium text-plum-500">0:24</span>
        </div>
        <div className="ml-auto mt-3 w-fit max-w-[85%] rounded-2xl rounded-br-md bg-love px-3.5 py-2 text-xs text-white shadow">
          Sarangkot at 5am? I&apos;ll bring chiya ☕
        </div>
      </div>
    );

  if (k === "verify")
    return (
      <div className="flex h-full flex-col items-center px-5 pt-12 text-center">
        <p className="font-display text-xl font-semibold text-plum-900">Selfie check</p>
        <p className="mt-1 text-xs text-plum-500">Match your face to your photos</p>
        <div className="relative mt-6 h-44 w-44">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-dashed border-sky-300 [animation-duration:8s]" />
          <div className="absolute inset-3 overflow-hidden rounded-full ring-4 ring-sky-400">
            <Image src={rohan} alt="" fill sizes="160px" className="object-cover" />
            <span className="absolute inset-x-0 h-1 bg-sky-400/80 shadow-[0_0_12px_4px_rgba(56,189,248,0.6)]" style={{ animation: "scan 2s ease-in-out infinite alternate" }} />
          </div>
          <span className="absolute bottom-1 right-1 grid h-11 w-11 place-items-center rounded-full bg-sky-500 text-lg text-white ring-4 ring-cream">✔</span>
        </div>
        <p className="mt-5 text-lg font-semibold text-plum-900">Rohan is verified</p>
        <div className="mt-3 w-full space-y-2 text-left text-xs font-medium">
          {["Face matches photos", "Real person, live", "Government ID added"].map((t) => (
            <p key={t} className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-plum-800 ring-1 ring-plum-900/5">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-[10px] text-emerald-600">✓</span>
              {t}
            </p>
          ))}
        </div>
      </div>
    );

  if (k === "match")
    return (
      <div className="flex h-full flex-col items-center px-5 pt-12">
        <div className="flex items-center">
          <span className="relative h-20 w-20 overflow-hidden rounded-full shadow-lg ring-4 ring-white">
            <Image src={srijana} alt="" fill sizes="80px" className="object-cover" />
          </span>
          <span className="z-10 -mx-3 grid h-10 w-10 place-items-center rounded-full bg-love text-white ring-4 ring-cream">♥</span>
          <span className="relative h-20 w-20 overflow-hidden rounded-full shadow-lg ring-4 ring-white">
            <Image src={aarav} alt="" fill sizes="80px" className="object-cover" />
          </span>
        </div>
        <p className="text-love mt-4 font-display text-5xl font-semibold">94%</p>
        <p className="text-xs font-medium text-plum-500">Srijana & Aarav</p>
        <div className="mt-5 w-full space-y-3 rounded-3xl bg-white p-4 ring-1 ring-plum-900/5">
          {([["Values", 96], ["Family goals", 100], ["Lifestyle", 88], ["Interests", 91]] as const).map(([l, v]) => (
            <div key={l}>
              <div className="flex justify-between text-[11px] font-semibold text-plum-700">
                <span>{l}</span>
                <span>{v}%</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-rose-50">
                <div className="bg-love h-full rounded-full" style={{ width: `${v}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-plum-500">You both love 🥟 momo & 🥾 hiking</p>
      </div>
    );

  if (k === "video")
    return (
      <div className="relative h-full bg-plum-900">
        <Image src={anisha} alt="" fill sizes="270px" placeholder="blur" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-x-0 top-10 flex items-center justify-between px-4 text-white">
          <div>
            <p className="font-semibold">
              Anisha <span className="text-sky-400">✔</span>
            </p>
            <p className="flex items-center gap-1.5 text-[11px] text-white/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              04:12
            </p>
          </div>
          <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">🔒 Private</span>
        </div>
        <span className="absolute right-4 top-24 h-28 w-20 overflow-hidden rounded-2xl shadow-xl ring-2 ring-white">
          <Image src={aarav} alt="" fill sizes="80px" className="object-cover" />
        </span>
        <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4">
          {["🎤", "📷"].map((e) => (
            <span key={e} className="grid h-12 w-12 place-items-center rounded-full bg-white/20 backdrop-blur">{e}</span>
          ))}
          <span className="grid h-12 w-12 place-items-center rounded-full bg-red-500 text-white">✕</span>
        </div>
      </div>
    );

  return (
    <div className="flex h-full flex-col px-4 pt-11">
      <p className="font-display text-xl font-semibold text-plum-900">Date tonight</p>
      <div className="mt-3 overflow-hidden rounded-3xl bg-white ring-1 ring-plum-900/5">
        <div className="relative h-28 bg-[linear-gradient(135deg,#ece2f7,#ffe0e8)]">
          <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full" aria-hidden>
            <path d="M10 80 C 60 20, 120 90, 190 25" fill="none" stroke="#f43f6e" strokeWidth="3" strokeDasharray="6 5" />
          </svg>
          <span className="absolute right-5 top-2 text-2xl">📍</span>
        </div>
        <div className="p-3.5">
          <p className="font-semibold text-plum-900">☕ Himalayan Java, Thamel</p>
          <p className="text-xs text-plum-500">with Rohan · 6:30 PM</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3 rounded-2xl bg-emerald-50 p-3 ring-1 ring-emerald-200">
        <span className="relative h-9 w-9 overflow-hidden rounded-full">
          <Image src={srijana} alt="" fill sizes="36px" className="object-cover" />
        </span>
        <div className="text-xs">
          <p className="font-semibold text-plum-900">Shared with Didi</p>
          <p className="text-emerald-700">Live location on until 9 PM</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
        <span className="rounded-2xl bg-white p-3 text-center text-plum-800 ring-1 ring-plum-900/5">✅ I&apos;m safe</span>
        <span className="rounded-2xl bg-white p-3 text-center text-plum-800 ring-1 ring-plum-900/5">⏰ Check-in</span>
      </div>
      <span className="mb-6 mt-auto rounded-full bg-red-500 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-red-500/30">
        Hold for emergency help
      </span>
    </div>
  );
}
