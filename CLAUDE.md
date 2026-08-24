@AGENTS.md

# Koh Tao Dive Directory

A comparison directory + daily dive-plan board for Koh Tao's ~80 dive schools. Full product rationale, competitor research, phased build plan, and Thailand legal notes live in the strategic briefing artifact (linked in README.md) — read that before making product/scope decisions, don't re-derive it.

## Status

Scaffold stage only. No UI has been built beyond the Next.js default page. Data model and seed data exist but aren't wired to a live Supabase project yet (that requires a manual Supabase signup — no Supabase MCP is available in this environment).

## Stack & conventions

- Next.js App Router, TypeScript strict, Tailwind CSS, bun (not npm/yarn/pnpm — always use `bun`/`bunx`)
- Functional components, named exports only (no default exports), `const` over `let`, no `any`
- Supabase client factory: `lib/supabase.ts` — throws a clear error if env vars are missing rather than failing silently
- Shared types in `types/index.ts` (`School`, `DailyPlan`) mirror the SQL schema in `supabase/migrations/0001_init.sql`

## Data model

- `schools`: name, agency, area, website, price_info, languages[], group_size — the comparison fields a tourist filters on
- `daily_plans`: school_id, plan_date, site, boat_time, spots_status — the "what's happening tomorrow" feed that's the retention hook (see briefing artifact for why this matters more than the comparison feature alone)

Seed data (`supabase/seed.sql`) has the 7 real schools Walid has relationships with: Davy Jones' Locker, Scuba Birds, Master Divers, Diverholics, Below Zero Divers, Nitro, Assava Dive Resort. Many fields are `NULL` deliberately — those are real data gaps to close with each school, not placeholders to invent values for.

## Deploying

Vercel MCP tools are available directly in this Claude session (no separate CLI login needed) — use those for deploys rather than instructing the user to run `vercel` manually.

