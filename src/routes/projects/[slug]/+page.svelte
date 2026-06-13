<script lang="ts">
  import { ExternalLink, GitBranch } from '@lucide/svelte';

  let { data } = $props();
</script>

<article class="mx-auto max-w-5xl px-4 py-14">
  <div class="mb-8">
    <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">{data.project.category}</p>
    <h1 class="mt-3 text-4xl font-bold text-[#17211c]">{data.project.title}</h1>
    <p class="mt-4 max-w-3xl text-lg leading-8 text-[#526158]">{data.project.short_description}</p>
    <div class="mt-6 flex gap-3">
      <a class="focus-ring inline-flex items-center gap-2 rounded-md border border-[#cad3c6] px-4 py-2 font-semibold hover:bg-[#ecf0e8]" href={data.project.github_url}>
        <GitBranch size={16} /> GitHub
      </a>
      <a class="focus-ring inline-flex items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]" href={data.project.demo_url}>
        <ExternalLink size={16} /> Demo
      </a>
    </div>
  </div>
  <img class="aspect-[16/9] w-full rounded-lg object-cover shadow-sm" src={data.project.cover_image} alt={data.project.title} />
  <div class="prose prose-neutral mt-8 max-w-none">
    <p class="text-lg leading-8 text-[#42514a]">{data.project.content}</p>
  </div>
  {#if data.project.video_url}
    <iframe class="mt-8 aspect-video w-full rounded-lg border border-[#d9ded3]" src={data.project.video_url} title={`${data.project.title} video`} allowfullscreen></iframe>
  {/if}
  {#if data.images.length}
    <div class="mt-8 grid gap-5 md:grid-cols-2">
      {#each data.images as image}
        <figure class="overflow-hidden rounded-lg border border-[#d9ded3] bg-white">
          <img class="h-64 w-full object-cover" src={image.image_url} alt={image.caption} />
          <figcaption class="p-4 text-sm text-[#526158]">{image.caption}</figcaption>
        </figure>
      {/each}
    </div>
  {/if}
</article>
