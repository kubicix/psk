import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SubPageNavbar } from '@/components/layout/SubPageNavbar';
import { Footer } from '@/components/layout/Footer';
import { SERVICE_PAGES } from '@/lib/services';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Hizmetler | Psikolojik Destek ve Terapi',
  description:
    'Psikolog Asya Özcan\'ın İzmit ve online sunduğu hizmetler: bireysel terapi, çocuk ve ergen psikolojisi, depresyon ve anksiyete terapisi, otizm desteği, MMPI testleri.',
  alternates: {
    canonical: `${SITE_URL}/hizmetler`,
  },
  openGraph: {
    title: 'Hizmetler | Psikolog Asya Özcan',
    description:
      'Bireysel terapi, çocuk ve ergen psikolojisi, depresyon ve anksiyete terapisi, online terapi, otizm desteği ve MMPI testleri.',
    type: 'website',
    url: `${SITE_URL}/hizmetler`,
    siteName: 'Psikolog Asya Özcan',
    locale: 'tr_TR',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Psikolog Asya Özcan' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: `${SITE_URL}/hizmetler` },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Psikolojik Destek Hizmetleri',
  itemListElement: SERVICE_PAGES.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.title,
    url: `${SITE_URL}/hizmetler/${service.slug}`,
  })),
};

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, itemListSchema]) }}
      />

      <SubPageNavbar />

      <section className="pt-[120px] pb-16 bg-gradient-to-br from-primary to-bg-light">
        <div className="container mx-auto px-4 text-center">
          <nav aria-label="Sayfa konumu" className="text-sm text-text-light mb-4">
            <Link href="/" className="text-accent no-underline hover:underline">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span>Hizmetler</span>
          </nav>
          <h1 className="text-[3rem] font-bold text-text-dark mb-4 max-[767px]:text-[2rem] max-[480px]:text-[1.7rem]">
            Psikolojik Destek Hizmetleri
          </h1>
          <p className="text-text-light text-lg max-w-[680px] mx-auto max-[767px]:text-base">
            İzmit merkezli klinikte yüz yüze veya Türkiye&apos;nin her yerinden online olarak;
            çocuk, genç ve yetişkin ruh sağlığı alanında sunduğum hizmetler.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white max-[767px]:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_PAGES.map((service) => (
              <article
                key={service.slug}
                className="group bg-white rounded-[20px] p-8 border border-[rgba(230,230,250,0.5)] shadow-[0_5px_25px_rgba(0,0,0,0.08)] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(147,112,219,0.2)] hover:border-[rgba(147,112,219,0.3)] max-[767px]:p-6"
              >
                <h2 className="text-xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                  <Link href={`/hizmetler/${service.slug}`} className="no-underline text-inherit">
                    {service.title}
                  </Link>
                </h2>
                <p className="text-text-light text-[0.95rem] leading-[1.7] mb-5">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-accent font-medium text-sm no-underline group/link"
                >
                  Detaylı Bilgi
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-text-light mb-5">
              Hangi hizmetin size uygun olduğundan emin değil misiniz? Birlikte değerlendirelim.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-accent hover:bg-opacity-95 text-white font-semibold py-3.5 px-[35px] rounded-[30px] transition-all duration-300 shadow-[0_4px_15px_rgba(147,112,219,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(147,112,219,0.5)] no-underline"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
