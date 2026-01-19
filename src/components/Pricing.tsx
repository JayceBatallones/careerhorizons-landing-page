'use client';

import { useState } from 'react';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import { getStripe } from '@/lib/stripe';

const plans = [
  {
    name: 'Free',
    description: 'Get started with the basics',
    price: 0,
    period: 'forever',
    features: [
      { text: '1 tailored resume per month', included: true },
      { text: 'Latest opportunities', included: true },
      { text: 'Basic filtering', included: true },
      { text: 'All opportunities', included: false },
      { text: 'Instant notifications', included: false },
    ],
    cta: 'Get Started Free',
    popular: false,
    priceId: null
  },
  {
    name: 'Pro',
    description: 'For serious job seekers',
    price: 15,
    period: '/month',
    features: [
      { text: 'Unlimited resume tailoring', included: true },
      { text: 'All opportunities', included: true },
      { text: 'Instant notifications', included: true },
      { text: 'Advanced filtering', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: 'Start Pro',
    popular: true,
    priceId: 'pro_monthly'
  },
  {
    name: 'Premium',
    description: 'Best value for serious seekers',
    price: 60,
    period: '/6 months',
    originalPrice: 90,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: '6 months full access', included: true },
      { text: 'Expert resume reviews', included: true },
      { text: 'Career coaching', included: true },
      { text: 'Save $30 (33% off)', included: true },
    ],
    cta: 'Go Premium',
    popular: false,
    priceId: 'premium_6month'
  }
];

export default function Pricing() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleSubscribe = async (planName: string, priceId: string | null) => {
    if (!priceId) {
      window.location.href = '/sign-up';
      return;
    }

    setIsLoading(planName);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          planName,
        }),
      });

      const { sessionId, error } = await response.json();
      
      if (error) {
        console.error('Checkout error:', error);
        setIsLoading(null);
        return;
      }

      const stripe = await getStripe();
      if (stripe && sessionId) {
        window.location.href = `/checkout?session_id=${sessionId}`;
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
    setIsLoading(null);
  };

  return (
    <section id="pricing" className="py-24 bg-[#0a0a0d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a1a21] border border-[#2a2a35] text-[#8a8a9a] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Invest in your{' '}
            <span className="gradient-text">future</span>
          </h2>
          <p className="text-[#8a8a9a] text-lg">
            Start free. Upgrade when you&apos;re ready to get serious.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-[#0f0f14] rounded-2xl p-8 border transition-all hover:translate-y-[-4px] hover:shadow-xl hover:shadow-black/20 ${
                plan.popular 
                  ? 'border-indigo-500/50' 
                  : 'border-[#1a1a21] hover:border-[#2a2a35]'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-indigo-500/25">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Gradient glow for popular */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-2xl" />
              )}

              <div className="relative">
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-[#6a6a7a] text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    {plan.originalPrice && (
                      <span className="text-[#6a6a7a] line-through text-xl">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-5xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-[#6a6a7a]">
                      {plan.period}
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <p className="text-emerald-400 text-sm mt-2 font-medium">
                      Save ${plan.originalPrice - plan.price} (33% off)
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-[#3a3a4a] flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-[#a0a0b0]' : 'text-[#4a4a5a]'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleSubscribe(plan.name, plan.priceId)}
                  disabled={isLoading === plan.name}
                  className={`w-full py-4 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group ${
                    plan.popular 
                      ? 'bg-white text-[#0c0c0f] hover:bg-[#f0f0f5]' 
                      : 'bg-[#1a1a21] text-white hover:bg-[#222230] border border-[#2a2a35]'
                  }`}
                >
                  {isLoading === plan.name ? 'Loading...' : plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
