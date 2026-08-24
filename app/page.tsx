import Image from "next/image";
import { Nav } from "@/components/Nav";
import { DirectoryView } from "@/components/DirectoryView";
import { PlanBoard } from "@/components/PlanBoard";
import { AreaExplorer } from "@/components/AreaExplorer";
import { getSchools } from "@/lib/schools";
import { getTodaysPlans } from "@/lib/dailyPlans";
import { canonicalArea } from "@/lib/area";

export default async function Home() {
  const [schools, plans] = await Promise.all([getSchools(), getTodaysPlans()]);
  const areaCount = new Set(schools.map((s) => canonicalArea(s.area))).size;

  return (
    <div className="flex flex-1 flex-col">
      <Nav />

      <header className="relative flex min-h-[86vh] items-end overflow-hidden border-b border-line px-6 pb-16 pt-32 text-white sm:min-h-[92vh]">
        <Image
          src="https://images.pexels.com/photos/71276/diver-diving-swimming-sea-71276.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06181A] via-[#06181A]/55 to-[#06181A]/25"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#7FD8CE]">
            Koh Tao, Thailand
          </div>
          <h1 className="max-w-xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            The clearest way to dive Koh Tao.
          </h1>
          <p className="mt-4 max-w-lg text-white/80">
            Compare every dive school by price, language, and agency — side by side,
            with no shop favored over another.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div>
              <div className="font-display text-2xl font-semibold text-[#7FD8CE]">{schools.length}</div>
              <div className="font-mono text-[0.68rem] uppercase tracking-wide text-white/60">
                Schools listed
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-[#7FD8CE]">{areaCount}</div>
              <div className="font-mono text-[0.68rem] uppercase tracking-wide text-white/60">
                Areas covered
              </div>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-[#7FD8CE]">0%</div>
              <div className="font-mono text-[0.68rem] uppercase tracking-wide text-white/60">
                Commission charged
              </div>
            </div>

            <a
              href="#directory"
              className="ml-auto hidden bg-white/95 px-4 py-2.5 font-mono text-xs text-[#06181A] transition-colors hover:bg-white sm:block"
            >
              Browse all schools ↓
            </a>
          </div>
        </div>

        <a
          href="#directory"
          aria-label="Scroll to schools"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70 hover:text-white"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </header>

      <AreaExplorer schools={schools} />

      <PlanBoard plans={plans} />

      <main id="directory" className="flex-1 px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <DirectoryView schools={schools} />
        </div>
      </main>

      <footer className="border-t border-line px-6 py-8 text-sm text-ink-soft">
        <div className="mx-auto max-w-5xl">A neutral, local guide to diving Koh Tao.</div>
      </footer>
    </div>
  );
}
