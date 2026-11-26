import Image from "next/image";

import srijana from "../../public/photos/srijana.jpg";
import aarav from "../../public/photos/aarav.jpg";
import anisha from "../../public/photos/anisha.jpg";

const features = [
  { icon: "📸", title: "Selfie verification", text: "Every profile is matched against a live selfie. No catfish, no bots.", tint: "bg-rose-50" },
  { icon: "🛡️", title: "Share your date", text: "Send the time, place and match to a friend in one tap.", tint: "bg-emerald-50" },
  { icon: "🚨", title: "Emergency SOS", text: "Hold to alert your trusted contacts with your live location.", tint: "bg-orange-50" },
  { icon: "🔒", title: "Your number stays private", text: "Chat, call and video inside Amora. Share your number only when you want.", tint: "bg-plum-50" },
  { icon: "🚫", title: "Block & report", text: "Reviewed by a real person within 24 hours. Repeat offenders are banned.", tint: "bg-sky-50" },
  { icon: "👀", title: "You choose who sees you", text: "Hide from your contacts, pause your profile or go incognito anytime.", tint: "bg-amber-50" },
];

const trust = ["Women-led safety team", "24/7 support in Nepali & English", "Data stored securely", "Made in Nepal"];

export default function Safety() {
  return (
    <section id="safety" className="relative isolate mx-auto w-full max-w-7xl scroll-mt-6 px-6 pb-24 pt-8">
      {/* soft glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-32 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-rose-100/70 blur-3xl" />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm ring-1 ring-emerald-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Safety first
        </p>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-plum-900 sm:text-5xl">
          Date with confidence.
          <br />
          We&apos;ve got <span className="text-love italic">your back.</span>
        </h2>
        <p className="mt-4 text-lg text-plum-700">Built-in tools that keep you in control, from the first swipe to the walk home.</p>
      </div>

      <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Phone: safety check-in */}
        <div className="relative mx-auto w-full max-w-[20rem]">
          {/* halo rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200/60" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-50 to-rose-50" />

          {/* floating chips */}
          <div className="animate-float absolute -left-14 top-16 z-20 hidden items-center gap-2.5 rounded-2xl bg-white p-2.5 pr-4 shadow-xl shadow-plum-900/10 ring-1 ring-plum-900/5 sm:flex">
            <span className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-emerald-200">
              <Image src={anisha} alt="" fill sizes="36px" className="object-cover" />
            </span>
            <div>
              <p className="text-xs font-semibold text-plum-900">Anisha is tracking</p>
              <p className="text-[11px] text-emerald-600">● Live location on</p>
            </div>
          </div>
          <div className="animate-float absolute -right-12 bottom-24 z-20 hidden items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-xl shadow-plum-900/10 ring-1 ring-plum-900/5 [animation-delay:1.5s] sm:flex">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-500 text-xs text-white">✔</span>
            <p className="text-xs font-semibold text-plum-900">Aarav is verified</p>
          </div>

          {/* frame */}
          <div className="relative rounded-[3rem] bg-white p-2.5 shadow-[0_40px_80px_-20px_rgba(244,63,110,0.35)] ring-1 ring-rose-100">
            <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-emerald-50/70 via-white to-white px-4 pb-6 pt-3">
              {/* status bar */}
              <div className="relative flex h-7 items-center justify-between px-2 text-[11px] font-semibold text-plum-900">
                <span>7:58</span>
                <span className="absolute left-1/2 top-1 h-5 w-20 -translate-x-1/2 rounded-full bg-plum-900" />
                <span>📶</span>
              </div>

              <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-wider text-emerald-700">Date in progress</p>
              <p className="mt-1 text-center font-display text-xl font-semibold text-plum-900">You&apos;re all set 💚</p>

              {/* date card */}
              <div className="mt-4 rounded-2xl bg-white p-3.5 shadow-md shadow-plum-900/5 ring-1 ring-plum-900/5">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white">
                      <Image src={srijana} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                    <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white">
                      <Image src={aarav} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-plum-900">Date with Aarav</p>
                    <p className="text-[11px] text-plum-500">☕ Himalayan Java · Thamel</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                  <span className="rounded-lg bg-plum-50 px-2.5 py-1.5 font-medium text-plum-700">🕓 4:00 – 6:00 PM</span>
                  <span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 font-medium text-emerald-700">🛡 Shared w/ Anisha</span>
                </div>
              </div>

              {/* check-in button */}
              <div className="relative mx-auto mt-6 grid h-28 w-28 place-items-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/40 [animation-duration:2.4s]" />
                <span className="absolute inset-2 rounded-full bg-emerald-100" />
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-center text-xs font-bold leading-tight text-white shadow-lg shadow-emerald-500/40">
                  I&apos;m
                  <br />
                  safe
                </span>
              </div>
              <p className="mt-2 text-center text-[11px] text-plum-500">Next check-in at 5:00 PM</p>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-rose-50 py-2.5 text-xs font-semibold text-rose-600">
                🚨 Hold for SOS
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl bg-white/80 p-5 shadow-[0_10px_40px_-14px_rgba(28,15,46,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-14px_rgba(244,63,110,0.25)]"
            >
              <span className={`grid h-12 w-12 place-items-center rounded-2xl text-xl transition duration-300 group-hover:scale-110 group-hover:-rotate-6 ${f.tint}`}>
                {f.icon}
              </span>
              <h3 className="mt-4 font-semibold text-plum-900">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-plum-700">{f.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
        {trust.map((t) => (
          <span key={t} className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-plum-700 shadow-sm ring-1 ring-plum-900/5">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-[10px] text-emerald-700">✔</span>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
