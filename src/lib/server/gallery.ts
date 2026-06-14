import { galleryImages } from '$lib/data';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import type { GalleryImage } from '$lib/types';

export async function getGalleryImages() {
  const supabase = createSupabaseAdminClient();
  if (!supabase) return galleryImages;

  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .eq('status', 'published')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error || !data?.length) return galleryImages;
  return data as GalleryImage[];
}

export async function getAllGalleryImages() {
  const supabase = createSupabaseAdminClient();
  if (!supabase) return galleryImages;

  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) return galleryImages;
  return (data ?? []) as GalleryImage[];
}
