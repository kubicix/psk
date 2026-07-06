import React from 'react';
import Image from 'next/image';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FadeIn } from '@/components/ui/FadeIn';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-bg-light max-[375px]:py-[50px] max-[767px]:py-[60px] max-h-[600px]:landscape:py-10">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionTitle
            title="Hakkımda"
            subtitle="Profesyonel deneyimim ve yaklaşımım hakkında bilgi edinin"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-[767px]:text-center">
          <div className="lg:col-span-4 flex justify-center mb-12 lg:mb-0">
            <FadeIn>
              <div className="relative w-[300px] h-[300px] max-[375px]:w-[200px] max-[375px]:h-[200px] max-[480px]:w-[220px] max-[480px]:h-[220px] max-[767px]:w-[250px] max-[767px]:h-[250px] rounded-full border-8 border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] cursor-pointer overflow-hidden">
                <Image
                  src="/images/asyaozcanpp.jpeg"
                  alt="Psikolog Asya Özcan"
                  fill
                  sizes="(max-width: 375px) 200px, (max-width: 480px) 220px, (max-width: 767px) 250px, 300px"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-8">
            <FadeIn delay={100}>
              <div className="text-text-light text-[1.1rem] leading-[1.8] max-[375px]:text-[0.95rem] max-[767px]:mt-[30px]">
                <h3 className="mb-4 text-text-dark font-semibold text-2xl max-[375px]:text-[1.3rem] max-[480px]:text-[1.4rem]">
                  Merhaba, Ben Asya Özcan
                </h3>
                <p className="mb-4">
                  Fenerbahçe Üniversitesi Psikoloji Bölümü&apos;nden &quot;Onur&quot; derecesi ile mezun oldum. İzmit
                  merkezli kliniğimizde ve online platformda çocuk, genç ve yetişkin ruh sağlığı alanında
                  hizmet veriyorum. Sertifikalı MMPI ve Objektif Çocuk Testleri Uygulayıcısı olarak, özel
                  eğitim ve gelişimsel bozukluklar konusunda uzmanlaştım.
                </p>
                <p className="mb-4">
                  Özel eğitim alanında deneyimli olarak, otizm spektrum bozukluğu, gelişimsel gecikmeler,
                  öğrenme güçlükleri olan çocuklarla çalışıyorum. Ayrıca çocuklarda okul fobisi, davranış
                  sorunları, gençlerde sosyal anksiyete ve kimlik arayışı, yetişkinlerde depresyon konularında
                  bireyselleştirilmiş terapi planları uyguluyorum. İngilizce ve Almanca dillerinde de hizmet
                  verebiliyorum.
                </p>
                <p className="mb-4">
                  Yetişkin ruh sağlığı alanında, depresyon, anksiyete bozuklukları, yaşam geçişi zorlukları,
                  iş stresi, ilişki sorunları ve kişisel gelişim konularında destek sağlıyorum. Hem
                  kliniğimizde yüz yüze hem de online platformda, yetişkinlerin ruhsal sağlığını güçlendirmek
                  ve yaşam kalitelerini artırmak için bireyselleştirilmiş yaklaşımlar geliştiriyorum. MMPI
                  testleri ile kapsamlı kişilik değerlendirmeleri yaparak, her bireye özgü terapi süreçleri
                  tasarlıyorum.
                </p>
                <p className="mb-4">
                  Multidisipliner ekiplerle iş birliği içinde çalışarak, çocukların gelişimini bütüncül bir
                  yaklaşımla destekliyorum. MMPI ve Objektif Çocuk Testleri ile detaylı değerlendirmeler
                  yaparak, aile katılımını güçlendirerek daha etkili ve kalıcı sonuçlar elde etmeyi
                  hedefliyorum.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
