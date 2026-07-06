import React from 'react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative bg-white rounded-[20px] p-[35px] max-[375px]:p-5 shadow-[0_5px_25px_rgba(0,0,0,0.08)] text-center mb-[30px] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] border-2 border-transparent hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(147,112,219,0.15)] hover:border-[rgba(147,112,219,0.2)] testimonial-card-quote max-[767px]:mb-[25px]">
      <p className="relative z-10 text-[1.05rem] max-[375px]:text-[0.95rem] italic text-text-light mb-5 leading-[1.8]">
        {testimonial.quote}
      </p>
      <div className="relative font-semibold text-accent text-base before:content-['—'] before:mr-2 before:text-accent">
        {testimonial.author}
      </div>
    </div>
  );
}
