'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AutoFadeSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function AutoFadeSlider({ images, interval = 1000, className = "relative w-full h-full overflow-hidden rounded-3xl shadow-2xl border border-stone-100 bg-stone-100 aspect-video" }: AutoFadeSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}
