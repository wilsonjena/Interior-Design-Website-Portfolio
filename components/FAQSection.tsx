'use client';

import React, { useState } from 'react';
import { useClientConfig } from '@/context/ClientConfigContext';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const { config } = useClientConfig();
  const faqItems = config.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] uppercase text-[#B68D40] block mb-2">
            DESIGN ADVICE & ANSWERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal uppercase tracking-[0.08em] text-[#1C261D]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[2px] bg-[#B68D40] mx-auto mt-3 mb-5" />
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Everything you need to know about our interior design workflow, consultation process, and project deliverables.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-stone-200 border-y border-stone-200 bg-white p-6 sm:p-8 rounded-xs shadow-2xs">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-sm sm:text-base font-semibold tracking-wide text-[#1C261D] group-hover:text-[#B68D40] transition-colors pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-full text-stone-400 group-hover:text-[#1C261D] bg-[#FAF8F5] border border-stone-200 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#B68D40] border-[#B68D40]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8 font-sans text-xs sm:text-sm text-stone-500 leading-relaxed font-light animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
