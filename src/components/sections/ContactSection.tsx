import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactForm } from '@/components/ui/ContactForm';
import { ContactInfo } from '@/components/ui/ContactInfo';
import { FadeIn } from '@/components/ui/FadeIn';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 max-[375px]:py-[50px] max-[767px]:py-[60px]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionTitle
            title="İletişim"
            subtitle="Randevu almak ve daha fazla bilgi için benimle iletişime geçin"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={200}>
            <ContactInfo />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
