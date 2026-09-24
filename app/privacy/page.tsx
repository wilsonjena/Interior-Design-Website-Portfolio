import React from 'react';
import { defaultClientConfig } from '@/config/clientConfig';
import { Button } from '@/components/Button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Privacy Policy | ${defaultClientConfig.business.name}`,
  description: `Privacy policy and data protection practices for ${defaultClientConfig.business.name}.`,
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="font-sans text-xs text-stone-500 mb-8 font-light">
          Effective Date: September 2026
        </p>

        <div className="space-y-6 font-sans text-sm text-stone-600 leading-relaxed font-light">
          <p>
            At <strong className="font-semibold text-stone-900">{config.business.name}</strong>, we respect your privacy and are committed to protecting any personal information you provide when using our website or engaging our services.
          </p>
          <h2 className="font-serif text-lg font-normal text-[#1C261D] mt-6 mb-2">1. Information We Collect</h2>
          <p>
            When you submit an inquiry through our contact form, contact us via phone, or reach out on WhatsApp, we may collect your name, phone number, email address, and project details.
          </p>
          <h2 className="font-serif text-lg font-normal text-[#1C261D] mt-6 mb-2">2. How We Use Your Information</h2>
          <p>
            We use this information exclusively to communicate with you regarding your service requests, provide estimates, schedule appointments, and deliver our services. We do not sell or lease your personal information to third parties.
          </p>
          <h2 className="font-serif text-lg font-normal text-[#1C261D] mt-6 mb-2">3. Contact Us</h2>
          <p>
            If you have any questions regarding our privacy practices, please contact us at{' '}
            <a href={`mailto:${config.contact.email}`} className="text-stone-900 font-medium underline underline-offset-2">
              {config.contact.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
