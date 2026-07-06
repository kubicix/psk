import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { FadeIn } from '@/components/ui/FadeIn';
import { SERVICES, MAPS_IFRAME_SRC } from '@/lib/constants';

export function ServicesSection() {
  const firstRow = SERVICES.slice(0, 3);
  const secondRow = SERVICES.slice(3, 6);

  return (
    <section id="services" className="py-20 max-[375px]:py-[50px] max-[767px]:py-[60px]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionTitle
            title="Hizmetlerim"
            subtitle="Size sunduğum profesyonel psikolojik destek hizmetleri"
          />
        </FadeIn>

        <div className="flex flex-wrap justify-center -mx-4 mb-4">
          {firstRow.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 max-[767px]:mb-4 max-w-[400px] lg:max-w-none">
              <FadeIn delay={index * 100}>
                <ServiceCard service={service} />
              </FadeIn>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center -mx-4 mb-6">
          {secondRow.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 max-[767px]:mb-4 max-w-[400px] lg:max-w-none">
              <FadeIn delay={(index + 3) * 100}>
                <ServiceCard service={service} />
              </FadeIn>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full lg:w-2/3 md:w-full px-4 mb-6">
            <FadeIn delay={600}>
              <div className="bg-white rounded-[20px] p-[30px] border border-[rgba(230,230,250,0.5)] shadow-[0_5px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(147,112,219,0.2)] hover:border-[rgba(147,112,219,0.3)] transition-all duration-400 max-[767px]:p-5">
                <div className="flex items-center mb-[15px] max-[375px]:flex-col max-[375px]:items-start">
                  <div className="text-[2.5rem] text-accent mr-5 shrink-0 max-[375px]:mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-text-dark font-semibold text-xl mb-[5px]">
                      Hizmet Lokasyonları
                    </h3>
                    <p className="text-accent font-medium m-0">
                      İzmit Merkez Klinik & Online Platform
                    </p>
                  </div>
                </div>

                <p className="text-text-light text-base leading-[1.6] mb-5">
                  İzmit merkezindeki kliniğimizde yüz yüze görüşmeler ve güvenli online
                  platformumuzda uzaktan seanslar sunuyorum. Kocaeli ve çevre illerdeki danışanlarım için
                  esnek randevu seçenekleri mevcuttur. İngilizce ve Almanca dillerinde de hizmet
                  verebiliyorum.
                </p>

                <div className="mt-[15px] text-center">
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] max-[375px]:max-w-[200px] max-[375px]:mx-auto max-[480px]:max-w-[220px] max-[480px]:mx-auto max-[767px]:max-w-[250px] max-[767px]:mx-auto max-[991px]:max-w-[280px] lg:max-w-none">
                    <iframe
                      src={MAPS_IFRAME_SRC}
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps Location"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
