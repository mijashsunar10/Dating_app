import Image from "next/image";
import SwipeDeck, { type Profile } from "./swipe-deck";

import srijana from "../../public/photos/srijana.jpg";
import prakriti from "../../public/photos/prakriti.jpg";
import anisha from "../../public/photos/anisha.jpg";
import aarav from "../../public/photos/aarav.jpg";
import rohan from "../../public/photos/rohan.jpg";

// Demo profiles: fictional names on free Unsplash photos (see public/photos/CREDITS.md).
const profiles: Profile[] = [
  { name: "Srijana", age: 24, place: "Kathmandu", km: 2, match: 94, bio: "Momo critic, sunset chaser. Looking for someone to explore Patan with.", tags: ["Travel", "Momo", "Photography"], photo: srijana },
  { name: "Rohan", age: 27, place: "Lalitpur", km: 4, match: 89, bio: "Weekend hiker, weekday coder. Will plan the Nagarkot trip.", tags: ["Hiking", "Coffee", "Guitar"], photo: rohan },
  { name: "Prakriti", age: 23, place: "Pokhara", km: 6, match: 91, bio: "Lakeside walks and long playlists. Teach me your favourite song.", tags: ["Music", "Yoga", "Books"], photo: prakriti },
  { name: "Aarav", age: 28, place: "Bhaktapur", km: 3, match: 87, bio: "Architect by day, street-food explorer by night.", tags: ["Design", "Food", "Football"], photo: aarav },
  { name: "Anisha", age: 25, place: "Kathmandu", km: 1, match: 92, bio: "Fashion, films and chiya. Tell me your best movie pick.", tags: ["Fashion", "Movies", "Chiya"], photo: anisha },
];

const avatars = [srijana, rohan, prakriti, aarav, anisha];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      {/* Soft background mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-rose-200/70 blur-[120px]" />
        <div className="absolute right-[-10rem] top-20 h-[34rem] w-[34rem] rounded-full bg-plum-100 blur-[120px]" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-peach/60 blur-[120px]" />
      </div>

      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight text-plum-900">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-love text-lg text-white shadow-lg shadow-rose-500/30">♥</span>
          Amora
        </a>
        <nav className="hidden items-center gap-9 text-[15px] font-medium text-plum-700 md:flex">
          <a href="#" className="transition hover:text-rose-600">Discover</a>
          <a href="#" className="transition hover:text-rose-600">How it works</a>
          <a href="#" className="transition hover:text-rose-600">Safety</a>
          <a href="#" className="transition hover:text-rose-600">Premium</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-plum-800 transition hover:bg-white/70 sm:block">Log in</a>
          <a href="#" className="rounded-full bg-plum-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-plum-800">Join free</a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-16 pt-8 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[1.15fr_1fr] lg:pb-8 lg:pt-0">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-plum-700 shadow-sm ring-1 ring-plum-900/5 backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            3,240 singles online near you
          </span>

          <h1 className="mt-7 font-display text-[3.25rem] font-semibold leading-[1.02] tracking-tight text-plum-900 sm:text-7xl xl:text-[5.25rem]">
            Love that feels
            <br />
            like <span className="text-love italic">home.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-plum-700 lg:mx-0">
            Meet verified singles across Nepal who share your values, your city and your vibe. Swipe, match and say Namaste in seconds.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-love px-8 py-4 text-base font-semibold text-white shadow-xl shadow-rose-500/30 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-rose-500/40">
              Start matching — it&apos;s free
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-plum-900 shadow-sm ring-1 ring-plum-900/10 transition hover:ring-plum-900/20">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden><path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.72-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.5zM14.2 6.14c.6-.74 1.01-1.75.9-2.77-.87.04-1.93.58-2.55 1.31-.56.65-1.05 1.69-.92 2.69.97.07 1.96-.49 2.57-1.23z"/></svg>
              Get the app
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center gap-4 lg:justify-start">
            <div className="flex -space-x-3">
              {avatars.map((a, i) => (
                <span key={i} className="relative h-11 w-11 overflow-hidden rounded-full ring-[3px] ring-cream">
                  <Image src={a} alt="" fill sizes="44px" className="object-cover" />
                </span>
              ))}
            </div>
            <div className="text-left text-sm">
              <p className="font-semibold text-plum-900">
                <span className="text-gold">★★★★★</span> 4.9
              </p>
              <p className="text-plum-500">Loved by 500k+ singles</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-plum-700 lg:justify-start">
            <span className="flex items-center gap-1.5"><span className="text-sky-500">✔</span> Photo-verified profiles</span>
            <span className="flex items-center gap-1.5"><span className="text-rose-500">♥</span> Smart compatibility</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-500">🛡</span> Safe & private</span>
          </div>
        </div>

        {/* Interactive phone */}
        <div className="relative mx-auto w-full max-w-[320px]">
          {/* Glow + rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-rose-300/60 via-coral/30 to-plum-100/60 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose-200/70" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose-200/40" />

          {/* Fanned photos behind the phone */}
          <div className="absolute -left-36 top-16 -z-10 hidden h-64 w-48 -rotate-12 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white lg:block">
            <Image src={anisha} alt="" fill sizes="192px" placeholder="blur" className="object-cover" />
          </div>
          <div className="absolute -right-36 top-40 -z-10 hidden h-64 w-48 rotate-12 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white lg:block">
            <Image src={aarav} alt="" fill sizes="192px" placeholder="blur" className="object-cover" />
          </div>

          {/* Floating chips (placed so they never cover the card's content) */}
          <div className="animate-float absolute -left-72 bottom-4 z-20 hidden items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-xl ring-1 ring-plum-900/5 backdrop-blur xl:flex">
            <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-rose-200">
              <Image src={rohan} alt="" fill sizes="44px" className="object-cover" />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
            </span>
            <div>
              <p className="text-sm font-semibold text-plum-900">Rohan <span className="text-sky-500">✔</span></p>
              <p className="text-xs text-plum-500">Namaste! Chiya this weekend? ☕</p>
            </div>
          </div>

          <div className="animate-float absolute -right-56 -top-2 z-20 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-plum-900/5 backdrop-blur [animation-delay:2s] xl:flex">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-love text-white">♥</span>
            <div>
              <p className="text-xs font-medium text-plum-500">New matches today</p>
              <p className="font-display text-xl font-semibold text-plum-900">+12 people</p>
            </div>
          </div>

          {/* Phone frame */}
          <div className="relative rounded-[3.2rem] bg-gradient-to-b from-plum-700 via-plum-900 to-plum-900 p-[10px] shadow-[0_50px_100px_-20px_rgba(28,15,46,0.55),inset_0_0_0_2px_rgba(255,255,255,0.08)]">
            {/* side buttons */}
            <span className="absolute -left-[3px] top-28 h-10 w-[3px] rounded-l bg-plum-700" />
            <span className="absolute -left-[3px] top-44 h-16 w-[3px] rounded-l bg-plum-700" />
            <span className="absolute -right-[3px] top-36 h-20 w-[3px] rounded-r bg-plum-700" />

            <div className="relative overflow-hidden rounded-[2.6rem] bg-cream px-3 pb-11 pt-3">
              {/* status bar + island */}
              <div className="relative flex h-8 items-center justify-between px-4 text-[11px] font-semibold text-plum-900">
                <span>9:41</span>
                <span className="absolute left-1/2 top-1 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                <span className="flex items-center gap-1">
                  <svg viewBox="0 0 18 12" className="h-2.5 w-4 fill-current" aria-hidden><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2" width="3" height="10" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>
                  <span className="relative h-2.5 w-5 rounded-[3px] border border-plum-900/60 p-[1px]"><span className="block h-full w-3/4 rounded-[1px] bg-plum-900" /></span>
                </span>
              </div>

              <div className="mb-3 mt-1 flex items-center justify-between px-1">
                <span className="flex items-center gap-1.5 font-display text-lg font-semibold text-plum-900">
                  <span className="text-love">♥</span> Discover
                </span>
                <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">📍 Kathmandu</span>
              </div>
              <div className="relative aspect-[3/4]">
                <SwipeDeck profiles={profiles} />
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-xs font-medium text-plum-500">👆 Try it — drag the card or tap ♥</p>
        </div>
      </section>
    </main>
  );
}
