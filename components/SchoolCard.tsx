import Link from "next/link";
import type { School } from "@/types";
import { avatarColors, initials } from "@/lib/avatar";

type Props = { school: School };

export const SchoolCard = ({ school }: Props) => {
  const [c1, c2] = avatarColors(school.name);

  return (
    <div className="flex flex-col gap-4 border border-line bg-surface p-4 transition-all hover:border-accent hover:shadow-[0_4px_16px_-4px_rgba(15,122,130,0.2)] sm:flex-row sm:items-center sm:gap-5 sm:p-5">
      <div
        className="flex h-12 w-12 flex-shrink-0 items-center justify-center font-display text-lg font-semibold text-white"
        style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
      >
        {initials(school.name)}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-base font-semibold leading-tight">
            <Link href={`/schools/${school.id}`} className="hover:text-accent-deep">
              {school.name}
            </Link>
          </h3>
          {school.agency && (
            <span className="inline-block bg-accent-soft px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide text-accent-deep">
              {school.agency}
            </span>
          )}
        </div>
        <div className="mt-1 text-xs text-ink-faint">{school.area}</div>

        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
          <span>
            <span className="text-ink-faint">Language </span>
            {school.languages?.join(", ") ?? <span className="italic text-ink-faint">unconfirmed</span>}
          </span>
          <span>
            <span className="text-ink-faint">Group size </span>
            {school.groupSize ?? <span className="italic text-ink-faint">unconfirmed</span>}
          </span>
        </div>
      </div>

      <div className="flex flex-shrink-0 flex-row items-center justify-between gap-4 border-t border-line-soft pt-3 sm:flex-col sm:items-end sm:gap-1.5 sm:border-t-0 sm:pt-0 sm:text-right">
        <div>
          {school.priceInfo ? (
            <div className="font-display text-lg font-semibold text-accent-deep">{school.priceInfo}</div>
          ) : (
            <div className="text-sm italic text-ink-faint">Price unconfirmed</div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={school.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-faint hover:text-ink-soft"
          >
            Website ↗
          </a>
          <Link
            href={`/schools/${school.id}`}
            className="bg-accent px-3.5 py-2 font-mono text-xs text-bg transition-colors hover:bg-accent-deep"
          >
            View profile
          </Link>
        </div>
      </div>
    </div>
  );
};
