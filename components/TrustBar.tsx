'use client';

import React from 'react';
import { useClientConfig } from '@/context/ClientConfigContext';
import { Compass, Sparkles, LayoutGrid, Clock, Star } from 'lucide-react';

export function TrustBar() {
  const { config } = useClientConfig();
  const tb = config.trustBar;

  const features = [
    {
      icon: Compass,
      title: 'BESPOKE DESIGNS',
      description: 'Tailored to your needs',
      metric: tb.clientsServed || '140+ Spaces'
    },
    {
      icon: Sparkles,
      title: 'PREMIUM QUALITY',
      description: 'Luxury in every detail',
      metric: tb.rating ? `${tb.rating} Google Rating` : '5-Star Rated'
    },
    {
      icon: LayoutGrid,
      title: 'FUNCTIONAL SPACES',
      description: 'Designs that work',
      metric: tb.yearsInBusiness || '10+ Years'
    },
    {
      icon: Clock,
      title: 'ON-TIME DELIVERY',
      description: 'Your time, our priority',
      metric: tb.serviceArea || 'Design District'
    }
  ];

  return (
    <section className="bg-[#1C261D] text-stone-100 py-8 sm:py-10 border-y border-stone-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Eyebrow Title */}
        <div className="text-center mb-8">
          <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#B68D40] uppercase">
            {tb.headline || 'Trusted by homeowners and businesses to create beautiful, functional spaces.'}
          </p>
        </div>

        {/* 4-Item Grid with Thin Vertical Dividers (Exact Match to Reference Bar) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 ${
                  index !== 0 ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-8' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xs bg-stone-900/80 border border-stone-700/60 flex items-center justify-center shrink-0 text-[#B68D40]">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-white truncate">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-stone-400 font-light mt-0.5 truncate">
                    {item.description}
                  </p>
                  <span className="inline-block mt-1 font-sans text-[10px] tracking-wider text-[#B68D40]/90 font-medium">
                    {item.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
