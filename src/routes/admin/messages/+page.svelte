<script lang="ts">
  let { data } = $props();
</script>

<div class="mb-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Admin</p>
  <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Contact messages</h1>
</div>
<div class="grid gap-4">
  {#each data.messages as message}
    <article class="rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="font-semibold text-[#17211c]">{message.name}</h2>
          <a class="text-sm text-[#2f6f63]" href={`mailto:${message.email}`}>{message.email}</a>
        </div>
        <span class="rounded-md bg-[#e7efe5] px-2 py-1 text-xs font-medium text-[#2f6f63]">{message.is_read ? 'Read' : 'Unread'}</span>
      </div>
      <p class="mt-4 leading-7 text-[#526158]">{message.message}</p>
    </article>
  {/each}
</div>
