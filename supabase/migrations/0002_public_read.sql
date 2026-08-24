alter table schools enable row level security;
alter table daily_plans enable row level security;

create policy "Public read access" on schools
  for select using (true);

create policy "Public read access" on daily_plans
  for select using (true);
