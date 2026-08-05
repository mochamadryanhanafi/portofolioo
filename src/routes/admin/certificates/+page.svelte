<script lang="ts">
  import { Save } from '@lucide/svelte';
  import { enhance } from '$app/forms';

  let { data, form } = $props();
</script>

<div class="mb-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Admin</p>
  <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Certificates</h1>
</div>
{#if form?.success}
  <p class="mb-4 rounded-md bg-[#e7efe5] px-3 py-2 text-sm font-medium text-[#2f6f63]">Certificate saved.</p>
{/if}
{#if form?.error}
  <p class="mb-4 rounded-md bg-[#f8e7df] px-3 py-2 text-sm font-medium text-[#9d4424]">{form.error}</p>
{/if}
<div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
  <div class="rounded-lg border border-[#d9ded3] bg-white shadow-sm">
    {#each data.certificates as certificate}
      <div class="border-b border-[#edf0e9] p-4 last:border-b-0">
        <h2 class="font-semibold text-[#17211c]">{certificate.title}</h2>
        <p class="text-sm text-[#526158]">{certificate.issuer} · {certificate.issue_date}</p>
      </div>
    {/each}
  </div>
  <form method="POST" action="?/save" use:enhance class="grid gap-4 rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Title
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="title" />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Issuer
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="issuer" />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Issue date
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" type="date" name="issue_date" />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Credential URL
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="credential_url" />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Image URL
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="image_url" />
    </label>
    <button class="focus-ring inline-flex w-fit items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]">
      <Save size={16} /> Save
    </button>
  </form>
</div>
