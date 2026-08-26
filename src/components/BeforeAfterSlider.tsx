'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }: { beforeImage: string, afterImage: string, alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeContainerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !beforeContainerRef.current || !handleRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));

    beforeContainerRef.current.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    handleRef.current.style.left = `${percent}%`;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
      onMouseMove={handleMouseMove}
      onMouseUp={() => isDragging.current = false}
      onMouseLeave={() => isDragging.current = false}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => isDragging.current = false}
      onMouseDown={() => isDragging.current = true}
      onTouchStart={() => isDragging.current = true}
    >
      {/* After Image (Background, Right Side) */}
      <img src={afterImage} alt={alt + " After"} className="absolute inset-0 w-full h-full object-contain pointer-events-none" draggable={false} />

      {/* Before Image (Foreground, Left Side, Clipped) */}
      <div
        ref={beforeContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 50% 0 0)` }}
      >
        <img src={beforeImage} alt={alt + " Before"} className="absolute inset-0 w-full h-full object-contain pointer-events-none" draggable={false} />
      </div>

      {/* Slider Line & Handle */}
      <div
        ref={handleRef}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 text-gray-500">
          <MoveHorizontal size={18} />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Before</div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">After</div>
    </div>
  );
}
