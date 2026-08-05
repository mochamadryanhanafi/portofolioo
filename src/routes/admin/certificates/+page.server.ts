import { fail } from '@sveltejs/kit';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import { certificateSchema, formEntries } from '$lib/utils/validation';

export async function load() {
  const supabase = createSupabaseAdminClient();
  let certificates = [];
  if (supabase) {
    const { data } = await supabase.from('certificates').select('*').order('created_at', { ascending: false });
    if (data) certificates = data;
  }
  return { certificates };
}

export const actions = {
  save: async ({ request }) => {
    const parsed = certificateSchema.safeParse(formEntries(await request.formData()));
    if (!parsed.success) return fail(400, { error: 'Certificate data is incomplete.' });
    const supabase = createSupabaseAdminClient();
    if (supabase) {
      const { error } = await supabase.from('certificates').insert(parsed.data);
      if (error) return fail(500, { error: error.message });
    }
    return { success: true };
  }
};
