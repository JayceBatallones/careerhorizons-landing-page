'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/careerhorizons', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/careerhorizons', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/careerhorizons', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0f] border-t border-[#1a1a21]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/CareerHorizons White.svg"
                  alt="Career Horizons"
                  width={160}
                  height={40}
                  className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-[#8a8a9a] text-sm max-w-sm leading-relaxed">
                Career Horizons helps STEM students discover internships, graduate roles, and
                events with instant notifications and AI-powered tools.
              </p>
              <a
                href="mailto:support@careerhorizons.com"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                support@careerhorizons.com
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div className="space-y-3">
                <p className="text-white text-sm font-semibold">Explore</p>
                <div className="flex flex-col gap-2">
                  {footerLinks.slice(0, 3).map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-[#6a6a7a] hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-white text-sm font-semibold">Legal</p>
                <div className="flex flex-col gap-2">
                  {footerLinks.slice(3).map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-[#6a6a7a] hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-white text-sm font-semibold">Follow</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-[#1a1a21] hover:bg-[#222230] flex items-center justify-center transition-colors border border-[#2a2a35]"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 text-[#6a6a7a]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1a1a21] text-sm text-[#4a4a5a] text-center">
            &copy; {new Date().getFullYear()} Career Horizons. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
