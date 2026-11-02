'use client';
import FreeDemoSection from '@/components/FreeDemoSection';
import React from 'react';
import { motion } from 'framer-motion';

export default function CadToInstagramPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900 pt-24 font-body selection:bg-[var(--color-gold)] selection:text-white">
      
      {/* 1. HERO SECTION: Bordered container matching reference */}
      <section className="w-full max-w-6xl mx-auto px-6 py-10 lg:py-14">
        <div className="border border-stone-200 bg-white shadow-sm p-6 sm:p-10 lg:p-14">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            
            {/* Left Media: Video with NO border */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md aspect-square overflow-hidden bg-stone-50 flex items-center justify-center">
                <video 
                  src="/assets/videos/animations/shot-6.mp4" 
                  poster="/images/cad-designing/model-hand-ring-preview.jpg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                  suppressHydrationWarning 
                  preload="auto" 
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/2 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900 mb-6 leading-[1.15]">
                Bring Your 3D CAD Models to Life for Digital Marketing
              </h1>
              
              <p className="text-base sm:text-lg text-stone-600 font-body leading-relaxed">
                Transform your jewelry CAD models into stunning, photorealistic visuals and engaging videos
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CAD TO DIGITAL MARKETING DESCRIPTION */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8">
        <div className="text-left space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-stone-900">
            CAD to Digital Marketing
          </h2>
          <p className="text-sm sm:text-base text-stone-700 font-body leading-relaxed">
            Transform your 3D jewelry CAD files into eye-catching, marketing-ready visuals for Instagram, YouTube, Facebook, TikTok, Pinterest, and other digital platforms. Using professional Blender, Cinema 4D, and KeyShot workflows, we create photorealistic product images, cinematic animations, 360° rotation videos, luxury lifestyle visuals, social media reels, and promotional content designed to showcase your jewelry beautifully and capture your audience&apos;s attention.
          </p>
        </div>
      </section>

      {/* 3. ADS PORTFOLIO HEADING */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-10 pb-4 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-stone-900 tracking-tight inline-block border-b-2 border-stone-900 pb-1">
          Ads Portfolio
        </h2>
      </section>

      {/* 4. ADS PORTFOLIO ROW 1 (3 items - completely borderless) */}
      <section className="w-full max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
          
          {/* Item 1: Still Image (No border) */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[4/5] overflow-hidden bg-transparent flex items-center justify-center group">
              <img 
                src="/images/cad-to-insta/portfolio img 1.jpg" 
                alt="Photorealistic Product Images"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <p className="text-xs sm:text-sm font-medium font-body text-stone-800 text-center mt-3">
              Photorealistic Product Images,
            </p>
          </div>

          {/* Item 2: Video 2 (Insta Add - No border) */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[4/5] overflow-hidden bg-transparent flex items-center justify-center">
              <video 
                src="/images/cad-to-insta/portfolio vid 2.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                suppressHydrationWarning 
                preload="auto" 
              />
            </div>
            <p className="text-xs sm:text-sm font-medium font-body text-stone-800 text-center mt-3">
              Insta Add
            </p>
          </div>

          {/* Item 3: Video 3 (Facebook Add - No border) */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[4/5] overflow-hidden bg-transparent flex items-center justify-center">
              <video 
                src="/images/cad-to-insta/portfolio vid 3.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                suppressHydrationWarning 
                preload="auto" 
              />
            </div>
            <p className="text-xs sm:text-sm font-medium font-body text-stone-800 text-center mt-3">
              Facebook Add
            </p>
          </div>

        </div>
      </section>

      {/* 5. ADS PORTFOLIO ROW 2 (Our Customer Work - 2 Large Videos - completely borderless) */}
      <section className="w-full max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Video 4: Ring showcase (No border) */}
          <div className="w-full aspect-[9/16] max-h-[760px] overflow-hidden bg-transparent flex items-center justify-center mx-auto">
            <video 
              src="/images/cad-to-insta/portfolio vid 4.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              suppressHydrationWarning 
              preload="auto" 
            />
          </div>

          {/* Video 5: Box opening animation (No border) */}
          <div className="w-full aspect-[9/16] max-h-[760px] overflow-hidden bg-transparent flex items-center justify-center mx-auto">
            <video 
              src="/images/cad-to-insta/portfolio vid 5.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              suppressHydrationWarning 
              preload="auto" 
            />
          </div>

        </div>

        {/* Caption below the two videos */}
        <p className="text-xs sm:text-sm font-medium font-body text-stone-800 text-center mt-5">
          Our Customer Work
        </p>
      </section>

      {/* 6. ADS PORTFOLIO ROW 3 (Real Model Changing CAD - Proper aspect ratio and borderless) */}
      <section className="w-full max-w-5xl mx-auto px-6 py-8 pb-16">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl aspect-[16/9] overflow-hidden bg-transparent flex items-center justify-center">
            <video 
              src="/images/cad-to-insta/portfolio vid 6.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-contain"
              suppressHydrationWarning 
              preload="auto" 
            />
          </div>
          
          <p className="text-xs sm:text-sm font-medium font-body text-stone-800 text-center mt-4">
            Real Model Changing CAD
          </p>
        </div>
      </section>

      {/* Free Demo Section */}
      <FreeDemoSection />

    </main>
  );
}
