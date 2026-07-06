import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white py-10 max-[767px]:py-[30px] text-center">
      <div className="container mx-auto px-4">
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
        <p className="text-sm m-0">
          &copy; {currentYear} Psikolog Asya Özcan. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
