<script lang="ts">
  import { ExternalLink } from '@lucide/svelte';
  import { certificates } from '$lib/data';

  let { data } = $props();
</script>

<section class="mx-auto max-w-6xl px-4 py-14">
  <div class="mb-8 max-w-2xl">
    <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">{data.siteContent.certificates.eyebrow}</p>
    <h1 class="mt-3 text-4xl font-bold text-[#17211c]">{data.siteContent.certificates.title}</h1>
  </div>
  <div class="grid gap-5 md:grid-cols-3">
    {#each certificates as certificate}
      <article class="overflow-hidden rounded-lg border border-[#d9ded3] bg-white shadow-sm">
        <img class="h-44 w-full object-cover" src={certificate.image_url} alt={certificate.title} />
        <div class="space-y-3 p-5">
          <p class="text-sm font-semibold text-[#2f6f63]">{certificate.issuer}</p>
          <h2 class="text-xl font-semibold text-[#17211c]">{certificate.title}</h2>
          <p class="text-sm text-[#526158]">{certificate.issue_date}</p>
          <a class="inline-flex items-center gap-2 text-sm font-semibold text-[#b45836]" href={certificate.credential_url}>
            {data.siteContent.certificates.credential_label} <ExternalLink size={14} />
          </a>
        </div>
      </article>
    {/each}
  </div>
</section>
