<script lang="ts">
  import { Save, Trash2, Edit2, X } from '@lucide/svelte';
  import { enhance } from '$app/forms';

  let { data, form } = $props();

  let editingId = $state('');
  let formTitle = $state('');
  let formIssuer = $state('');
  let formIssueDate = $state('');
  let formCredentialUrl = $state('');
  let formImageUrl = $state('');

  function edit(cert: any) {
    editingId = cert.id;
    formTitle = cert.title;
    formIssuer = cert.issuer;
    formIssueDate = cert.issue_date;
    formCredentialUrl = cert.credential_url;
    formImageUrl = cert.image_url;
  }

  function cancel() {
    editingId = '';
    formTitle = '';
    formIssuer = '';
    formIssueDate = '';
    formCredentialUrl = '';
    formImageUrl = '';
  }
</script>

<div class="mb-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Admin</p>
  <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Certificates</h1>
</div>
{#if form?.success}
  <p class="mb-4 rounded-md bg-[#e7efe5] px-3 py-2 text-sm font-medium text-[#2f6f63]">Certificate updated.</p>
{/if}
{#if form?.error}
  <p class="mb-4 rounded-md bg-[#f8e7df] px-3 py-2 text-sm font-medium text-[#9d4424]">{form.error}</p>
{/if}
<div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
  <div class="rounded-lg border border-[#d9ded3] bg-white shadow-sm">
    {#each data.certificates as certificate}
      <div class="flex items-center justify-between border-b border-[#edf0e9] p-4 last:border-b-0">
        <div>
          <h2 class="font-semibold text-[#17211c]">{certificate.title}</h2>
          <p class="text-sm text-[#526158]">{certificate.issuer} · {certificate.issue_date}</p>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" onclick={() => edit(certificate)} class="rounded-md p-2 text-[#526158] hover:bg-[#ecf0e8]" title="Edit">
            <Edit2 size={16} />
          </button>
          <form method="POST" action="?/delete" use:enhance>
            <input type="hidden" name="id" value={certificate.id} />
            <button class="rounded-md p-2 text-[#9d4424] hover:bg-[#f8e7df]" type="submit" title="Delete">
              <Trash2 size={16} />
            </button>
          </form>
        </div>
      </div>
    {/each}
  </div>
  <form method="POST" action="?/save" use:enhance class="h-fit grid gap-4 rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold text-[#17211c]">{editingId ? 'Edit Certificate' : 'New Certificate'}</h2>
      {#if editingId}
        <button type="button" onclick={cancel} class="rounded-md p-1 hover:bg-[#ecf0e8]"><X size={18} /></button>
      {/if}
    </div>
    {#if editingId}
      <input type="hidden" name="id" value={editingId} />
    {/if}
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Title
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="title" bind:value={formTitle} required />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Issuer
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="issuer" bind:value={formIssuer} required />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Issue date
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" type="date" name="issue_date" bind:value={formIssueDate} required />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Credential URL
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="credential_url" bind:value={formCredentialUrl} />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Image URL
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="image_url" bind:value={formImageUrl} />
    </label>
    <button class="focus-ring mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]">
      <Save size={16} /> Save
    </button>
  </form>
</div>
