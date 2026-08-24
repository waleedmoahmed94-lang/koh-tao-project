create table if not exists schools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  agency text,
  area text not null,
  website text not null,
  price_info text,
  languages text[],
  group_size text,
  created_at timestamptz not null default now()
);

create table if not exists daily_plans (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references schools(id) on delete cascade,
  plan_date date not null,
  site text not null,
  boat_time text not null,
  spots_status text not null,
  created_at timestamptz not null default now()
);

create index if not exists daily_plans_school_id_idx on daily_plans(school_id);
create index if not exists daily_plans_plan_date_idx on daily_plans(plan_date);
