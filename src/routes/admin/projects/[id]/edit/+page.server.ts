import { error, fail } from '@sveltejs/kit';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import { formEntries, projectSchema } from '$lib/utils/validation';

export async function load({ params }) {
  const supabase = createSupabaseAdminClient();
  let project = null;
  let images = [];
  if (supabase) {
    const { data } = await supabase.from('projects').select('*').eq('id', params.id).single();
    if (data) project = data;

    const { data: i } = await supabase.from('project_images').select('*').eq('project_id', params.id).order('sort_order');
    if (i) images = i;
  }
  if (!project) throw error(404, 'Project not found');
  return { project, images };
}

export const actions = {
  save: async ({ request, params }) => {
    const parsed = projectSchema.safeParse(formEntries(await request.formData()));
    if (!parsed.success) return fail(400, { error: 'Project data is incomplete.' });

    const supabase = createSupabaseAdminClient();
    if (supabase) {
      const { error: updateError } = await supabase
        .from('projects')
        .update(parsed.data)
        .eq('id', params.id);
      if (updateError) return fail(500, { error: updateError.message });
    }

    return { success: true };
  },
  addImage: async ({ request, params }) => {
    const formData = await request.formData();
    const image_url = String(formData.get('image_url') ?? '');
    const caption = String(formData.get('caption') ?? '');
    const sort_order = Number(formData.get('sort_order') ?? 0);
    
    if (!image_url) return fail(400, { error: 'Image URL is required.' });
    
    const supabase = createSupabaseAdminClient();
    if (supabase) {
      const { error } = await supabase.from('project_images').insert({
        project_id: params.id,
        image_url,
        caption,
        sort_order
      });
      if (error) return fail(500, { error: error.message });
    }
    return { success: true };
  },
  deleteImage: async ({ request }) => {
    const formData = await request.formData();
    const id = String(formData.get('id') ?? '');
    
    const supabase = createSupabaseAdminClient();
    if (supabase) {
      const { error } = await supabase.from('project_images').delete().eq('id', id);
      if (error) return fail(500, { error: error.message });
    }
    return { success: true };
  }
};
