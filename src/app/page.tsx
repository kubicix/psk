import React from 'react';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { FAQSection, HOME_FAQS } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FloatingInstagram } from '@/components/layout/FloatingInstagram';
import { Footer } from '@/components/layout/Footer';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FloatingInstagram />
      <Footer />
    </>
  );
}
