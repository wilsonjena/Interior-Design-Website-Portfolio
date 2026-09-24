import React from 'react';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { CustomerProblemSection } from '@/components/CustomerProblemSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { AboutSection } from '@/components/AboutSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { GallerySection } from '@/components/GallerySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Interior design & space transformation headline + outcomes */}
      <Hero />

      {/* 2. Trust Bar: Homeowners & businesses trust statement + verifiable metrics */}
      <TrustBar />

      {/* 3. Customer Problem: "Designing a Space Can Feel Overwhelming" */}
      <CustomerProblemSection />

      {/* 4. Services: 6 Core Interior Design Services */}
      <ServicesSection limit={6} showViewAll={true} />

      {/* 5. Before & After: "See the Transformation" interactive comparison */}
      <BeforeAfterSection />

      {/* 6. About: "Designing Spaces Around the People Who Use Them" */}
      <AboutSection isFullPage={false} />

      {/* 7. Why Work With An Interior Designer Benefits */}
      <BenefitsSection />

      {/* 8. 5-Step Process: "From Your Ideas to Your Finished Space" */}
      <ProcessSection />

      {/* 9. Projects & Portfolio: "Spaces We've Designed" */}
      <GallerySection limit={6} showFilters={true} showViewAll={true} />

      {/* 10. Testimonials: "What Our Clients Say" */}
      <TestimonialsSection showViewAll={true} />

      {/* 11. High-Conversion CTA Band: "Ready to Talk About Your Space?" */}
      <CTASection />

      {/* 12. Interior Design Frequently Asked Questions */}
      <FAQSection />

      {/* 13. Contact & Studio Inquiry: "Let's Talk About Your Space" */}
      <ContactSection isPage={false} />
    </>
  );
}
