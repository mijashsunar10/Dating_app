"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import SwipeDeck, { type Decision } from "../../swipe-deck";
import type { Profile } from "@/lib/profiles";

const MAX_KM = 10;
const MAX_AGE = 35;

export default function DiscoverView({ profiles }: { profiles: Profile[] }) {
  const [km, setKm] = useState(MAX_KM);
  const [maxAge, setMaxAge] = useState(MAX_AGE);
  const [currentName, setCurrentName] = useState<string | null>(null);
  const [counts, setCounts] = useState({ left: 0, right: 0, up: 0 });
  const [liked, setLiked] = useState<Profile[]>([]);

  const visible = useMemo(() => profiles.filter((p) => p.km <= km && p.age <= maxAge), [profiles, km, maxAge]);
  const current = visible.find((p) => p.name === currentName) ?? visible[0];
  // Remount the deck when filters change so it starts from the first matching person.
  const deckKey = `${km}-${maxAge}`;

  function handleDecide(decided: Profile, dir: Decision, next: Profile) {
    setCounts((c) => ({ ...c, [dir]: c[dir] + 1 }));
    if (dir !== "left") setLiked((l) => (l.some((p) => p.name === decided.name) ? l : [decided, ...l]));
    setTimeout(() => setCurrentName(next.name), 320);
  }

  function changeFilter(fn: () => void) {
    fn();
    setCurrentName(null);
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px]">
      {/* Deck column */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-plum-900">Discover</h1>
            <p className="mt-1 text-plum-700">
              {visible.length > 0 ? `${visible.length} people near you match your filters` : "No one matches these filters yet"}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 grid gap-4 rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-plum-900/5 backdrop-blur sm:grid-cols-2">
          <Range label="Distance" value={`Up to ${km} km`} min={1} max={MAX_KM} current={km} onChange={(v) => changeFilter(() => setKm(v))} />
          <Range label="Age" value={`18 – ${maxAge}`} min={20} max={MAX_AGE} current={maxAge} onChange={(v) => changeFilter(() => setMaxAge(v))} />
        </div>

        <div className="mt-10 flex justify-center">
          {visible.length > 0 ? (
            <div className="relative aspect-[3/4] w-full max-w-sm">
              <SwipeDeck key={deckKey} profiles={visible} onDecide={handleDecide} />
            </div>
          ) : (
            <div className="grid aspect-[3/4] w-full max-w-sm place-items-center rounded-[2rem] border-2 border-dashed border-plum-900/10 bg-white/60 p-8 text-center">
              <div>
                <p className="text-4xl">🔍</p>
                <p className="mt-3 font-display text-2xl font-semibold text-plum-900">Try widening your search</p>
                <p className="mt-2 text-sm text-plum-700">Increase the distance or age range to see more people.</p>
                <button
                  onClick={() => changeFilter(() => { setKm(MAX_KM); setMaxAge(MAX_AGE); })}
                  className="mt-5 rounded-full bg-plum-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-plum-800"
                >
                  Reset filters
                </button>
              </div>
            </div>
          )}
        </div>
        {visible.length > 0 && (
          <p className="mt-12 text-center text-xs font-medium text-plum-500">Drag the card, or tap ✕ to pass, ★ to super like, ♥ to like</p>
        )}
      </section>

      {/* Details column */}
      <aside className="space-y-6">
        {current && (
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-plum-900/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">About</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-plum-900">
              {current.name}, {current.age}
            </h2>
            <p className="text-sm text-plum-700">
              {current.job} · 📍 {current.place}, {current.km} km
            </p>
            <p className="mt-4 leading-relaxed text-plum-800">{current.bio}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {current.tags.map((t) => (
                <span key={t} className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-plum-50 p-4">
              <p className="text-xs font-semibold text-plum-500">{current.prompt.q}</p>
              <p className="mt-1 font-display text-lg leading-snug text-plum-900">“{current.prompt.a}”</p>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-cream p-3 ring-1 ring-plum-900/5">
                <dt className="text-xs text-plum-500">Looking for</dt>
                <dd className="mt-0.5 font-semibold text-plum-900">{current.lookingFor}</dd>
              </div>
              <div className="rounded-2xl bg-cream p-3 ring-1 ring-plum-900/5">
                <dt className="text-xs text-plum-500">Compatibility</dt>
                <dd className="mt-0.5 font-semibold text-plum-900">{current.match}% match</dd>
              </div>
            </dl>
          </div>
        )}

        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-plum-900/5">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Today</p>
          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            <Stat n={counts.right} label="Likes" className="text-rose-600" />
            <Stat n={counts.up} label="Super likes" className="text-sky-500" />
            <Stat n={counts.left} label="Passes" className="text-plum-500" />
          </div>

          <p className="mt-6 text-sm font-semibold text-plum-900">You liked</p>
          {liked.length === 0 ? (
            <p className="mt-1 text-sm text-plum-500">People you like will show up here.</p>
          ) : (
            <ul className="mt-3 flex flex-wrap gap-2">
              {liked.map((p) => (
                <li key={p.name} className="flex items-center gap-2 rounded-full bg-rose-50 py-1 pl-1 pr-3 text-xs font-semibold text-plum-800">
                  <span className="relative h-7 w-7 overflow-hidden rounded-full">
                    <Image src={p.photo} alt="" fill sizes="28px" className="object-cover" />
                  </span>
                  {p.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
}

function Range({
  label,
  value,
  min,
  max,
  current,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  current: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-sm">
        <span className="font-semibold text-plum-900">{label}</span>
        <span className="text-plum-700">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-rose-500"
      />
    </label>
  );
}

function Stat({ n, label, className }: { n: number; label: string; className: string }) {
  return (
    <div className="rounded-2xl bg-cream py-3 ring-1 ring-plum-900/5">
      <p className={`font-display text-2xl font-semibold ${className}`}>{n}</p>
      <p className="text-[11px] font-medium text-plum-500">{label}</p>
    </div>
  );
}
