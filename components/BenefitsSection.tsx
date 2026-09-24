'use client';

import React from 'react';
import { useClientConfig } from '@/context/ClientConfigContext';
import { DynamicIcon } from '@/components/DynamicIcon';

export function BenefitsSection() {
  const { config } = useClientConfig();
  const benefits = config.benefits;

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#B68D40] block mb-2">
            DESIGN PHILOSOPHY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal uppercase tracking-[0.08em] text-[#1C261D]">
            Why Work With an Interior Designer?
          </h2>
          <div className="w-12 h-[2px] bg-[#B68D40] mx-auto mt-3 mb-5" />
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Turn an overwhelming process into a structured, inspiring journey with tailored outcomes designed around the way you live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-stone-200/80 rounded-xs hover:border-[#B68D40]/50 transition-all duration-300 shadow-2xs group"
            >
              <div className="w-12 h-12 rounded-xs bg-[#FAF8F5] border border-stone-200/60 flex items-center justify-center mb-6 text-[#B68D40] group-hover:bg-[#1C261D] group-hover:text-white transition-colors">
                <DynamicIcon name={item.icon} className="w-6 h-6 stroke-[1.5]" />
              </div>

              <h3 className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#1C261D] mb-2.5">
                {item.title}
              </h3>

              <p className="font-sans text-xs sm:text-[13px] text-stone-500 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
