import { createSupabaseAdminClient } from '$lib/server/supabase';
export async function load() {
  const supabase = createSupabaseAdminClient();
  let projects = [];
  if (supabase) {
    const { data } = await supabase.from('projects').select('*').eq('status', 'published').order('created_at', { ascending: false });
    if (data) projects = data;
  }
  return { projects };
}