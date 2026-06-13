<script lang="ts">
  import { Moon, Sun } from '@lucide/svelte';
  import { theme } from '$lib/stores/preferences';
</script>

<div class="flex items-center gap-2">
  <div class="flex rounded-md border border-[#cad3c6] bg-white p-1 shadow-sm">
    <button
      class="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-md {$theme === 'light' ? 'bg-[#e7efe5] text-[#2f6f63]' : 'text-[#526158] hover:bg-[#ecf0e8]'}"
      type="button"
      aria-label="Light theme"
      title="Light theme"
      onclick={() => theme.set('light')}
    >
      <Sun size={15} />
    </button>
    <button
      class="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-md {$theme === 'dark' ? 'bg-[#2f6f63] text-white' : 'text-[#526158] hover:bg-[#ecf0e8]'}"
      type="button"
      aria-label="Dark theme"
      title="Dark theme"
      onclick={() => theme.set('dark')}
    >
      <Moon size={15} />
    </button>
  </div>
</div>
