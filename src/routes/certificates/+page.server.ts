import { createSupabaseAdminClient } from '$lib/server/supabase';
export async function load() {
  const supabase = createSupabaseAdminClient();
  let certificates = [];
  if (supabase) {
    const { data } = await supabase.from('certificates').select('*').order('created_at', { ascending: false });
    if (data) certificates = data;
  }
  return { certificates };
}