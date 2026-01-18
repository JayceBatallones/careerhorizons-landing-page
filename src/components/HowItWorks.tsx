'use client';

import { UserPlus, Search, FileEdit, Send, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Create Your Profile',
    description: 'Sign up in 30 seconds. Tell us your skills, interests, and career goals.',
    color: 'indigo',
    features: ['Quick setup', 'Skills tagging', 'Goal setting']
  },
  {
    icon: Search,
    number: '02',
    title: 'Discover Opportunities',
    description: 'Browse curated internships, graduate programs, and events matched to you.',
    color: 'purple',
    features: ['Smart matching', 'Advanced filters', 'Real-time updates']
  },
  {
    icon: FileEdit,
    number: '03',
    title: 'Tailor Your Resume',
    description: 'Our AI optimizes your resume for each role. Beat the ATS every time.',
    color: 'cyan',
    features: ['AI-powered', 'ATS optimized', 'Instant results']
  },
  {
    icon: Send,
    number: '04',
    title: 'Apply & Track',
    description: 'Submit applications with confidence and track your progress in one place.',
    color: 'emerald',
    features: ['One-click apply', 'Status tracking', 'Deadline alerts']
  }
];

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    text: 'text-indigo-400',
    glow: 'from-indigo-500/20'
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    glow: 'from-purple-500/20'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    glow: 'from-cyan-500/20'
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    glow: 'from-emerald-500/20'
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
            Land Your Dream Job in{' '}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-[#8a8a9a] text-lg">
            From sign-up to offer letter. Our streamlined process gets you there faster.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            return (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px">
                    <div className="h-full bg-gradient-to-r from-[#2a2a35] via-[#3a3a4a] to-[#2a2a35]" />
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3a3a4a]" />
                  </div>
                )}

                {/* Card */}
                <div className={`relative bg-[#0f0f14] rounded-2xl p-8 border border-[#1a1a21] hover:border-[#2a2a35] transition-all h-full group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-black/20`}>
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative">
                    {/* Step number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} border ${colors.border}`}>
                        <step.icon className={`w-7 h-7 ${colors.text}`} />
                      </div>
                      <span className={`text-4xl font-bold ${colors.text} opacity-20`}>{step.number}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#8a8a9a] mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feature, i) => (
                        <span key={i} className="inline-block px-3 py-1 rounded-full bg-[#1a1a21] text-[#6a6a7a] text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-[#1a1a21] via-[#0f0f14] to-[#1a1a21] border border-[#2a2a35]">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-1">
                Ready to start your journey?
              </h3>
              <p className="text-[#6a6a7a] text-sm">
                Join 10,000+ students already using Career Horizons
              </p>
            </div>
            <button className="bg-white text-[#0c0c0f] px-6 py-3 rounded-xl font-semibold hover:bg-[#f0f0f5] transition-colors flex items-center gap-2 whitespace-nowrap">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
