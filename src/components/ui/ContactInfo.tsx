import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { CONTACT_ITEMS } from '@/lib/constants';

export function ContactInfo() {
  return (
    <div className="relative bg-gradient-to-br from-primary to-secondary rounded-[20px] p-[45px] max-[375px]:p-[25px] max-[480px]:p-[25px] overflow-hidden before:content-[''] before:absolute before:-top-1/2 before:-right-1/2 before:w-[200%] before:h-[200%] before:[background:radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] before:pointer-events-none">
      <h4 className="text-text-dark font-semibold text-xl mb-6 max-[767px]:text-[1.3rem] relative z-10">
        İletişim Bilgileri
      </h4>
      <div className="relative z-10">
        {CONTACT_ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-[30px] p-[15px] max-[375px]:mb-[20px] rounded-[12px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.3)] hover:translate-x-[5px] group"
          >
            <div className="text-[1.5rem] max-[375px]:text-[1.2rem] text-accent mr-5 w-10 h-10 flex items-center justify-center bg-[rgba(255,255,255,0.5)] rounded-[10px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[rgba(255,255,255,0.8)]">
              <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
            </div>
            <div>
              <h5 className="text-text-dark font-semibold mb-[5px] text-[1rem]">
                {item.title}
              </h5>
              <div className="text-text-light text-sm leading-[1.6]">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.title === 'Instagram' ? '_blank' : undefined}
                    rel={item.title === 'Instagram' ? 'noopener noreferrer' : undefined}
                    className="hover:text-accent hover:underline transition-colors duration-300"
                  >
                    {item.content}
                  </a>
                ) : (
                  <span className="whitespace-pre-line">{item.content}</span>
                )}

                {item.title === 'Adres' && (
                  <div className="mt-2">
                    <a
                      href="https://www.google.com/maps?q=40.7622984,29.9328223"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent text-[0.9rem] font-semibold py-1.5 px-3 bg-[rgba(147,112,219,0.1)] rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faLocationArrow} className="mr-2 h-3.5 w-3.5" />
                      Haritada Göster
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
