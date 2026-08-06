<script lang="ts">
  import { Save } from '@lucide/svelte';
  import { enhance } from '$app/forms';

  let { data, form } = $props();
  const content = $derived(data.siteContent);
</script>

<div class="mb-6">
  <p class="text-sm font-semibold uppercase tracking-wide text-[#b45836]">Admin</p>
  <h1 class="mt-2 text-3xl font-bold text-[#17211c]">Content</h1>
  <p class="mt-2 text-sm text-[#526158]">Edit teks landing page, menu, dan judul per section.</p>
</div>

{#if form?.success}
  <p class="mb-4 rounded-md bg-[#e7efe5] px-3 py-2 text-sm font-medium text-[#2f6f63]">Content saved.</p>
{/if}
{#if form?.error}
  <p class="mb-4 rounded-md bg-[#f8e7df] px-3 py-2 text-sm font-medium text-[#9d4424]">{form.error}</p>
{/if}

<form method="POST" action="?/save" use:enhance class="space-y-5">
  <section class="rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-[#17211c]">Brand</h2>
    {@render Field('Brand name', 'brand', content.brand)}
  </section>

  <section class="rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-[#17211c]">Menu</h2>
    <div class="grid gap-4 md:grid-cols-3">
      {@render Field('Home', 'nav.home', content.nav.home)}
      {@render Field('About', 'nav.about', content.nav.about)}
      {@render Field('Projects', 'nav.projects', content.nav.projects)}
      {@render Field('Blog', 'nav.blog', content.nav.blog)}
      {@render Field('Certificates', 'nav.certificates', content.nav.certificates)}
      {@render Field('Contact', 'nav.contact', content.nav.contact)}
    </div>
  </section>

  <section class="rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-[#17211c]">Home</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {@render Field('Eyebrow', 'home.eyebrow', content.home.eyebrow)}
      {@render Field('Title', 'home.title', content.home.title)}
      {@render Field('Hero image URL', 'home.hero_image', content.home.hero_image)}
      {@render Field('Hero image alt text', 'home.hero_image_alt', content.home.hero_image_alt)}
      {@render Field('CV URL', 'home.cv_url', content.home.cv_url)}
      {@render Field('Primary button', 'home.primary_button', content.home.primary_button)}
      {@render Field('Contact button', 'home.contact_button', content.home.contact_button)}
      {@render Field('Featured label', 'home.featured_label', content.home.featured_label)}
      {@render Field('Projects title', 'home.projects_title', content.home.projects_title)}
      {@render Field('All projects label', 'home.all_projects_label', content.home.all_projects_label)}
      {@render Field('Skills label', 'home.skills_label', content.home.skills_label)}
      {@render Field('Skills title', 'home.skills_title', content.home.skills_title)}
      {@render Field('Gallery label', 'home.gallery_label', content.home.gallery_label)}
      {@render Field('Gallery title', 'home.gallery_title', content.home.gallery_title)}
      {@render Field('Write-ups label', 'home.writeups_label', content.home.writeups_label)}
      {@render Field('Write-ups title', 'home.writeups_title', content.home.writeups_title)}
      {@render Field('All posts label', 'home.all_posts_label', content.home.all_posts_label)}
    </div>
    {#if content.home.hero_image}
      <img
        class="mt-4 aspect-[16/9] w-full rounded-lg border border-[#d9ded3] object-cover"
        src={content.home.hero_image}
        alt={content.home.hero_image_alt}
      />
    {/if}
    {@render Textarea('Headline', 'home.headline', content.home.headline)}
    {@render Textarea('Skills body', 'home.skills_body', content.home.skills_body)}
    {@render Textarea('Gallery body', 'home.gallery_body', content.home.gallery_body)}
  </section>

  <section class="rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-[#17211c]">About</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {@render Field('Eyebrow', 'about.eyebrow', content.about.eyebrow)}
      {@render Field('Title', 'about.title', content.about.title)}
    </div>
    {@render Textarea('Main body', 'about.body', content.about.body)}
    {@render Textarea('Secondary body', 'about.secondary_body', content.about.secondary_body)}
  </section>

  <section class="rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-[#17211c]">Section Titles</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {@render Field('Projects eyebrow', 'projects.eyebrow', content.projects.eyebrow)}
      {@render Field('Projects title', 'projects.title', content.projects.title)}
      {@render Field('Blog eyebrow', 'blog.eyebrow', content.blog.eyebrow)}
      {@render Field('Blog title', 'blog.title', content.blog.title)}
      {@render Field('Certificates eyebrow', 'certificates.eyebrow', content.certificates.eyebrow)}
      {@render Field('Certificates title', 'certificates.title', content.certificates.title)}
      {@render Field('Credential label', 'certificates.credential_label', content.certificates.credential_label)}
    </div>
  </section>

  <section class="rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-[#17211c]">Contact</h2>
    <div class="grid gap-4 md:grid-cols-2">
      {@render Field('Eyebrow', 'contact.eyebrow', content.contact.eyebrow)}
      {@render Field('Title', 'contact.title', content.contact.title)}
      {@render Field('Success message', 'contact.success_message', content.contact.success_message)}
      {@render Field('Name label', 'contact.name_label', content.contact.name_label)}
      {@render Field('Email label', 'contact.email_label', content.contact.email_label)}
      {@render Field('Message label', 'contact.message_label', content.contact.message_label)}
      {@render Field('Send label', 'contact.send_label', content.contact.send_label)}
    </div>
    {@render Textarea('Body', 'contact.body', content.contact.body)}
  </section>

  <section class="rounded-lg border border-[#d9ded3] bg-white p-5 shadow-sm">
    <h2 class="mb-4 text-xl font-semibold text-[#17211c]">Footer</h2>
    {@render Textarea('Footer text', 'footer.text', content.footer.text)}
    <div class="grid gap-4 md:grid-cols-3">
      {@render Field('Projects label', 'footer.projects_label', content.footer.projects_label)}
      {@render Field('Write-ups label', 'footer.writeups_label', content.footer.writeups_label)}
      {@render Field('Contact label', 'footer.contact_label', content.footer.contact_label)}
    </div>
  </section>

  <button class="focus-ring inline-flex items-center gap-2 rounded-md bg-[#2f6f63] px-4 py-2 font-semibold text-white hover:bg-[#265a50]">
    <Save size={16} />
    Save content
  </button>
</form>

{#snippet Field(label: string, name: string, value: string)}
  <label class="grid gap-2 text-sm font-medium text-[#334139]">
    {label}
    <input class="focus-ring rounded-md border border-[#cad3c6] px-3 py-2" {name} {value} />
  </label>
{/snippet}

{#snippet Textarea(label: string, name: string, value: string)}
  <label class="mt-4 grid gap-2 text-sm font-medium text-[#334139]">
    {label}
    <textarea class="focus-ring min-h-28 rounded-md border border-[#cad3c6] px-3 py-2" {name}>{value}</textarea>
  </label>
{/snippet}
