'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-accent to-secondary z-[9999] transition-[width] duration-100 ease-out"
      style={{ width: `${progress}%` }}
    />
  );
}
