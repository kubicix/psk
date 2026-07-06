import React from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { GoogleBusinessCard } from '@/components/ui/GoogleBusinessCard';
import { FadeIn } from '@/components/ui/FadeIn';
import { TESTIMONIALS } from '@/lib/constants';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-bg-light max-[375px]:py-[50px] max-[767px]:py-[60px]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionTitle
            title="Danışan Görüşleri"
            subtitle="Hizmet aldığım danışanlarımın deneyimleri"
          />
        </FadeIn>

        <div className="flex flex-wrap justify-center -mx-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 max-w-[400px] lg:max-w-none">
              <FadeIn delay={index * 150}>
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            </div>
          ))}
        </div>

        <div className="flex justify-center -mx-4 mt-4">
          <div className="w-full lg:w-1/2 md:w-2/3 px-4">
            <FadeIn delay={450}>
              <GoogleBusinessCard />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
