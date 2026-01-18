import { redirect } from 'next/navigation';
import { requireUser } from '@/lib/auth';
import { ensureProfile, getProfile } from '@/lib/db';
import TrialCheckout from './trial-checkout';



export default async function TrialPage() {
  const user = await requireUser();
  await ensureProfile(user.id, user.email ?? '');
  const profile = await getProfile(user.id);

  if (!profile) redirect('/sign-in');

  if (!profile.onboarding_completed) redirect('/welcome');
  if (profile.trial_started) redirect('/dashboard');

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-white mb-2">Start your free trial</h1>
      <p className="text-[#8a8a9a] mb-8">
        Your profile is set. Next, start your trial to unlock notifications and unlimited tailoring.
      </p>
      <TrialCheckout />
    </div>
  );
}
