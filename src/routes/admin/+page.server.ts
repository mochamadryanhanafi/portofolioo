import { createSupabaseAdminClient } from '$lib/server/supabase';

export async function load() {
  const supabase = createSupabaseAdminClient();
  let projectsCount = 0;
  let publishedProjectsCount = 0;
  let postsCount = 0;
  let certificatesCount = 0;
  let unreadMessagesCount = 0;

  if (supabase) {
    const [
      { count: projectsTotal },
      { count: projectsPublished },
      { count: postsTotal },
      { count: certsTotal },
      { count: unreadMsg }
    ] = await Promise.all([
      supabase.from('projects').select('*', { count: 'exact', head: true }),
      supabase.from('projects').select('*', { count: 'exact', head: true }).eq('status', 'published'),
      supabase.from('posts').select('*', { count: 'exact', head: true }),
      supabase.from('certificates').select('*', { count: 'exact', head: true }),
      supabase.from('contact_messages').select('*', { count: 'exact', head: true }).eq('is_read', false)
    ]);
    projectsCount = projectsTotal || 0;
    publishedProjectsCount = projectsPublished || 0;
    postsCount = postsTotal || 0;
    certificatesCount = certsTotal || 0;
    unreadMessagesCount = unreadMsg || 0;
  }

  return {
    stats: [
      { label: 'Projects', value: projectsCount },
      { label: 'Published', value: publishedProjectsCount },
      { label: 'Posts', value: postsCount },
      { label: 'Certificates', value: certificatesCount },
      { label: 'Unread messages', value: unreadMessagesCount }
    ]
  };
}
