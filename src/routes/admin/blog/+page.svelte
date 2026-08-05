<script lang="ts">
  import { Save } from '@lucide/svelte';
  import { slugify } from '$lib/utils/slug';
  import { enhance } from '$app/forms';

  let { data, form } = $props();
</script>

<div class="mb-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Admin</p>
  <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Blog / Write-up</h1>
</div>
{#if form?.success}
  <p class="mb-4 rounded-md bg-[#e7efe5] px-3 py-2 text-sm font-medium text-[#2f6f63]">Post saved.</p>
{/if}
{#if form?.error}
  <p class="mb-4 rounded-md bg-[#f8e7df] px-3 py-2 text-sm font-medium text-[#9d4424]">{form.error}</p>
{/if}
<div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
  <div class="rounded-lg border border-[#d9ded3] bg-white shadow-sm">
    {#each data.posts as post}
      <div class="border-b border-[#edf0e9] p-4 last:border-b-0">
        <h2 class="font-semibold text-[#17211c]">{post.title}</h2>
        <p class="text-sm text-[#526158]">{post.category} · {post.status}</p>
      </div>
    {/each}
  </div>
  <form method="POST" action="?/save" use:enhance class="grid gap-4 rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Title
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="title" oninput={(event) => {
        const form = event.currentTarget.form;
        const slugInput = form?.elements.namedItem('slug') as HTMLInputElement | null;
        if (slugInput) slugInput.value = slugify(event.currentTarget.value);
      }} />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Slug
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="slug" />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Category
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="category" />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Cover image URL
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="cover_image" />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Content
      <textarea class="focus-ring min-h-40 rounded-md border border-[#cad3c6] px-3 py-2" name="content"></textarea>
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Status
      <select class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="status">
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>
    </label>
    <button class="focus-ring inline-flex w-fit items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]">
      <Save size={16} /> Save
    </button>
  </form>
</div>
