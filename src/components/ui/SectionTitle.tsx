import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-[60px] max-[767px]:mb-10">
      <h2 className="relative inline-block text-[2.5rem] font-bold text-text-dark mb-4 max-[375px]:text-[1.8rem] max-[480px]:text-[2rem] max-[767px]:text-[2.2rem] after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-accent after:to-secondary after:rounded-[2px]">
        {title}
      </h2>
      <p className="text-text-light text-lg max-w-[600px] mx-auto mt-5 max-[375px]:text-[0.95rem] max-[375px]:px-[15px] max-[767px]:text-[0.95rem]">
        {subtitle}
      </p>
    </div>
  );
}
