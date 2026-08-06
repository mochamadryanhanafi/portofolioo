import type {
  Certificate,
  ContactMessage,
  GalleryImage,
  Post,
  Profile,
  Project,
  ProjectImage,
  SiteContent
} from '$lib/types';

export const profile: Profile = {
  id: '11111111-1111-4111-a111-111111111111',
  full_name: 'Archy Portfolio',
  headline: 'Fullstack developer building tidy web products with SvelteKit and Supabase.',
  bio: 'I design and build pragmatic software: fast public experiences, thoughtful admin tools, and maintainable database-backed workflows.',
  cv_url: '/cv.pdf',
  github_url: 'https://github.com/',
  linkedin_url: 'https://linkedin.com/',
  email: 'hello@example.com'
};

export const skills = [
  'SvelteKit',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'PostgreSQL',
  'Server Actions',
  'Zod',
  'Vercel'
];

export const projects: Project[] = [
  {
    id: '22222222-2222-4222-a222-222222222222',
    title: 'Recruiter-ready Portfolio CMS',
    slug: 'portfolio-cms',
    short_description:
      'A SvelteKit portfolio with admin publishing, project media, write-ups, and contact messages.',
    content:
      'This project shows a clean content workflow for a personal portfolio. Public routes read published content while protected admin actions handle project, post, certificate, and message management.',
    category: 'Fullstack',
    cover_image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    github_url: 'https://github.com/',
    demo_url: 'https://vercel.com/',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    featured: true,
    status: 'published',
    created_at: '2026-01-20T08:00:00.000Z',
    updated_at: '2026-02-01T08:00:00.000Z'
  },
  {
    id: '33333333-3333-4333-a333-333333333333',
    title: 'Insight Dashboard',
    slug: 'insight-dashboard',
    short_description:
      'A dense operational dashboard prototype focused on scanning, filtering, and quick decisions.',
    content:
      'The dashboard combines responsive tables, cards, and focused detail panels for repeat daily work. It is intentionally restrained so important data stays easy to compare.',
    category: 'Dashboard',
    cover_image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    github_url: 'https://github.com/',
    demo_url: 'https://vercel.com/',
    video_url: '',
    featured: false,
    status: 'published',
    created_at: '2026-02-12T08:00:00.000Z',
    updated_at: '2026-02-21T08:00:00.000Z'
  }
];

export const projectImages: ProjectImage[] = [
  {
    id: '44444444-4444-4444-a444-444444444444',
    project_id: '22222222-2222-4222-a222-222222222222',
    image_url:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    caption: 'Admin workspace for content publishing',
    sort_order: 1,
    created_at: '2026-02-01T08:00:00.000Z'
  },
  {
    id: '55555555-5555-4555-a555-555555555555',
    project_id: '22222222-2222-4222-a222-222222222222',
    image_url:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Public project discovery and detail pages',
    sort_order: 2,
    created_at: '2026-02-01T08:00:00.000Z'
  }
];

export const posts: Post[] = [
  {
    id: '66666666-6666-4666-a666-666666666666',
    title: 'Designing a portfolio that is easy to maintain',
    slug: 'maintainable-portfolio',
    content:
      'A portfolio gets better when publishing is boring in the best way: clear forms, stable content models, and a small admin surface that encourages regular updates.',
    cover_image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    category: 'Build Notes',
    status: 'published',
    created_at: '2026-03-03T08:00:00.000Z',
    updated_at: '2026-03-03T08:00:00.000Z'
  }
];

export const certificates: Certificate[] = [
  {
    id: '77777777-7777-4777-a777-777777777777',
    title: 'Fullstack Web Development',
    issuer: 'Independent Course',
    issue_date: '2026-01-15',
    credential_url: 'https://example.com/credential',
    image_url:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
    created_at: '2026-01-16T08:00:00.000Z'
  }
];

export const contactMessages: ContactMessage[] = [
  {
    id: '88888888-8888-4888-a888-888888888888',
    name: 'Demo Recruiter',
    email: 'recruiter@example.com',
    message: 'Interested in discussing a SvelteKit role.',
    is_read: false,
    created_at: '2026-04-12T08:00:00.000Z'
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: '99999999-9999-4999-a999-999999999999',
    title: 'Workspace setup',
    image_url:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
    caption: 'A clean development workspace for building fullstack web apps.',
    sort_order: 1,
    status: 'published',
    created_at: '2026-04-01T08:00:00.000Z'
  },
  {
    id: 'aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaaa',
    title: 'Dashboard detail',
    image_url:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Dashboard views focused on clarity and fast scanning.',
    sort_order: 2,
    status: 'published',
    created_at: '2026-04-02T08:00:00.000Z'
  },
  {
    id: 'bbbbbbbb-bbbb-4bbb-abbb-bbbbbbbbbbbb',
    title: 'Planning notes',
    image_url:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    caption: 'Build notes, content planning, and product thinking.',
    sort_order: 3,
    status: 'published',
    created_at: '2026-04-03T08:00:00.000Z'
  }
];

export const defaultSiteContent: SiteContent = {
  brand: 'Porto Web',
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    certificates: 'Certificates',
    contact: 'Contact'
  },
  home: {
    eyebrow: 'SvelteKit + Supabase Portfolio',
    title: profile.full_name,
    headline: profile.headline,
    hero_image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    hero_image_alt: 'Developer workspace',
    cv_url: profile.cv_url,
    primary_button: 'View projects',
    contact_button: 'Contact',
    featured_label: 'Featured',
    projects_title: 'Projects',
    all_projects_label: 'All projects',
    skills_label: 'Skills',
    skills_title: 'Selected stack',
    skills_body: profile.bio,
    gallery_label: 'Gallery',
    gallery_title: 'Photos from the work',
    gallery_body: 'A small visual archive of workspace moments, project screenshots, and process notes.',
    writeups_label: 'Write-ups',
    writeups_title: 'Latest notes',
    all_posts_label: 'All posts'
  },
  about: {
    eyebrow: 'About',
    title: 'Fullstack developer with a bias for useful software.',
    body: profile.bio,
    secondary_body:
      'This portfolio is structured around a real publishing workflow: projects, detail pages, write-ups, certificates, contact messages, draft status, and an admin dashboard.'
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Selected fullstack work'
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Write-ups and build notes'
  },
  certificates: {
    eyebrow: 'Certificates',
    title: 'Credentials and learning records',
    credential_label: 'Credential'
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about the role or project.',
    body: 'Messages are stored in Supabase when credentials are configured.',
    success_message: 'Message received.',
    name_label: 'Name',
    email_label: 'Email',
    message_label: 'Message',
    send_label: 'Send'
  },
  footer: {
    text: 'Built with SvelteKit, Tailwind CSS, and Supabase.',
    projects_label: 'Projects',
    writeups_label: 'Write-ups',
    contact_label: 'Contact'
  }
};
