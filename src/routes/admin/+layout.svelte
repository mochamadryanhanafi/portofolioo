<script lang="ts">
  import {
    Award,
    FileText,
    Images,
    FolderKanban,
    Inbox,
    LayoutDashboard,
    LogOut,
    PenLine
  } from '@lucide/svelte';

  let { children, data } = $props();

  const links = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/content', label: 'Content', icon: FileText },
    { href: '/admin/gallery', label: 'Gallery', icon: Images },
    { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
    { href: '/admin/blog', label: 'Blog', icon: PenLine },
    { href: '/admin/certificates', label: 'Certificates', icon: Award },
    { href: '/admin/messages', label: 'Messages', icon: Inbox }
  ];
</script>

<section class="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-[220px_1fr]">
  <aside class="h-fit rounded-lg border border-[#d9ded3] bg-white p-3 shadow-sm md:sticky md:top-20 md:max-h-[calc(100vh-6rem)] md:overflow-y-auto">
    <nav class="grid gap-1">
      {#each links as link}
        {@const Icon = link.icon}
        <a class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-[#42514a] hover:bg-[#ecf0e8] hover:text-[#17211c]" href={link.href}>
          <Icon size={16} />
          {link.label}
        </a>
      {/each}
    </nav>
    <form method="POST" action="/logout" class="mt-3 border-t border-[#edf0e9] pt-3">
      <button class="focus-ring flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium text-[#9d4424] hover:bg-[#f8e7df]">
        <LogOut size={16} />
        Logout
      </button>
    </form>
  </aside>
  <div>
    {@render children()}
  </div>
</section>
