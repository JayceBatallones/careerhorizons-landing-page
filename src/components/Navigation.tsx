'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#how-it-works', label: 'How It Works', sectionId: 'how-it-works' },
  { href: '#testimonials', label: 'Testimonials', sectionId: 'testimonials' },
  { href: '#faq', label: 'FAQ', sectionId: 'faq' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleHashChange = () => {
      const sectionId = window.location.hash.replace('#', '');
      if (sectionId) {
        setActiveSection(sectionId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0c0f]/80 backdrop-blur-xl border-b border-[#2a2a35]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/careerhorizons-logo.svg"
              alt="Career Horizons"
              width={32}
              height={32}
              className="h-8 w-8 group-hover:opacity-90 transition-opacity"
              priority
            />
            <span className="text-white text-lg font-semibold group-hover:opacity-90 transition-opacity">
              Career Horizons
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.sectionId
                    ? 'text-white'
                    : 'text-[#8a8a9a] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-[#8a8a9a] hover:text-white text-sm font-medium transition-colors px-4 py-2">
              Sign In
            </button>
            <button className="bg-white text-[#0c0c0f] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#f0f0f5] transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#1a1a21] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0f] border-t border-[#2a2a35]">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-medium py-2 transition-colors ${
                  activeSection === link.sectionId
                    ? 'text-white'
                    : 'text-[#8a8a9a] hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-[#2a2a35]">
              <button className="w-full text-[#8a8a9a] font-medium py-2.5 rounded-lg hover:bg-[#1a1a21] transition-colors">
                Sign In
              </button>
              <button className="w-full bg-white text-[#0c0c0f] py-2.5 rounded-lg font-medium hover:bg-[#f0f0f5] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
