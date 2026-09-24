'use client';

import React, { useState } from 'react';
import { useClientConfig } from '@/context/ClientConfigContext';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/Button';
import { Star, ExternalLink, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ReviewsPage() {
  const { config } = useClientConfig();
  const [selectedRating, setSelectedRating] = useState<number | 'all'>('all');

  const testimonials = config.testimonials;
  const filtered = selectedRating === 'all'
    ? testimonials
    : testimonials.filter(t => t.rating === selectedRating);

  const overallRating = config.mapsAndReviews.overallRating || 4.9;
  const reviewCount = config.mapsAndReviews.reviewCount || '140+';

  return (
    <>
      {/* 1. Reviews Hero */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>What Our Clients Say</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Interior Design Experiences</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Client Reviews & Experiences
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              The best way to understand the experience is to hear from the people we&apos;ve worked with. Explore feedback from homeowners, apartment residents, and business owners who entrusted their spaces to our studio.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Rating Overview Dashboard & Google Reviews Link */}
      <section className="py-12 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 bg-neutral-50/70 rounded-3xl border border-neutral-200">
            {/* Score box (4 cols) */}
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-neutral-200 pb-6 md:pb-0 md:pr-8">
              <div className="text-5xl font-extrabold text-neutral-900 tabular-nums">
                {overallRating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 my-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500" />
                ))}
              </div>
              <div className="text-xs font-semibold text-neutral-600">
                Based on <span className="font-bold text-neutral-900">{reviewCount}</span> verified ratings
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                {config.mapsAndReviews.ratingDisclaimer}
              </div>
            </div>

            {/* Credibility highlights (5 cols) */}
            <div className="md:col-span-5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-neutral-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Verified customer project feedback</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Licensed, insured & guaranteed workmanship</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent quotes with no hidden fees</span>
              </div>
            </div>

            {/* External Google Review CTA (3 cols) */}
            <div className="md:col-span-3 flex flex-col items-center md:items-end gap-3">
              {config.mapsAndReviews.googleReviewsUrl && (
                <Button
                  href={config.mapsAndReviews.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="light"
                  size="md"
                  icon={<ExternalLink className="w-3.5 h-3.5 text-[#B68D40]" />}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  Leave A Google Review
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Testimonials Grid & Sample Notice */}
      <section className="py-20 md:py-24 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transparency Disclaimer Notice */}
          <div className="mb-10 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Sample Reviews Notice:</strong> In this master template, the testimonials below are clearly designated sample placeholders. When customizing for a real business client, simply replace the testimonials in <code className="font-mono text-amber-950 font-bold">config.testimonials</code> with real client reviews.
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map(item => (
              <div
                key={item.id}
                className="flex flex-col justify-between bg-neutral-50/50 rounded-2xl border border-neutral-200/80 p-7 shadow-xs relative"
              >
                <div>
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-3">
                    Sample Review Placeholder
                  </div>

                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating ? 'fill-amber-500' : 'text-neutral-200 fill-neutral-200'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">
                      {item.customerName}
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {item.roleOrLocation} {item.serviceUsed ? `· ${item.serviceUsed}` : ''}
                    </p>
                  </div>
                  {item.date && (
                    <span className="text-[11px] text-neutral-400">
                      {item.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call To Action Strip */}
      <CTASection />
    </>
  );
}
