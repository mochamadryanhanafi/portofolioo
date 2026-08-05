<script lang="ts">
  import { ArrowUpRight, GitBranch } from '@lucide/svelte';
  import type { Project } from '$lib/types';

  export let project: Project;
</script>

<article class="overflow-hidden rounded-lg border border-[#d9ded3] bg-white shadow-sm">
  <a href={`/projects/${project.slug}`}>
    {#if project.cover_image}
      <img class="h-52 w-full object-cover" src={project.cover_image} alt={project.title} />
    {/if}
  </a>
  <div class="space-y-4 p-5">
    <div class="flex items-center justify-between gap-3">
      <span class="rounded-md bg-[#e7efe5] px-2 py-1 text-xs font-medium text-[#2f6f63]">{project.category}</span>
      {#if project.featured}
        <span class="text-xs font-medium text-[#b45836]">Featured</span>
      {/if}
    </div>
    <div>
      <h3 class="text-xl font-semibold text-[#17211c]">{project.title}</h3>
      <p class="mt-2 text-sm leading-6 text-[#526158]">{project.short_description}</p>
    </div>
    <div class="flex items-center gap-2">
      <a class="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#cad3c6] hover:bg-[#ecf0e8]" href={project.github_url} aria-label="GitHub">
        <GitBranch size={16} />
      </a>
      <a class="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#cad3c6] hover:bg-[#ecf0e8]" href={`/projects/${project.slug}`} aria-label="Project detail">
        <ArrowUpRight size={16} />
      </a>
    </div>
  </div>
</article>
