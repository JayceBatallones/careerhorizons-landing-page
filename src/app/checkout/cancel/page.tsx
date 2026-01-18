import Link from 'next/link';
import { XCircle, ArrowLeft, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Cancelled',
  description: 'Your payment was cancelled. You can try again or contact support.',
};

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 px-4">
      <div className="max-w-md w-full text-center">
        {/* Cancel icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
            <XCircle className="w-12 h-12 text-slate-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Payment Cancelled
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            No worries! Your payment was cancelled and you haven&apos;t been charged.
          </p>
        </div>

        {/* Options */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 mb-8">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">
            What would you like to do?
          </h2>
          <div className="space-y-3">
            <Link 
              href="/#pricing"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Pricing
            </Link>
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              Continue with Free Plan
            </Link>
          </div>
        </div>

        {/* Support */}
        <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">
            Need help?{' '}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              Contact support
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
