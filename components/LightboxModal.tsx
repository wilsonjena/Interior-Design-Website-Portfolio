'use client';

import React, { useEffect } from 'react';
import { GalleryItem } from '@/config/clientConfig';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export function LightboxModal({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div className="absolute top-4 right-4 flex items-center gap-3 z-20">
        <span className="text-xs text-white/60 tabular-nums">
          {currentIndex + 1} / {totalCount}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={e => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={e => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content Card */}
      <div
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full overflow-hidden rounded-xl bg-black border border-white/10 max-h-[70vh] flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Caption */}
        <div className="w-full mt-4 text-center">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            {item.category}
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-300 mt-1 max-w-xl mx-auto">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
