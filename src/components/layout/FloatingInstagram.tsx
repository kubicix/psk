import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export function FloatingInstagram() {
  return (
    <a
      href="https://www.instagram.com/psikologasyaozcan/"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-[30px] right-[30px] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-[28px] shadow-[0_4px_20px_rgba(188,24,136,0.4)] z-[1000] cursor-pointer bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] animate-pulse-instagram hover:scale-110 hover:-translate-y-[5px] hover:shadow-[0_6px_30px_rgba(188,24,136,0.6)] transition-all duration-300 max-[768px]:bottom-5 max-[768px]:right-5 max-[768px]:w-[55px] max-[768px]:h-[55px] max-[768px]:text-2xl max-[375px]:bottom-[15px] max-[375px]:right-[15px] max-[375px]:w-[50px] max-[375px]:h-[50px] max-[375px]:text-[22px]"
      aria-label="Instagram DM'den Ulaş"
    >
      <span className="absolute right-[70px] bg-[rgba(0,0,0,0.85)] text-white py-2 px-[15px] rounded-[20px] whitespace-nowrap text-sm font-medium opacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300 pointer-events-none max-[768px]:hidden">
        Instagram DM'den Ulaş
      </span>
      <FontAwesomeIcon icon={faInstagram} className="transition-transform duration-300 group-hover:rotate-[15deg] w-[28px] h-[28px] max-[768px]:w-[24px] max-[768px]:h-[24px] max-[375px]:w-[22px] max-[375px]:h-[22px]" />
    </a>
  );
}
