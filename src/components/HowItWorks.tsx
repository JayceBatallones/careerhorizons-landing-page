'use client';

import { UserPlus, Search, Send, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Sign Up',
    description: 'Create your profile in 30 seconds.',
    color: 'indigo'
  },
  {
    icon: Search,
    number: '02',
    title: 'Discover',
    description: 'Find opportunities matched to your skills.',
    color: 'purple'
  },
  {
    icon: Send,
    number: '03',
    title: 'Apply',
    description: 'Tailor your resume and submit with confidence.',
    color: 'cyan'
  }
];

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    text: 'text-indigo-400'
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400'
  }
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0a0a0d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-[#1a1a21] border border-[#2a2a35] text-[#8a8a9a] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Get started in{' '}
            <span className="gradient-text">3 simple steps</span>
          </h2>
          <p className="text-[#8a8a9a] text-lg">
            From sign-up to application in minutes.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            return (
              <div key={index} className="relative group">
                {/* Connection arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[calc(100%+1rem)] w-8">
                    <ArrowRight className="w-6 h-6 text-[#3a3a4a]" />
                  </div>
                )}

                {/* Card */}
                <div className="relative bg-[#0f0f14] rounded-2xl p-8 border border-[#1a1a21] hover:border-[#2a2a35] transition-all text-center">
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${colors.bg} border ${colors.border} mb-6`}>
                      <step.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>

                    {/* Step number */}
                    <div className={`absolute top-0 right-8 text-5xl font-bold ${colors.text} opacity-10`}>
                      {step.number}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#8a8a9a] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
