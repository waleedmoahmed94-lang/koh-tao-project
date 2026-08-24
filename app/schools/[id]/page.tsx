import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { getSchool } from "@/lib/schools";
import { avatarColors, initials } from "@/lib/avatar";

type Props = { params: Promise<{ id: string }> };

const Fact = ({ label, value }: { label: string; value: string | null }) => (
  <div className="flex gap-3 border-b border-line-soft py-3 last:border-b-0">
    <span className="w-28 flex-shrink-0 font-mono text-xs uppercase tracking-wide text-ink-faint">
      {label}
    </span>
    <span className={value ? "text-ink" : "italic text-ink-faint"}>{value ?? "Not confirmed yet"}</span>
  </div>
);

export default async function SchoolPage({ params }: Props) {
  const { id } = await params;
  const school = await getSchool(id);
  if (!school) notFound();

  const [c1, c2] = avatarColors(school.name);

  return (
    <div className="flex flex-1 flex-col">
      <Nav />

      <main className="flex-1 px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <Link href="/" className="font-mono text-xs text-ink-faint hover:text-ink-soft">
            ← All schools
          </Link>

          <div className="mt-4 flex items-start gap-4">
            <div
              className="flex h-16 w-16 flex-shrink-0 items-center justify-center font-display text-xl font-semibold text-white"
              style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
            >
              {initials(school.name)}
            </div>
            <div>
              <h1 className="font-display text-2xl font-semibold leading-tight">{school.name}</h1>
              {school.agency && (
                <span className="mt-1.5 inline-block bg-accent-soft px-1.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-wide text-accent-deep">
                  {school.agency}
                </span>
              )}
              <div className="mt-1 text-sm text-ink-faint">{school.area}</div>
            </div>
          </div>

          {school.summary && <p className="mt-5 text-ink-soft">{school.summary}</p>}

          <div className="mt-8 border border-line bg-surface p-5">
            <Fact label="Price" value={school.priceInfo} />
            <Fact label="Language" value={school.languages?.join(", ") ?? null} />
            <Fact label="Group size" value={school.groupSize} />
            <Fact label="Phone" value={school.contactPhone} />
            <Fact label="Email" value={school.contactEmail} />
            <Fact label="Address" value={school.address} />
            <Fact label="Hours" value={school.openingHours} />
          </div>

          {school.specialties && school.specialties.length > 0 && (
            <div className="mt-6">
              <h2 className="font-mono text-xs uppercase tracking-wide text-ink-faint">Specialties</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {school.specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-accent-soft px-2 py-1 font-mono text-xs text-accent-deep"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {school.courses && school.courses.length > 0 && (
            <div className="mt-6">
              <h2 className="font-mono text-xs uppercase tracking-wide text-ink-faint">Courses</h2>
              <div className="mt-2 border border-line bg-surface">
                {school.courses.map((course, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 border-b border-line-soft px-4 py-2.5 text-sm last:border-b-0"
                  >
                    <span>{course.name}</span>
                    <span className="flex-shrink-0 font-mono text-ink-soft">{course.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={school.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent px-4 py-2.5 font-mono text-sm text-bg transition-colors hover:bg-accent-deep"
            >
              Visit {school.name.split(" ")[0]}&apos;s website ↗
            </a>
            {school.socialLinks?.instagram && (
              <a
                href={school.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-ink-faint hover:text-ink-soft"
              >
                Instagram ↗
              </a>
            )}
            {school.socialLinks?.facebook && (
              <a
                href={school.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-ink-faint hover:text-ink-soft"
              >
                Facebook ↗
              </a>
            )}
            {school.socialLinks?.tripadvisor && (
              <a
                href={school.socialLinks.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-ink-faint hover:text-ink-soft"
              >
                TripAdvisor ↗
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
