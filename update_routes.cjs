const fs = require('fs');
const path = require('path');

// routes/projects/+page.server.ts
fs.writeFileSync('src/routes/projects/+page.server.ts', `import { createSupabaseAdminClient } from '$lib/server/supabase';
export async function load() {
  const supabase = createSupabaseAdminClient();
  let projects = [];
  if (supabase) {
    const { data } = await supabase.from('projects').select('*').eq('status', 'published').order('created_at', { ascending: false });
    if (data) projects = data;
  }
  return { projects };
}`);

// routes/projects/[slug]/+page.server.ts
fs.writeFileSync('src/routes/projects/[slug]/+page.server.ts', `import { error } from '@sveltejs/kit';
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
  return { project, projectImages };
}`);

// routes/blog/+page.server.ts
fs.writeFileSync('src/routes/blog/+page.server.ts', `import { createSupabaseAdminClient } from '$lib/server/supabase';
export async function load() {
  const supabase = createSupabaseAdminClient();
  let posts = [];
  if (supabase) {
    const { data } = await supabase.from('posts').select('*').eq('status', 'published').order('created_at', { ascending: false });
    if (data) posts = data;
  }
  return { posts };
}`);

// routes/blog/[slug]/+page.server.ts
fs.writeFileSync('src/routes/blog/[slug]/+page.server.ts', `import { error } from '@sveltejs/kit';
import { createSupabaseAdminClient } from '$lib/server/supabase';
export async function load({ params }) {
  const supabase = createSupabaseAdminClient();
  let post = null;
  if (supabase) {
    const { data } = await supabase.from('posts').select('*').eq('slug', params.slug).eq('status', 'published').single();
    if (data) post = data;
  }
  if (!post) throw error(404, 'Post not found');
  return { post };
}`);

// routes/certificates/+page.server.ts
fs.writeFileSync('src/routes/certificates/+page.server.ts', `import { createSupabaseAdminClient } from '$lib/server/supabase';
export async function load() {
  const supabase = createSupabaseAdminClient();
  let certificates = [];
  if (supabase) {
    const { data } = await supabase.from('certificates').select('*').order('created_at', { ascending: false });
    if (data) certificates = data;
  }
  return { certificates };
}`);

// routes/+page.server.ts (home)
fs.writeFileSync('src/routes/+page.server.ts', `import { createSupabaseAdminClient } from '$lib/server/supabase';
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
}`);

// Update lib/server/gallery.ts to not fallback to dummy data if not found, just return empty array
let gal = fs.readFileSync('src/lib/server/gallery.ts', 'utf8');
gal = gal.replace(/if \(error \|\| !data\?\.length\) return galleryImages;/g, 'if (error) return [];');
gal = gal.replace(/if \(error\) return galleryImages;/g, 'if (error) return [];');
fs.writeFileSync('src/lib/server/gallery.ts', gal);

// Update lib/server/site-content.ts to not fallback to dummy content if error (well, site-content should fallback to default so we don't get blank navs)
// Leave site-content as is because a blank nav is bad.

console.log("Updated public routes successfully.");
