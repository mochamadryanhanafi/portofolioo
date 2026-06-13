import { defaultSiteContent } from '$lib/data';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import type { SiteContent } from '$lib/types';

function mergeContent(content: Partial<SiteContent> | null | undefined): SiteContent {
  return {
    ...defaultSiteContent,
    ...content,
    nav: { ...defaultSiteContent.nav, ...content?.nav },
    home: { ...defaultSiteContent.home, ...content?.home },
    about: { ...defaultSiteContent.about, ...content?.about },
    projects: { ...defaultSiteContent.projects, ...content?.projects },
    blog: { ...defaultSiteContent.blog, ...content?.blog },
    certificates: { ...defaultSiteContent.certificates, ...content?.certificates },
    contact: { ...defaultSiteContent.contact, ...content?.contact },
    footer: { ...defaultSiteContent.footer, ...content?.footer }
  };
}

export async function getSiteContent() {
  const supabase = createSupabaseAdminClient();
  if (!supabase) return defaultSiteContent;

  const { data, error } = await supabase
    .from('site_content')
    .select('content')
    .eq('id', 'main')
    .maybeSingle();

  if (error || !data?.content) return defaultSiteContent;

  return mergeContent(data.content as Partial<SiteContent>);
}

export async function saveSiteContent(content: SiteContent) {
  const supabase = createSupabaseAdminClient();
  if (!supabase) return { error: 'Supabase belum dikonfigurasi.' };

  const { error } = await supabase
    .from('site_content')
    .upsert({ id: 'main', content, updated_at: new Date().toISOString() });

  return { error: error?.message ?? null };
}
