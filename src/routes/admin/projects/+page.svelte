<script lang="ts">
  import { Edit, Plus, Trash2 } from '@lucide/svelte';
  import { enhance } from '$app/forms';

  let { data, form } = $props();
</script>

<div class="mb-6 flex items-center justify-between gap-4">
  <div>
    <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Admin</p>
    <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Projects</h1>
  </div>
  <a class="focus-ring inline-flex items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]" href="/admin/projects/new">
    <Plus size={16} /> New
  </a>
</div>
{#if form?.success}
  <p class="mb-4 rounded-md bg-[#e7efe5] px-3 py-2 text-sm font-medium text-[#2f6f63]">Action completed.</p>
{/if}
{#if form?.error}
  <p class="mb-4 rounded-md bg-[#f8e7df] px-3 py-2 text-sm font-medium text-[#9d4424]">{form.error}</p>
{/if}
<div class="overflow-hidden rounded-lg border border-[#d9ded3] bg-white shadow-sm">
  {#each data.projects as project}
    <div class="grid gap-3 border-b border-[#edf0e9] p-4 last:border-b-0 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <h2 class="font-semibold text-[#17211c]">{project.title}</h2>
        <p class="text-sm text-[#526158]">{project.category} · {project.status}</p>
      </div>
      <div class="flex gap-2">
        <a class="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#cad3c6] hover:bg-[#ecf0e8]" href={`/admin/projects/${project.id}/edit`} aria-label="Edit project">
          <Edit size={16} />
        </a>
        <form method="POST" action="?/delete" use:enhance>
          <input type="hidden" name="id" value={project.id} />
          <button class="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#f0c6b6] text-[#9d4424] hover:bg-[#f8e7df]" aria-label="Delete project">
            <Trash2 size={16} />
          </button>
        </form>
      </div>
    </div>
  {/each}
</div>
