import { requireAdmin } from '$lib/server/auth';

export async function load({ cookies }) {
  return requireAdmin(cookies);
}
