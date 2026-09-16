import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // OWASP Security Headers
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Content Security Policy
  // Allow self, supabase APIs, unsplash images, and youtube iframes.
  // We use unsafe-inline for styles/scripts because SvelteKit sometimes generates inline styles/scripts for hydration.
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com",
    "connect-src 'self' https://syvdzmpmgggpzgzksbjq.supabase.co https://cloudflareinsights.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://images.unsplash.com https://syvdzmpmgggpzgzksbjq.supabase.co",
    "font-src 'self' data:",
    "frame-src 'self' https://www.youtube.com",
    "object-src 'none'",
    "base-uri 'self'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);

  // Remove Sensitive Metadata Headers
  response.headers.delete('x-powered-by');
  response.headers.delete('server');
  response.headers.delete('X-SvelteKit-Page');

  return response;
};
