import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { SITE_URL, GBP_URL } from '@/lib/constants';

// No explicit weights: loads Inter as a single variable font file (covers 100-900)
// instead of five separate weight files — fewer font requests, faster text render.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Psychologist',
      '@id': SITE_URL,
      name: 'Psikolog Asya Özcan',
      description:
        'İzmit / Kocaeli merkezli psikolog. Çocuk, genç ve yetişkin psikolojisi, otizm ve özel eğitim desteği, depresyon ve anksiyete terapisi, online terapi, MMPI ve objektif testler.',
      image: `${SITE_URL}/images/asyaozcanpp.webp`,
      logo: `${SITE_URL}/images/logo.png`,
      url: SITE_URL,
      email: 'psikologasyaozcan@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İzmit',
        addressRegion: 'Kocaeli',
        addressCountry: 'TR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.7622984,
        longitude: 29.9328223,
      },
      hasMap: GBP_URL,
      areaServed: [
        { '@type': 'City', name: 'İzmit' },
        { '@type': 'AdministrativeArea', name: 'Kocaeli' },
        { '@type': 'Country', name: 'Türkiye' },
      ],
      knowsLanguage: ['tr', 'en', 'de'],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      founder: { '@id': `${SITE_URL}/#person` },
      sameAs: [
        'https://www.instagram.com/psikologasyaozcan/',
        'https://www.linkedin.com/in/asya-ozcan/',
        GBP_URL,
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Asya Özcan',
      jobTitle: 'Psikolog',
      image: `${SITE_URL}/images/asyaozcanpp.webp`,
      url: SITE_URL,
      worksFor: { '@id': SITE_URL },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Fenerbahçe Üniversitesi',
      },
      knowsAbout: [
        'Çocuk psikolojisi',
        'Ergen psikolojisi',
        'Depresyon',
        'Anksiyete bozuklukları',
        'Otizm spektrum bozukluğu',
        'Özel eğitim',
        'MMPI',
        'Online terapi',
      ],
      knowsLanguage: ['tr', 'en', 'de'],
      sameAs: [
        'https://www.instagram.com/psikologasyaozcan/',
        'https://www.linkedin.com/in/asya-ozcan/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Psikolog Asya Özcan',
      url: SITE_URL,
      inLanguage: 'tr-TR',
      publisher: { '@id': SITE_URL },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Psikolog Asya Özcan | İzmit Çocuk ve Yetişkin Psikoloğu',
    template: '%s | Psikolog Asya Özcan',
  },
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
  authors: [{ name: 'Psikolog Asya Özcan', url: SITE_URL }],
  creator: 'Psikolog Asya Özcan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      'application/rss+xml': `${SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Psikolog Asya Özcan | İzmit Çocuk ve Yetişkin Psikoloğu',
    description:
      'İzmit merkezli psikolog. Çocuk psikolojisi, otizm spektrum bozukluğu, depresyon ve anksiyete tedavisi. Online ve yüz yüze terapi seansları.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Psikolog Asya Özcan - İzmit Çocuk ve Yetişkin Psikoloğu',
      },
    ],
    siteName: 'Psikolog Asya Özcan',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psikolog Asya Özcan | İzmit Çocuk ve Yetişkin Psikoloğu',
    description:
      'İzmit merkezli psikolog. Çocuk psikolojisi, otizm, depresyon ve anksiyete tedavisi. Online ve yüz yüze terapi seansları.',
    images: [OG_IMAGE],
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
