'use client';

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { sendContactForm } from '@/lib/emailjs';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Preload configuration on mount to match vanilla behavior
  React.useEffect(() => {
    import('@/lib/emailjs').then(({ loadEmailConfig }) => {
      loadEmailConfig();
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Honeypot: hidden field filled only by bots
    const honeypot = formRef.current.elements.namedItem('website') as HTMLInputElement | null;
    if (honeypot?.value) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      await sendContactForm(formRef.current);
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[20px] p-[45px] max-[375px]:p-[25px] max-[480px]:p-[25px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_15px_50px_rgba(147,112,219,0.15)]">
      <h3 className="text-text-dark font-semibold text-xl mb-6 max-[767px]:text-[1.3rem]">
        Mesaj Gönderin
      </h3>
      <form ref={formRef} onSubmit={handleSubmit} id="contact-form">
        {/* Honeypot field - hidden from users, catches spam bots */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Web siteniz</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-text-dark font-semibold text-[0.95rem] mb-2 max-[575px]:mb-[5px]">
            Adınız Soyadınız
          </label>
          <input
            type="text"
            className="w-full border-2 border-[rgba(230,230,250,0.5)] rounded-[12px] p-[14px_18px] text-base bg-bg-light focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(147,112,219,0.1)] focus:bg-white focus:-translate-y-[2px] hover:border-[rgba(147,112,219,0.3)] transition-all duration-300 max-[575px]:text-base max-[575px]:p-[10px_12px]"
            id="user_name"
            name="user_name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="user_email" className="block text-text-dark font-semibold text-[0.95rem] mb-2 max-[575px]:mb-[5px]">
            E-posta Adresiniz
          </label>
          <input
            type="email"
            className="w-full border-2 border-[rgba(230,230,250,0.5)] rounded-[12px] p-[14px_18px] text-base bg-bg-light focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(147,112,219,0.1)] focus:bg-white focus:-translate-y-[2px] hover:border-[rgba(147,112,219,0.3)] transition-all duration-300 max-[575px]:text-base max-[575px]:p-[10px_12px]"
            id="user_email"
            name="user_email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="user_phone" className="block text-text-dark font-semibold text-[0.95rem] mb-2 max-[575px]:mb-[5px]">
            Telefon Numaranız
          </label>
          <input
            type="tel"
            className="w-full border-2 border-[rgba(230,230,250,0.5)] rounded-[12px] p-[14px_18px] text-base bg-bg-light focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(147,112,219,0.1)] focus:bg-white focus:-translate-y-[2px] hover:border-[rgba(147,112,219,0.3)] transition-all duration-300 max-[575px]:text-base max-[575px]:p-[10px_12px]"
            id="user_phone"
            name="user_phone"
            placeholder="0555 000 00 00"
            pattern="[0-9\s\(\)\-\+]{10,15}"
          />
          <div className="text-xs text-text-light mt-2">
            İsteğe bağlı - Sizi arayabilmemiz için
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-text-dark font-semibold text-[0.95rem] mb-2 max-[575px]:mb-[5px]">
            Mesajınız
          </label>
          <textarea
            className="w-full border-2 border-[rgba(230,230,250,0.5)] rounded-[12px] p-[14px_18px] text-base bg-bg-light focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(147,112,219,0.1)] focus:bg-white focus:-translate-y-[2px] hover:border-[rgba(147,112,219,0.3)] transition-all duration-300 max-[575px]:text-base max-[575px]:p-[10px_12px]"
            id="message"
            name="message"
            rows={5}
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative overflow-hidden w-full lg:w-auto min-h-[44px] mt-2.5 bg-accent hover:bg-opacity-95 text-white font-semibold py-3.5 px-[35px] rounded-[30px] transition-all duration-300 shadow-[0_4px_15px_rgba(147,112,219,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(147,112,219,0.5)] active:translate-y-[-1px] disabled:opacity-75 disabled:cursor-not-allowed max-[375px]:text-[0.95rem] max-[375px]:py-2.5 max-[375px]:px-[25px] max-[575px]:w-full"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faSpinner} className="animate-spin h-5 w-5" />
              Gönderiliyor...
            </span>
          ) : (
            <span>Mesaj Gönder</span>
          )}
        </button>

        <div role="status" aria-live="polite">
          {status === 'success' && (
            <p className="mt-4 p-3.5 rounded-[12px] bg-[rgba(22,163,74,0.08)] text-[#15803d] text-sm font-medium m-0">
              Mesajınız başarıyla gönderildi! En kısa sürede size geri dönüş yapacağım.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 p-3.5 rounded-[12px] bg-[rgba(220,38,38,0.08)] text-[#b91c1c] text-sm font-medium m-0">
              Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan{' '}
              <a href="mailto:psikologasyaozcan@gmail.com" className="underline text-inherit">
                psikologasyaozcan@gmail.com
              </a>{' '}
              adresine yazın.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
