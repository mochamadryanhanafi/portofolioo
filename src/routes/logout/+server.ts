import { redirect } from '@sveltejs/kit';
import { createSupabaseServerClient } from '$lib/server/supabase';

export async function POST({ cookies }) {
  const supabase = createSupabaseServerClient(cookies);
  if (supabase) await supabase.auth.signOut();

  throw redirect(303, '/login');
}
