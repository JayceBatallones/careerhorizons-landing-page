'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The resume tailoring feature is a game-changer. I got 5 interviews in my first week.",
    author: "Liang C",
    role: "SWE Intern @ Microsoft",
    university: "Monash '26",
    avatar: "LC"
  },
  {
    quote: "The notification system meant I was one of the first to apply. That's why I got the interview.",
    author: "David S",
    role: "SWE Grad @ AWS ",
    university: "University of Melbourne '25",
    avatar: "DS"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0c0c0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-indigo-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a1a21] border border-[#2a2a35] text-[#8a8a9a] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Early feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            See what early users are{' '}
            <span className="gradient-text">saying</span>
          </h2>
          <p className="text-[#8a8a9a] text-lg">
            Real feedback from students testing Career Horizons.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-[#0f0f14] rounded-2xl p-6 border border-[#1a1a21] hover:border-[#2a2a35] transition-all hover:translate-y-[-2px]"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-indigo-500/20 mb-3" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[#a0a0b0] mb-4 leading-relaxed text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-[#6a6a7a] text-xs">
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
