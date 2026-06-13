import { fail } from '@sveltejs/kit';
import { createSupabaseAdminClient } from '$lib/server/supabase';
import { contactSchema, formEntries } from '$lib/utils/validation';

export const actions = {
  default: async ({ request }) => {
    const parsed = contactSchema.safeParse(formEntries(await request.formData()));
    if (!parsed.success) return fail(400, { error: 'Please complete the contact form correctly.' });

    const supabase = createSupabaseAdminClient();
    if (supabase) {
      const { error } = await supabase.from('contact_messages').insert(parsed.data);
      if (error) return fail(500, { error: error.message });
    }

    return { success: true };
  }
};
