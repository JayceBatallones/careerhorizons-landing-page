import { redirect } from 'next/navigation';
import { requireUser } from '@/lib/auth';
import { ensureProfile, getProfile } from '@/lib/db';

const sampleOpportunities = [
  {
    id: 'opp_1',
    title: 'Software Engineering Intern',
    company: 'Tesla',
    location: 'Palo Alto, CA',
    type: 'Internship',
    posted: '2 hours ago',
    match: 92,
  },
  {
    id: 'opp_2',
    title: 'Graduate Program (SWE)',
    company: 'Google',
    location: 'Sydney, AU',
    type: 'Graduate',
    posted: 'Today',
    match: 86,
  },
  {
    id: 'opp_3',
    title: 'Product Design Intern',
    company: 'Canva',
    location: 'Remote',
    type: 'Internship',
    posted: 'Yesterday',
    match: 80,
  },
];

export default async function OpportunitiesPage() {
  const user = await requireUser();
  await ensureProfile(user.id, user.email ?? '');
  const profile = await getProfile(user.id);

  if (!profile) redirect('/sign-in');
  if (!profile.onboarding_completed) redirect('/welcome');
  if (!profile.trial_started) redirect('/checkout/trial');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Opportunities</h1>
        <p className="text-[#8a8a9a] mt-2">
          A curated feed matched to {profile.interests?.slice(0, 3).join(', ') || 'your interests'}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleOpportunities.map((opp) => (
          <div key={opp.id} className="bg-[#0f0f14] border border-[#1a1a21] rounded-2xl p-6 hover:border-[#2a2a35] transition-colors">
            <div className="flex items-start justify-between">
              <span className="text-xs font-medium px-2 py-1 rounded bg-indigo-500/10 text-indigo-300">
                {opp.type}
              </span>
              <span className="text-xs text-[#6a6a7a]">{opp.posted}</span>
            </div>
            <h2 className="text-lg font-semibold text-white mt-3">{opp.title}</h2>
            <p className="text-[#8a8a9a] text-sm mt-1">{opp.company} • {opp.location}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-[#6a6a7a]">Match</div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 rounded-full bg-[#1a1a21] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-indigo-400" style={{ width: `${opp.match}%` }} />
                </div>
                <span className="text-xs text-[#a0a0b0]">{opp.match}%</span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="flex-1 px-4 py-2 rounded-xl bg-white text-[#0c0c0f] font-semibold hover:bg-[#f0f0f5] transition-colors">
                View
              </button>
              <button className="flex-1 px-4 py-2 rounded-xl border border-[#2a2a35] bg-[#0f0f14] text-white font-semibold hover:bg-[#1a1a21] transition-colors">
                Tailor Resume
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-[#6a6a7a]">
        Demo data: wire this to a Supabase `opportunities` table when ready.
      </p>
    </div>
  );
}
