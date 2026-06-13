import { fail } from '@sveltejs/kit';
import { certificates } from '$lib/data';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import { certificateSchema, formEntries } from '$lib/utils/validation';

export function load() {
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
