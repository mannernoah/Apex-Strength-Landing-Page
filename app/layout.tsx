import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: 'Apex Strength | 45-Minute Strength Training for Busy Professionals',
  description:
    'Stop losing strength to your desk job. Apex Strength delivers science-backed, 45-minute strength training sessions designed for busy professionals in New York. Book your free trial today.',
  keywords: [
    'strength training',
    'gym New York',
    'personal training',
    'desk job fitness',
    'posture correction',
    '45 minute workout',
  ],
  openGraph: {
    title: 'Apex Strength | 45-Minute Strength Training for Busy Professionals',
    description:
      'Stop losing strength to your desk job. Science-backed, 45-minute strength training for busy professionals in New York.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Strength | Strength Training for Busy Professionals',
    description:
      'Stop losing strength to your desk job. 45-minute science-backed sessions in New York.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
