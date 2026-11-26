import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HowItWorks from "../../how-it-works";
import Faq from "../../faq";
import Footer from "../../footer";
import { profiles } from "@/lib/profiles";

export const metadata: Metadata = {
  title: "How it works — Amora",
  description: "Create a verified profile, match with people who like you back, and plan a safe first date. Here's how Amora works.",
};

const photo = (name: string) => profiles.find((p) => p.name === name)!.photo;

const details = [
  {
    step: "Step 1",
    title: "A profile that feels like you",
    text: "Pick up to six photos, answer one or two prompts and add the interests you actually care about. A short selfie check gives you the blue verified tick, so people know you're real.",
    points: ["Up to 6 photos and 3 prompts", "Selfie verification in about 30 seconds", "Choose what you're looking for: serious, casual or still figuring it out"],
    tint: "from-rose-100 via-rose-50 to-white",
    visual: "profile",
  },
  {
    step: "Step 2",
    title: "Matches only when it's mutual",
    text: "Swipe right to like, left to pass, or super like someone you really want to meet. Nobody can message you unless you both liked each other, so your inbox stays calm.",
    points: ["Distance and age filters you control", "A match score based on shared interests and values", "Unmatch or report anyone in one tap"],
    tint: "from-peach/70 via-rose-50 to-white",
    visual: "match",
  },
  {
    step: "Step 3",
    title: "From chat to a real date",
    text: "When the conversation clicks, suggest a time and place right inside the chat. Share your date plan with a friend and check in when you're home.",
    points: ["Date suggestions for cafés and spots near you", "Share your plan with a trusted friend", "Safety check-in after the date"],
    tint: "from-plum-100 via-plum-50 to-white",
    visual: "date",
  },
] as const;

const goodToKnow = [
  { icon: "✔", title: "Everyone is verified", text: "Profiles without a selfie check are clearly labelled." },
  { icon: "🔒", title: "Your number stays private", text: "Chat in the app until you choose to share contact details." },
  { icon: "♥", title: "Free to match and chat", text: "Liking, matching and messaging never cost anything." },
  { icon: "🛡", title: "Help when you need it", text: "Our team reviews every report, every day." },
];

export default function HowItWorksPage() {
  return (
    <main className="relative isolate overflow-clip pt-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-rose-200/60 blur-[120px]" />
        <div className="absolute right-[-10rem] top-[40rem] h-[30rem] w-[30rem] rounded-full bg-plum-100 blur-[120px]" />
      </div>

      <HowItWorks asPage />

      {/* Step-by-step detail */}
      <section className="mx-auto max-w-7xl space-y-20 px-6 pb-24">
        {details.map((d, i) => (
          <div key={d.step} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">{d.step}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-plum-900 sm:text-4xl">{d.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-plum-700">{d.text}</p>
              <ul className="mt-6 space-y-3">
                {d.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-plum-800">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose-50 text-xs font-bold text-rose-600">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`grid min-h-80 place-items-center rounded-[2rem] bg-gradient-to-br p-10 shadow-[0_10px_40px_-12px_rgba(244,63,110,0.18)] ${d.tint}`}>
              {d.visual === "profile" && <ProfileCard />}
              {d.visual === "match" && <MatchCard />}
              {d.visual === "date" && <DateCard />}
            </div>
          </div>
        ))}
      </section>

      {/* Good to know */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-plum-900 sm:text-4xl">Good to know</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {goodToKnow.map((g) => (
            <div key={g.title} className="rounded-3xl bg-white/85 p-6 shadow-sm ring-1 ring-plum-900/5 backdrop-blur">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-rose-50 text-lg text-rose-600">{g.icon}</span>
              <h3 className="mt-4 font-semibold text-plum-900">{g.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-plum-700">{g.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/discover" className="inline-flex items-center gap-2 rounded-full bg-plum-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-plum-800">
            See who&apos;s near you →
          </Link>
        </div>
      </section>

      <Faq />
      <Footer />
    </main>
  );
}

function ProfileCard() {
  const p = profiles.find((x) => x.name === "Prakriti")!;
  return (
    <div className="w-64 overflow-hidden rounded-3xl bg-white shadow-xl shadow-plum-900/10">
      <div className="relative h-56">
        <Image src={p.photo} alt="" fill sizes="256px" placeholder="blur" className="object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-plum-800">
          <span className="text-sky-500">✔</span> Verified
        </span>
      </div>
      <div className="p-4">
        <p className="font-semibold text-plum-900">{p.name}, {p.age}</p>
        <p className="text-xs text-plum-500">{p.job} · {p.place}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-rose-50 px-2.5 py-0.5 text-[11px] font-semibold text-rose-600">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MatchCard() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center">
        <span className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg ring-4 ring-white">
          <Image src={photo("Srijana")} alt="" fill sizes="96px" className="object-cover" />
        </span>
        <span className="z-10 -mx-3 grid h-12 w-12 place-items-center rounded-full bg-love text-lg text-white ring-4 ring-white">♥</span>
        <span className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg ring-4 ring-white">
          <Image src={photo("Aarav")} alt="" fill sizes="96px" className="object-cover" />
        </span>
      </div>
      <p className="mt-4 font-display text-2xl font-semibold italic text-plum-900">It&apos;s a match!</p>
      <p className="mt-1 text-sm text-plum-700">87% match · 2 shared interests</p>
    </div>
  );
}

function DateCard() {
  return (
    <div className="w-72 space-y-3">
      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-love px-4 py-2.5 text-sm text-white shadow-md">Chiya at Himalayan Java on Saturday?</div>
      <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-sm text-plum-800 shadow-md">Yes! 4 PM works 😊</div>
      <div className="rounded-2xl bg-white p-4 shadow-lg shadow-plum-900/10">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-plum-500">Date planned</p>
        <p className="mt-1 text-sm font-semibold text-plum-900">☕ Himalayan Java, Thamel</p>
        <p className="text-xs text-plum-500">Saturday · 4:00 PM</p>
        <p className="mt-3 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[11px] font-medium text-emerald-700">🛡 Shared with a friend</p>
      </div>
    </div>
  );
}
