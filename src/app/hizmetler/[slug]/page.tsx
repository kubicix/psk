import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { SubPageNavbar } from '@/components/layout/SubPageNavbar';
import { Footer } from '@/components/layout/Footer';
import { getAllServiceSlugs, getServiceBySlug, SERVICE_PAGES } from '@/lib/services';
import { getPostMetaBySlug } from '@/lib/blog';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/constants';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Sayfa Bulunamadı' };

  const url = `${SITE_URL}/hizmetler/${service.slug}`;
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      url,
      siteName: 'Psikolog Asya Özcan',
      locale: 'tr_TR',
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Psikolog Asya Özcan' }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/hizmetler/${service.slug}`;
  const relatedServices = service.relatedSlugs
    .map((s) => SERVICE_PAGES.find((p) => p.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedPosts = service.relatedPostSlugs
    .map((s) => getPostMetaBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.metaDescription,
      url,
      serviceType: service.title,
      areaServed: [
        { '@type': 'City', name: 'İzmit' },
        { '@type': 'AdministrativeArea', name: 'Kocaeli' },
        { '@type': 'Country', name: 'Türkiye' },
      ],
      availableChannel: [
        { '@type': 'ServiceChannel', name: 'Yüz yüze görüşme (İzmit)' },
        { '@type': 'ServiceChannel', name: 'Online görüşme' },
      ],
      provider: { '@id': SITE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: `${SITE_URL}/hizmetler` },
        { '@type': 'ListItem', position: 3, name: service.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <SubPageNavbar />

      <section className="pt-[120px] pb-14 bg-gradient-to-br from-primary to-bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-[820px] mx-auto">
            <nav aria-label="Sayfa konumu" className="text-sm text-text-light mb-4">
              <Link href="/" className="text-accent no-underline hover:underline">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <Link href="/hizmetler" className="text-accent no-underline hover:underline">Hizmetler</Link>
              <span className="mx-2">/</span>
              <span>{service.title}</span>
            </nav>
            <h1 className="text-[2.6rem] font-bold text-text-dark mb-5 leading-[1.25] max-[767px]:text-[1.9rem] max-[480px]:text-[1.6rem]">
              {service.title}
            </h1>
            {service.intro.map((paragraph, i) => (
              <p key={i} className="text-text-light text-[1.05rem] leading-[1.8] mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <article className="py-16 bg-white max-[767px]:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-[820px] mx-auto">
            {service.sections.map((section) => (
              <section key={section.heading} className="mb-12">
                <h2 className="text-[1.6rem] font-bold text-text-dark mb-4 max-[767px]:text-[1.35rem]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-text-light leading-[1.8] mb-4">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-none m-0 p-0 space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-light leading-[1.7]">
                        <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-accent mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="mb-12">
              <h2 className="text-[1.6rem] font-bold text-text-dark mb-6 max-[767px]:text-[1.35rem]">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-bg-light rounded-[16px] border border-[rgba(230,230,250,0.7)] overflow-hidden"
                  >
                    <summary className="cursor-pointer list-none p-5 font-semibold text-text-dark flex items-center justify-between gap-4">
                      {faq.question}
                      <span aria-hidden className="text-accent transition-transform duration-300 group-open:rotate-45 text-xl leading-none">+</span>
                    </summary>
                    <p className="px-5 pb-5 m-0 text-text-light leading-[1.8]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="p-8 bg-gradient-to-br from-primary to-bg-light rounded-[20px] text-center border border-[rgba(230,230,250,0.5)] max-[575px]:p-5 mb-12">
              <h2 className="text-xl font-bold text-text-dark mb-3">Randevu Almak İster misiniz?</h2>
              <p className="text-text-light text-sm mb-5 max-w-[440px] mx-auto">
                {service.title} için İzmit&apos;teki kliniğimizde yüz yüze veya online görüşme
                planlayabiliriz. Sorularınız için iletişime geçmekten çekinmeyin.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-accent hover:bg-opacity-95 text-white font-semibold py-3.5 px-[35px] rounded-[30px] transition-all duration-300 shadow-[0_4px_15px_rgba(147,112,219,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(147,112,219,0.5)] no-underline text-sm"
              >
                İletişime Geç
              </Link>
            </div>

            {relatedServices.length > 0 && (
              <section className="mb-12">
                <h2 className="text-[1.35rem] font-bold text-text-dark mb-5">İlgili Hizmetler</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {relatedServices.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/hizmetler/${related.slug}`}
                      className="block bg-white rounded-[16px] p-5 border border-[rgba(230,230,250,0.7)] shadow-[0_3px_15px_rgba(0,0,0,0.06)] no-underline hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(147,112,219,0.18)] transition-all duration-300"
                    >
                      <span className="block font-semibold text-text-dark mb-2">{related.title}</span>
                      <span className="block text-sm text-text-light leading-[1.6]">
                        {related.shortDescription}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {relatedPosts.length > 0 && (
              <section>
                <h2 className="text-[1.35rem] font-bold text-text-dark mb-5">Blog&apos;dan İlgili Yazılar</h2>
                <ul className="list-none m-0 p-0 space-y-3">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-accent font-medium no-underline hover:underline"
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
