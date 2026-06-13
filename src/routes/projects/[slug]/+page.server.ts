import { error } from '@sveltejs/kit';
import { projectImages, projects } from '$lib/data';

export function load({ params }) {
  const project = projects.find((item) => item.slug === params.slug && item.status === 'published');
  if (!project) throw error(404, 'Project not found');

  return {
    project,
    images: projectImages.filter((image) => image.project_id === project.id)
  };
}
