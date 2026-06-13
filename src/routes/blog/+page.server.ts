import { posts } from '$lib/data';

export function load() {
  return { posts: posts.filter((post) => post.status === 'published') };
}
