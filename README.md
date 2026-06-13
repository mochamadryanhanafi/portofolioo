# Porto Web

SvelteKit + TypeScript portfolio scaffold with Tailwind CSS, Supabase-ready server actions, admin routes, and Vercel deployment config.

## Run

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and fill these values when you are ready to connect Supabase:

```bash
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Without Supabase credentials, the app runs in demo mode with seed data from `src/lib/data.ts`.

## Routes

- Public: `/`, `/about`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/certificates`, `/contact`
- Admin: `/login`, `/admin`, `/admin/projects`, `/admin/projects/new`, `/admin/projects/[id]/edit`, `/admin/blog`, `/admin/certificates`, `/admin/messages`

## Supabase

Run `supabase/schema.sql` in the Supabase SQL editor, create an admin user in Supabase Auth, then configure the environment variables above. Server actions use Zod validation and will write to Supabase when credentials are present.
