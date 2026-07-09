import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function SubPageNavbar() {
  return (
    <nav
      aria-label="Site navigasyonu"
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] backdrop-blur-[10px] min-h-[70px] flex items-center"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center text-accent font-semibold text-xl max-[767px]:text-lg group no-underline"
        >
          <div className="relative h-10 w-10 mr-3 overflow-hidden transition-transform duration-300 group-hover:scale-110 max-[767px]:h-[35px] max-[767px]:w-[35px] max-[767px]:mr-2.5">
            <Image
              src="/images/logo.png"
              alt="Psikolog Asya Özcan Logo"
              fill
              sizes="(max-width: 767px) 35px, 40px"
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-[1.4rem] max-[375px]:text-[1.1rem] max-[480px]:text-[1.2rem] max-[767px]:text-[1.2rem]">
            Psikolog Asya Özcan
          </span>
        </Link>

        <div className="flex items-center gap-4 max-[480px]:gap-3">
          <Link
            href="/hizmetler"
            className="text-text-dark font-medium text-sm no-underline hover:text-accent transition-colors duration-300"
          >
            Hizmetler
          </Link>
          <Link
            href="/blog"
            className="text-text-dark font-medium text-sm no-underline hover:text-accent transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="inline-block bg-accent text-white font-medium text-sm no-underline py-2 px-4 rounded-[20px] hover:bg-opacity-90 transition-all duration-300 max-[480px]:px-3"
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </nav>
  );
}
