<script lang="ts">
  import { ExternalLink, GitBranch } from '@lucide/svelte';
  import { fadeUp } from '$lib/actions/fade-up';

  let { data } = $props();
  let project = $derived(data.project);
</script>

<article use:fadeUp class="mx-auto max-w-5xl px-4 py-14">
  <div class="mb-8">
    <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">{project.category}</p>
    <h1 class="mt-3 text-4xl font-bold text-[#17211c]">{project.title}</h1>
    <p class="mt-4 max-w-3xl text-lg leading-8 text-[#526158]">{project.short_description}</p>
    <div class="mt-6 flex gap-3">
      {#if project.github_url && project.github_url.length > 5}
        <a class="focus-ring inline-flex items-center gap-2 rounded-md border border-[#cad3c6] px-4 py-2 font-semibold hover:bg-[#ecf0e8]" href={project.github_url}>
          <GitBranch size={16} /> GitHub
        </a>
      {/if}
      {#if project.demo_url && project.demo_url.length > 5}
        <a class="focus-ring inline-flex items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]" href={project.demo_url}>
          <ExternalLink size={16} /> Demo
        </a>
      {/if}
    </div>
  </div>
  {#if project.cover_image}
    <img class="aspect-[16/9] w-full rounded-lg object-cover shadow-sm" src={project.cover_image} alt={project.title} loading="lazy" decoding="async" />
  {/if}
  <div class="prose prose-neutral mt-8 max-w-none whitespace-pre-wrap">
    <p class="text-lg leading-8 text-[#42514a]">{project.content}</p>
  </div>
  {#if project.video_url && project.video_url.length > 5 && project.video_url !== 'null'}
    <iframe class="mt-8 aspect-video w-full rounded-lg border border-[#d9ded3]" src={project.video_url} title={`${project.title} video`} allowfullscreen></iframe>
  {/if}
  {#if data.images.length}
    <div class="mt-8 grid gap-5 md:grid-cols-2">
      {#each data.images as image}
        <figure use:fadeUp class="overflow-hidden rounded-lg border border-[#d9ded3] bg-white">
          <img class="h-64 w-full object-cover" src={image.image_url} alt={image.caption} loading="lazy" decoding="async" />
          <figcaption class="p-4 text-sm text-[#526158]">{image.caption}</figcaption>
        </figure>
      {/each}
    </div>
  {/if}
</article>
