import React from 'react';
import { Button } from '@/components/Button';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center bg-[#FAF8F5]">
      <div className="w-16 h-16 rounded-full bg-white border border-stone-200/80 flex items-center justify-center text-[#B68D40] mb-6 shadow-sm">
        <Compass className="w-8 h-8 stroke-[1.5]" />
      </div>
      <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#B68D40] uppercase mb-2">
        Page Not Found
      </span>
      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C261D] tracking-tight mb-4">
        404 - Space Not Found
      </h1>
      <p className="font-sans text-sm sm:text-base text-stone-600 max-w-md mx-auto leading-relaxed font-light mb-8">
        The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us guide you back to our curated spaces.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          href="/"
          variant="primary"
          size="md"
          icon={<ArrowLeft className="w-3.5 h-3.5" />}
          iconPosition="left"
        >
          Return to Home
        </Button>
        <Button
          href="/gallery"
          variant="secondary"
          size="md"
        >
          View Portfolio
        </Button>
      </div>
    </div>
  );
}
