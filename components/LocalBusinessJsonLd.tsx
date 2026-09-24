'use client';

import React from 'react';
import { useClientConfig } from '@/context/ClientConfigContext';

export function LocalBusinessJsonLd() {
  const { config } = useClientConfig();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.business.name,
    description: config.business.shortDescription,
    image: config.images.heroImage,
    telephone: config.contact.phone,
    email: config.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address.street,
      addressLocality: config.contact.address.city,
      addressRegion: config.contact.address.state,
      postalCode: config.contact.address.postalCode,
      addressCountry: config.contact.address.country
    },
    aggregateRating: config.mapsAndReviews.overallRating
      ? {
          '@type': 'AggregateRating',
          ratingValue: config.mapsAndReviews.overallRating,
          reviewCount: config.mapsAndReviews.reviewCount.replace(/[^0-9]/g, '') || '50'
        }
      : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
