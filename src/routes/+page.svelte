<script lang="ts">
  import { ArrowRight, Download, Mail } from '@lucide/svelte';
  import BlogCard from '$lib/components/BlogCard.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { fadeUp } from '$lib/actions/fade-up';

  let { data } = $props();
</script>

<section use:fadeUp class="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-16">
  <div class="space-y-6">
    <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">{data.siteContent.home.eyebrow}</p>
    <div class="space-y-4">
      <h1 class="max-w-3xl text-4xl font-bold leading-tight text-[#17211c] md:text-6xl">{data.siteContent.home.title}</h1>
      <p class="max-w-2xl text-lg leading-8 text-[#526158]">{data.siteContent.home.headline}</p>
    </div>
    <div class="flex flex-wrap gap-3">
      <a class="focus-ring inline-flex items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-3 font-semibold text-white hover:bg-[#265a50]" href="/projects">
        {data.siteContent.home.primary_button} <ArrowRight size={18} />
      </a>
      <a class="focus-ring inline-flex items-center gap-2 rounded-md border border-[#cad3c6] px-4 py-3 font-semibold hover:bg-[#ecf0e8]" href={data.siteContent.home.cv_url}>
        <Download size={18} /> CV
      </a>
      <a class="focus-ring inline-flex items-center gap-2 rounded-md border border-[#cad3c6] px-4 py-3 font-semibold hover:bg-[#ecf0e8]" href="/contact">
        <Mail size={18} /> {data.siteContent.home.contact_button}
      </a>
    </div>
  </div>
  {#if data.siteContent.home.hero_image}
    <img
      class="w-full h-auto object-contain drop-shadow-xl"
      src={data.siteContent.home.hero_image}
      alt={data.siteContent.home.hero_image_alt}
      loading="lazy"
      decoding="async"
    />
  {/if}
</section>

<section use:fadeUp class="bg-[#f2f5ee]">
  <div class="mx-auto max-w-6xl px-4 py-12">
    <div class="mb-6 flex items-end justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-[#2f6f63]">{data.siteContent.home.featured_label}</p>
        <h2 class="mt-2 text-3xl font-bold text-[#17211c]">{data.siteContent.home.projects_title}</h2>
      </div>
      <a class="text-sm font-semibold text-[#b45836]" href="/projects">{data.siteContent.home.all_projects_label}</a>
    </div>
    <div class="grid gap-5 md:grid-cols-2">
      {#each data.featuredProjects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </div>
</section>

<section use:fadeUp class="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[0.8fr_1.2fr]">
  <div>
    <p class="text-sm font-semibold uppercase tracking-wide text-[#2f6f63]">{data.siteContent.home.skills_label}</p>
    <h2 class="mt-2 text-3xl font-bold text-[#17211c]">{data.siteContent.home.skills_title}</h2>
    <p class="mt-3 leading-7 text-[#526158]">{data.siteContent.home.skills_body}</p>
  </div>
  <div class="grid gap-3 sm:grid-cols-2">
    {#each data.skills as skill}
      <div class="rounded-lg border border-[#d9ded3] bg-white px-4 py-3 font-medium shadow-sm">{skill}</div>
    {/each}
  </div>
</section>

<section use:fadeUp class="mx-auto max-w-6xl px-4 py-12">
  <div class="mb-6 max-w-2xl">
    <p class="text-sm font-semibold uppercase tracking-wide text-[#2f6f63]">{data.siteContent.home.gallery_label}</p>
    <h2 class="mt-2 text-3xl font-bold text-[#17211c]">{data.siteContent.home.gallery_title}</h2>
    <p class="mt-3 leading-7 text-[#526158]">{data.siteContent.home.gallery_body}</p>
  </div>
  <div class="grid auto-rows-[220px] gap-4 md:grid-cols-3">
    {#each data.galleryImages as image, index}
      <figure use:fadeUp class="group relative overflow-hidden rounded-lg border border-[#d9ded3] bg-white shadow-sm {index === 0 ? 'md:col-span-2 md:row-span-2' : ''}">
        {#if image.image_url}
          <img class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" src={image.image_url} alt={image.title} loading="lazy" decoding="async" />
        {/if}
        <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111713]/85 to-transparent p-4 text-white">
          <p class="font-semibold">{image.title}</p>
          {#if image.caption}
            <p class="mt-1 text-sm leading-5 text-white/82">{image.caption}</p>
          {/if}
        </figcaption>
      </figure>
    {/each}
  </div>
</section>

<section use:fadeUp class="mx-auto max-w-6xl px-4 pb-14">
  <div class="mb-6 flex items-end justify-between gap-4">
    <div>
      <p class="text-sm font-semibold uppercase tracking-wide text-[#2f6f63]">{data.siteContent.home.writeups_label}</p>
      <h2 class="mt-2 text-3xl font-bold text-[#17211c]">{data.siteContent.home.writeups_title}</h2>
    </div>
    <a class="text-sm font-semibold text-[#b45836]" href="/blog">{data.siteContent.home.all_posts_label}</a>
  </div>
  <div class="grid gap-5 md:grid-cols-3">
    {#each data.posts as post}
      <BlogCard {post} />
    {/each}
  </div>
</section>
