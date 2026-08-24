"use client";

import Image from "next/image";
import { useMemo } from "react";
import type { School } from "@/types";
import { AREA_ORDER, AREA_PHOTOS, canonicalArea } from "@/lib/area";

type Props = { schools: School[] };

export const AREA_SELECT_EVENT = "area-select";

export const AreaExplorer = ({ schools }: Props) => {
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    schools.forEach((s) => {
      const key = canonicalArea(s.area);
      map.set(key, (map.get(key) ?? 0) + 1);
    });
    return map;
  }, [schools]);

  const areas = AREA_ORDER.filter((a) => (counts.get(a) ?? 0) > 0);

  const goToArea = (area: string) => {
    window.history.pushState({}, "", `?area=${encodeURIComponent(area)}#directory`);
    window.dispatchEvent(new CustomEvent(AREA_SELECT_EVENT, { detail: area }));
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="border-t border-line px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-medium">Explore by area</h2>
        <p className="mt-1 max-w-2xl text-sm text-ink-soft">
          Koh Tao is small, but where a school is based still shapes your day — pick a beach or bay
          to jump straight to its schools.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => goToArea(area)}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden border border-line text-left"
            >
              <Image
                src={AREA_PHOTOS[area]}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                aria-hidden
              />
              <div className="relative p-3 text-white">
                <div className="font-display text-sm font-semibold leading-tight">{area}</div>
                <div className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-wide opacity-80">
                  {counts.get(area)} school{counts.get(area) === 1 ? "" : "s"}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
