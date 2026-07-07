import React from 'react';
import Image from 'next/image';
import { GOOGLE_REVIEWS } from '@/lib/constants';

function VerifiedIcon() {
  return (
    <span className="inline-flex items-center justify-center w-[18px] h-[18px] bg-[#4285F4] rounded-full shrink-0" title="Doğrulanmış İşletme">
      <svg viewBox="0 0 24 24" className="w-[11px] h-[11px] fill-white">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    </span>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#FBBC05]">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function ReviewStarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-[#FBBC05]">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-[12px] h-[12px] shrink-0">
      <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <div className="w-[22px] h-[22px] bg-[#16a34a] rounded-full flex items-center justify-center shrink-0">
      <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-white">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    </div>
  );
}

export function GoogleBusinessCard() {
  return (
    <div className="gbp-card max-w-[480px] mx-auto mt-10 bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.12)] overflow-hidden font-sans transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] max-[575px]:max-w-full max-[575px]:mt-[30px]">
      {/* Card Header */}
      <div className="relative bg-gradient-to-r from-[#e8eaf6] via-[#c5cae9] to-[#bbdefb] p-7 pb-5 flex items-center gap-[18px] max-[575px]:p-5 max-[575px]:pb-4 max-[575px]:gap-3.5 after:content-[''] after:absolute after:top-3 after:right-3.5 after:w-7 after:h-7 after:bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_48_48%22%3E%3Cpath_fill=%22%234285F4%22_d=%22M24_9.5c3.54_0_6.71_1.22_9.21_3.6l6.85-6.85C35.9_2.38_30.47_0_24_0_14.62_0_6.51_5.38_2.56_13.22l7.98_6.19C12.43_13.72_17.74_9.5_24_9.5z%22/%3E%3Cpath_fill=%22%2334A853%22_d=%22M46.98_24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58_2.96-2.26_5.48-4.78_7.18l7.73_6c4.51-4.18_7.09-10.36_7.09-17.65z%22/%3E%3Cpath_fill=%22%23FBBC05%22_d=%22M10.53_28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92_16.46_0_20.12_0_24c0_3.88.92_7.54_2.56_10.78l7.97-6.19z%22/%3E%3Cpath_fill=%22%23EA4335%22_d=%22M24_48c6.48_0_11.93-2.13_15.89-5.81l-7.73-6c-2.15_1.45-4.92_2.3-8.16_2.3-6.26_0-11.57-4.22-13.47-9.91l-7.98_6.19C6.51_42.62_14.62_48_24_48z%22/%3E%3C/svg%3E')] after:bg-contain after:bg-no-repeat after:opacity-90">
        <Image
          src="/images/asyaozcanpp.webp"
          alt="Psikolog Asya Özcan"
          width={72}
          height={72}
          className="w-[72px] h-[72px] rounded-full object-cover object-[center_20%] border-3 border-white shadow-[0_2px_10px_rgba(0,0,0,0.15)] shrink-0 max-[575px]:w-[58px] max-[575px]:h-[58px]"
        />
        <div className="gbp-info">
          <h3 className="text-[#202124] font-semibold text-[1.15rem] m-0 mb-[2px] flex items-center gap-1.5 max-[575px]:text-[1rem]">
            Psikolog Asya Özcan
            <VerifiedIcon />
          </h3>
          <p className="text-[#5f6368] text-[0.82rem] m-0">Psikolog · İzmit, Kocaeli</p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="text-[#202124] font-semibold text-[0.9rem]">5.0</span>
            <div className="flex gap-[1px]">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <span className="text-[#1a73e8] text-[0.78rem] cursor-pointer hover:underline">
              3 Google Yorumu
            </span>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="p-0">
        {GOOGLE_REVIEWS.map((review, index) => (
          <div key={index} className="p-6 max-[575px]:p-4 border-t border-[#e8eaed] last:border-b-0">
            <div className="flex items-center gap-3 mb-2.5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[1rem] font-semibold text-white shrink-0 tracking-[0.5px] ${
                  review.bgColor === 'bg-purple' ? 'bg-[#7B1FA2]' : 'bg-[#00897B]'
                }`}
              >
                {review.initial}
              </div>
              <div className="grow">
                <p className="text-[#202124] font-semibold text-[0.9rem] m-0 leading-[1.2]">
                  {review.authorName}
                </p>
                <div className="flex items-center gap-1 text-[#5f6368] text-[0.72rem] mt-[2px]">
                  <GoogleLogo />
                  Google yorumları
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#202124] font-semibold text-[0.82rem]">
                {review.score}
              </span>
              <div className="flex gap-[1px]">
                <ReviewStarIcon />
                <ReviewStarIcon />
                <ReviewStarIcon />
                <ReviewStarIcon />
                <ReviewStarIcon />
              </div>
              <span className="text-[#70757a] text-[0.75rem]">· {review.time}</span>
            </div>
            <p className="text-[#3c4043] text-[0.88rem] leading-[1.55] m-0">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      {/* Trust Footer */}
      <div className="p-6 max-[575px]:p-4 border-t border-[#e8eaed] bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] flex items-center gap-2.5 rounded-b-2xl">
        <ShieldIcon />
        <span className="text-[#15803d] text-[0.72rem] leading-[1.4] font-medium">
          Bu yorumlar Google onaylıdır. İşletme hesabına danışanlar tarafından bırakılmıştır.
        </span>
      </div>
    </div>
  );
}
