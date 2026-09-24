'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useClientConfig } from '@/context/ClientConfigContext';
import { Button } from '@/components/Button';
import { ArrowRight, Sliders, CheckCircle2, Sparkles } from 'lucide-react';

export function BeforeAfterSection() {
  const { config } = useClientConfig();
  const ba = config.beforeAfter;

  const [activeTab, setActiveTab] = useState<'after' | 'before' | 'split'>('after');
  const [sliderPos, setSliderPos] = useState(50);

  if (!ba || !ba.enabled) return null;

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#B68D40] block mb-2">
              TRANSFORMATION SHOWCASE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-wide text-[#1C261D] leading-tight">
              {ba.heading}
            </h2>
            <div className="w-12 h-[2px] bg-[#B68D40] mt-3 mb-4" />
            <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              {ba.supportingCopy}
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-stone-200/80 rounded-full shadow-2xs">
            <Button
              variant="filter"
              size="sm"
              isActive={activeTab === 'after'}
              onClick={() => setActiveTab('after')}
            >
              After Design
            </Button>
            <Button
              variant="filter"
              size="sm"
              isActive={activeTab === 'before'}
              onClick={() => setActiveTab('before')}
            >
              Before State
            </Button>
            <Button
              variant="filter"
              size="sm"
              isActive={activeTab === 'split'}
              onClick={() => setActiveTab('split')}
            >
              Interactive Slider
            </Button>
          </div>
        </div>

        {/* Transformation Showcase Container */}
        <div className="rounded-xs border border-stone-200/80 bg-stone-900 overflow-hidden shadow-xl">
          {activeTab === 'split' ? (
            /* Interactive Slider Mode */
            <div className="relative aspect-16/10 md:aspect-21/9 w-full select-none overflow-hidden group">
              {/* After image (Background) */}
              <img
                src={ba.afterImage}
                alt="After interior transformation"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before image (Clipped Foreground) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={ba.beforeImage}
                  alt="Before state"
                  className="absolute inset-y-0 left-0 h-full object-cover"
                  style={{ width: '100vw', maxWidth: 'none' }}
                />
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#B68D40] cursor-ew-resize flex items-center justify-center -ml-0.5 shadow-lg"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-[#1C261D] text-white shadow-xl flex items-center justify-center text-xs font-bold border border-[#B68D40]">
                  <Sliders className="w-4 h-4 text-[#B68D40]" />
                </div>
              </div>

              {/* Slider Input Range overlay for tactile scrubbing */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={e => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                aria-label="Drag to compare before and after transformation"
              />

              {/* Corner Badges */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1 bg-black/75 backdrop-blur-xs text-stone-200 text-xs font-bold tracking-widest uppercase rounded-xs border border-white/20">
                  BEFORE
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <span className="px-3 py-1 bg-[#B68D40]/90 backdrop-blur-xs text-white text-xs font-bold tracking-widest uppercase rounded-xs border border-white/30">
                  AFTER
                </span>
              </div>
            </div>
          ) : (
            /* Toggle Single Mode */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-8 relative aspect-16/10 md:aspect-16/9 bg-stone-950">
                <img
                  src={activeTab === 'after' ? ba.afterImage : ba.beforeImage}
                  alt={activeTab === 'after' ? ba.afterTitle : ba.beforeTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-xs ${
                      activeTab === 'after'
                        ? 'bg-[#B68D40] text-white'
                        : 'bg-stone-900 text-stone-300 border border-stone-700'
                    }`}
                  >
                    {activeTab === 'after' ? 'AFTER TRANSFORMATION' : 'BEFORE DESIGN'}
                  </span>
                </div>
              </div>

              {/* Text explanation column */}
              <div className="lg:col-span-4 p-8 bg-[#1C261D] text-white space-y-4">
                <div className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#B68D40] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Transformation Story</span>
                </div>

                <h3 className="font-serif text-2xl font-normal tracking-wide text-white">
                  {activeTab === 'after' ? ba.afterTitle : ba.beforeTitle}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  {activeTab === 'after' ? ba.afterDescription : ba.beforeDescription}
                </p>

                <div className="pt-2 border-t border-stone-800 text-xs text-stone-400">
                  {activeTab === 'after' ? (
                    <div className="flex items-center gap-2 text-[#B68D40]">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Warm layered lighting, curated joinery, natural stone</span>
                    </div>
                  ) : (
                    <span className="text-stone-400">
                      Raw floor layout prior to spatial planning and material specifications.
                    </span>
                  )}
                </div>

                <div className="pt-4">
                  <Button
                    onClick={() => setActiveTab(activeTab === 'after' ? 'before' : 'after')}
                    variant="outline-white"
                    size="md"
                    fullWidth
                  >
                    Switch to View {activeTab === 'after' ? 'Before State' : 'After State'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section Bottom Links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="font-sans text-stone-500 font-light">
            Have an unfinished space or planning a complete room overhaul?
          </span>
          <Button
            href="/gallery"
            variant="secondary"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            iconPosition="right"
          >
            {ba.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
