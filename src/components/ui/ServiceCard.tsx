import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-[20px] p-10 max-[375px]:px-5 max-[375px]:py-6 max-[480px]:px-6 max-[480px]:py-7 text-center shadow-[0_5px_25px_rgba(0,0,0,0.08)] border border-[rgba(230,230,250,0.5)] h-full overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(147,112,219,0.2)] hover:border-[rgba(147,112,219,0.3)] max-[767px]:h-auto max-[767px]:mb-5">
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary scale-x-0 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" />

      {/* Service Icon */}
      <div className="service-icon text-[3rem] text-accent mb-5 inline-block transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[transform:scale(1.1)_rotateY(360deg)] max-[375px]:text-[2.5rem]">
        <FontAwesomeIcon icon={service.icon} className="h-12 w-12" />
      </div>

      <h3 className="text-text-dark font-semibold text-xl mb-4 max-[375px]:text-lg">
        <Link href={service.href} className="no-underline text-inherit hover:text-accent transition-colors duration-300">
          {service.title}
        </Link>
      </h3>
      <p className="text-text-light text-[0.95rem] max-[375px]:text-[0.9rem] leading-[1.6] mb-4">
        {service.description}
      </p>
      <Link
        href={service.href}
        className="inline-flex items-center gap-1.5 text-accent font-medium text-sm no-underline group/link"
      >
        Detaylı Bilgi
        <FontAwesomeIcon
          icon={faArrowRight}
          className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1"
        />
      </Link>
    </div>
  );
}
