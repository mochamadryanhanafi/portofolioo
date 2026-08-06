import { fail } from '@sveltejs/kit';
import { getSiteContent, saveSiteContent } from '$lib/server/site-content';
import type { SiteContent } from '$lib/types';

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? '').trim();
}

function contentFromForm(formData: FormData): SiteContent {
  return {
    brand: value(formData, 'brand'),
    nav: {
      home: value(formData, 'nav.home'),
      about: value(formData, 'nav.about'),
      projects: value(formData, 'nav.projects'),
      blog: value(formData, 'nav.blog'),
      certificates: value(formData, 'nav.certificates'),
      contact: value(formData, 'nav.contact')
    },
    home: {
      eyebrow: value(formData, 'home.eyebrow'),
      title: value(formData, 'home.title'),
      headline: value(formData, 'home.headline'),
      hero_image: value(formData, 'home.hero_image'),
      hero_image_alt: value(formData, 'home.hero_image_alt'),
      cv_url: value(formData, 'home.cv_url'),
      primary_button: value(formData, 'home.primary_button'),
      contact_button: value(formData, 'home.contact_button'),
      featured_label: value(formData, 'home.featured_label'),
      projects_title: value(formData, 'home.projects_title'),
      all_projects_label: value(formData, 'home.all_projects_label'),
      skills_label: value(formData, 'home.skills_label'),
      skills_title: value(formData, 'home.skills_title'),
      skills_body: value(formData, 'home.skills_body'),
      gallery_label: value(formData, 'home.gallery_label'),
      gallery_title: value(formData, 'home.gallery_title'),
      gallery_body: value(formData, 'home.gallery_body'),
      writeups_label: value(formData, 'home.writeups_label'),
      writeups_title: value(formData, 'home.writeups_title'),
      all_posts_label: value(formData, 'home.all_posts_label')
    },
    about: {
      eyebrow: value(formData, 'about.eyebrow'),
      title: value(formData, 'about.title'),
      body: value(formData, 'about.body'),
      secondary_body: value(formData, 'about.secondary_body')
    },
    projects: {
      eyebrow: value(formData, 'projects.eyebrow'),
      title: value(formData, 'projects.title')
    },
    blog: {
      eyebrow: value(formData, 'blog.eyebrow'),
      title: value(formData, 'blog.title')
    },
    certificates: {
      eyebrow: value(formData, 'certificates.eyebrow'),
      title: value(formData, 'certificates.title'),
      credential_label: value(formData, 'certificates.credential_label')
    },
    contact: {
      eyebrow: value(formData, 'contact.eyebrow'),
      title: value(formData, 'contact.title'),
      body: value(formData, 'contact.body'),
      success_message: value(formData, 'contact.success_message'),
      name_label: value(formData, 'contact.name_label'),
      email_label: value(formData, 'contact.email_label'),
      message_label: value(formData, 'contact.message_label'),
      send_label: value(formData, 'contact.send_label')
    },
    footer: {
      text: value(formData, 'footer.text'),
      projects_label: value(formData, 'footer.projects_label'),
      writeups_label: value(formData, 'footer.writeups_label'),
      contact_label: value(formData, 'footer.contact_label')
    }
  };
}

export async function load() {
  return {
    siteContent: await getSiteContent()
  };
}

export const actions = {
  save: async ({ request }) => {
    const content = contentFromForm(await request.formData());
    const required = [
      content.brand,
      content.home.title,
      content.about.title,
      content.projects.title,
      content.blog.title,
      content.certificates.title,
      content.contact.title
    ];

    if (required.some((item) => item.length < 1)) {
      return fail(400, { error: 'Brand dan judul section wajib diisi.' });
    }

    const { error } = await saveSiteContent(content);
    if (error) return fail(500, { error });

    return { success: true };
  }
};
