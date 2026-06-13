<script lang="ts">
  import { Menu } from '@lucide/svelte';
  import PreferenceControls from '$lib/components/PreferenceControls.svelte';
  import type { SiteContent } from '$lib/types';

  export let siteContent: SiteContent;

  const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/blog', label: 'blog' },
    { href: '/certificates', label: 'certificates' },
    { href: '/contact', label: 'contact' }
  ] as const;
</script>

<nav class="sticky top-0 z-40 border-b border-[#d9ded3] bg-[#fbfaf7]/92 backdrop-blur">
  <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
    <a class="text-lg font-semibold text-[#17211c]" href="/">{siteContent.brand}</a>
    <div class="hidden items-center gap-1 md:flex">
      {#each links as link}
        <a class="rounded-md px-3 py-2 text-sm text-[#42514a] hover:bg-[#ecf0e8] hover:text-[#17211c]" href={link.href}>
          {siteContent.nav[link.label]}
        </a>
      {/each}
    </div>
    <div class="flex items-center gap-2">
      <PreferenceControls />
      <button class="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#cad3c6] md:hidden" aria-label="Open navigation">
        <Menu size={18} />
      </button>
    </div>
  </div>
</nav>
