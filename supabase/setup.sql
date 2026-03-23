create extension if not exists pgcrypto;

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  goal text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

create policy "Allow service role full access to inquiries"
  on public.inquiries
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
