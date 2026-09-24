import React from 'react';
import { defaultClientConfig } from '@/config/clientConfig';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { BenefitsSection } from '@/components/BenefitsSection';
import { CTASection } from '@/components/CTASection';
import { User, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Us | ${defaultClientConfig.business.name}`,
  description: `${defaultClientConfig.business.tagline}. Learn about our heritage, values, and design philosophy.`,
};

export default function AboutPage() {
  const config = defaultClientConfig;
  const b = config.business;

  return (
    <>
      {/* 1. About Hero */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>{b.category}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Our Heritage & Purpose</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              About {b.name}
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              {b.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Business Story & Imagery */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                Our Foundation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                {b.storyHeadline}
              </h2>
              <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
                {b.storyText.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Mission Statement Box */}
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 mt-8">
                <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4 text-amber-600" />
                  <span>Our Mission</span>
                </div>
                <p className="text-sm sm:text-base font-medium text-neutral-800 leading-relaxed italic">
                  &ldquo;{b.mission}&rdquo;
                </p>
              </div>
            </div>

            {/* Visual asset (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 aspect-4/3 bg-neutral-900">
                <ImageWithFallback
                  src={config.images.aboutImage}
                  alt={config.images.aboutImageAlt}
                  fill
                  title="Team and Philosophy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-20 bg-neutral-50/60 border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Values That Define Every Project
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              How we behave when no one is watching, and how we treat every customer and trade partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {b.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center font-bold text-sm text-neutral-700 mb-4 tabular-nums">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Reusable Component */}
      <BenefitsSection />

      {/* 5. Optional Team Section (automatically hides if config.team is empty) */}
      {config.team && config.team.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
                The Dedicated People
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                Meet Our Leadership & Specialists
              </h2>
              <p className="mt-3 text-base text-neutral-600">
                Seasoned professionals who care about your satisfaction and lasting outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {config.team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50/50 rounded-2xl border border-neutral-200/80 p-6 flex flex-col items-center text-center shadow-2xs"
                >
                  <div className="w-20 h-20 rounded-full bg-neutral-200 border-2 border-white shadow-xs flex items-center justify-center text-neutral-500 mb-4">
                    <User className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <div
                    className="text-xs font-semibold mb-3 uppercase tracking-wider"
                    style={{ color: 'var(--primary-color)' }}
                  >
                    {member.role}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Call To Action Strip */}
      <CTASection />
    </>
  );
}
