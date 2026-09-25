'use client';

import React from 'react';
import { ClientConfigProvider } from '@/context/ClientConfigContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileContactBar } from '@/components/MobileContactBar';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessJsonLd';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClientConfigProvider>
      <LocalBusinessJsonLd />
      <div className="min-h-screen flex flex-col bg-[var(--background-color,#fcfbf9)] text-[var(--text-color,#1f2937)] selection:bg-slate-900 selection:text-white pb-14 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileContactBar />
      </div>
    </ClientConfigProvider>
  );
}
