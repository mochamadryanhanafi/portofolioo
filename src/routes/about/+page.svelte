<script lang="ts">
  import { skills } from '$lib/data';

  let { data } = $props();
</script>

<section class="mx-auto max-w-4xl px-4 py-14">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">{data.siteContent.about.eyebrow}</p>
  <h1 class="mt-3 text-4xl font-bold text-[#17211c]">{data.siteContent.about.title}</h1>
  <div class="mt-6 space-y-5 text-lg leading-8 text-[#526158]">
    <p>{data.siteContent.about.body}</p>
    <p>{data.siteContent.about.secondary_body}</p>
  </div>
  <div class="mt-8 flex flex-wrap gap-3">
    {#each skills as skill}
      <span class="rounded-md border border-[#cad3c6] bg-white px-3 py-2 text-sm font-medium">{skill}</span>
    {/each}
  </div>
</section>
