alter table schools
  add column if not exists summary text,
  add column if not exists courses jsonb,
  add column if not exists specialties text[],
  add column if not exists contact_phone text,
  add column if not exists contact_email text,
  add column if not exists address text,
  add column if not exists opening_hours text,
  add column if not exists social_links jsonb;
