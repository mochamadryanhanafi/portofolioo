import { error } from '@sveltejs/kit';
import { createSupabaseAdminClient } from '$lib/server/supabase';
export async function load({ params }) {
  const supabase = createSupabaseAdminClient();
  let project = null, projectImages = [];
  if (supabase) {
    const { data: p } = await supabase.from('projects').select('*').eq('slug', params.slug).eq('status', 'published').single();
    if (p) {
      project = p;
      const { data: i } = await supabase.from('project_images').select('*').eq('project_id', p.id).order('sort_order');
      if (i) projectImages = i;
    }
  }
  if (!project) throw error(404, 'Project not found');
  return { project, images: projectImages };
}