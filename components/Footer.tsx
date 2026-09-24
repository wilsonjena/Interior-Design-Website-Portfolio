'use client';

import React from 'react';
import Link from 'next/link';
import { useClientConfig } from '@/context/ClientConfigContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  ArrowRight
} from 'lucide-react';

export function Footer() {
  const { config } = useClientConfig();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: config.social.instagram, icon: Instagram },
    { name: 'Facebook', url: config.social.facebook, icon: Facebook },
    { name: 'LinkedIn', url: config.social.linkedin, icon: Linkedin },
    { name: 'YouTube', url: config.social.youtube, icon: Youtube },
    { name: 'X (Twitter)', url: config.social.x, icon: Twitter }
  ].filter(s => Boolean(s.url && s.url.trim().length > 0));

  return (
    <footer className="bg-[#FAF8F5] text-stone-700 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-200/80">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              {config.business.logoImageUrl ? (
                <img
                  src={config.business.logoImageUrl}
                  alt={config.business.name}
                  className="h-9 w-auto object-contain"
                />
              ) : (
                <div>
                  <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.2em] text-[#1C261D] uppercase">
                    {config.business.logoText || config.business.name}
                  </span>
                  <span className="font-sans text-[8px] tracking-[0.35em] text-[#B68D40] uppercase block -mt-1 font-semibold">
                    INTERIORS & ARCHITECTURE
                  </span>
                </div>
              )}
            </Link>

            <p className="font-sans text-xs sm:text-sm text-stone-500 font-light leading-relaxed max-w-sm">
              {config.business.name} is an architectural interior design studio dedicated to crafting bespoke residential and commercial spaces that harmonize elegance, comfort, and timeless beauty.
            </p>

            {/* Social Media Icons */}
            {socialLinks.length > 0 && (
              <div className="pt-2">
                <div className="flex items-center gap-2">
                  {socialLinks.map(s => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white border border-stone-200 hover:border-[#B68D40] hover:text-[#B68D40] flex items-center justify-center transition-colors text-stone-600 shadow-2xs"
                        aria-label={s.name}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold text-[#1C261D] uppercase tracking-[0.2em]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <Link href="/" className="text-stone-600 hover:text-[#1C261D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-600 hover:text-[#1C261D] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-stone-600 hover:text-[#1C261D] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-stone-600 hover:text-[#1C261D] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-stone-600 hover:text-[#1C261D] transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-600 hover:text-[#1C261D] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold text-[#1C261D] uppercase tracking-[0.2em]">
              Our Services
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              {config.services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-stone-600 hover:text-[#1C261D] transition-colors truncate block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Studio Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold text-[#1C261D] uppercase tracking-[0.2em]">
              Contact Us
            </h4>
            <div className="space-y-2.5 font-sans text-xs text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B68D40] shrink-0 mt-0.5" />
                <span className="leading-snug">{config.contact.address.fullFormatted}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B68D40] shrink-0" />
                <a
                  href={`tel:${config.contact.phoneRaw}`}
                  className="hover:text-[#1C261D] transition-colors tabular-nums font-medium"
                >
                  {config.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B68D40] shrink-0" />
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-[#1C261D] transition-colors truncate"
                >
                  {config.contact.email}
                </a>
              </div>

              {config.contact.businessHours[0] && (
                <div className="flex items-start gap-2 pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#B68D40] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-stone-500">
                    {config.contact.businessHours[0].days}: {config.contact.businessHours[0].hours}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sub-Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-stone-500">
          <div>
            &copy; {currentYear} {config.business.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-stone-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-stone-900 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-stone-900 transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>

      {/* Signature Golden Brand Strip (Exact Match to Reference Bottom Band) */}
      <div className="bg-[#B68D40] text-white text-center py-2 px-4 text-[10px] tracking-[0.25em] uppercase font-semibold">
        DESIGNED WITH PASSION. BUILT TO INSPIRE.
      </div>
    </footer>
  );
}
