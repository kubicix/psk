'use client';

import React, { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      const removeTimer = setTimeout(() => {
        setIsRendered(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearTimeout(removeTimer);
      };
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center z-[10000] transition-all duration-500 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="w-[50px] h-[50px] border-4 border-[rgba(147,112,219,0.2)] border-t-accent rounded-full animate-spin" />
    </div>
  );
}
