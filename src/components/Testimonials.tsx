'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I was applying to 50+ jobs with no responses. After using Career Horizons, I got 5 interviews in my first week. The resume tailoring feature is a game-changer.",
    author: "Sarah Chen",
    role: "SWE Intern @ Tesla",
    university: "Stanford '25",
    avatar: "SC"
  },
  {
    quote: "The notification system meant I was one of the first to apply when Google posted their graduate program. I genuinely believe that's why I got the interview.",
    author: "Marcus Johnson",
    role: "Graduate Program @ Google",
    university: "MIT '24",
    avatar: "MJ"
  },
  {
    quote: "As an international student, I needed to find visa-sponsoring companies fast. Career Horizons filtered that for me and I found my dream job in 2 weeks.",
    author: "Priya Patel",
    role: "Data Analyst @ Microsoft",
    university: "Berkeley '24",
    avatar: "PP"
  },
  {
    quote: "My resume score went from 62 to 94 after using the AI tailoring. The specific keyword suggestions were exactly what I needed to beat the ATS.",
    author: "David Kim",
    role: "Product Intern @ Canva",
    university: "UNSW '25",
    avatar: "DK"
  },
  {
    quote: "The weekly newsletter alone is worth it. I discovered 3 opportunities I never would have found otherwise. One of them turned into my current job.",
    author: "Emily Rodriguez",
    role: "UX Designer @ Atlassian",
    university: "UCLA '24",
    avatar: "ER"
  },
  {
    quote: "I upgraded to Pro and within a month had 3 offers on the table. The ROI on this tool is insane for any serious job seeker.",
    author: "James Okonkwo",
    role: "Consultant @ McKinsey",
    university: "Harvard '24",
    avatar: "JO"
  }
];

const stats = [
  { value: '10,000+', label: 'Active students' },
  { value: '85%', label: 'Land interviews' },
  { value: '3x', label: 'Faster job search' },
  { value: '4.9/5', label: 'User rating' },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0c0c0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-indigo-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a1a21] border border-[#2a2a35] text-[#8a8a9a] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Loved by students</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Students from top universities{' '}
            <span className="gradient-text">trust us</span>
          </h2>
          <p className="text-[#8a8a9a] text-lg">
            Join thousands of students who&apos;ve landed their dream internships and graduate roles.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-[#0f0f14] border border-[#1a1a21]">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-[#6a6a7a] text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-[#0f0f14] rounded-2xl p-8 border border-[#1a1a21] hover:border-[#2a2a35] transition-all hover:translate-y-[-4px] hover:shadow-xl hover:shadow-black/20"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-indigo-500/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[#a0a0b0] mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-[#6a6a7a] text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-indigo-400 text-xs">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
