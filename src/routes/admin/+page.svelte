<script lang="ts">
  let { data } = $props();
</script>

<div class="mb-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Admin</p>
  <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Dashboard</h1>
</div>
<div class="grid gap-4 md:grid-cols-3">
  {#each data.stats as stat}
    <article class="rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
      <p class="text-sm text-[#526158]">{stat.label}</p>
      <p class="mt-2 text-3xl font-bold text-[#17211c]">{stat.value}</p>
    </article>
  {/each}
</div>
