'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  defaultEmail: string;
};

export default function WelcomeForm({ defaultEmail }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [fullName, setFullName] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [graduationYear, setGraduationYear] = useState<number>(new Date().getFullYear() + 1);
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState('Software Engineering, Product, Data');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/profile/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          university,
          degree,
          graduation_year: graduationYear,
          location,
          interests: interests
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save profile');

      router.push('/checkout/trial');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-sm text-[#a0a0b0] mb-2">Email</label>
          <input
            value={defaultEmail}
            disabled
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a21] border border-[#2a2a35] text-[#6a6a7a]"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm text-[#a0a0b0] mb-2">Full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a21] border border-[#2a2a35] text-white placeholder-[#6a6a7a] focus:outline-none focus:border-indigo-500/50"
            placeholder="Jane Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-[#a0a0b0] mb-2">University</label>
          <input
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a21] border border-[#2a2a35] text-white placeholder-[#6a6a7a] focus:outline-none focus:border-indigo-500/50"
            placeholder="University of ..."
            required
          />
        </div>

        <div>
          <label className="block text-sm text-[#a0a0b0] mb-2">Degree</label>
          <input
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a21] border border-[#2a2a35] text-white placeholder-[#6a6a7a] focus:outline-none focus:border-indigo-500/50"
            placeholder="Computer Science"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-[#a0a0b0] mb-2">Graduation year</label>
          <input
            type="number"
            value={graduationYear}
            onChange={(e) => setGraduationYear(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a21] border border-[#2a2a35] text-white focus:outline-none focus:border-indigo-500/50"
            min={2000}
            max={2100}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-[#a0a0b0] mb-2">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a21] border border-[#2a2a35] text-white placeholder-[#6a6a7a] focus:outline-none focus:border-indigo-500/50"
            placeholder="Sydney, AU"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm text-[#a0a0b0] mb-2">Interests</label>
          <input
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1a1a21] border border-[#2a2a35] text-white placeholder-[#6a6a7a] focus:outline-none focus:border-indigo-500/50"
            placeholder="Software Engineering, Product, Data"
          />
          <p className="mt-2 text-xs text-[#6a6a7a]">Comma-separated is fine.</p>
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#0c0c0f] font-semibold hover:bg-[#f0f0f5] transition-colors disabled:opacity-50"
      >
        {loading ? 'Saving…' : 'Continue to free trial'}
      </button>

      <p className="text-xs text-[#6a6a7a]">
        You&apos;ll start with a free trial. Cancel anytime.
      </p>
    </form>
  );
}
