'use client';

import { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function TrialCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startTrial = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/stripe/trial', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to start trial');

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      throw new Error('Missing Stripe checkout URL');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to start trial');
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0f0f14] border border-[#1a1a21] rounded-2xl p-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-white">Pro trial</h2>
          <p className="text-[#8a8a9a] mt-2">
            {process.env.NEXT_PUBLIC_TRIAL_DAYS || '7'} days free. Then $15/month. Cancel anytime.
          </p>
          <ul className="mt-6 space-y-3 text-[#a0a0b0]">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Unlimited resume tailoring
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> All open opportunities
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Instant notifications
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[#6a6a7a] text-sm">
          <ShieldCheck className="w-4 h-4" />
          Secure checkout
        </div>
      </div>

      {error && (
        <div className="mt-6 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
          {error}
        </div>
      )}

      <button
        onClick={startTrial}
        disabled={loading}
        className="mt-8 w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#0c0c0f] font-semibold hover:bg-[#f0f0f5] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 group"
      >
        {loading ? 'Redirecting…' : 'Start free trial'}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
