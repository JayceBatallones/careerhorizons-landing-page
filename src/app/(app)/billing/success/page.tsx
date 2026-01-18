import Link from 'next/link';
import { redirect } from 'next/navigation';
import { requireUser } from '@/lib/auth';
import { getProfile } from '@/lib/db';

export default async function BillingSuccessPage() {
  const user = await requireUser();
  const profile = await getProfile(user.id);

  if (!profile?.onboarding_completed) redirect('/welcome');

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-white mb-2">Trial activated</h1>
      <p className="text-[#8a8a9a] mb-8">You&apos;re all set. Welcome to Pro.</p>

      <Link
        href="/dashboard"
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#0c0c0f] font-semibold hover:bg-[#f0f0f5] transition-colors"
      >
        Go to dashboard
      </Link>
    </div>
  );
}
