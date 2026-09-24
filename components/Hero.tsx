'use client';

import React from 'react';
import Link from 'next/link';
import { useClientConfig } from '@/context/ClientConfigContext';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Button } from '@/components/Button';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export function Hero() {
  const { config } = useClientConfig();
  const b = config.business;

  // Curated hero photography matching the arched luxury living room with olive armchair from reference
  const heroImageSrc =
    config.images.heroImage && !config.images.heroImage.endsWith('.svg')
      ? config.images.heroImage
      : 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85';

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-10 pb-16 md:pt-16 md:pb-24 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Typography & Dual Buttons (6 cols on desktop) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Script Accent / Eyebrow */}
            <div className="mb-2 flex items-center gap-3">
              <span className="font-script text-2xl sm:text-3xl text-[#B68D40] font-normal tracking-wide">
                We Design
              </span>
              <span className="h-[1px] w-8 bg-[#B68D40]/40" />
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-normal uppercase tracking-[0.03em] text-[#1C261D] leading-[1.08] mb-5 text-balance">
              {b.heroHeadline || 'BEAUTIFUL SPACES THAT INSPIRE'}
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-light">
              {b.heroSupportingCopy ||
                'Luxury interior design solutions that reflect your lifestyle, architectural preferences, and personality.'}
            </p>

            {/* Dual Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <Button
                href="/gallery"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                View Our Work
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Our Services
              </Button>

              {config.contact.whatsapp && (
                <Button
                  href={`https://wa.me/${config.contact.whatsapp}`}
                  variant="whatsapp"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<MessageSquare className="w-3.5 h-3.5 text-emerald-600" />}
                  iconPosition="left"
                  className="hidden sm:inline-flex"
                >
                  WhatsApp
                </Button>
              )}
            </div>

            {/* Architectural Trust Points */}
            <div className="w-full pt-6 border-t border-stone-200/80 grid grid-cols-2 gap-4 text-xs font-medium text-stone-600 tracking-wide">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B68D40]" />
                <span>Concept to Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B68D40]" />
                <span>Bespoke Material Curation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photograph (6 cols on desktop) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 aspect-4/3 lg:aspect-5/4 bg-stone-900 group">
              <ImageWithFallback
                src={heroImageSrc}
                alt={config.images.heroImageAlt || 'Luxury arched living room with olive armchair and warm ambient lighting'}
                fill
                priority
                className="transition-transform duration-700 ease-out group-hover:scale-103"
                title="Bespoke Architectural Living Space"
              />

              {/* Subtle Architectural Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Corner Editorial Tag */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs">
                <div className="bg-[#1C261D]/80 backdrop-blur-md px-3.5 py-1.5 border border-white/10 rounded-xs">
                  <span className="font-serif tracking-widest uppercase text-[11px]">
                    {b.name}
                  </span>
                  <span className="text-[10px] text-stone-300 font-sans block">
                    Tailored Living · {config.contact.address.city}
                  </span>
                </div>

                <div className="hidden sm:block font-sans text-[11px] tracking-widest uppercase text-[#B68D40] bg-black/50 px-3 py-1.5 backdrop-blur-md rounded-xs border border-white/10">
                  {config.trustBar.yearsInBusiness}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
