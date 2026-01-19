'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/CareerHorizons White.svg"
              alt="Career Horizons"
              width={140}
              height={40}
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[#6a6a7a] hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
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

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#1a1a21] text-center">
          <p className="text-[#4a4a5a] text-sm">
            &copy; {new Date().getFullYear()} Career Horizons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
