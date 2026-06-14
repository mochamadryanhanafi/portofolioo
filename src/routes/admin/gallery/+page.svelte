<script lang="ts">
  import { Save, Trash2 } from '@lucide/svelte';

  let { data, form } = $props();
</script>

<div class="mb-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Admin</p>
  <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Gallery</h1>
  <p class="mt-2 text-sm text-[#526158]">Tambah foto yang akan tampil di gallery Home.</p>
</div>

{#if form?.success}
  <p class="mb-4 rounded-md bg-[#e7efe5] px-3 py-2 text-sm font-medium text-[#2f6f63]">Gallery updated.</p>
{/if}
{#if form?.error}
  <p class="mb-4 rounded-md bg-[#f8e7df] px-3 py-2 text-sm font-medium text-[#9d4424]">{form.error}</p>
{/if}

<div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
  <div class="grid gap-4">
    {#each data.galleryImages as image}
      <article class="overflow-hidden rounded-lg border border-[#d9ded3] bg-white shadow-sm">
        <img class="h-44 w-full object-cover" src={image.image_url} alt={image.title} />
        <div class="space-y-3 p-4">
          <div>
            <h2 class="font-semibold text-[#17211c]">{image.title}</h2>
            <p class="text-sm text-[#526158]">{image.caption}</p>
            <p class="mt-1 text-xs text-[#526158]">Order {image.sort_order} · {image.status}</p>
          </div>
          <form method="POST" action="?/delete">
            <input type="hidden" name="id" value={image.id} />
            <button class="focus-ring inline-flex items-center gap-2 rounded-md border border-[#f0c6b6] px-3 py-2 text-sm font-semibold text-[#9d4424] hover:bg-[#f8e7df]">
              <Trash2 size={15} />
              Delete
            </button>
          </form>
        </div>
      </article>
    {/each}
  </div>

  <form method="POST" action="?/save" class="h-fit rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-[#17211c]">New photo</h2>
    <div class="grid gap-4">
      <label class="grid gap-2 text-sm font-medium text-[#334139]">
        Title
        <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="title" required />
      </label>
      <label class="grid gap-2 text-sm font-medium text-[#334139]">
        Image URL
        <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="image_url" type="url" required />
      </label>
      <label class="grid gap-2 text-sm font-medium text-[#334139]">
        Caption
        <textarea class="focus-ring min-h-24 rounded-md border border-[#cad3c6] px-3 py-2" name="caption"></textarea>
      </label>
      <div class="grid gap-4 md:grid-cols-2">
        <label class="grid gap-2 text-sm font-medium text-[#334139]">
          Sort order
          <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="sort_order" type="number" value="0" min="0" />
        </label>
        <label class="grid gap-2 text-sm font-medium text-[#334139]">
          Status
          <select class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="status">
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </label>
      </div>
      <button class="focus-ring inline-flex w-fit items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]">
        <Save size={16} />
        Save photo
      </button>
    </div>
  </form>
</div>
