import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/AppProvider';

export const metadata: Metadata = {
  title: 'Interior Design Business Master Template',
  description: 'A reusable, professional interior-business website wireframe and master template to deliver websites fast.',
  openGraph: {
    title: 'Interior Design Business Master Template',
    description: 'A reusable, professional interior-business website wireframe and master template to deliver websites fast.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Business Master Template',
    description: 'A reusable, professional interior-business website wireframe and master template to deliver websites fast.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

