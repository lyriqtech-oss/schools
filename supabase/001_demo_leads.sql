create table if not exists public.demo_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 100),
  institution text not null check (char_length(institution) between 2 and 150),
  email text not null,
  phone text not null,
  student_count text not null check (student_count in ('até 200','201 a 500','501 a 1000','mais de 1000')),
  message text
);
create index if not exists demo_leads_created_at_idx on public.demo_leads(created_at desc);
alter table public.demo_leads enable row level security;
revoke all on public.demo_leads from anon, authenticated;
