import { BottomNav, SideNav } from "./app-nav";

// Shared shell for the signed-in app (Discover, Matches, Chat, Profile).
// The (app) route group keeps these pages out of the landing page layout without changing their URLs.
export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative isolate flex min-h-screen flex-1 flex-col overflow-clip">
      {/* Soft background mesh, same family as the landing page */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-rose-200/60 blur-[120px]" />
        <div className="absolute right-[-10rem] top-40 h-[30rem] w-[30rem] rounded-full bg-plum-100 blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-6 pb-28 pt-8 lg:pb-12">
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-24">
            <SideNav />
          </div>
        </aside>
        <main className="min-w-0 flex-1">{children}</main>
      </div>

      <BottomNav />
    </div>
  );
}
