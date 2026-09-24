import React from 'react';
import { defaultClientConfig } from '@/config/clientConfig';
import { DynamicIcon } from '@/components/DynamicIcon';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { ProcessSection } from '@/components/ProcessSection';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/Button';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Interior Design Services | ${defaultClientConfig.business.name}`,
  description: `Comprehensive interior design services by ${defaultClientConfig.business.name}. Full home design, renovations, space planning, and commercial interiors.`,
};

export default function ServicesPage() {
  const config = defaultClientConfig;
  const services = config.services;

  return (
    <>
      {/* 1. Services Hero */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>{config.business.category}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Complete Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Interior Design Services
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Whether you&apos;re designing a new home, refreshing an existing space, or creating a professional commercial environment, our services can be tailored to your project.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Catalog List */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 md:p-12 rounded-3xl border border-neutral-200/80 bg-neutral-50/40 shadow-xs hover:border-neutral-300 transition-colors`}
              >
                {/* Visual Thumbnail (5 cols) */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-md border border-neutral-200 aspect-16/10 bg-neutral-900 group">
                    <ImageWithFallback
                      src={service.image || config.images.defaultServiceImage}
                      alt={service.name}
                      fill
                      title={service.name}
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md text-white font-bold"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                      >
                        <DynamicIcon name={service.icon} className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content & Deliverables (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Service 0{index + 1}
                    </span>
                    {service.startingPrice && (
                      <>
                        <span className="text-neutral-300">·</span>
                        <span className="text-xs font-bold text-neutral-700">
                          {service.startingPrice}
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                    {service.name}
                  </h2>

                  <p className="text-base text-neutral-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Dual Grid: Key Benefits & What's Included */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2.5">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2.5">
                        What&apos;s Included
                      </h4>
                      <ul className="space-y-2">
                        {service.whatsIncluded.map((w, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link & Details */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button
                      href={`/services/${service.slug}`}
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                      iconPosition="right"
                    >
                      View Full Service Page
                    </Button>

                    <Button
                      href="/contact"
                      variant="secondary"
                      size="md"
                    >
                      Inquire About This Service
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Reusable Process Sequence */}
      <ProcessSection />

      {/* 4. High-Conversion CTA */}
      <CTASection />
    </>
  );
}
