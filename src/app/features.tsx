import Image, { type StaticImageData } from "next/image";

import srijana from "../../public/photos/srijana.jpg";
import prakriti from "../../public/photos/prakriti.jpg";
import anisha from "../../public/photos/anisha.jpg";
import aarav from "../../public/photos/aarav.jpg";
import rohan from "../../public/photos/rohan.jpg";

const ribbon = ["Real people", "Photo-verified", "Made in Nepal", "Video dates", "Chiya dates", "Zero bots", "Safe by design", "Say Namaste"];

export default function Features() {
  return (
    <>
      {/* Marquee ribbon */}
      <div className="relative z-10 -ml-[5%] mt-4 w-[110%] -rotate-2 bg-love py-4 shadow-xl shadow-rose-500/25">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((n) => (
            <div key={n} aria-hidden={n === 1} className="flex shrink-0 items-center">
              {ribbon.map((t) => (
                <span key={t} className="flex items-center gap-8 pr-8 font-display text-2xl font-semibold italic text-white sm:text-3xl">
                  {t} <span className="text-lg not-italic text-white/70">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="features" className="mx-auto w-full max-w-7xl scroll-mt-6 px-6 pb-24 pt-16 lg:pt-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-plum-900 sm:text-6xl">
            A lot has changed since your last <span className="text-love italic">swipe.</span>
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-plum-700">
            New ways to meet, made for how Nepal actually dates. Less small talk, more real plans.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Double date */}
          <FeatureCard photo={srijana} chip="👯 Double Date" title="Bring your bestie" text="Pair up with a friend and match with another duo. Way less awkward." className="lg:translate-y-10">
            <div className="flex items-center gap-2 rounded-2xl bg-white/95 p-2.5 pr-3 shadow-lg">
              <Duo a={srijana} b={anisha} />
              <span className="text-love text-lg">♥</span>
              <Duo a={rohan} b={aarav} />
              <span className="ml-auto text-[11px] font-bold text-plum-900">It&apos;s a match!</span>
            </div>
          </FeatureCard>

          {/* Vibe match */}
          <FeatureCard photo={prakriti} chip="🎧 Vibe Match" title="Good taste" text="Match on music, food and weekend plans — not just photos.">
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-2.5 shadow-lg">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-love text-white">♫</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-plum-900">12 songs in common</p>
                <p className="text-[11px] text-plum-500">Same playlist, same vibe</p>
              </div>
              <span className="flex h-5 items-end gap-[3px]">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="animate-eq w-[3px] rounded-full bg-rose-500" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </span>
            </div>
          </FeatureCard>

          {/* Video date */}
          <FeatureCard photo={anisha} chip="🎥 Video Date" title="See the spark" text="Face-to-face in the app before you meet. Your number stays private." className="lg:translate-y-10">
            <div className="flex items-end justify-between">
              <span className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> Live · 04:12
              </span>
              <span className="relative h-24 w-[4.5rem] overflow-hidden rounded-2xl shadow-xl ring-2 ring-white">
                <Image src={aarav} alt="" fill sizes="72px" className="object-cover" />
              </span>
            </div>
          </FeatureCard>

          {/* Verified */}
          <FeatureCard photo={rohan} chip="✔ Verified" title="Real ones only" text="Every profile passes a live selfie check. No bots. No catfish.">
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-2.5 shadow-lg">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-sky-400">
                <Image src={rohan} alt="" fill sizes="40px" className="object-cover" />
                <span className="absolute inset-x-0 h-0.5 bg-sky-400 shadow-[0_0_8px_2px_rgba(56,189,248,0.7)]" style={{ animation: "scan 1.6s ease-in-out infinite alternate" }} />
              </span>
              <div>
                <p className="text-xs font-bold text-plum-900">
                  Rohan <span className="text-sky-500">✔</span>
                </p>
                <p className="text-[11px] text-plum-500">Selfie + ID verified</p>
              </div>
            </div>
          </FeatureCard>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  photo,
  chip,
  title,
  text,
  children,
  className = "",
}: {
  photo: StaticImageData;
  chip: string;
  title: string;
  text: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#"
      className={`group relative block h-[460px] overflow-hidden rounded-[2rem] shadow-xl shadow-plum-900/15 ring-1 ring-plum-900/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/25 ${className}`}
    >
      <Image src={photo} alt="" fill sizes="(min-width:1024px) 300px, (min-width:640px) 50vw, 100vw" placeholder="blur" className="object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-plum-900 via-plum-900/30 to-transparent" />

      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-plum-900 shadow backdrop-blur">{chip}</span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="mb-5">{children}</div>
        <h3 className="font-display text-3xl font-semibold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/80">{text}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-rose-200 transition group-hover:gap-2 group-hover:text-white">
          Learn more <span>→</span>
        </span>
      </div>
    </a>
  );
}

function Duo({ a, b }: { a: StaticImageData; b: StaticImageData }) {
  return (
    <span className="flex -space-x-2.5">
      {[a, b].map((p, i) => (
        <span key={i} className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white">
          <Image src={p} alt="" fill sizes="32px" className="object-cover" />
        </span>
      ))}
    </span>
  );
}
