'use client';

import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/config/clientConfig';
import { DynamicIcon } from '@/components/DynamicIcon';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between bg-white border border-stone-200/80 p-6 sm:p-7 transition-all duration-300 hover:border-[#B68D40]/60 hover:shadow-md text-center rounded-xs"
    >
      <div>
        {/* Architectural Icon (Centered, gold/bronze matching reference) */}
        <div className="w-14 h-14 mx-auto mb-5 rounded-xs bg-[#FAF8F5] border border-stone-200/60 flex items-center justify-center text-[#B68D40] transition-colors group-hover:bg-[#1C261D] group-hover:text-white group-hover:border-[#1C261D]">
          <DynamicIcon name={service.icon} className="w-6 h-6 stroke-[1.5]" />
        </div>

        {/* Uppercase Service Title */}
        <h3 className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#1C261D] mb-3 group-hover:text-[#B68D40] transition-colors">
          {service.name}
        </h3>

        {/* Short Editorial Description */}
        <p className="font-sans text-xs text-stone-500 font-light leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* Subtle Link Indicator */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-stone-400 group-hover:text-[#1C261D] transition-colors">
        <span>Details</span>
        <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
