import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '@/lib/constants';
import { SERVICE_PAGES } from '@/lib/services';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white py-12 max-[767px]:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-left max-[767px]:text-center">
          <div>
            <h2 className="text-base font-semibold mb-4 text-white">Psikolog Asya Özcan</h2>
            <p className="text-sm text-white/70 leading-[1.7] m-0">
              İzmit / Kocaeli merkezli psikolog. Çocuk, genç ve yetişkin ruh sağlığı
              alanında yüz yüze ve online psikolojik destek.
            </p>
            <p className="text-sm text-white/70 mt-3 m-0">
              İzmit, Kocaeli · Pazartesi - Cumartesi 09:00 - 18:00
            </p>
          </div>

          <nav aria-label="Hizmetler">
            <h2 className="text-base font-semibold mb-4 text-white">Hizmetler</h2>
            <ul className="list-none m-0 p-0 space-y-2">
              {SERVICE_PAGES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-sm text-white/70 hover:text-white no-underline transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site haritası">
            <h2 className="text-base font-semibold mb-4 text-white">Keşfet</h2>
            <ul className="list-none m-0 p-0 space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-white no-underline transition-colors duration-300">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-white/70 hover:text-white no-underline transition-colors duration-300">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-sm text-white/70 hover:text-white no-underline transition-colors duration-300">
                  Tüm Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/70 hover:text-white no-underline transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-white/70 hover:text-white no-underline transition-colors duration-300">
                  İletişim & Randevu
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <div className="mb-5 flex justify-center gap-[10px]">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[50px] h-[50px] bg-accent hover:bg-[#7B68EE] text-white rounded-full text-[1.2rem] transition-all duration-300 hover:-translate-y-[3px] max-[767px]:w-[45px] max-[767px]:h-[45px] max-[767px]:text-[1.1rem]"
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/50 max-w-[640px] mx-auto mb-4 leading-[1.6]">
            Bu web sitesindeki içerikler bilgilendirme amaçlıdır; tıbbi tanı veya tedavi
            önerisi yerine geçmez. Acil durumlarda 112 Acil Çağrı Merkezi&apos;ni arayınız.
          </p>
          <p className="text-sm m-0">
            &copy; {currentYear} Psikolog Asya Özcan. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
