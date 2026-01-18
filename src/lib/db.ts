import { createSupabaseServerClient } from '@/lib/supabase/server';

export type UserProfile = {
  id: string;
  email: string;
  full_name: string | null;
  university: string | null;
  degree: string | null;
  graduation_year: number | null;
  location: string | null;
  interests: string[] | null;
  onboarding_completed: boolean;
  trial_started: boolean;
  created_at: string;
  updated_at: string;
};

export async function getProfile(userId: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) return null;
  return data as UserProfile;
}

export async function ensureProfile(userId: string, email: string) {
  const supabase = await createSupabaseServerClient();

  const { data: existing } = await supabase
    .from('profiles')
    .select('id')
    .eq('id', userId)
    .maybeSingle();

  if (existing?.id) return;

  await supabase.from('profiles').insert({
    id: userId,
    email,
    onboarding_completed: false,
    trial_started: false,
  });
}

export async function markOnboardingComplete(userId: string) {
  const supabase = await createSupabaseServerClient();
  await supabase.from('profiles').update({ onboarding_completed: true }).eq('id', userId);
}

export async function markTrialStarted(userId: string, stripeCustomerId?: string | null) {
  const supabase = await createSupabaseServerClient();
  await supabase
    .from('profiles')
    .update({ trial_started: true, stripe_customer_id: stripeCustomerId ?? null })
    .eq('id', userId);
}
