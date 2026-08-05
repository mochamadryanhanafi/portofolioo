<script lang="ts">
  import ProjectForm from '$lib/components/ProjectForm.svelte';
  import { enhance } from '$app/forms';
  import { Trash2, ImagePlus } from '@lucide/svelte';

  let { data, form } = $props();
</script>

<div class="mb-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Projects</p>
  <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Edit project</h1>
</div>
{#if form?.success}
  <p class="mb-4 rounded-md bg-[#e7efe5] px-3 py-2 text-sm font-medium text-[#2f6f63]">Project saved.</p>
{/if}
{#if form?.error}
  <p class="mb-4 rounded-md bg-[#f8e7df] px-3 py-2 text-sm font-medium text-[#9d4424]">{form.error}</p>
{/if}
<ProjectForm project={data.project} />

<hr class="my-10 border-[#d9ded3]" />

<div class="mb-6">
  <h2 class="text-2xl font-bold text-[#17211c]">Project Images</h2>
  <p class="text-[#526158]">Add supporting images to display below the project content.</p>
</div>

<div class="space-y-4">
  {#if data.images && data.images.length > 0}
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {#each data.images as image}
        <div class="group relative overflow-hidden rounded-lg border border-[#d9ded3] bg-white">
          <img src={image.image_url} alt={image.caption} class="h-40 w-full object-cover" />
          {#if image.caption}
            <div class="truncate p-2 text-xs text-[#526158]">{image.caption}</div>
          {/if}
          <form method="POST" action="?/deleteImage" use:enhance class="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
            <input type="hidden" name="id" value={image.id} />
            <button class="rounded-md bg-white p-1.5 text-[#9d4424] shadow-sm hover:bg-[#f8e7df]" type="submit" title="Delete image">
              <Trash2 size={16} />
            </button>
          </form>
        </div>
      {/each}
    </div>
  {/if}

  <form method="POST" action="?/addImage" use:enhance class="rounded-lg border border-[#d9ded3] bg-[#fdfdfc] p-5">
    <h3 class="mb-4 flex items-center gap-2 font-semibold text-[#17211c]"><ImagePlus size={18} /> Add New Image</h3>
    
    <div class="grid gap-4 md:grid-cols-2">
      <div>
        <label class="mb-1 block text-sm font-medium text-[#17211c]" for="image_url">Image URL</label>
        <input class="w-full rounded-md border border-[#cad3c6] px-3 py-2 focus:border-[#2f6f63] focus:outline-none focus:ring-1 focus:ring-[#2f6f63]" type="url" id="image_url" name="image_url" required placeholder="https://..." />
      </div>
      <div>
        <label class="mb-1 block text-sm font-medium text-[#17211c]" for="caption">Caption (Optional)</label>
        <input class="w-full rounded-md border border-[#cad3c6] px-3 py-2 focus:border-[#2f6f63] focus:outline-none focus:ring-1 focus:ring-[#2f6f63]" type="text" id="caption" name="caption" />
      </div>
      <div>
        <label class="mb-1 block text-sm font-medium text-[#17211c]" for="sort_order">Sort Order</label>
        <input class="w-full rounded-md border border-[#cad3c6] px-3 py-2 focus:border-[#2f6f63] focus:outline-none focus:ring-1 focus:ring-[#2f6f63]" type="number" id="sort_order" name="sort_order" value="0" />
      </div>
    </div>
    
    <div class="mt-4 text-right">
      <button class="rounded-md bg-[#2f6f63] px-4 py-2 text-sm font-semibold text-white hover:bg-[#265a50]" type="submit">
        Add Image
      </button>
    </div>
  </form>
</div>
