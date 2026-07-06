import React from 'react';

export function AuthorBio() {
  return (
    <div className="mt-12 pt-8 border-t border-[rgba(147,112,219,0.15)]">
      <div className="flex items-start gap-5 max-[575px]:flex-col max-[575px]:items-center max-[575px]:text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-2xl font-bold shrink-0">
          AÖ
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-dark mb-1">Psikolog Asya Özcan</h3>
          <p className="text-text-light text-sm leading-[1.7] max-w-[500px]">
            İzmit merkezli psikolog. Çocuk, genç ve yetişkin psikolojisi alanlarında uzmanlaşmış olup,
            depresyon, anksiyete, otizm spektrum bozukluğu ve bireysel terapi konularında hizmet vermektedir.
            Online ve yüz yüze seanslar sunmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
}
