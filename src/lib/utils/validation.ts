import { z } from 'zod';

const optionalUrl = z.string().trim().url().or(z.literal('')).default('');

export const projectSchema = z.object({
  title: z.string().trim().min(3),
  slug: z.string().trim().min(3),
  short_description: z.string().trim().min(12),
  content: z.string().trim().min(20),
  category: z.string().trim().min(2),
  cover_image: optionalUrl,
  github_url: optionalUrl,
  demo_url: optionalUrl,
  video_url: optionalUrl,
  featured: z.coerce.boolean().default(false),
  status: z.enum(['draft', 'published']).default('draft')
});

export const postSchema = z.object({
  title: z.string().trim().min(3),
  slug: z.string().trim().min(3),
  content: z.string().trim().min(20),
  cover_image: optionalUrl,
  category: z.string().trim().min(2),
  status: z.enum(['draft', 'published']).default('draft')
});

export const certificateSchema = z.object({
  title: z.string().trim().min(3),
  issuer: z.string().trim().min(2),
  issue_date: z.string().trim().min(8),
  credential_url: optionalUrl,
  image_url: optionalUrl
});

export const galleryImageSchema = z.object({
  title: z.string().trim().min(2),
  image_url: z.string().trim().url(),
  caption: z.string().trim().default(''),
  sort_order: z.coerce.number().int().min(0).default(0),
  status: z.enum(['draft', 'published']).default('published')
});

export const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  message: z.string().trim().min(12).max(2000)
});

export function formEntries(formData: FormData) {
  return Object.fromEntries(formData.entries());
}
