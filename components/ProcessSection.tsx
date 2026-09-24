'use client';

import React from 'react';
import { useClientConfig } from '@/context/ClientConfigContext';

export function ProcessSection() {
  const { config } = useClientConfig();
  const steps = config.process;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#B68D40] block mb-2">
            THE DESIGN ROADMAP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal uppercase tracking-[0.08em] text-[#1C261D]">
            From Your Ideas to Your Finished Space
          </h2>
          <div className="w-12 h-[2px] bg-[#B68D40] mx-auto mt-3 mb-5" />
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            A structured, transparent roadmap tailored to give you absolute clarity and confidence from initial concept to completion.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center md:items-start text-center md:text-left">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-5 left-10 w-full h-[1px] bg-stone-200"
                />
              )}

              {/* Step Number Badge */}
              <div className="relative z-10 w-10 h-10 rounded-xs flex items-center justify-center font-sans font-bold text-xs mb-5 shadow-2xs border border-stone-200 bg-[#FAF8F5] text-[#1C261D] group-hover:border-[#B68D40]">
                <span className="tabular-nums tracking-widest text-[#B68D40]">0{step.step}</span>
              </div>

              {/* Step Title & Details */}
              <h3 className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#1C261D] mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-xs text-stone-500 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
