import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Successful',
  description: 'Your subscription to Career Horizons has been activated successfully.',
};

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 px-4">
      <div className="max-w-md w-full text-center">
        {/* Success icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Welcome to Career Horizons Pro! Your subscription is now active.
          </p>
        </div>

        {/* Next steps */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">
            What&apos;s Next?
          </h2>
          <ul className="space-y-3 text-left">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">1</span>
              </div>
              <span className="text-slate-600 dark:text-slate-300">
                Complete your profile to get personalized recommendations
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">2</span>
              </div>
              <span className="text-slate-600 dark:text-slate-300">
                Upload your resume to unlock AI-powered tailoring
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">3</span>
              </div>
              <span className="text-slate-600 dark:text-slate-300">
                Browse opportunities and start applying!
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <Link 
          href="/dashboard"
          className="inline-flex items-center justify-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25 group"
        >
          Go to Dashboard
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          A confirmation email has been sent to your inbox.
        </p>
      </div>
    </div>
  );
}
