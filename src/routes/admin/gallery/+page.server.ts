import { fail } from '@sveltejs/kit';
import { getAllGalleryImages } from '$lib/server/gallery';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import { formEntries, galleryImageSchema } from '$lib/utils/validation';

export async function load() {
  return {
    galleryImages: await getAllGalleryImages()
  };
}

export const actions = {
  save: async ({ request }) => {
    const parsed = galleryImageSchema.safeParse(formEntries(await request.formData()));
    if (!parsed.success) return fail(400, { error: 'Gallery data is incomplete.' });

    const supabase = createSupabaseAdminClient();
    if (!supabase) return fail(500, { error: 'Supabase belum dikonfigurasi.' });

    const { error } = await supabase.from('gallery_images').insert(parsed.data);
    if (error) return fail(500, { error: error.message });

    return { success: true };
  },
  delete: async ({ request }) => {
    const id = String((await request.formData()).get('id') ?? '');
    const supabase = createSupabaseAdminClient();
    if (!supabase) return fail(500, { error: 'Supabase belum dikonfigurasi.' });

    const { error } = await supabase.from('gallery_images').delete().eq('id', id);
    if (error) return fail(500, { error: error.message });

    return { success: true };
  }
};
