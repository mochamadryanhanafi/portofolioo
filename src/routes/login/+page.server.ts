import { fail, redirect } from '@sveltejs/kit';
import { createSupabaseServerClient, supabaseConfigured } from '$lib/server/supabase';
import { getSession } from '$lib/server/auth';

export async function load({ cookies }) {
  const session = await getSession(cookies);
  if (session) throw redirect(303, '/admin');

  return {
    configured: supabaseConfigured
  };
}

export const actions = {
  default: async ({ request, cookies }) => {
    if (!supabaseConfigured) return fail(500, { error: 'Supabase belum dikonfigurasi.' });

    const formData = await request.formData();
    const email = String(formData.get('email') ?? '');
    const password = String(formData.get('password') ?? '');
    const supabase = createSupabaseServerClient(cookies);

    const { error } = await supabase!.auth.signInWithPassword({ email, password });
    if (error) return fail(400, { error: error.message });

    throw redirect(303, '/admin');
  }
};
