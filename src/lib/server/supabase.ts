import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import type { Cookies } from '@sveltejs/kit';

// Read env inside functions (not module scope) — on Cloudflare Workers the
// module is evaluated once per isolate and may run before the request's
// AsyncLocalStorage context is available, which would cache empty values.
function getSupabaseUrl() {
  return publicEnv.PUBLIC_SUPABASE_URL ?? '';
}

function getSupabaseAnonKey() {
  return publicEnv.PUBLIC_SUPABASE_ANON_KEY ?? '';
}

function getSupabaseServiceRoleKey() {
  return privateEnv.SUPABASE_SERVICE_ROLE_KEY ?? '';
}

export function isSupabaseConfigured() {
  return Boolean(getSupabaseUrl() && getSupabaseAnonKey());
}

// Backwards-compatible constant for callers that only need a snapshot at
// import time (e.g. non-request contexts). Prefer isSupabaseConfigured().
export const supabaseConfigured = isSupabaseConfigured();

export function createSupabaseServerClient(cookies: Cookies) {
  const supabaseUrl = getSupabaseUrl();
  const supabaseAnonKey = getSupabaseAnonKey();
  if (!supabaseUrl || !supabaseAnonKey) return null;

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: () => cookies.getAll(),
      setAll: (
        cookiesToSet: Array<{
          name: string;
          value: string;
          options: Parameters<Cookies['set']>[2];
        }>
      ) => {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookies.set(name, value, { ...options, path: '/' });
        });
      }
    }
  });
}

export function createSupabaseAdminClient() {
  const supabaseUrl = getSupabaseUrl();
  const supabaseServiceRoleKey = getSupabaseServiceRoleKey();
  if (!supabaseUrl || !supabaseServiceRoleKey) return null;
  return createClient(supabaseUrl, supabaseServiceRoleKey);
}
