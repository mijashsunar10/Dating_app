"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Profile } from "@/lib/profiles";

export type { Profile };
export type Decision = "left" | "right" | "up";
type Exit = Decision | null;

export default function SwipeDeck({
  profiles,
  onDecide,
}: {
  profiles: Profile[];
  /** Called once per swipe with the profile that was decided on and the next one shown. */
  onDecide?: (decided: Profile, dir: Decision, next: Profile) => void;
}) {
  const [index, setIndex] = useState(0);
  const [exit, setExit] = useState<Exit>(null);
  const [drag, setDrag] = useState(0);
  const [matched, setMatched] = useState<Profile | null>(null);
  const [dragging, setDragging] = useState(false);
  const start = useRef<number | null>(null);

  const current = profiles[index % profiles.length];
  const next = profiles[(index + 1) % profiles.length];

  function decide(dir: Exclude<Exit, null>) {
    if (exit) return;
    setExit(dir);
    onDecide?.(current, dir, next);
    if (dir !== "left" && (index % 2 === 0 || dir === "up")) {
      setTimeout(() => setMatched(current), 250);
    }
    setTimeout(() => {
      setIndex((i) => i + 1);
      setExit(null);
      setDrag(0);
    }, 320);
  }

  const transform =
    exit === "right"
      ? "translateX(140%) rotate(22deg)"
      : exit === "left"
        ? "translateX(-140%) rotate(-22deg)"
        : exit === "up"
          ? "translateY(-140%) scale(0.9)"
          : `translateX(${drag}px) rotate(${drag / 18}deg)`;

  return (
    <div className="relative h-full w-full select-none">
      {/* Next card underneath */}
      <Card p={next} className="scale-[0.94] opacity-70" />

      {/* Current card */}
      <div
        className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing"
        style={{
          transform,
          transition: dragging && !exit ? "none" : "transform 320ms cubic-bezier(.2,.8,.2,1)",
        }}
        onPointerDown={(e) => {
          start.current = e.clientX;
          setDragging(true);
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => start.current !== null && setDrag(e.clientX - start.current)}
        onPointerUp={() => {
          start.current = null;
          setDragging(false);
          if (drag > 90) decide("right");
          else if (drag < -90) decide("left");
          else setDrag(0);
        }}
      >
        <Card p={current} />
        <Stamp show={drag > 30 || exit === "right"} text="LIKE" className="left-5 rotate-[-14deg] border-emerald-400 text-emerald-400" />
        <Stamp show={drag < -30 || exit === "left"} text="NOPE" className="right-5 rotate-[14deg] border-rose-500 text-rose-500" />
      </div>

      {/* Actions */}
      <div className="absolute -bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <ActionBtn label="Pass" onClick={() => decide("left")} className="h-14 w-14 text-2xl text-plum-500">
          ✕
        </ActionBtn>
        <ActionBtn label="Super like" onClick={() => decide("up")} className="h-11 w-11 text-lg text-sky-500">
          ★
        </ActionBtn>
        <ActionBtn label="Like" onClick={() => decide("right")} className="h-16 w-16 bg-love text-3xl text-white shadow-rose-500/50 ring-0">
          ♥
        </ActionBtn>
      </div>

      {/* Match popup */}
      {matched && (
        <div className="absolute inset-0 z-30 grid place-items-center rounded-[2rem] bg-plum-900/80 p-6 text-center text-white backdrop-blur-sm animate-pop">
          <div>
            <p className="font-display text-4xl italic text-love">It&apos;s a match!</p>
            <p className="mt-2 text-sm text-white/80">You and {matched.name} liked each other</p>
            <div className="relative mx-auto mt-6 h-28 w-28 overflow-hidden rounded-full ring-4 ring-white">
              <Image src={matched.photo} alt={matched.name} fill sizes="112px" className="object-cover" />
            </div>
            <button
              onClick={() => setMatched(null)}
              className="mt-6 rounded-full bg-love px-6 py-3 text-sm font-semibold shadow-lg shadow-rose-500/40"
            >
              Say Namaste 👋
            </button>
            <button onClick={() => setMatched(null)} className="mt-3 block w-full text-xs text-white/70 hover:text-white">
              Keep swiping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ p, className = "" }: { p: Profile; className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden rounded-[2rem] bg-plum-800 shadow-2xl shadow-plum-900/30 ${className}`}>
      <Image src={p.photo} alt={`${p.name}, ${p.age}`} fill sizes="360px" placeholder="blur" className="pointer-events-none object-cover" draggable={false} />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-plum-800 backdrop-blur">
          <span className="text-sky-500">✔</span> Verified
        </span>
        <span className="rounded-full bg-plum-900/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {p.match}% match
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-900 via-plum-900/40 to-transparent p-5 pb-14 pt-24 text-white">
        <p className="text-2xl font-semibold">
          {p.name}, {p.age}
        </p>
        <p className="mt-0.5 text-sm text-white/80">
          📍 {p.place} · {p.km} km away
        </p>
      </div>
    </div>
  );
}

function Stamp({ show, text, className }: { show: boolean; text: string; className: string }) {
  return (
    <span
      className={`pointer-events-none absolute top-16 rounded-lg border-4 px-3 py-1 text-3xl font-black tracking-widest transition-opacity ${className} ${show ? "opacity-100" : "opacity-0"}`}
    >
      {text}
    </span>
  );
}

function ActionBtn({
  children,
  label,
  onClick,
  className,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`grid place-items-center rounded-full bg-white shadow-xl ring-1 ring-plum-900/5 transition hover:scale-110 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
