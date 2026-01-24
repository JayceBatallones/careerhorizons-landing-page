'use client';

import { ArrowRight } from 'lucide-react';
import AppShowcase from './AppShowcase';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-[#0c0c0f]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
            </span>
            <span>🇦🇺 For STEM Students in Australia & New Zealand 🇳🇿</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Never Miss a{' '}
            <span className="relative">
              <span className="gradient-text">Career Opportunity</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#6366f1" />
                    <stop offset="0.5" stopColor="#a855f7" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#8a8a9a] max-w-2xl mx-auto mb-10 leading-relaxed">
            Your all-in-one platform for STEM internships, graduate programs, and industry events across Australia and New Zealand. Get instant alerts and AI-powered resume tailoring.
          </p>

          <div className="flex flex-col items-center justify-center mb-14">
            <button className="w-full sm:w-auto group relative overflow-hidden bg-white text-[#0c0c0f] px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-white/10 flex items-center justify-center gap-2">
              <span className="relative z-10">Start Free Today</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl -z-10 translate-y-20" />
          <AppShowcase />
        </div>
      </div>
    </section>
  );
}
