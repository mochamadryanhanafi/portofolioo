import { getSiteContent } from '$lib/server/site-content';

export async function load() {
  return {
    siteContent: await getSiteContent()
  };
}
