'use client';

import React from 'react';
import Link from 'next/link';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'gold'
  | 'dark'
  | 'light'
  | 'outline-white'
  | 'whatsapp'
  | 'call'
  | 'filter'
  | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  isActive?: boolean; // For filter buttons
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  isActive = false,
  className = '',
  style,
  disabled,
  children,
  ...props
}: ButtonProps) {
  // Base styling ensuring a perfectly curved pill-shaped button across the website
  const baseClasses =
    'inline-flex items-center justify-center font-sans font-semibold uppercase tracking-[0.18em] text-center select-none transition-all duration-200 ease-out cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

  // Size variants
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-[11px] min-h-[34px] gap-1.5',
    md: 'px-7 py-3 text-xs min-h-[42px] gap-2',
    lg: 'px-9 py-3.5 text-xs sm:text-[13px] min-h-[48px] gap-2.5'
  };

  // Color & Treatment variants (all maintaining the same rounded-full pill geometry)
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-[#1C261D] text-white hover:bg-[#2A352C] hover:brightness-110 shadow-xs focus-visible:ring-[#1C261D]',
    secondary:
      'bg-transparent border border-stone-400 text-[#1C261D] hover:bg-stone-100 hover:border-stone-600 focus-visible:ring-stone-600',
    gold:
      'bg-[#B68D40] text-white hover:bg-[#9E752F] shadow-sm hover:shadow-md focus-visible:ring-[#B68D40]',
    dark:
      'bg-[#1C261D] text-white hover:bg-[#2A352C] shadow-xs focus-visible:ring-[#1C261D]',
    light:
      'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50 hover:text-[#1C261D] hover:border-stone-400 shadow-2xs focus-visible:ring-stone-400',
    'outline-white':
      'bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white/80 backdrop-blur-xs focus-visible:ring-white',
    whatsapp:
      'bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100 hover:border-emerald-300 shadow-2xs focus-visible:ring-emerald-500',
    call:
      'bg-[#FAF8F5] text-stone-700 border border-stone-200 hover:bg-stone-100 hover:text-[#1C261D] shadow-2xs focus-visible:ring-stone-400',
    filter: isActive
      ? 'bg-[#1C261D] text-white shadow-xs focus-visible:ring-[#1C261D]'
      : 'bg-white border border-stone-200 text-stone-600 hover:text-[#1C261D] hover:border-stone-400 shadow-2xs',
    ghost:
      'bg-transparent text-stone-600 hover:bg-stone-100 hover:text-[#1C261D] focus-visible:ring-stone-400'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  // Explicit inline style ensures 9999px pill border radius cannot be overridden
  const pillStyle: React.CSSProperties = {
    borderRadius: '9999px',
    ...style
  };

  const combinedClasses = `${baseClasses} rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  // When href is provided, render either an internal Next.js Link or an external anchor
  if (href) {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      target === '_blank';

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={combinedClasses}
          style={pillStyle}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} style={pillStyle}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={combinedClasses}
      style={pillStyle}
      {...props}
    >
      {content}
    </button>
  );
}
