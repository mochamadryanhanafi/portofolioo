import { createSupabaseAdminClient } from '$lib/server/supabase';
import { getGalleryImages } from '$lib/server/gallery';
import { profile as defaultProfile, skills as defaultSkills } from '$lib/data';
export async function load() {
  const supabase = createSupabaseAdminClient();
  let featuredProjects = [], posts = [], certificates = [], profile = defaultProfile, skills = defaultSkills;
  if (supabase) {
    const [
      { data: proj },
      { data: p },
      { data: certs },
      { data: prof }
    ] = await Promise.all([
      supabase.from('projects').select('*').eq('status', 'published').eq('featured', true).order('created_at', { ascending: false }),
      supabase.from('posts').select('*').eq('status', 'published').order('created_at', { ascending: false }).limit(3),
      supabase.from('certificates').select('*').order('created_at', { ascending: false }).limit(3),
      supabase.from('profiles').select('*').limit(1).maybeSingle()
    ]);
    if (proj) featuredProjects = proj;
    if (p) posts = p;
    if (certs) certificates = certs;
    if (prof) profile = prof;
  }
  return { profile, skills, featuredProjects, galleryImages: await getGalleryImages(), posts, certificates };
}