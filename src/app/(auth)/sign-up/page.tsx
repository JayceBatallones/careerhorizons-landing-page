'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser';

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const redirectTo = `${window.location.origin}/auth/callback`;

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectTo,
        },
      });

      if (signUpError) throw signUpError;

      // If email confirmations are enabled, session may be null.
      if (!data.session) {
        setInfo('Check your email to confirm your account, then come back to sign in.');
        return;
      }

      router.push('/welcome');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0f] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#0f0f14] border border-[#1a1a21] rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
        <p className="text-[#8a8a9a] mb-8">Start free. Upgrade when you&apos;re ready.</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#a0a0b0] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a21] border border-[#2a2a35] text-white placeholder-[#6a6a7a] focus:outline-none focus:border-indigo-500/50"
              placeholder="you@university.edu"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#a0a0b0] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a21] border border-[#2a2a35] text-white placeholder-[#6a6a7a] focus:outline-none focus:border-indigo-500/50"
              placeholder="At least 8 characters"
              minLength={8}
              required
            />
          </div>

          {error && (
            <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
              {error}
            </div>
          )}

          {info && (
            <div className="text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
              {info}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white text-[#0c0c0f] font-semibold hover:bg-[#f0f0f5] transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating…' : 'Create account'}
          </button>
        </form>

        <p className="mt-6 text-sm text-[#6a6a7a]">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-indigo-400 hover:text-indigo-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
