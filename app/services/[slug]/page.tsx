import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { defaultClientConfig } from '@/config/clientConfig';
import { DynamicIcon } from '@/components/DynamicIcon';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { ProcessSection } from '@/components/ProcessSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/Button';
import {
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
  Clock,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return defaultClientConfig.services.map(service => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = defaultClientConfig.services.find(s => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.name} | ${defaultClientConfig.business.name}`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = defaultClientConfig;
  const service = config.services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Filter gallery images that might be relevant or use first 3 gallery items
  const relevantGallery = config.gallery.slice(0, 3);

  return (
    <>
      {/* 1. Breadcrumb & Detail Hero */}
      <section className="py-14 md:py-20 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-none">
              {service.name}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <DynamicIcon name={service.icon} className="w-4 h-4" />
                <span>{config.business.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.name}
              </h1>

              <p className="text-lg text-neutral-300 max-w-2xl leading-relaxed font-light">
                {service.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  iconPosition="right"
                >
                  Book This Service
                </Button>

                {config.contact.whatsapp && (
                  <Button
                    href={`https://wa.me/${config.contact.whatsapp}`}
                    variant="outline-white"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<MessageSquare className="w-3.5 h-3.5 text-emerald-400" />}
                    iconPosition="left"
                  >
                    Quick WhatsApp Inquiry
                  </Button>
                )}
              </div>
            </div>

            {/* Quick Service Meta Box (4 cols) */}
            <div className="lg:col-span-4 bg-neutral-800/80 border border-neutral-700/80 rounded-2xl p-6 space-y-4 text-xs">
              <div className="font-bold text-white uppercase tracking-wider text-[11px] pb-2 border-b border-neutral-700">
                Service Overview
              </div>
              {service.duration && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    Estimated Timeline:
                  </span>
                  <span className="font-semibold text-white">{service.duration}</span>
                </div>
              )}
              {service.startingPrice && (
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Pricing Basis:</span>
                  <span className="font-semibold text-amber-400">{service.startingPrice}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                  Warranty:
                </span>
                <span className="font-semibold text-white">Full Workmanship Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Description & Featured Image */}
      <section className="py-20 md:py-24 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Media (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200 aspect-4/3 bg-neutral-900 sticky top-28">
                <ImageWithFallback
                  src={service.image || config.images.defaultServiceImage}
                  alt={service.name}
                  fill
                  title={service.name}
                />
              </div>
            </div>

            {/* In-depth details (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-4">
                  Scope & Technical Execution
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed font-light">
                  {service.fullDescription}
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="p-7 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 space-y-4">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                  Key Benefits & Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-4">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                  Deliverables & What&apos;s Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.whatsIncluded.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Execution Process for this Service */}
      <ProcessSection />

      {/* 4. Relevant Visual Project Examples */}
      {relevantGallery.length > 0 && (
        <section className="py-20 bg-neutral-50/50 border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-1">
                  Project References
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
                  Examples of Our Workmanship
                </h3>
              </div>
              <Link
                href="/gallery"
                className="text-xs font-semibold text-neutral-700 hover:text-neutral-950 flex items-center gap-1"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relevantGallery.map(item => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden border border-neutral-200/80 bg-white aspect-4/3 relative group shadow-2xs"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fill
                    title={item.title}
                  />
                  <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white text-xs">
                    <span className="font-bold">{item.title}</span>
                    <span className="text-neutral-300 text-[11px]">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Service FAQ */}
      <FAQSection />

      {/* 6. Direct Service CTA */}
      <CTASection />
    </>
  );
}
