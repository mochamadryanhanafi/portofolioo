import { fail } from '@sveltejs/kit';
import { projects } from '$lib/data';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import { formEntries, projectSchema } from '$lib/utils/validation';

export function load() {
  return { projects };
}

export const actions = {
  delete: async ({ request }) => {
    const id = String((await request.formData()).get('id') ?? '');
    const supabase = createSupabaseAdminClient();
    if (supabase) {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) return fail(500, { error: error.message });
    }
    return { success: true };
  },
  save: async ({ request }) => {
    const parsed = projectSchema.safeParse(formEntries(await request.formData()));
    if (!parsed.success) return fail(400, { error: 'Project data is incomplete.' });
    const supabase = createSupabaseAdminClient();
    if (supabase) {
      const { error } = await supabase.from('projects').upsert(parsed.data, { onConflict: 'slug' });
      if (error) return fail(500, { error: error.message });
    }
    return { success: true };
  }
};
