import Image from "next/image";

import srijana from "../../public/photos/srijana.jpg";
import prakriti from "../../public/photos/prakriti.jpg";
import anisha from "../../public/photos/anisha.jpg";
import aarav from "../../public/photos/aarav.jpg";
import rohan from "../../public/photos/rohan.jpg";

// "Why Amora" — the best ideas from today's dating apps, done in one place:
// prompts (Hinge), verification (Tinder/Bumble), compatibility (OkCupid),
// you-choose-who-messages-first (Bumble), in-app video dates and date safety tools.
export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl scroll-mt-8 px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-sm font-semibold text-rose-600 ring-1 ring-rose-200">
          ♥ Why Amora
        </span>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-plum-900 sm:text-6xl">
          Everything you love about dating apps.
          <span className="text-love italic"> None of the games.</span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-plum-700">
          We took the best ideas from every app, made them safer, and built them for how people really meet in Nepal.
        </p>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-6 lg:auto-rows-[minmax(0,1fr)]">
        {/* 1 — Prompts: profiles with personality */}
        <Card className="md:col-span-4 lg:row-span-2" tone="plum">
          <div className="grid h-full gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <Icon className="bg-white/10 text-white">💬</Icon>
              <h3 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">Profiles that actually say something</h3>
              <p className="mt-3 max-w-md leading-relaxed text-white/70">
                Answer fun prompts, add voice notes and pin your favourite photos. Like a specific answer — not just a face — and start a real conversation.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm font-medium text-white/85">
                <Check light>40+ prompts in English & Nepali</Check>
                <Check light>30-second voice intros</Check>
                <Check light>Comment on any photo or answer</Check>
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-sm space-y-3">
              <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image src={prakriti} alt="" fill sizes="384px" placeholder="blur" className="object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-plum-800">
                    Prakriti, 23 <span className="text-sky-500">✔</span>
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-plum-500">My ideal Saturday</p>
                  <p className="mt-1.5 font-display text-xl font-semibold leading-snug text-plum-900">
                    Sunrise at Sarangkot, then dal bhat and a nap by Phewa lake.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-2 rounded-full bg-plum-50 px-3 py-1.5 text-xs font-medium text-plum-700">
                      <span className="flex h-4 items-end gap-[2px]">
                        {[3, 7, 5, 9, 4, 8, 6].map((h, i) => (
                          <span key={i} className="w-[2px] rounded-full bg-rose-500" style={{ height: `${h * 1.6}px` }} />
                        ))}
                      </span>
                      0:24 voice intro
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-love text-white shadow-lg shadow-rose-500/40">♥</span>
                  </div>
                </div>
              </div>
              <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-love px-4 py-2.5 text-sm text-white shadow-lg">
                Sarangkot at 5am? Respect. I&apos;ll bring the chiya ☕
              </div>
            </div>
          </div>
        </Card>

        {/* 2 — Verification */}
        <Card className="md:col-span-2">
          <Icon className="bg-sky-50 text-sky-500">✔</Icon>
          <h3 className="mt-5 text-xl font-semibold text-plum-900">100% verified humans</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-plum-700">
            Every profile passes a live selfie check. Optional ID badge for extra trust. No bots, no catfish.
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-sky-50 p-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-sky-400">
              <Image src={rohan} alt="" fill sizes="48px" className="object-cover" />
            </span>
            <div className="text-sm">
              <p className="font-semibold text-plum-900">Rohan <span className="text-sky-500">✔</span></p>
              <p className="text-xs text-sky-700">Photo + ID verified</p>
            </div>
          </div>
        </Card>

        {/* 3 — Compatibility */}
        <Card className="md:col-span-2">
          <Icon className="bg-rose-50 text-rose-500">✦</Icon>
          <h3 className="mt-5 text-xl font-semibold text-plum-900">Smart compatibility</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-plum-700">
            Matches based on values, lifestyle and what you&apos;re looking for — not just distance.
          </p>
          <div className="mt-6 space-y-3">
            <Meter label="Values" value={96} />
            <Meter label="Lifestyle" value={88} />
            <Meter label="Interests" value={91} />
          </div>
        </Card>

        {/* 4 — You choose who messages first */}
        <Card className="md:col-span-3 lg:col-span-2">
          <Icon className="bg-plum-50 text-plum-700">👑</Icon>
          <h3 className="mt-5 text-xl font-semibold text-plum-900">You set the pace</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-plum-700">
            Choose who can message first, add an opening question, and only hear from people you matched with.
          </p>
          <div className="mt-6 flex rounded-full bg-plum-50 p-1 text-xs font-semibold">
            <span className="flex-1 rounded-full bg-white py-2 text-center text-plum-900 shadow-sm">I message first</span>
            <span className="flex-1 py-2 text-center text-plum-500">Anyone</span>
            <span className="flex-1 py-2 text-center text-plum-500">Matches only</span>
          </div>
        </Card>

        {/* 5 — Video dates */}
        <Card className="overflow-hidden md:col-span-3 lg:col-span-2" tone="rose">
          <Icon className="bg-white/20 text-white">🎥</Icon>
          <h3 className="mt-5 text-xl font-semibold text-white">Video date before you meet</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-white/85">
            Vibe-check face to face inside the app. No phone number needed.
          </p>
          <div className="relative mt-6 h-36 overflow-hidden rounded-2xl ring-2 ring-white/40">
            <Image src={anisha} alt="" fill sizes="400px" placeholder="blur" className="object-cover object-top" />
            <span className="absolute bottom-2 right-2 h-14 w-11 overflow-hidden rounded-lg ring-2 ring-white">
              <Image src={aarav} alt="" fill sizes="44px" className="object-cover" />
            </span>
            <span className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> 04:12
            </span>
          </div>
        </Card>

        {/* 6 — Safety */}
        <Card className="md:col-span-6 lg:col-span-2">
          <Icon className="bg-emerald-50 text-emerald-600">🛡</Icon>
          <h3 className="mt-5 text-xl font-semibold text-plum-900">Safety on every date</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-plum-700">
            Share your date plans with a friend, check in live, and reach help in one tap.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm font-medium text-plum-800">
            <Check>Share My Date with friends</Check>
            <Check>Block & report in one tap</Check>
            <Check>AI blurs unwanted photos</Check>
          </ul>
        </Card>

        {/* 7 — Date ideas / Daily picks (wide strip) */}
        <Card className="md:col-span-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <Icon className="bg-peach/60 text-coral">☀</Icon>
              <h3 className="mt-5 text-2xl font-semibold text-plum-900">Daily picks + local date ideas</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-plum-700">
                Every morning get a handful of hand-picked matches — and when you click, we suggest a cosy café, rooftop or trail nearby so “let&apos;s meet” actually happens.
              </p>
            </div>
            <div className="flex flex-1 flex-wrap items-center gap-4 lg:justify-end">
              <div className="flex -space-x-4">
                {[srijana, rohan, prakriti, aarav, anisha].map((p, i) => (
                  <span key={i} className="relative h-16 w-16 overflow-hidden rounded-2xl ring-4 ring-white shadow-lg" style={{ transform: `rotate(${(i - 2) * 4}deg)` }}>
                    <Image src={p} alt="" fill sizes="64px" className="object-cover" />
                  </span>
                ))}
              </div>
              <div className="grid gap-2 text-sm">
                {[
                  ["☕", "Himalayan Java, Thamel", "0.8 km"],
                  ["🌄", "Sunset hike, Nagarkot", "Sat · 4pm"],
                  ["🍜", "Momo crawl, Patan", "1.5 km"],
                ].map(([e, name, meta]) => (
                  <span key={name} className="flex items-center gap-3 rounded-xl bg-cream px-3.5 py-2 ring-1 ring-plum-900/5">
                    <span>{e}</span>
                    <span className="font-semibold text-plum-900">{name}</span>
                    <span className="ml-auto pl-3 text-xs text-plum-500">{meta}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Stats strip */}
      <dl className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-white/70 p-8 text-center shadow-sm ring-1 ring-plum-900/5 backdrop-blur md:grid-cols-4">
        {[
          ["500k+", "Singles in Nepal"],
          ["2M+", "Matches made"],
          ["98%", "Verified profiles"],
          ["4.9★", "App store rating"],
        ].map(([n, l]) => (
          <div key={l} className="flex flex-col-reverse">
            <dt className="mt-1 text-sm text-plum-500">{l}</dt>
            <dd className="font-display text-4xl font-semibold text-plum-900">{n}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Card({ children, className = "", tone = "light" }: { children: React.ReactNode; className?: string; tone?: "light" | "plum" | "rose" }) {
  const tones = {
    light: "bg-white ring-1 ring-plum-900/5 shadow-sm hover:shadow-xl hover:shadow-plum-900/5",
    plum: "bg-plum-900 shadow-2xl shadow-plum-900/20",
    rose: "bg-love shadow-xl shadow-rose-500/25",
  };
  return <div className={`relative rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${tones[tone]} ${className}`}>{children}</div>;
}

function Icon({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`grid h-12 w-12 place-items-center rounded-2xl text-xl ${className}`}>{children}</span>;
}

function Check({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <li className="flex items-center gap-2.5">
      <span className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${light ? "bg-white/15 text-white" : "bg-emerald-100 text-emerald-600"}`}>✓</span>
      {children}
    </li>
  );
}

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold text-plum-700">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-1.5 h-2 rounded-full bg-rose-50">
        <div className="h-full rounded-full bg-love" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
