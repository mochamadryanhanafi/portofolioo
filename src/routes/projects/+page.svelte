<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  let { data } = $props();
</script>

<section class="mx-auto max-w-6xl px-4 py-14">
  <div class="mb-8 max-w-2xl">
    <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">{data.siteContent.projects.eyebrow}</p>
    <h1 class="mt-3 text-4xl font-bold text-[#17211c]">{data.siteContent.projects.title}</h1>
  </div>
  <div class="grid gap-5 md:grid-cols-2">
    {#each data.projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>
