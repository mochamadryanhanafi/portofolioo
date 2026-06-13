import { error } from '@sveltejs/kit';
import { posts } from '$lib/data';

export function load({ params }) {
  const post = posts.find((item) => item.slug === params.slug && item.status === 'published');
  if (!post) throw error(404, 'Post not found');
  return { post };
}
