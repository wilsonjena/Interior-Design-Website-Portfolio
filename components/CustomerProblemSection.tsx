'use client';

import React from 'react';
import Link from 'next/link';
import { useClientConfig } from '@/context/ClientConfigContext';
import { Button } from '@/components/Button';
import { ArrowRight, HelpCircle, Layers, Palette, Maximize2 } from 'lucide-react';

export function CustomerProblemSection() {
  const { config } = useClientConfig();
  const ps = config.problemSection;

  if (!ps) return null;

  const problemIcons = [HelpCircle, Palette, Layers, Maximize2];

  return (
    <section className="py-20 md:py-28 bg-[#1C261D] text-white border-b border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#B68D40] block mb-2">
            THE DESIGN CHALLENGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-wide text-white leading-tight">
            {ps.heading}
          </h2>
          <div className="w-12 h-[2px] bg-[#B68D40] mt-3 mb-4" />
          <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed font-light">
            {ps.supportingCopy}
          </p>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ps.problems.map((prob, index) => {
            const Icon = problemIcons[index % problemIcons.length];
            return (
              <div
                key={index}
                className="bg-stone-900/70 border border-stone-800 rounded-xs p-6 sm:p-7 flex flex-col justify-between hover:border-[#B68D40]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xs bg-stone-800/80 border border-stone-700/60 flex items-center justify-center text-[#B68D40] mb-5 group-hover:bg-[#B68D40] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-white mb-2.5">
                    {prob.title}
                  </h3>
                  <p className="font-sans text-xs text-stone-400 font-light leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-800 flex items-center justify-between text-[10px] font-semibold tracking-widest text-stone-500 uppercase">
                  <span>Phase 0{index + 1}</span>
                  <span className="text-[#B68D40]">Overcome</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs sm:text-sm text-stone-300 font-light max-w-xl text-center sm:text-left">
            You don&apos;t have to navigate layouts, material swatches, or fixture specifications alone. We bring clarity, architectural order, and peace of mind.
          </p>
          <Button
            href="/contact"
            variant="gold"
            size="md"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            iconPosition="right"
            className="whitespace-nowrap"
          >
            {ps.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
