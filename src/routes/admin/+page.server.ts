import { certificates, contactMessages, posts, projects } from '$lib/data';

export function load() {
  return {
    stats: [
      { label: 'Projects', value: projects.length },
      { label: 'Published', value: projects.filter((project) => project.status === 'published').length },
      { label: 'Posts', value: posts.length },
      { label: 'Certificates', value: certificates.length },
      { label: 'Unread messages', value: contactMessages.filter((message) => !message.is_read).length }
    ]
  };
}
