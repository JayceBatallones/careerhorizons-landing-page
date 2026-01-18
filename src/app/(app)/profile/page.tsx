import { redirect } from 'next/navigation';
import { requireUser } from '@/lib/auth';
import { ensureProfile, getProfile } from '@/lib/db';
import ProfileForm from './profile-form';


export default async function ProfilePage() {
  const user = await requireUser();
  await ensureProfile(user.id, user.email ?? '');
  const profile = await getProfile(user.id);

  if (!profile) redirect('/sign-in');
  if (!profile.onboarding_completed) redirect('/welcome');
  if (!profile.trial_started) redirect('/checkout/trial');

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <p className="text-[#8a8a9a] mt-2">Update your details for better matches.</p>
      </div>

      <ProfileForm profile={profile} />
    </div>
  );
}
