import { redirect } from 'next/navigation';
import Link from 'next/link';
import { requireUser } from '@/lib/auth';
import { ensureProfile, getProfile } from '@/lib/db';

export default async function DashboardPage() {
  const user = await requireUser();
  await ensureProfile(user.id, user.email ?? '');
  const profile = await getProfile(user.id);

  if (!profile) redirect('/sign-in');
  if (!profile.onboarding_completed) redirect('/welcome');
  if (!profile.trial_started) redirect('/checkout/trial');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-[#8a8a9a] mt-2">Welcome back, {profile.full_name ?? 'student'}.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0f0f14] border border-[#1a1a21] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">Opportunities</h2>
          <p className="text-[#8a8a9a] mb-4">Browse opportunities tailored to your interests.</p>
          <Link
            href="/opportunities"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-[#0c0c0f] font-semibold hover:bg-[#f0f0f5] transition-colors"
          >
            View opportunities
          </Link>
        </div>

        <div className="bg-[#0f0f14] border border-[#1a1a21] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">Profile</h2>
          <p className="text-[#8a8a9a] mb-4">Keep your details current for better matches.</p>
          <Link
            href="/profile"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-[#2a2a35] bg-[#0f0f14] text-white font-semibold hover:bg-[#1a1a21] transition-colors"
          >
            View profile
          </Link>
        </div>
      </div>

      <div className="bg-[#0f0f14] border border-[#1a1a21] rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-2">Quick start</h2>
        <ol className="list-decimal list-inside text-[#a0a0b0] space-y-2">
          <li>Open the opportunities board and save roles you like.</li>
          <li>Upload your resume (coming soon) and tailor it per role.</li>
          <li>Turn on notifications to apply early.</li>
        </ol>
      </div>
    </div>
  );
}
