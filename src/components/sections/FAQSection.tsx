import React from 'react';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FadeIn } from '@/components/ui/FadeIn';

export const HOME_FAQS = [
  {
    question: 'Randevu nasıl alabilirim?',
    answer:
      'İletişim formunu doldurarak, e-posta göndererek veya Instagram üzerinden mesaj atarak randevu talebinde bulunabilirsiniz. En kısa sürede size dönüş yapılır ve uygun bir görüşme zamanı birlikte planlanır.',
  },
  {
    question: 'Hangi yaş gruplarıyla çalışıyorsunuz?',
    answer:
      'Çocuk, ergen ve yetişkinlerle çalışıyorum. Çocuklarda okul fobisi, davranış sorunları ve gelişimsel destek; ergenlerde sınav kaygısı ve kimlik arayışı; yetişkinlerde depresyon, anksiyete ve yaşam zorlukları en sık çalıştığım alanlardır.',
  },
  {
    question: 'Online terapi mi yüz yüze terapi mi daha uygun?',
    answer:
      'Her ikisi de etkilidir; araştırmalar online terapinin birçok alanda yüz yüze terapiyle benzer sonuçlar verdiğini göstermektedir. İzmit ve çevresindeyseniz yüz yüze, başka bir şehirde veya yurt dışındaysanız online görüşme tercih edebilirsiniz.',
  },
  {
    question: 'Görüşmeler gizli midir?',
    answer:
      'Evet. Tüm görüşmeler, psikologların bağlı olduğu etik ilkeler çerçevesinde gizlilik esasıyla yürütülür. Bilgileriniz onayınız olmadan kimseyle paylaşılmaz.',
  },
  {
    question: 'Psikolog ile psikiyatrist arasındaki fark nedir?',
    answer:
      'Psikiyatristler tıp doktorudur; tanı koyar ve ilaç tedavisi düzenler. Psikologlar ise psikoterapi ve psikolojik değerlendirme alanında çalışır. İhtiyaç hâlinde iki uzmanlık birlikte, iş birliği içinde yürütülür.',
  },
  {
    question: 'İlk seansta neler olur?',
    answer:
      'İlk görüşme tanışma ve değerlendirme seansıdır: başvuru nedeninizi, beklentilerinizi ve geçmişinizi konuşuruz. Sürecin nasıl ilerleyeceği, görüşme sıklığı ve hedefler bu görüşmede birlikte belirlenir.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-bg-light max-[375px]:py-[50px] max-[767px]:py-[60px]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionTitle
            title="Sıkça Sorulan Sorular"
            subtitle="Terapi süreci hakkında merak edilenler"
          />
        </FadeIn>

        <div className="max-w-[780px] mx-auto space-y-4">
          {HOME_FAQS.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 75}>
              <details className="group bg-white rounded-[16px] border border-[rgba(230,230,250,0.7)] shadow-[0_3px_15px_rgba(0,0,0,0.05)] overflow-hidden">
                <summary className="cursor-pointer list-none p-5 font-semibold text-text-dark flex items-center justify-between gap-4">
                  {faq.question}
                  <span aria-hidden className="text-accent transition-transform duration-300 group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="px-5 pb-5 m-0 text-text-light leading-[1.8]">{faq.answer}</p>
              </details>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-text-light text-sm">
            Başka sorularınız mı var?{' '}
            <Link href="#contact" className="text-accent font-medium no-underline hover:underline">
              İletişime geçin
            </Link>{' '}
            veya{' '}
            <Link href="/hizmetler" className="text-accent font-medium no-underline hover:underline">
              hizmet sayfalarını inceleyin
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
