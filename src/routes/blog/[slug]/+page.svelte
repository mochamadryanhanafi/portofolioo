<script lang="ts">
  let { data } = $props();
</script>

<article class="mx-auto max-w-3xl px-4 py-14">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">{data.post.category}</p>
  <h1 class="mt-3 text-4xl font-bold text-[#17211c]">{data.post.title}</h1>
  <img class="mt-8 aspect-[16/9] w-full rounded-lg object-cover shadow-sm" src={data.post.cover_image} alt={data.post.title} />
  <p class="mt-8 text-lg leading-8 text-[#42514a]">{data.post.content}</p>
</article>
