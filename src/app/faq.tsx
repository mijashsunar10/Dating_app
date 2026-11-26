const faqs = [
  {
    q: "Is Amora free to use?",
    a: "Yes. Creating a profile, swiping, matching and chatting are all free. Amora Premium adds extras like seeing who liked you and unlimited rewinds, but you never need it to find a match.",
  },
  {
    q: "How does photo verification work?",
    a: "You take a quick live selfie and we compare it to your profile photos. Once it matches, you get the blue ✔ badge so others know you're real. It takes under a minute.",
  },
  {
    q: "Will my phone number be shown to matches?",
    a: "Never. Chats, voice calls and video dates all happen inside Amora. You decide if and when to share your number.",
  },
  {
    q: "Can I hide my profile from people I know?",
    a: "Yes. You can hide from your contacts, block specific people, pause your profile or go incognito so only people you like can see you.",
  },
  {
    q: "Is Amora only for people in Nepal?",
    a: "Amora is built for Nepal first, from Kathmandu to Dharan, but Nepalis abroad can join too and set their location to wherever they want to meet.",
  },
  {
    q: "What should I do if someone makes me uncomfortable?",
    a: "Tap Report on their profile or chat. A real person from our safety team reviews every report within 24 hours, and you can block them instantly.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative isolate mx-auto w-full max-w-7xl scroll-mt-6 px-6 pb-24 pt-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-plum-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-peach/40 blur-3xl" />
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Left: heading + help card */}
        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 shadow-sm ring-1 ring-rose-100">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> FAQ
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-plum-900 sm:text-5xl">
            Questions? <br />
            We&apos;ve got <span className="text-love italic">answers.</span>
          </h2>
          <p className="mt-4 max-w-sm text-lg text-plum-700">Everything you need to know before your first swipe.</p>

          <div className="mt-8 max-w-sm rounded-3xl bg-gradient-to-br from-rose-100 via-rose-50 to-peach/60 p-6 shadow-[0_10px_40px_-14px_rgba(244,63,110,0.2)]">
            <p className="text-2xl">💬</p>
            <p className="mt-3 font-semibold text-plum-900">Still have a question?</p>
            <p className="mt-1 text-sm leading-relaxed text-plum-700">Our team replies in Nepali or English, usually within a few hours.</p>
            <a
              href="mailto:hello@amora.example"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-rose-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Contact support <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-3xl bg-white/80 px-6 shadow-[0_8px_30px_-14px_rgba(28,15,46,0.12)] backdrop-blur transition duration-300 open:shadow-[0_16px_40px_-14px_rgba(244,63,110,0.25)] open:ring-1 open:ring-rose-100"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-4">
                  <span className="font-display text-sm font-semibold text-rose-300 group-open:text-rose-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[17px] font-semibold text-plum-900">{f.q}</span>
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rose-50 text-lg text-rose-600 transition duration-300 group-open:rotate-45 group-open:bg-love group-open:text-white">
                  +
                </span>
              </summary>
              <p className="pb-6 pl-10 pr-12 text-[15px] leading-relaxed text-plum-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
