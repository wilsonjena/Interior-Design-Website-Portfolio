'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FAF8F5] text-[#1C261D] min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#B68D40] uppercase">
            Application Error
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#1C261D]">
            Something went wrong
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            A critical error occurred while loading this page. Please try refreshing or return to the main site.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-[#1C261D] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#2A352C] transition-colors cursor-pointer"
            >
              Try Again
            </button>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') window.location.href = '/';
              }}
              className="px-6 py-3 border border-stone-300 text-[#1C261D] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Return Home
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
