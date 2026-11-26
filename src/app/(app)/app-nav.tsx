"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Pages without an href are not built yet; they show as "Soon".
const items: { label: string; icon: string; href?: string }[] = [
  { label: "Discover", icon: "♥", href: "/discover" },
  { label: "Matches", icon: "✦" },
  { label: "Chat", icon: "💬" },
  { label: "Profile", icon: "☺" },
];

export function SideNav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-1.5">
      {items.map((item) => {
        const active = item.href === pathname;
        const base = "flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-semibold transition";
        if (!item.href) {
          return (
            <span key={item.label} className={`${base} cursor-not-allowed text-plum-500/60`} aria-disabled>
              <span className="w-5 text-center">{item.icon}</span>
              {item.label}
              <span className="ml-auto rounded-full bg-plum-50 px-2 py-0.5 text-[11px] font-semibold text-plum-500">Soon</span>
            </span>
          );
        }
        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`${base} ${active ? "bg-white text-rose-600 shadow-sm ring-1 ring-plum-900/5" : "text-plum-700 hover:bg-white/70"}`}
          >
            <span className="w-5 text-center">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-plum-900/5 bg-white/85 backdrop-blur-lg lg:hidden">
      <ul className="mx-auto flex max-w-md justify-around px-4 py-2">
        {items.map((item) => {
          const active = item.href === pathname;
          const content = (
            <>
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="text-[11px] font-semibold">{item.label}</span>
            </>
          );
          const base = "flex flex-col items-center gap-1 rounded-xl px-3 py-1.5";
          return (
            <li key={item.label}>
              {item.href ? (
                <Link href={item.href} aria-current={active ? "page" : undefined} className={`${base} ${active ? "text-rose-600" : "text-plum-700"}`}>
                  {content}
                </Link>
              ) : (
                <span className={`${base} text-plum-500/50`} aria-disabled>
                  {content}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
