"use client";

import { useEffect, useMemo, useState } from "react";
import type { School } from "@/types";
import { SchoolCard } from "@/components/SchoolCard";
import { AREA_SELECT_EVENT } from "@/components/AreaExplorer";
import { primaryAgency } from "@/lib/agency";
import { canonicalArea, AREA_ORDER, type AreaKey } from "@/lib/area";
import { extractMinPrice } from "@/lib/price";

type Props = { schools: School[] };

type SortKey = "price-asc" | "price-desc" | "name-asc";

const SORT_LABELS: Record<SortKey, string> = {
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
  "name-asc": "Name: A to Z",
};

export const DirectoryView = ({ schools }: Props) => {
  const [query, setQuery] = useState("");
  const [agency, setAgency] = useState<string>("All");
  const [area, setArea] = useState<string>(() =>
    typeof window === "undefined" ? "All" : new URLSearchParams(window.location.search).get("area") ?? "All"
  );
  const [sort, setSort] = useState<SortKey>("price-asc");

  useEffect(() => {
    const onAreaSelect = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setArea(detail);
    };
    window.addEventListener(AREA_SELECT_EVENT, onAreaSelect);
    return () => window.removeEventListener(AREA_SELECT_EVENT, onAreaSelect);
  }, []);

  const agencyCounts = useMemo(() => {
    const counts = new Map<string, number>();
    schools.forEach((s) => {
      const key = primaryAgency(s.agency);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    });
    const order = ["PADI", "SSI", "RAID", "Other", "Unconfirmed"];
    const present = order.filter((key) => counts.has(key)).map((key) => [key, counts.get(key)!] as const);
    return [["All", schools.length] as const, ...present];
  }, [schools]);

  const areaCounts = useMemo(() => {
    const counts = new Map<AreaKey, number>();
    schools.forEach((s) => {
      const key = canonicalArea(s.area);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    });
    const present = AREA_ORDER.filter((key) => counts.has(key)).map((key) => [key, counts.get(key)!] as const);
    return [["All", schools.length] as const, ...present];
  }, [schools]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = schools.filter((school) => {
      const matchesQuery =
        q === "" ||
        school.name.toLowerCase().includes(q) ||
        school.area.toLowerCase().includes(q);
      const matchesAgency = agency === "All" || primaryAgency(school.agency) === agency;
      const matchesArea = area === "All" || canonicalArea(school.area) === area;
      return matchesQuery && matchesAgency && matchesArea;
    });

    const withPrice = result.map((school) => ({ school, price: extractMinPrice(school.priceInfo) }));
    withPrice.sort((a, b) => {
      if (sort === "name-asc") return a.school.name.localeCompare(b.school.name);
      const aPrice = a.price ?? Infinity;
      const bPrice = b.price ?? Infinity;
      return sort === "price-asc" ? aPrice - bPrice : bPrice - aPrice;
    });
    return withPrice.map((w) => w.school);
  }, [schools, query, agency, area, sort]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by school name or area..."
          className="w-full max-w-sm border border-line bg-surface px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
        />
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-mono text-xs text-ink-faint">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-line bg-surface px-2.5 py-2 font-mono text-xs text-ink focus:border-accent focus:outline-none"
          >
            {Object.entries(SORT_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[220px_1fr]">
        <div className="flex flex-col gap-4 lg:sticky lg:top-20">
          <div>
            <div className="mb-1.5 font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">
              Area
            </div>
            <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1.5">
              {areaCounts.map(([a, count]) => (
                <button
                  key={a}
                  onClick={() => setArea(a)}
                  className={`flex items-center justify-between gap-3 border px-3 py-1.5 text-left font-mono text-xs transition-colors lg:w-full ${
                    area === a
                      ? "border-accent bg-accent-soft text-accent-deep"
                      : "border-line text-ink-soft hover:border-ink-faint"
                  }`}
                >
                  <span>{a}</span>
                  <span className="opacity-60">{count}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-1.5 font-mono text-[0.68rem] uppercase tracking-wide text-ink-faint">
              Certifying agency
            </div>
            <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1.5">
              {agencyCounts.map(([a, count]) => (
                <button
                  key={a}
                  onClick={() => setAgency(a)}
                  className={`flex items-center justify-between gap-3 border px-3 py-1.5 text-left font-mono text-xs transition-colors lg:w-full ${
                    agency === a
                      ? "border-accent bg-accent-soft text-accent-deep"
                      : "border-line text-ink-soft hover:border-ink-faint"
                  }`}
                >
                  <span>{a}</span>
                  <span className="opacity-60">{count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 font-mono text-xs text-ink-faint">
            {filtered.length} of {schools.length} schools
          </div>
          <div className="flex flex-col gap-3">
            {filtered.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
            {filtered.length === 0 && (
              <div className="border border-dashed border-line p-6 text-center text-sm text-ink-faint">
                No schools match that search.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
