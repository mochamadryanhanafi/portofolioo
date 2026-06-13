import { fail } from '@sveltejs/kit';
import { posts } from '$lib/data';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import { formEntries, postSchema } from '$lib/utils/validation';

export function load() {
  return { posts };
}

export const actions = {
  save: async ({ request }) => {
    const parsed = postSchema.safeParse(formEntries(await request.formData()));
    if (!parsed.success) return fail(400, { error: 'Post data is incomplete.' });
    const supabase = createSupabaseAdminClient();
    if (supabase) {
      const { error } = await supabase.from('posts').upsert(parsed.data, { onConflict: 'slug' });
      if (error) return fail(500, { error: error.message });
    }
    return { success: true };
  }
};
