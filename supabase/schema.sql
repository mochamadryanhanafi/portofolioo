create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  headline text not null,
  bio text not null,
  cv_url text default '',
  github_url text default '',
  linkedin_url text default '',
  email text not null
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_description text not null,
  content text not null,
  category text not null,
  cover_image text default '',
  github_url text default '',
  demo_url text default '',
  video_url text default '',
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  image_url text not null,
  caption text default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text not null,
  cover_image text default '',
  category text not null,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists certificates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  issuer text not null,
  issue_date date not null,
  credential_url text default '',
  image_url text default '',
  created_at timestamptz not null default now()
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists site_content (
  id text primary key default 'main',
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table profiles enable row level security;
alter table projects enable row level security;
alter table project_images enable row level security;
alter table posts enable row level security;
alter table certificates enable row level security;
alter table contact_messages enable row level security;
alter table site_content enable row level security;

create policy "Public published projects"
  on projects for select
  using (status = 'published');

create policy "Public project images"
  on project_images for select
  using (
    exists (
      select 1 from projects
      where projects.id = project_images.project_id
      and projects.status = 'published'
    )
  );

create policy "Public published posts"
  on posts for select
  using (status = 'published');

create policy "Public certificates"
  on certificates for select
  using (true);

create policy "Public profile"
  on profiles for select
  using (true);

create policy "Public site content"
  on site_content for select
  using (true);
