import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function AuthorBio() {
  return (
    <div className="mt-12 pt-8 border-t border-[rgba(147,112,219,0.15)]">
      <div className="flex items-start gap-5 max-[575px]:flex-col max-[575px]:items-center max-[575px]:text-center">
        <Image
          src="/images/asyaozcanpp.webp"
          alt="Psikolog Asya Özcan"
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover object-[center_20%] border-2 border-[rgba(147,112,219,0.3)] shrink-0"
        />
        <div>
          <h3 className="text-lg font-bold text-text-dark mb-1">Psikolog Asya Özcan</h3>
          <p className="text-text-light text-sm leading-[1.7] max-w-[500px] mb-2">
            Fenerbahçe Üniversitesi Psikoloji Bölümü onur derecesi mezunu; sertifikalı MMPI ve
            Objektif Çocuk Testleri uygulayıcısı. İzmit merkezli kliniğinde ve online platformda
            çocuk, genç ve yetişkin psikolojisi alanlarında hizmet vermektedir.
          </p>
          <p className="text-sm m-0">
            <Link href="/#about" className="text-accent font-medium no-underline hover:underline">
              Hakkımda daha fazla bilgi
            </Link>
            <span className="text-text-light mx-2">·</span>
            <Link href="/hizmetler" className="text-accent font-medium no-underline hover:underline">
              Hizmetler
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
