'use client';

import React from 'react';
import Link from 'next/link';
import { useClientConfig } from '@/context/ClientConfigContext';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export function ServicesSection({ limit, showViewAll = true }: ServicesSectionProps) {
  const { config } = useClientConfig();
  const services = limit ? config.services.slice(0, limit) : config.services;

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Centered Editorial Serif (Matching Reference) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal uppercase tracking-[0.1em] text-[#1C261D]">
            Our Services
          </h2>
          <div className="w-12 h-[2px] bg-[#B68D40] mx-auto mt-3 mb-5" />
          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Whether designing a private residence, refreshing a core living space, or establishing a commercial environment, our architectural design approach is tailored to your scope.
          </p>
        </div>

        {/* 5-Column or Adaptive Grid (Matching Reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* View All Services Link */}
        {showViewAll && config.services.length > (limit || 0) && (
          <div className="mt-14 text-center">
            <Button
              href="/services"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Explore All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
