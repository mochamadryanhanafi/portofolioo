<script lang="ts">
  import { Send } from '@lucide/svelte';

  let { data, form } = $props();
</script>

<section class="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[0.8fr_1.2fr]">
  <div>
    <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">{data.siteContent.contact.eyebrow}</p>
    <h1 class="mt-3 text-4xl font-bold text-[#17211c]">{data.siteContent.contact.title}</h1>
    <p class="mt-4 leading-7 text-[#526158]">{data.siteContent.contact.body}</p>
  </div>
  <form method="POST" class="grid gap-4 rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    {#if form?.success}
      <p class="rounded-md bg-[#e7efe5] px-3 py-2 text-sm font-medium text-[#2f6f63]">{data.siteContent.contact.success_message}</p>
    {/if}
    {#if form?.error}
      <p class="rounded-md bg-[#f8e7df] px-3 py-2 text-sm font-medium text-[#9d4424]">{form.error}</p>
    {/if}
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      {data.siteContent.contact.name_label}
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" name="name" required />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      {data.siteContent.contact.email_label}
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" type="email" name="email" required />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      {data.siteContent.contact.message_label}
      <textarea class="focus-ring min-h-40 rounded-md border border-[#cad3c6] px-3 py-2" name="message" required></textarea>
    </label>
    <button class="focus-ring inline-flex w-fit items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]">
      <Send size={16} /> {data.siteContent.contact.send_label}
    </button>
  </form>
</section>
