import { error } from '@sveltejs/kit';
import { createSupabaseAdminClient } from '$lib/server/supabase';
export async function load({ params }) {
  const supabase = createSupabaseAdminClient();
  let post = null;
  if (supabase) {
    const { data } = await supabase.from('posts').select('*').eq('slug', params.slug).eq('status', 'published').single();
    if (data) post = data;
  }
  if (!post) throw error(404, 'Post not found');
  return { post };
}