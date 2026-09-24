'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/Button';
import { RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for debugging
    console.error('App runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center bg-[#FAF8F5]">
      <span className="font-sans text-xs font-semibold tracking-[0.25em] text-[#B68D40] uppercase mb-2">
        Something Went Wrong
      </span>
      <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C261D] tracking-tight mb-4">
        Unexpected Experience
      </h1>
      <p className="font-sans text-sm sm:text-base text-stone-600 max-w-md mx-auto leading-relaxed font-light mb-8">
        An unexpected error occurred while loading this section. You can try refreshing the component or return to the main showcase.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          onClick={() => reset()}
          variant="primary"
          size="md"
          icon={<RotateCcw className="w-3.5 h-3.5" />}
          iconPosition="left"
        >
          Try Again
        </Button>
        <Button
          href="/"
          variant="secondary"
          size="md"
          icon={<Home className="w-3.5 h-3.5" />}
          iconPosition="left"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
