# Koh Tao Dive Directory

A comparison directory and daily dive-plan board for Koh Tao's dive schools — so a tourist can pick a school by price, language, and agency, and see where each school is actually diving tomorrow, all in one place.

Two reference mockups guided the design and data model:
- [Strategic briefing](https://claude.ai/code/artifact/dc66b6cf-eb57-424b-b9cc-859f156269f1) — why the gap is real, build plan, legal notes
- [Prototype directory](https://claude.ai/code/artifact/5881e3b8-0e24-40df-8316-459a0f00e1c5) — the seven-school layout this app is built from

## Status

Live and wired up to Supabase: 43 Koh Tao dive schools with price, agency, languages, courses, contact info, and social links, browsable by area or filtered by certifying agency, with a per-school profile page. The "tomorrow's dive plan" board is built but not yet fed by any school (no schools are onboarded to submit daily plans yet).

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript (strict)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com) (Postgres) for schools + daily dive-plan data
- [Vercel](https://vercel.com) for hosting/deploys

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Connecting a database

1. Create a free project at [supabase.com](https://supabase.com).
2. Copy `.env.example` to `.env.local` and fill in your project's URL, anon key, and service role key (Project Settings → API).
3. Run the migrations in `supabase/migrations/` in order (0001 creates `schools`/`daily_plans`, 0002 adds public read access, 0003 adds the courses/contact/social columns) in the Supabase SQL editor.
4. Run `supabase/seed.sql` to load the 43 researched Koh Tao schools. Several fields are intentionally `NULL` — that's a real data gap to confirm with each school, not a placeholder.
5. `supabase/school_details.json` has the richer per-school data (courses, contact info, specialties, social links) researched from each school's own site; it's loaded into the `schools` table separately from `seed.sql` since it targets columns added in migration 0003.

## Deploying

Deployed via [Vercel](https://vercel.com) — connect the repo in the Vercel dashboard (or `vercel deploy` via the CLI), and set the same environment variables from `.env.local` in the project's settings.
