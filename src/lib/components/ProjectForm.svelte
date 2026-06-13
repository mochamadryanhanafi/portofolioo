<script lang="ts">
  import { Save } from '@lucide/svelte';
  import { slugify } from '$lib/utils/slug';
  import type { Project } from '$lib/types';

  export let project: Partial<Project> = {};
</script>

<form method="POST" action="?/save" class="grid gap-4 rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
  <label class="grid gap-2 text-sm font-medium text-[#334139]">
    Title
    <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="title" value={project.title ?? ''} oninput={(event) => {
      const form = event.currentTarget.form;
      const slugInput = form?.elements.namedItem('slug') as HTMLInputElement | null;
      if (slugInput && !project.slug) slugInput.value = slugify(event.currentTarget.value);
    }} />
  </label>
  <label class="grid gap-2 text-sm font-medium text-[#334139]">
    Slug
    <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="slug" value={project.slug ?? ''} />
  </label>
  <label class="grid gap-2 text-sm font-medium text-[#334139]">
    Short description
    <textarea class="focus-ring min-h-24 rounded-md border border-[#cad3c6] px-3 py-2" name="short_description">{project.short_description ?? ''}</textarea>
  </label>
  <label class="grid gap-2 text-sm font-medium text-[#334139]">
    Content
    <textarea class="focus-ring min-h-40 rounded-md border border-[#cad3c6] px-3 py-2" name="content">{project.content ?? ''}</textarea>
  </label>
  <div class="grid gap-4 md:grid-cols-2">
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Category
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="category" value={project.category ?? ''} />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Status
      <select class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="status" value={project.status ?? 'draft'}>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>
    </label>
  </div>
  <div class="grid gap-4 md:grid-cols-2">
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Cover image URL
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="cover_image" value={project.cover_image ?? ''} />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Video URL
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="video_url" value={project.video_url ?? ''} />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      GitHub URL
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="github_url" value={project.github_url ?? ''} />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Demo URL
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="demo_url" value={project.demo_url ?? ''} />
    </label>
  </div>
  <label class="flex items-center gap-3 text-sm font-medium text-[#334139]">
    <input class="h-4 w-4 accent-[#2f6f63]" type="checkbox" name="featured" checked={project.featured ?? false} />
    Featured
  </label>
  <button class="focus-ring inline-flex w-fit items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]">
    <Save size={16} />
    Save
  </button>
</form>
