'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NAV_LINKS } from '@/lib/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useNavbarScroll();
  const activeSection = useActiveSection(['home', 'about', 'services', 'testimonials', 'blog', 'contact']);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    // If it's a page link (not a hash), let the browser navigate normally
    if (!href.startsWith('#')) {
      return;
    }

    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-[10px] min-h-[70px] flex items-center ${
        isScrolled
          ? 'bg-[rgba(255,255,255,0.98)] shadow-[0_2px_30px_rgba(147,112,219,0.1)]'
          : 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)]'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
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
        </a>

        {/* Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden border-none bg-transparent p-1 focus:outline-none"
          aria-label="Menüyü Aç/Kapat"
        >
          <FontAwesomeIcon icon={faBars} className="text-accent text-[1.2rem]" />
        </button>

        {/* Nav Links */}
        <div
          className={`w-full lg:w-auto lg:flex lg:items-center ${
            isOpen ? 'block' : 'hidden lg:block'
          } max-[991px]:mt-4 max-[991px]:bg-[rgba(255,255,255,0.98)] max-[991px]:rounded-lg max-[991px]:p-2.5 max-[991px]:shadow-[0_5px_15px_rgba(0,0,0,0.1)]`}
        >
          <ul className="list-none flex flex-col lg:flex-row m-0 p-0 lg:ml-auto">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block py-2 px-3 lg:mx-2.5 font-medium rounded-lg transition-all duration-300 relative nav-link max-[991px]:text-center ${
                      isActive
                        ? 'text-accent bg-[rgba(147,112,219,0.1)]'
                        : 'text-text-dark hover:text-accent hover:bg-[rgba(147,112,219,0.05)]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
