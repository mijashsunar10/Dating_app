import Image, { type StaticImageData } from "next/image";

import srijana from "../../public/photos/srijana.jpg";
import prakriti from "../../public/photos/prakriti.jpg";
import anisha from "../../public/photos/anisha.jpg";
import aarav from "../../public/photos/aarav.jpg";
import rohan from "../../public/photos/rohan.jpg";

// Demo stories: fictional couples on placeholder photos (see public/photos/CREDITS.md).
const timeline = [
  { label: "Matched", date: "Mar 2025", icon: "♥" },
  { label: "First chiya", date: "Mar 2025", icon: "☕" },
  { label: "Nagarkot trip", date: "Aug 2025", icon: "⛰" },
  { label: "Engaged", date: "Oct 2026", icon: "💍" },
];

const stats = [
  { value: "12k+", label: "Couples formed" },
  { value: "500k+", label: "Verified singles" },
  { value: "4.9★", label: "App store rating" },
  { value: "77", label: "Districts covered" },
];

export default function SuccessStories() {
  return (
    <section
      id="stories"
      className="relative isolate mx-auto w-full max-w-7xl scroll-mt-6 px-6 pb-24 pt-8"
    >
      {/* soft glows that blend into the page */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-rose-100/80 blur-3xl" />
        <div className="absolute bottom-24 left-0 h-80 w-80 rounded-full bg-plum-50 blur-3xl" />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 shadow-sm ring-1 ring-rose-100">
          <span className="text-rose-500">♥</span> Love stories
        </p>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-plum-900 sm:text-5xl">
          They said <span className="text-love italic">Namaste.</span>
          <br />
          Now they say forever.
        </h2>
        <p className="mt-4 text-lg text-plum-700">
          Real couples, real chiya dates. Here&apos;s how a swipe turned into
          something more.
        </p>
      </div>

      {/* Featured story */}
      <article className="group mt-16 grid items-center gap-12 rounded-[2rem] bg-white/80 p-6 shadow-[0_20px_60px_-20px_rgba(244,63,110,0.25)] backdrop-blur sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:p-14">
        {/* Polaroids */}
        <div className="relative mx-auto h-[22rem] w-full max-w-md sm:h-[26rem]">
          <Polaroid
            photo={srijana}
            caption="Srijana"
            className="left-0 top-4 -rotate-6 group-hover:-rotate-9"
          />
          <Polaroid
            photo={aarav}
            caption="Aarav"
            className="right-0 top-12 rotate-6 group-hover:rotate-9"
          />
          <span className="bg-love absolute left-1/2 top-1/2 z-20 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-2xl text-white shadow-xl shadow-rose-500/40 ring-[6px] ring-white transition duration-500 group-hover:scale-110">
            ♥
          </span>
          <span className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-plum-900 shadow-lg shadow-plum-900/5 ring-1 ring-rose-100">
            💍 Engaged · Oct 2026
          </span>
          {/* sparkles */}
          <span className="absolute -left-2 bottom-16 text-xl text-rose-300">
            ✦
          </span>
          <span className="absolute -right-1 top-0 text-2xl text-coral/70">
            ✦
          </span>
        </div>

        {/* Quote + timeline */}
        <div>
          <span className="font-display text-7xl leading-none text-rose-200">
            &ldquo;
          </span>
          <blockquote className="-mt-6 font-display text-2xl font-medium leading-snug text-plum-900 sm:text-[1.75rem]">
            He opened with{" "}
            <span className="text-love italic">
              &ldquo;Momo or chowmein?&rdquo;
            </span>{" "}
            and I knew he was trouble. One chiya date in Thamel turned into a
            trip to Nagarkot&nbsp;— and now, a wedding in Kathmandu.
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <p className="font-semibold text-plum-900">Srijana &amp; Aarav</p>
            <span className="h-1 w-1 rounded-full bg-plum-500/40" />
            <p className="text-sm text-plum-500">Kathmandu · 94% match</p>
          </div>

          {/* timeline */}
          <div className="relative mt-9">
            <div className="absolute left-[12.5%] right-[12.5%] top-5 h-0.5 rounded-full bg-gradient-to-r from-rose-200 via-rose-400 to-coral" />
            <ol className="relative grid grid-cols-4 gap-2">
              {timeline.map((t, i) => (
                <li
                  key={t.label}
                  className="relative flex flex-col items-center text-center"
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full text-sm ring-4 ring-white ${
                      i === timeline.length - 1
                        ? "bg-love text-white shadow-lg shadow-rose-500/30"
                        : "bg-rose-50 text-rose-600"
                    }`}
                  >
                    {t.icon}
                  </span>
                  <span className="mt-2 text-xs font-semibold text-plum-900 sm:text-[13px]">
                    {t.label}
                  </span>
                  <span className="text-[11px] text-plum-500">{t.date}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>

      {/* More stories */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <StoryCard
          a={prakriti}
          b={rohan}
          names="Prakriti & Rohan"
          meta="Pokhara ↔ Lalitpur"
          chip="Together 1 yr"
          quote="We matched on the same Sajjan Raut song. Now every road trip has the same playlist."
        />
        <StoryCard
          a={anisha}
          names="Anisha"
          meta="Kathmandu"
          chip="Double Date"
          quote="Went on a double date with my bestie — she found her guy, I found my person. Best Saturday ever."
        />

        {/* Your story CTA */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-rose-100 via-rose-50 to-peach/70 p-7 shadow-[0_10px_40px_-12px_rgba(244,63,110,0.18)]">
          <span className="pointer-events-none absolute -bottom-10 -right-6 select-none text-[10rem] leading-none text-white/70">
            ♥
          </span>
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">
              Your turn
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-plum-900">
              Your story could be{" "}
              <span className="text-love italic">next.</span>
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-plum-700">
              Thousands of Nepali singles are one swipe away from their first
              chiya date.
            </p>
          </div>
          <a
            href="#"
            className="bg-love group relative mt-6 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-500/40"
          >
            Start my story{" "}
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <dl className="mt-16 grid grid-cols-2 gap-y-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse text-center ${i > 0 ? "lg:border-l lg:border-rose-200/70" : ""} ${i % 2 === 1 ? "border-l border-rose-200/70 lg:border-l" : ""}`}
          >
            <dt className="mt-1 text-sm font-medium text-plum-500">
              {s.label}
            </dt>
            <dd className="text-love font-display text-4xl font-semibold sm:text-5xl">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Polaroid({
  photo,
  caption,
  className,
}: {
  photo: StaticImageData;
  caption: string;
  className: string;
}) {
  return (
    <figure
      className={`absolute z-10 w-[58%] rounded-2xl bg-white p-2.5 pb-3 shadow-xl shadow-plum-900/10 ring-1 ring-plum-900/5 transition duration-500 ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
        <Image
          src={photo}
          alt=""
          fill
          sizes="(min-width: 1024px) 260px, 50vw"
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-2 text-center font-display text-base italic text-plum-700">
        {caption}
      </figcaption>
    </figure>
  );
}

function StoryCard({
  a,
  b,
  names,
  meta,
  chip,
  quote,
}: {
  a: StaticImageData;
  b?: StaticImageData;
  names: string;
  meta: string;
  chip: string;
  quote: string;
}) {
  return (
    <article className="group flex flex-col rounded-[1.75rem] bg-white/80 p-7 shadow-[0_10px_40px_-12px_rgba(244,63,110,0.18)] backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-12px_rgba(244,63,110,0.3)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar photo={a} />
          {b && (
            <>
              <span className="bg-love z-10 -mx-2 grid h-7 w-7 place-items-center rounded-full text-[11px] text-white ring-[3px] ring-white">
                ♥
              </span>
              <Avatar photo={b} />
            </>
          )}
        </div>
        <span className="rounded-full bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-600">
          {chip}
        </span>
      </div>
      <p className="mt-5 text-sm tracking-widest text-gold">★★★★★</p>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-plum-800">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-rose-100 pt-4">
        <p className="font-semibold text-plum-900">{names}</p>
        <p className="text-sm text-plum-500">{meta}</p>
      </div>
    </article>
  );
}

function Avatar({ photo }: { photo: StaticImageData }) {
  return (
    <span className="relative h-12 w-12 overflow-hidden rounded-full shadow-md ring-[3px] ring-white">
      <Image src={photo} alt="" fill sizes="48px" className="object-cover" />
    </span>
  );
}
