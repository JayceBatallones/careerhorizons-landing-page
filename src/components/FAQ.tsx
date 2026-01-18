'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is Career Horizons really free?",
    answer: "Yes! Our free tier gives you access to the opportunity board, weekly newsletter, and 1 tailored resume per month. No credit card required. You can upgrade to Pro or Premium anytime for unlimited features."
  },
  {
    question: "How does the resume tailoring work?",
    answer: "Our AI analyzes the job description and compares it to your resume. It identifies missing keywords, suggests improvements, and optimizes formatting for ATS systems. The result? Higher match scores and more interview callbacks."
  },
  {
    question: "What types of opportunities are listed?",
    answer: "We curate internships, graduate programs, career fairs, networking events, and full-time entry-level positions from top companies worldwide. We focus on opportunities relevant to university students and recent graduates."
  },
  {
    question: "How quickly will I see new opportunities?",
    answer: "Our board is updated in real-time. Pro and Premium members get instant notifications when new opportunities matching their profile are posted. Free members see opportunities in their weekly newsletter."
  },
  {
    question: "Can international students use Career Horizons?",
    answer: "Absolutely! We specifically tag opportunities that offer visa sponsorship. You can filter by visa-friendly companies to find roles that support international applicants."
  },
  {
    question: "What's the difference between Pro and Premium?",
    answer: "Pro ($15/month) gives you unlimited resume tailoring, all opportunities, and instant notifications. Premium ($60/6 months) includes everything in Pro plus expert resume reviews, career coaching sessions, and exclusive networking events."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel anytime with no questions asked. If you cancel, you'll keep access until the end of your billing period, then automatically switch to the free tier."
  },
  {
    question: "How is Career Horizons different from LinkedIn Jobs?",
    answer: "We focus exclusively on early-career opportunities for students. Our AI resume tailoring, curated opportunity board, and instant notifications are designed specifically for landing internships and graduate roles - not general job searching."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0a0a0d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a1a21] border border-[#2a2a35] text-[#8a8a9a] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-[#8a8a9a] text-lg">
            Everything you need to know about Career Horizons.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-[#0f0f14] rounded-2xl border transition-all ${
                openIndex === index ? 'border-[#2a2a35]' : 'border-[#1a1a21]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#6a6a7a] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#8a8a9a] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#8a8a9a] mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@careerhorizons.com" 
            className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}
