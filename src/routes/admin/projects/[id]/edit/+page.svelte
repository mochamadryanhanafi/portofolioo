<script lang="ts">
  import ProjectForm from '$lib/components/ProjectForm.svelte';

  let { data, form } = $props();
</script>

<div class="mb-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Projects</p>
  <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Edit project</h1>
</div>
{#if form?.success}
  <p class="mb-4 rounded-md bg-[#e7efe5] px-3 py-2 text-sm font-medium text-[#2f6f63]">Project saved.</p>
{/if}
<ProjectForm project={data.project} />
