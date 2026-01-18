import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function getUser() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function requireUser() {
  const user = await getUser();
  if (!user) throw new Error('Not authenticated');
  return user;
}
