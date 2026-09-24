'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4';
  title?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fill,
  width,
  height,
  priority = false,
  aspectRatio = '16:9',
  title
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  // Fallback visual block if error occurs or empty src
  if (error || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center bg-slate-900 border border-slate-800 text-slate-300 ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
      >
        <Sparkles className="w-8 h-8 mb-2 text-amber-500 opacity-80" />
        <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
          {title || alt || 'Visual Slot'}
        </span>
        <span className="mt-1 text-[11px] text-slate-500 max-w-[200px]">
          Configurable Image Slot
        </span>
      </div>
    );
  }

  // If fill mode
  if (fill) {
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
        {/* Next.js Image with fallback onerror */}
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
      className={`object-cover ${className}`}
    />
  );
}
