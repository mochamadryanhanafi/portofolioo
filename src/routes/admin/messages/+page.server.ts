import { createSupabaseAdminClient } from '$lib/server/supabase';

export async function load() {
  const supabase = createSupabaseAdminClient();
  let messages = [];
  if (supabase) {
    const { data } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
    if (data) messages = data;
  }
  return { messages };
}
