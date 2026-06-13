<script lang="ts">
  import { LogIn } from '@lucide/svelte';

  let { form } = $props();
</script>

<section class="mx-auto max-w-md px-4 py-14">
  <div class="mb-6">
    <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Admin</p>
    <h1 class="mt-3 text-3xl font-bold text-[#17211c]">Login</h1>
  </div>
  <form method="POST" class="grid gap-4 rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    {#if form?.error}
      <p class="rounded-md bg-[#f8e7df] px-3 py-2 text-sm font-medium text-[#9d4424]">{form.error}</p>
    {/if}
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Email
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" type="email" name="email" required />
    </label>
    <label class="grid gap-2 text-sm font-medium text-[#334139]">
      Password
      <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" type="password" name="password" required />
    </label>
    <button class="focus-ring inline-flex w-fit items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]">
      <LogIn size={16} /> Login
    </button>
  </form>
</section>
