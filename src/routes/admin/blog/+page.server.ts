import { fail } from '@sveltejs/kit';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import { formEntries, postSchema } from '$lib/utils/validation';

export async function load() {
  const supabase = createSupabaseAdminClient();
  let posts = [];
  if (supabase) {
    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
    if (data) posts = data;
  }
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
