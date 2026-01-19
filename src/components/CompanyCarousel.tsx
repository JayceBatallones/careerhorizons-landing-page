'use client';

import Image from 'next/image';

const companies = [
  { name: 'Tesla', logo: '/logos/tesla.svg' },
  { name: 'Amazon', logo: '/logos/amazon.svg' },
  { name: 'Microsoft', logo: '/logos/microsoft.svg' },
  { name: 'Atlassian', logo: '/logos/atlassian.svg' },
  { name: 'Canva', logo: '/logos/canva.svg' },
  { name: 'Google', logo: '/logos/google.svg' },
];

export default function CompanyCarousel() {
  return (
    <section className="py-16 border-y border-[#1a1a21] bg-[#0a0a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <p className="text-center text-[#6a6a7a] text-sm font-medium mb-12 tracking-wide uppercase">
          Find opportunities at companies like
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0d] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0d] to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            <div className="flex items-center gap-16 px-8">
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 grayscale opacity-40 hover:opacity-60 transition-opacity duration-300 min-w-[120px] flex items-center justify-center"
                  title={company.name}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={48}
                    className="h-10 w-auto max-w-[120px]"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-16 px-8">
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 grayscale opacity-40 hover:opacity-60 transition-opacity duration-300 min-w-[120px] flex items-center justify-center"
                  title={company.name}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={48}
                    className="h-10 w-auto max-w-[120px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
