'use client';

import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Scissors, Wand2, Sparkles, Diamond, Sun, Droplets, PlayCircle, MoveHorizontal } from 'lucide-react';
import ScrollVelocity from '@/components/ui/ScrollVelocity';

const BeforeAfterSlider = ({ beforeImage, afterImage, alt }: { beforeImage: string, afterImage: string, alt: string }) => {
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
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
      onMouseMove={handleMouseMove}
      onMouseUp={() => isDragging.current = false}
      onMouseLeave={() => isDragging.current = false}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => isDragging.current = false}
      onMouseDown={() => isDragging.current = true}
      onTouchStart={() => isDragging.current = true}
    >
      {/* After Image (Background, Right Side) */}
      <Image src={afterImage} alt={alt + " After"} fill className="object-cover pointer-events-none" draggable={false} sizes="(max-width: 768px) 100vw, 50vw" />

      {/* Before Image (Foreground, Left Side, Clipped) */}
      <div
        ref={beforeContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 50% 0 0)` }}
      >
        <Image src={beforeImage} alt={alt + " Before"} fill className="object-cover" draggable={false} sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      {/* Slider Line & Handle */}
      <div
        ref={handleRef}
        className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize flex items-center justify-center transition-none"
        style={{ left: `50%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border border-stone-200 text-stone-600 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
          <MoveHorizontal size={18} />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">Before</div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">After</div>
    </div>
  );
};

export default function JewelryRetouching() {
  const features = [
    {
      title: "Clipping Path & Masking",
      desc: "Perfect selections for multi-paths, complex maskings, and precision isolation. Every detail is retained.",
      icon: <Scissors className="w-6 h-6" />,
      before: "/images/retouching/Ring 1 Before.jpg",
      after: "/images/retouching/Ring 1 After.jpg",
      delay: 0.1
    },
    {
      title: "Color & Contrast Editing",
      desc: "Restore dull metals to brilliant gold and silver. Improve gemstone vibrancy, color correct, and master brightness.",
      icon: <Wand2 className="w-6 h-6" />,
      before: "/images/retouching/4 Before.jpg",
      after: "/images/retouching/4 After.jpg",
      delay: 0.2
    },
    {
      title: "Flawless Enhancements",
      desc: "Remove poor reflections, dust, and imperfections to create a completely flawless, highly reflective, pristine surface.",
      icon: <Sparkles className="w-6 h-6" />,
      before: "/images/retouching/Front Banner Before.jpg",
      after: "/images/retouching/Front Banner After.jpg",
      delay: 0.3
    }
  ];

  const techniques = [
    { title: "Clipping Path", icon: <Scissors className="w-5 h-5" /> },
    { title: "Diamond Masking", icon: <Diamond className="w-5 h-5" /> },
    { title: "Color Correction", icon: <Wand2 className="w-5 h-5" /> },
    { title: "Brightness & Contrast", icon: <Sun className="w-5 h-5" /> },
    { title: "Noise Removal", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Unwanted Dust Removal", icon: <Droplets className="w-5 h-5" /> },
    { title: "Gemstone Enhancement", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Natural Shadow", icon: <Sun className="w-5 h-5" /> },
    { title: "Remove Dust & Reflection", icon: <Wand2 className="w-5 h-5" /> },
    { title: "Make Stones Shinning", icon: <Diamond className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-28 pb-20 overflow-x-hidden selection:bg-[var(--color-gold)] selection:text-white">

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 mb-16 mt-8">
        <div className="relative w-full rounded-[3rem] overflow-hidden shadow-xl bg-stone-100 flex items-center justify-center">
          <img
            src="/images/retouching/image.png"
            alt="Jewelry Retouching Hero"
            className="w-full h-auto object-cover pointer-events-none"
          />
        </div>
      </section>

      {/* Scroll Velocity Animation */}
      <section className="py-10 bg-white overflow-hidden border-y border-stone-100">
        <ScrollVelocity
          texts={['Flawless Retouching', 'Premium Luxury Quality']}
          velocity={50}
          className="text-[var(--color-gold)] font-heading"
        />
      </section>

      {/* Large Banner Showcase */}
      <section className="w-full max-w-7xl mx-auto py-12 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <img
            src="/assets/images/retouching/Use As High End Retouching Banner.jpg"
            alt="Render Images from Any Software Banner"
            className="w-full h-auto rounded-3xl shadow-sm border border-stone-100"
          />
        </motion.div>
      </section>

      {/* Premium Animated Cards Section with Before/After Sliders */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: feature.delay }}
              className="group relative bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-stone-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="px-6 pt-6 pb-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>

                {/* Text */}
                <h3 className="text-2xl font-heading font-bold text-stone-900 mb-4">{feature.title}</h3>
                <p className="text-stone-500 font-body leading-relaxed flex-grow">
                  {feature.desc}
                </p>
              </div>

              {/* Before/After Slider inside Card */}
              <div className="mt-auto w-full rounded-b-[2.5rem] overflow-hidden">
                <BeforeAfterSlider
                  beforeImage={feature.before}
                  afterImage={feature.after}
                  alt={feature.title}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services List Grid */}
      <section className="w-full bg-white py-24 border-y border-stone-100 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col mb-16 text-center items-center">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-stone-900 mb-6">
              What We Do in <br /> <span className="italic text-[var(--color-gold)]">Our Retouching Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {techniques.map((tech, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i}
                className="flex flex-col items-center text-center gap-3 p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[var(--color-gold)]/30 hover:bg-white transition-all shadow-sm group"
              >
                <div className="text-[var(--color-gold)] bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="font-heading font-bold text-sm text-stone-800 leading-tight">{tech.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media and Content Section 1: Clipping & Editing */}
      <section className="w-full max-w-7xl mx-auto py-24 px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold text-stone-900 mb-4 tracking-tight uppercase">Clipping Path</h3>
              <p className="text-stone-500 font-body leading-relaxed">
                Clipping path Service covers Multi path, clipping mask, basic, compound, complex or super complex clipping path services. We use manual Photoshop clipping path tools for clippings. Basically Clipping path is the selection of a certain area in an image. Clipping Path Service is the basic requirement of all Photoshop Image editing services. For example, If you need to remove background from an Image or if you need Image masking, ghost mannequin removal or Photo retouching services, first of all You have to do clipping path around the Image. we use Adobe Photoshop pen tool to get the best and accurate clipping path work. It is used to do any Photoshop Image editing work like remove background, photo retouching, color correction, Image Masking, Shadow making, Ghost Mannequin or neck join services etc.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-heading font-bold text-stone-900 mb-4 tracking-tight uppercase">E-Commerce Product Editing</h3>
              <p className="text-stone-500 font-body leading-relaxed">
                If you are looking for a company who provide Product Image Editing Services with Cropping, Resizing, Straightening and formatting for publishing in website or any advertising purpose at affordable cost with top quality then Ratnakanchan Associate is the best solution for you. We have lots of expertise who deal with your jobs most confidently and deliver to you the best expected quality for your images. Our expertise professional has ability to handle any job, at any time, in any quantity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 grid grid-cols-1 gap-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-100 aspect-video relative">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/assets/videos/rendering/Comp 1_3_1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src="/images/retouching/01-01-558_R.jpg" alt="Jewelry Item 1" className="rounded-2xl shadow-md object-cover aspect-square w-full" />
              <img src="/images/retouching/03-01-483_E.jpg" alt="Jewelry Item 2" className="rounded-2xl shadow-md object-cover aspect-square w-full" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Media and Content Section 2: Retouching & Why Us */}
      <section className="w-full bg-stone-900 text-white py-24 my-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold text-white mb-4 tracking-tight uppercase">Jewelry Retouching Service</h3>
              <p className="text-stone-300 font-body leading-relaxed">
                Jewelry retouching is a sophisticated modification of the photographs with the help of an image editing software such as Photoshop. Its aim is to raise the image quality, i.e. to make the photographed item more alluring by using the light and color correction, making stones brighter, removing spots or scratches. All these jewelry retouching services are widely asked for mainly commercial purposes. Our jewelry editing guarantees really eye-catching outcomes that allure people due to the brightness, deep colors and absence of photo drawbacks.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-heading font-bold text-[var(--color-gold)] mb-4 tracking-tight uppercase">Why Ratnakanchan.com</h3>
              <p className="text-stone-300 font-body leading-relaxed">
                Through innovative thinking which adheres to high standards of quality and excellence we make sure that you enhance your growth potential in the industry. We specialize in digital correction of images. Be it in any form, digitally shot, scanned, or a sketch (pencil design) from the designer’s board. Through requisite touch up we help you visualize your wax model in its final form, complete with gold and diamonds set in.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-800 aspect-square relative">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/assets/videos/animations/Shot 1.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center bg-white rounded-[3rem] p-16 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-stone-100 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-50/50 pointer-events-none"></div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-stone-900 mb-6 relative z-10">
            Experience the difference.
          </h2>
          <p className="text-lg text-stone-600 font-body max-w-xl mb-10 relative z-10">
            Send us a sample file for a free retouching trial. Experience the Ratnakanchan standard of perfection today.
          </p>
          <Link href="/contact" className="relative z-10 inline-flex items-center gap-4 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-all duration-300 font-body font-bold uppercase tracking-widest px-10 py-5 rounded-full shadow-xl hover:-translate-y-1">
            INITIATE TRIAL
          </Link>
        </motion.div>
      </section>

    </main>
  );
}



