import Link from 'next/link';
import { requireUser } from '@/lib/auth';

export default async function BillingCancelPage() {
  await requireUser();

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-white mb-2">Trial not started</h1>
      <p className="text-[#8a8a9a] mb-8">
        No worries. You can start your free trial anytime.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/checkout/trial"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#0c0c0f] font-semibold hover:bg-[#f0f0f5] transition-colors"
        >
          Try again
        </Link>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#2a2a35] bg-[#0f0f14] text-white font-semibold hover:bg-[#1a1a21] transition-colors"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}
