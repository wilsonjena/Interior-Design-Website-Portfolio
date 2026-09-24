'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useClientConfig } from '@/context/ClientConfigContext';
import { Button } from '@/components/Button';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export function Header() {
  const { config } = useClientConfig();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'PORTFOLIO', href: '/gallery' },
    { label: 'REVIEWS', href: '/reviews' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-stone-200/80 shadow-xs'
            : 'bg-[#FAF8F5] border-stone-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark or logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group flex flex-col focus:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-900"
            >
              {config.business.logoImageUrl ? (
                <img
                  src={config.business.logoImageUrl}
                  alt={config.business.name}
                  className="h-9 w-auto object-contain"
                />
              ) : (
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.2em] text-[#1C261D] uppercase group-hover:text-stone-700 transition-colors">
                    {config.business.logoText || config.business.name}
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.35em] text-[#B68D40] uppercase block -mt-1 font-semibold">
                    INTERIORS & ARCHITECTURE
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Zone 2: Navigation Links (Clean, unboxed, spaced typography) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-xs tracking-[0.16em] uppercase font-medium transition-colors py-1 ${
                    isActive
                      ? 'text-[#1C261D] font-semibold'
                      : 'text-stone-600 hover:text-[#1C261D]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B68D40]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action Controls */}
          <div className="hidden lg:flex items-center gap-5">
            {config.contact.phone && (
              <a
                href={`tel:${config.contact.phoneRaw}`}
                className="flex items-center gap-1.5 text-xs tracking-wider text-stone-600 hover:text-[#1C261D] transition-colors"
                title={`Call ${config.contact.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#B68D40]" />
                <span className="tabular-nums font-medium">{config.contact.phone}</span>
              </a>
            )}

            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="px-6 py-2.5 whitespace-nowrap shadow-xs"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="px-3.5 py-1.5 whitespace-nowrap text-[10px]"
            >
              Consultation
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-stone-700 hover:text-[#1C261D] hover:bg-stone-100 transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#FAF8F5]/98 backdrop-blur-md flex flex-col animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-5 border-b border-stone-200">
            <div>
              <span className="font-serif text-xl tracking-[0.2em] text-[#1C261D] uppercase">
                {config.business.logoText || config.business.name}
              </span>
              <span className="font-sans text-[8px] tracking-[0.35em] text-[#B68D40] uppercase block -mt-1 font-semibold">
                INTERIORS
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-5">
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-2xl tracking-wider transition-colors ${
                      isActive ? 'text-[#B68D40] font-semibold' : 'text-[#1C261D]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-8 border-t border-stone-200 space-y-3">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Book a Consultation
              </Button>

              {config.contact.whatsapp && (
                <Button
                  href={`https://wa.me/${config.contact.whatsapp}`}
                  variant="whatsapp"
                  size="md"
                  fullWidth
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<MessageSquare className="w-4 h-4 text-emerald-600" />}
                  iconPosition="left"
                >
                  WhatsApp Chat
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
