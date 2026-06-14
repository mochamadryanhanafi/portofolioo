export type Profile = {
  id: string;
  full_name: string;
  headline: string;
  bio: string;
  cv_url: string;
  github_url: string;
  linkedin_url: string;
  email: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  content: string;
  category: string;
  cover_image: string;
  github_url: string;
  demo_url: string;
  video_url: string;
  featured: boolean;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
};

export type ProjectImage = {
  id: string;
  project_id: string;
  image_url: string;
  caption: string;
  sort_order: number;
  created_at: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  cover_image: string;
  category: string;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issue_date: string;
  credential_url: string;
  image_url: string;
  created_at: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
  created_at: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  image_url: string;
  caption: string;
  sort_order: number;
  status: 'draft' | 'published';
  created_at: string;
};

export type SiteContent = {
  brand: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    blog: string;
    certificates: string;
    contact: string;
  };
  home: {
    eyebrow: string;
    title: string;
    headline: string;
    hero_image: string;
    hero_image_alt: string;
    primary_button: string;
    contact_button: string;
    featured_label: string;
    projects_title: string;
    all_projects_label: string;
    skills_label: string;
    skills_title: string;
    skills_body: string;
    gallery_label: string;
    gallery_title: string;
    gallery_body: string;
    writeups_label: string;
    writeups_title: string;
    all_posts_label: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    secondary_body: string;
  };
  projects: {
    eyebrow: string;
    title: string;
  };
  blog: {
    eyebrow: string;
    title: string;
  };
  certificates: {
    eyebrow: string;
    title: string;
    credential_label: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    success_message: string;
    name_label: string;
    email_label: string;
    message_label: string;
    send_label: string;
  };
  footer: {
    text: string;
    projects_label: string;
    writeups_label: string;
    contact_label: string;
  };
};
