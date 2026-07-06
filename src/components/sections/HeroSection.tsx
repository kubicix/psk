'use client';

import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

export function HeroSection() {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 max-[375px]:min-h-[90vh] max-[375px]:pt-[100px] max-[375px]:pb-10 max-[767px]:pt-[90px] max-[767px]:text-center bg-gradient-to-br from-primary to-secondary before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_100_100%22%3E%3Ccircle_cx=%2250%22_cy=%2250%22_r=%222%22_fill=%22rgba(255,255,255,0.1)%22/%3E%3C/svg%3E')] before:opacity-30 max-h-[600px]:landscape:min-h-screen max-h-[600px]:landscape:pt-20 max-h-[600px]:landscape:pb-5"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center">
            <FadeIn>
              <h1 className="text-[3.5rem] font-bold text-text-dark mb-5 leading-[1.2] max-[375px]:text-3xl max-[375px]:mb-[15px] max-[480px]:text-[2.3rem] max-[767px]:text-[2.5rem] max-[896px]:text-[3.2rem]">
                Psikolog Asya Özcan
              </h1>
              <p className="text-[1.5rem] text-text-light mb-[30px] font-normal max-[375px]:text-[1rem] max-[375px]:mb-5 max-[480px]:text-[1.1rem] max-[767px]:text-[1.3rem] max-h-[600px]:landscape:text-[1rem] max-h-[600px]:landscape:mb-[15px]">
                Psikolog & Danışman
              </p>
              <p className="text-lg text-text-dark leading-[1.6] mb-8 max-w-[550px] max-[375px]:text-[0.9rem] max-[375px]:mb-[25px] max-[480px]:text-[0.95rem] max-[575px]:text-base max-[767px]:text-base max-h-[600px]:landscape:text-[0.9rem] max-h-[600px]:landscape:mb-5">
                İzmit merkezli kliniğimizde ve online platformda, çocuk, genç ve yetişkin
                ruh sağlığı alanında uzmanlaşmış hizmet sunuyorum. Özel eğitim, gelişimsel bozukluklar,
                depresyon ve anksiyete konularında size destek oluyorum.
              </p>
              <a
                href="#contact"
                onClick={handleCTAClick}
                className="inline-block relative overflow-hidden bg-accent hover:bg-opacity-95 text-white font-semibold py-3.5 px-[35px] rounded-[30px] transition-all duration-300 shadow-[0_4px_15px_rgba(147,112,219,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(147,112,219,0.5)] active:translate-y-[-1px] max-[375px]:text-[0.95rem] max-[375px]:py-2.5 max-[375px]:px-[25px] max-[575px]:w-full max-[575px]:mt-2.5 max-[575px]:min-h-[44px]"
              >
                İletişime Geç
              </a>
            </FadeIn>
          </div>

          <div className="flex justify-center items-center max-[767px]:mt-[30px]">
            <FadeIn>
              <div className="w-[400px] h-[400px] bg-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center backdrop-blur-[10px] p-5 max-[375px]:w-[250px] max-[375px]:h-[250px] max-[375px]:my-[15px] max-[480px]:w-[280px] max-[480px]:h-[280px] max-[480px]:my-5 max-[767px]:w-[320px] max-[767px]:h-[320px] max-[767px]:my-5 max-h-[600px]:landscape:w-[250px] max-h-[600px]:landscape:h-[250px]">
                <div className="relative w-[360px] h-[360px] max-[375px]:w-[220px] max-[375px]:h-[220px] max-[480px]:w-[250px] max-[480px]:h-[250px] max-[767px]:w-[280px] max-[767px]:h-[280px] max-h-[600px]:landscape:w-[220px] max-h-[600px]:landscape:h-[220px]">
                  <Image
                    src="/images/asyaozcanpp.jpeg"
                    alt="Psikolog Asya Özcan"
                    fill
                    priority
                    className="rounded-full object-cover object-[center_20%] border-8 border-[rgba(255,255,255,0.3)] shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
