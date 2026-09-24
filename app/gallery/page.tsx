import React from 'react';
import { defaultClientConfig } from '@/config/clientConfig';
import { GallerySection } from '@/components/GallerySection';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { CTASection } from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Design Portfolio & Gallery | ${defaultClientConfig.business.name}`,
  description: `Explore our work across living rooms, bedrooms, kitchens, full home residences, and professional commercial spaces.`,
};

export default function GalleryPage() {
  return (
    <>
      {/* 1. Projects / Gallery Hero */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>{defaultClientConfig.business.category}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Design Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Spaces We&apos;ve Designed
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Take a look at some of our recent interior-design projects and see how thoughtful design can transform a space. Explore our work across homes, rooms, and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Before & After Transformation Section */}
      <BeforeAfterSection />

      {/* 3. Full Gallery with Category Filters & Lightbox */}
      <GallerySection
        showFilters={true}
        showViewAll={false}
        customHeading="Inspiration for Your Space"
        customSupportingCopy="Explore our work across living rooms, bedrooms, kitchens, full home residences, and professional commercial spaces."
      />

      {/* 4. Call To Action Strip */}
      <CTASection />
    </>
  );
}
