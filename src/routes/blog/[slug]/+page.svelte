<script lang="ts">
  import { ArrowLeft, Calendar } from '@lucide/svelte';
  import { fadeUp } from '$lib/actions/fade-up';

  let { data } = $props();
</script>

<article use:fadeUp class="mx-auto max-w-3xl px-4 py-14">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">{data.post.category}</p>
  <h1 class="mt-3 text-4xl font-bold text-[#17211c]">{data.post.title}</h1>
  {#if data.post.cover_image}
    <img
      class="mt-8 aspect-video w-full rounded-lg object-cover shadow-sm"
      src={data.post.cover_image}
      alt={data.post.title}
      loading="lazy"
      decoding="async"
    />
  {/if}
  <p class="mt-8 whitespace-pre-wrap text-lg leading-8 text-[#42514a]">{data.post.content}</p>
</article>
