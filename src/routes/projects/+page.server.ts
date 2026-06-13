import { projects } from '$lib/data';

export function load() {
  return {
    projects: projects.filter((project) => project.status === 'published')
  };
}
