import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import type { Cookies } from '@sveltejs/kit';

const supabaseUrl = publicEnv.PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = publicEnv.PUBLIC_SUPABASE_ANON_KEY ?? '';
const supabaseServiceRoleKey = privateEnv.SUPABASE_SERVICE_ROLE_KEY ?? '';

export const supabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export function createSupabaseServerClient(cookies: Cookies) {
  if (!supabaseConfigured) return null;

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
  if (!supabaseUrl || !supabaseServiceRoleKey) return null;
  return createClient(supabaseUrl, supabaseServiceRoleKey);
}
