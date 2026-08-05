import { createSupabaseAdminClient } from '$lib/server/supabase';
export async function load() {
  const supabase = createSupabaseAdminClient();
  let posts = [];
  if (supabase) {
    const { data } = await supabase.from('posts').select('*').eq('status', 'published').order('created_at', { ascending: false });
    if (data) posts = data;
  }
  return { posts };
}