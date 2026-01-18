import { redirect } from 'next/navigation';
import { requireUser } from '@/lib/auth';
import { ensureProfile, getProfile } from '@/lib/db';
import WelcomeForm from './welcome-form';


export default async function WelcomePage() {
  const user = await requireUser();
  await ensureProfile(user.id, user.email ?? '');
  const profile = await getProfile(user.id);

  if (!profile) {
    redirect('/sign-in');
  }

  if (profile.onboarding_completed) {
    // If onboarding done but trial not started, send to trial flow
    if (!profile.trial_started) redirect('/checkout/trial');
    redirect('/dashboard');
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-white mb-2">Welcome to Career Horizons</h1>
      <p className="text-[#8a8a9a] mb-8">
        Tell us a bit about you so we can tailor opportunities and resume suggestions.
      </p>
      <WelcomeForm defaultEmail={profile.email} />
    </div>
  );
}
