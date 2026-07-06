import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL, GBP_URL } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Psychologist',
  'name': 'Psikolog Asya Özcan',
  'image': `${SITE_URL}/images/logo.png`,
  '@id': SITE_URL,
  'url': SITE_URL,
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'İzmit',
    'addressRegion': 'Kocaeli',
    'addressCountry': 'TR',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 40.7622984,
    'longitude': 29.9328223,
  },
  'hasMap': GBP_URL,
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    'opens': '09:00',
    'closes': '18:00',
  },
  'sameAs': [
    'https://www.instagram.com/psikologasyaozcan/',
    'https://www.linkedin.com/in/asya-ozcan/',
    GBP_URL,
  ],
};

export const metadata: Metadata = {
  title: 'Psikolog Asya Özcan | İzmit Çocuk ve Yetişkin Psikoloğu',
  description:
    'Psikolog Asya Özcan - İzmit merkezli psikolog. Çocuk psikolojisi, otizm, depresyon, anksiyete tedavisi. Online ve yüz yüze terapi seansları. MMPI testleri.',
  keywords: [
    'psikolog',
    'çocuk psikoloğu',
    'İzmit',
    'Kocaeli',
    'otizm',
    'depresyon',
    'anksiyete',
    'online terapi',
    'MMPI',
  ],
  authors: [{ name: 'Psikolog Asya Özcan' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Psikolog Asya Özcan | Çocuk ve Yetişkin Psikolojisi',
    description:
      'İzmit merkezli psikolog. Çocuk psikolojisi, otizm spektrum bozukluğu, depresyon ve anksiyete tedavisi. Online ve yüz yüze terapi seansları.',
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Psikolog Asya Özcan Logo',
      },
    ],
    siteName: 'Psikolog Asya Özcan',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psikolog Asya Özcan | Çocuk ve Yetişkin Psikolojisi',
    description:
      'İzmit merkezli psikolog. Çocuk psikolojisi, otizm, depresyon ve anksiyete tedavisi. Online ve yüz yüze terapi seansları.',
    images: [`${SITE_URL}/images/logo.png`],
  },
  other: {
    'geo.region': 'TR-41',
    'geo.placename': 'İzmit, Kocaeli',
    'geo.position': '40.7622984;29.9328223',
    ICBM: '40.7622984, 29.9328223',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-text-dark bg-white m-0 p-0`}>
        {children}
      </body>
    </html>
  );
}
