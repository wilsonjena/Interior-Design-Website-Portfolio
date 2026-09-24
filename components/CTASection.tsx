'use client';

import React from 'react';
import Link from 'next/link';
import { useClientConfig } from '@/context/ClientConfigContext';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Button } from '@/components/Button';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';

export function CTASection() {
  const { config } = useClientConfig();
  const cta = config.cta;

  // Panoramic dining room photo with warm lighting matching the reference CTA banner
  const bannerImageSrc =
    config.images.ctaBannerImage && !config.images.ctaBannerImage.endsWith('.svg')
      ? config.images.ctaBannerImage
      : 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2000&q=85';

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-stone-800">
      {/* Panoramic Architectural Background Photo */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={bannerImageSrc}
          alt="Panoramic luxury dining room and architectural interior"
          fill
          className="object-cover"
          title="Architectural Space"
        />
        {/* Deep Architectural Forest/Charcoal Scrim (Matching Reference Mood) */}
        <div className="absolute inset-0 bg-[#1C261D]/88 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-[0.06em] uppercase text-white leading-tight max-w-3xl mx-auto">
          {cta.headline || "Let's Create Something Extraordinary Together"}
        </h2>

        <p className="font-sans text-sm sm:text-base text-stone-300 font-light mt-4 mb-9 max-w-xl mx-auto leading-relaxed">
          {cta.subheadline || "Your dream space is just a conversation away. Tell us about your vision and let's explore what's possible."}
        </p>

        {/* Action Buttons (Gold/Bronze 'GET IN TOUCH' Button Matching Reference) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            iconPosition="right"
          >
            Get In Touch
          </Button>

          {config.contact.whatsapp && (
            <Button
              href={`https://wa.me/${config.contact.whatsapp}`}
              variant="outline-white"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
              iconPosition="left"
            >
              WhatsApp Us
            </Button>
          )}

          {config.contact.phone && (
            <Button
              href={`tel:${config.contact.phoneRaw}`}
              variant="outline-white"
              size="lg"
              icon={<Phone className="w-4 h-4 text-[#B68D40]" />}
              iconPosition="left"
            >
              <span className="tabular-nums">{config.contact.phone}</span>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
