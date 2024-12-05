import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer/footer';
import { MetaTags } from '@/components/seo/meta-tags';
import { StructuredData } from '@/components/seo/structured-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ITUSI - Pioneer of the AI Era',
  description: 'Master AI Skills, Embrace Smart Living, Navigate Infinite Possibilities. Providing efficient AI side business teaching resources and comprehensive AI tool navigation services.',
  keywords: 'AI Learning, AI Tools, Smart Living, AI Education, AI Navigation, AI Side Business, Artificial Intelligence',
  authors: [{ name: 'ITUSI Team' }],
  creator: 'ITUSI',
  publisher: 'ITUSI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://itusi.cn'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'zh-CN': '/zh',
    },
  },
  openGraph: {
    title: 'ITUSI - Pioneer of the AI Era',
    description: 'Master AI Skills, Embrace Smart Living, Navigate Infinite Possibilities. Providing efficient AI side business teaching resources and comprehensive AI tool navigation services.',
    url: 'https://itusi.cn',
    siteName: 'ITUSI',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ITUSI - Pioneer of the AI Era',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITUSI - Pioneer of the AI Era',
    description: 'Master AI Skills, Embrace Smart Living, Navigate Infinite Possibilities. Providing efficient AI side business teaching resources and comprehensive AI tool navigation services.',
    creator: '@zyailive',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    // 添加其他验证如有需要
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <MetaTags />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}