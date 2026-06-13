import { certificates, posts, profile, projects, skills } from '$lib/data';

export function load() {
  return {
    profile,
    skills,
    featuredProjects: projects.filter((project) => project.status === 'published' && project.featured),
    posts: posts.filter((post) => post.status === 'published').slice(0, 3),
    certificates: certificates.slice(0, 3)
  };
}
