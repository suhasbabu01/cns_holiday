-- ============================================================
-- CNS Holiday – bookings table + Row Level Security
-- Run this once in Supabase: Dashboard > SQL Editor > New query
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text not null,
  service text not null,
  message text,
  status text not null default 'pending'
    check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists bookings_created_at_idx
  on public.bookings (created_at desc);

create index if not exists bookings_status_idx
  on public.bookings (status);

-- Keep updated_at fresh on edits
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists bookings_set_updated_at on public.bookings;
create trigger bookings_set_updated_at
  before update on public.bookings
  for each row
  execute function public.set_updated_at();

-- ------------------------------------------------------------
-- Row Level Security
-- ------------------------------------------------------------
alter table public.bookings enable row level security;

-- Anyone (website visitors) may create a booking.
drop policy if exists "Anyone can create a booking" on public.bookings;
create policy "Anyone can create a booking"
  on public.bookings
  for insert
  to anon, authenticated
  with check (true);

-- Only signed-in users (the admin) may read, edit or delete.
-- Keep public sign-ups disabled so only your admin account can sign in.
drop policy if exists "Admins can read bookings" on public.bookings;
create policy "Admins can read bookings"
  on public.bookings
  for select
  to authenticated
  using (true);

drop policy if exists "Admins can update bookings" on public.bookings;
create policy "Admins can update bookings"
  on public.bookings
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Admins can delete bookings" on public.bookings;
create policy "Admins can delete bookings"
  on public.bookings
  for delete
  to authenticated
  using (true);

-- ============================================================
-- Photos gallery (Supabase Storage + database)
-- ============================================================

create table if not exists public.photos (
  id uuid primary key default gen_random_uuid(),
  album text not null default 'Latest',
  title text not null,
  caption text,
  image_url text not null,
  storage_path text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists photos_created_at_idx
  on public.photos (created_at desc);

create index if not exists photos_album_idx
  on public.photos (album);

alter table public.photos enable row level security;

-- Everyone can view the gallery.
drop policy if exists "Anyone can view photos" on public.photos;
create policy "Anyone can view photos"
  on public.photos
  for select
  to anon, authenticated
  using (true);

-- Only the signed-in admin can manage photos.
drop policy if exists "Admins can insert photos" on public.photos;
create policy "Admins can insert photos"
  on public.photos
  for insert
  to authenticated
  with check (true);

drop policy if exists "Admins can update photos" on public.photos;
create policy "Admins can update photos"
  on public.photos
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Admins can delete photos" on public.photos;
create policy "Admins can delete photos"
  on public.photos
  for delete
  to authenticated
  using (true);

-- ------------------------------------------------------------
-- Storage bucket for uploaded images
-- ------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'photos',
  'photos',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update set
  public = true,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Anyone can view photo files" on storage.objects;
create policy "Anyone can view photo files"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'photos');

drop policy if exists "Admins can upload photo files" on storage.objects;
create policy "Admins can upload photo files"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'photos');

drop policy if exists "Admins can update photo files" on storage.objects;
create policy "Admins can update photo files"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'photos')
  with check (bucket_id = 'photos');

drop policy if exists "Admins can delete photo files" on storage.objects;
create policy "Admins can delete photo files"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'photos');

-- ------------------------------------------------------------
-- Seed the gallery with the current website photos (only if empty).
-- These point at the bundled images; new uploads go to Supabase Storage.
-- ------------------------------------------------------------
insert into public.photos (album, title, caption, image_url, sort_order)
select v.album, v.title, v.caption, v.image_url, v.sort_order
from (values
  ('Latest', 'Force Urbania 15+1 Luxury - Front Profile', 'Official Force Urbania 15+1 luxury passenger van from our fleet - high roof, wide windshield, and aerodynamic front grille.', '/img/justdial/urbania-front.jpg', 1),
  ('Latest', 'Toyota Innova - KA 05 AS 9944', 'Commercial registered Toyota Innova (KA 05 AS 9944) - sanitized and ready for airport transfers and outstation tours.', '/img/justdial/innova-front.jpg', 2),
  ('Bus', 'Luxury Tourist Coach - Pushback Cabin', 'Spacious luxury bus interior with plush leather seats, personal armrests, and clean red carpet center aisle.', '/img/justdial/bus-interior.jpg', 3),
  ('Car', 'Innova Crysta - Captain Seats & Sunroof', 'Premium executive interior with dual captain seats, ambient roof lighting, and panoramic glass sunroof.', '/img/justdial/car-interior.jpg', 4),
  ('Urbania 15+1', 'Force Urbania 15+1 Luxury - Black Edition', 'Flagship Force Urbania 15+1 Luxury in gloss black with executive privacy glass and chrome accents.', '/img/fleet/urbania-luxury.jpg', 5),
  ('Tempo', 'Complete CNS Fleet Lineup', 'Our full in-house fleet: Innova Crysta, Tempo Traveller, and luxury tourist buses.', '/img/fleet/cns-fleet-lineup.jpg', 6)
) as v(album, title, caption, image_url, sort_order)
where not exists (select 1 from public.photos);