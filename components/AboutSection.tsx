'use client';

import React from 'react';
import Link from 'next/link';
import { useClientConfig } from '@/context/ClientConfigContext';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Button } from '@/components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  isFullPage?: boolean;
}

export function AboutSection({ isFullPage = false }: AboutSectionProps) {
  const { config } = useClientConfig();
  const b = config.business;

  // Photo matching the architectural olive lounge chair with fireplace and shelving from reference
  const aboutImageSrc =
    config.images.aboutImage && !config.images.aboutImage.endsWith('.svg')
      ? config.images.aboutImage
      : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85';

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content Column (6 cols on desktop, Left Side matching reference) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#B68D40]">
                ABOUT US
              </span>
              <div className="w-12 h-[2px] bg-[#B68D40] mt-2" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-wide text-[#1C261D] leading-[1.14]">
              {b.storyHeadline || 'We Create Spaces That Tell Your Story'}
            </h2>

            <div className="space-y-4 font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              {b.storyText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values / Architectural Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {b.values.slice(0, 4).map((val, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B68D40] mt-2 shrink-0" />
                  <div>
                    <h4 className="font-sans text-xs font-bold tracking-wider uppercase text-[#1C261D]">
                      {val.title}
                    </h4>
                    <p className="font-sans text-[11px] text-stone-500 mt-0.5 leading-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA action (Matching reference 'MORE ABOUT US' button) */}
            {!isFullPage && (
              <div className="pt-4">
                <Button
                  href="/about"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  iconPosition="right"
                >
                  More About Us
                </Button>
              </div>
            )}
          </div>

          {/* Right Image Column (6 cols on desktop, Vertical Editorial Composition) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 aspect-4/3 sm:aspect-5/4 lg:aspect-4/3 bg-stone-900 group">
              <ImageWithFallback
                src={aboutImageSrc}
                alt={config.images.aboutImageAlt || 'Architectural lounge chair next to fireplace and natural oak shelving'}
                fill
                className="transition-transform duration-700 ease-out group-hover:scale-103"
                title="Studio Design Philosophy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#B68D40] font-bold block mb-1">
                    Design Philosophy
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-normal tracking-wide text-stone-100 max-w-md">
                    &ldquo;Architecture, tactile materials, and your personal sense of style.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
