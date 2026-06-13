import { error, fail } from '@sveltejs/kit';
import { projects } from '$lib/data';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import { formEntries, projectSchema } from '$lib/utils/validation';

export function load({ params }) {
  const project = projects.find((item) => item.id === params.id);
  if (!project) throw error(404, 'Project not found');
  return { project };
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
  }
};
