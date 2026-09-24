'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useClientConfig } from '@/context/ClientConfigContext';
import { GalleryItem } from '@/config/clientConfig';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { LightboxModal } from '@/components/LightboxModal';
import { Button } from '@/components/Button';
import { Maximize2, ArrowRight } from 'lucide-react';

interface GallerySectionProps {
  limit?: number;
  showFilters?: boolean;
  showViewAll?: boolean;
  customHeading?: string;
  customSupportingCopy?: string;
}

export function GallerySection({
  limit,
  showFilters = true,
  showViewAll = true,
  customHeading = "Featured Projects",
  customSupportingCopy = "Take a look at some of our recent interior-design projects and see how thoughtful design can transform a space."
}: GallerySectionProps) {
  const { config } = useClientConfig();
  const allItems = config.gallery;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(allItems.map(i => i.category)))];

  // Filter items
  const filtered = selectedCategory === 'All'
    ? allItems
    : allItems.filter(i => i.category === selectedCategory);

  const displayedItems = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Editorial Header (Matching Reference 'FEATURED PROJECTS') */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal uppercase tracking-[0.1em] text-[#1C261D]">
            {customHeading}
          </h2>
          <div className="w-12 h-[2px] bg-[#B68D40] mx-auto mt-3 mb-5" />
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            {customSupportingCopy}
          </p>

          {/* Clean Editorial Category Filter Pills */}
          {showFilters && categories.length > 2 && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant="filter"
                  size="sm"
                  isActive={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="tracking-[0.14em]"
                >
                  {cat}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* 4-Column Grid on Large Screens (Exact Match to Reference 4-Card Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Subtle Zoom on Hover */}
              <div className="relative overflow-hidden aspect-4/3 bg-stone-900 border border-stone-200/80 rounded-xs shadow-xs">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fill
                  className="transition-transform duration-700 ease-out group-hover:scale-106"
                  title={item.title}
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-2.5 bg-white/90 rounded-full text-[#1C261D] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Text Information Below Image (Matching Reference Exactly) */}
              <div className="pt-3.5 text-center">
                <h3 className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#1C261D] group-hover:text-[#B68D40] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-stone-500 font-light mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button (Matching Reference Centered Button) */}
        {showViewAll && (
          <div className="mt-14 text-center">
            <Button
              href="/gallery"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>

      {/* Accessible Lightbox Modal */}
      {activeLightboxIndex !== null && displayedItems[activeLightboxIndex] && (
        <LightboxModal
          isOpen={true}
          item={displayedItems[activeLightboxIndex]}
          currentIndex={activeLightboxIndex}
          totalCount={displayedItems.length}
          onPrev={() =>
            setActiveLightboxIndex(prev =>
              prev !== null ? (prev === 0 ? displayedItems.length - 1 : prev - 1) : 0
            )
          }
          onNext={() =>
            setActiveLightboxIndex(prev =>
              prev !== null ? (prev === displayedItems.length - 1 ? 0 : prev + 1) : 0
            )
          }
          onClose={() => setActiveLightboxIndex(null)}
        />
      )}
    </section>
  );
}
