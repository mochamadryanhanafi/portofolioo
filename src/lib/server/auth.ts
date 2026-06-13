import { redirect, type Cookies } from '@sveltejs/kit';
import { createSupabaseServerClient } from '$lib/server/supabase';

export async function getSession(cookies: Cookies) {
  const supabase = createSupabaseServerClient(cookies);
  if (!supabase) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;
  return data.user;
}

export async function requireAdmin(cookies: Cookies) {
  const session = await getSession(cookies);
  if (!session) throw redirect(303, '/login');
  return { session };
}
