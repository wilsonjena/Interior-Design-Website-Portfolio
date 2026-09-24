'use client';

import React from 'react';
import { useClientConfig } from '@/context/ClientConfigContext';
import { Button } from '@/components/Button';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

export function MobileContactBar() {
  const { config } = useClientConfig();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-lg px-3 py-2">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto h-12">
        {/* Call Button */}
        {config.contact.phone && (
          <Button
            href={`tel:${config.contact.phoneRaw}`}
            variant="call"
            size="sm"
            icon={<Phone className="w-3.5 h-3.5 text-stone-700 shrink-0" />}
            iconPosition="left"
            className="flex-1 min-w-0 !px-2 tracking-normal font-sans"
          >
            <span className="truncate">Call</span>
          </Button>
        )}

        {/* WhatsApp Button */}
        {config.contact.whatsapp && (
          <Button
            href={`https://wa.me/${config.contact.whatsapp}`}
            variant="whatsapp"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            icon={<MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
            iconPosition="left"
            className="flex-1 min-w-0 !px-2 tracking-normal font-sans"
          >
            <span className="truncate">WhatsApp</span>
          </Button>
        )}

        {/* Get Quote / Contact CTA Button */}
        <Button
          href="/contact"
          variant="primary"
          size="sm"
          icon={<ArrowRight className="w-3 h-3 shrink-0" />}
          iconPosition="right"
          className="flex-1 min-w-0 !px-2 tracking-normal font-sans shadow-xs"
        >
          <span className="truncate">Get Quote</span>
        </Button>
      </div>
    </div>
  );
}

