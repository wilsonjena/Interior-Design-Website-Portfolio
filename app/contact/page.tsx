import React from 'react';
import { defaultClientConfig } from '@/config/clientConfig';
import { ContactSection } from '@/components/ContactSection';
import { FAQSection } from '@/components/FAQSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contact Us | ${defaultClientConfig.business.name}`,
  description: `Get in touch with ${defaultClientConfig.business.name} for an interior design consultation and space planning assessment.`,
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Contact Page Hero */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>{defaultClientConfig.business.category}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Initial Consultation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Let&apos;s Talk About Your Space
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Tell us a little about your project and we&apos;ll get back to you to discuss your requirements, space planning ideas, and design timelines.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Full Contact Section (Direct Actions, Form, Address, Hours, Map) */}
      <ContactSection isPage={true} />

      {/* 3. Helpful FAQ Accordion */}
      <FAQSection />
    </>
  );
}
