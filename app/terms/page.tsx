import React from 'react';
import { defaultClientConfig } from '@/config/clientConfig';
import { Button } from '@/components/Button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Terms of Service | ${defaultClientConfig.business.name}`,
  description: `Terms and conditions of service for ${defaultClientConfig.business.name}.`,
};

export default function TermsPage() {
  const config = defaultClientConfig;

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button
            href="/"
            variant="ghost"
            size="sm"
            icon={<ArrowLeft className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            Back to Home
          </Button>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C261D] tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="font-sans text-xs text-stone-500 mb-8 font-light">
          Effective Date: September 2026
        </p>

        <div className="space-y-6 font-sans text-sm text-stone-600 leading-relaxed font-light">
          <p>
            Welcome to <strong className="font-semibold text-stone-900">{config.business.name}</strong>. By accessing this website or requesting our services, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h2 className="font-serif text-lg font-normal text-[#1C261D] mt-6 mb-2">1. Scope of Estimates & Quotations</h2>
          <p>
            All preliminary quotes, timelines, and proposals provided by {config.business.name} are subject to formal site verification and written agreement before commencement of work.
          </p>
          <h2 className="font-serif text-lg font-normal text-[#1C261D] mt-6 mb-2">2. Quality & Workmanship</h2>
          <p>
            We strive to deliver the highest standard of workmanship in accordance with industry best practices and local building codes. Specific warranties and service terms are detailed in client contracts.
          </p>
          <h2 className="font-serif text-lg font-normal text-[#1C261D] mt-6 mb-2">3. Inquiries & Support</h2>
          <p>
            For any inquiries or dispute resolutions, please reach out via phone at{' '}
            <a href={`tel:${config.contact.phoneRaw}`} className="text-stone-900 font-medium underline underline-offset-2">
              {config.contact.phone}
            </a>{' '}
            or email at{' '}
            <a href={`mailto:${config.contact.email}`} className="text-stone-900 font-medium underline underline-offset-2">
              {config.contact.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
