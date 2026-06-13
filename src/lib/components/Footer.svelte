<script lang="ts">
  import type { SiteContent } from '$lib/types';

  export let siteContent: SiteContent;
</script>

<footer class="border-t border-[#d9ded3] bg-[#f2f5ee]">
  <div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-[#526158] md:flex-row md:items-center md:justify-between">
    <p>© 2026 {siteContent.brand}. {siteContent.footer.text}</p>
    <div class="flex gap-4">
      <a class="hover:text-[#2f6f63]" href="/projects">{siteContent.footer.projects_label}</a>
      <a class="hover:text-[#2f6f63]" href="/blog">{siteContent.footer.writeups_label}</a>
      <a class="hover:text-[#2f6f63]" href="/contact">{siteContent.footer.contact_label}</a>
    </div>
  </div>
</footer>
