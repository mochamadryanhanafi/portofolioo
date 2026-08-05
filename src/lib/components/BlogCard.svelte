<script lang="ts">
  import type { Post } from '$lib/types';

  export let post: Post;
</script>

<article class="overflow-hidden rounded-lg border border-[#d9ded3] bg-white shadow-sm">
  {#if post.cover_image}
    <img class="h-44 w-full object-cover" src={post.cover_image} alt={post.title} />
  {/if}
  <div class="space-y-3 p-5">
    <span class="text-xs font-semibold uppercase tracking-wide text-[#2f6f63]">{post.category}</span>
    <h3 class="text-xl font-semibold text-[#17211c]">{post.title}</h3>
    <p class="line-clamp-3 text-sm leading-6 text-[#526158]">{post.content}</p>
    <a class="inline-flex text-sm font-semibold text-[#b45836]" href={`/blog/${post.slug}`}>Read write-up</a>
  </div>
</article>
