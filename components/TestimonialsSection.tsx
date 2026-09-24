'use client';

import React from 'react';
import Link from 'next/link';
import { useClientConfig } from '@/context/ClientConfigContext';
import { Button } from '@/components/Button';
import { Star, ExternalLink, ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  showViewAll?: boolean;
}

export function TestimonialsSection({ showViewAll = true }: TestimonialsSectionProps) {
  const { config } = useClientConfig();
  const testimonials = config.testimonials;

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#B68D40] block mb-2">
            CLIENT EXPERIENCES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal uppercase tracking-[0.08em] text-[#1C261D]">
            What Our Clients Say
          </h2>
          <div className="w-12 h-[2px] bg-[#B68D40] mx-auto mt-3 mb-5" />
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            The best measure of our design practice is the lived experience of the clients who call our spaces home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(item => (
            <div
              key={item.id}
              className="p-8 bg-white border border-stone-200/80 rounded-xs flex flex-col justify-between shadow-2xs hover:border-[#B68D40]/50 transition-colors"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#B68D40] text-[#B68D40]"
                    />
                  ))}
                  <span className="ml-2 font-sans text-[10px] tracking-widest uppercase font-semibold text-stone-400">
                    5.0 RATED
                  </span>
                </div>

                {/* Review Quote in Italic Editorial Serif */}
                <blockquote className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed italic mb-6">
                  &ldquo;{item.review}&rdquo;
                </blockquote>
              </div>

              {/* Author & Project Details */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C261D]">
                    {item.customerName}
                  </div>
                  <div className="font-sans text-[11px] text-stone-500 font-light">
                    {item.roleOrLocation}
                  </div>
                </div>

                {item.serviceUsed && (
                  <span className="font-sans text-[10px] tracking-wider uppercase font-medium text-stone-500 bg-[#FAF8F5] px-2.5 py-1 border border-stone-200">
                    {item.serviceUsed}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {config.mapsAndReviews.googleReviewsUrl && (
            <Button
              href={config.mapsAndReviews.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              size="md"
              icon={<ExternalLink className="w-3.5 h-3.5 text-[#B68D40]" />}
              iconPosition="right"
            >
              Read Google Reviews
            </Button>
          )}

          {showViewAll && (
            <Button
              href="/reviews"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              View All Client Reviews
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
