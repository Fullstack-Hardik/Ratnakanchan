'use client';

import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Scissors, Wand2, Sparkles, Diamond, Sun, Droplets, PlayCircle, MoveHorizontal } from 'lucide-react';
import ScrollVelocity from '@/components/ui/ScrollVelocity';

const BeforeAfterSlider = ({ beforeImage, afterImage, alt }: { beforeImage: string, afterImage: string, alt: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background, Right Side) */}
      <img src={afterImage} alt={alt + " After"} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />
      
      {/* Before Image (Foreground, Left Side, Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt={alt + " Before"} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize flex items-center justify-center transition-all duration-300"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
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
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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
    { title: "Diamond Masking", icon: <Diamond className="w-5 h-5" /> },
    { title: "Natural Shadows", icon: <Sun className="w-5 h-5" /> },
    { title: "Stone Enhancing", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Reflection Fixing", icon: <Droplets className="w-5 h-5" /> },
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-28 pb-20 overflow-x-hidden selection:bg-[var(--color-gold)] selection:text-white">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full max-w-7xl mx-auto px-6 pt-24 pb-48 z-10 flex flex-col justify-center min-h-[70vh] rounded-[3rem] overflow-hidden mb-16 shadow-sm border border-stone-200">
        
        {/* Parallax Image Background */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full -z-10 bg-stone-900"
        >
           <img 
              src="/images/hero/Use As Header in Retouching Service.jpg" 
              alt="Jewelry Retouching Hero"
              className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
           <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/90 via-stone-900/50 to-transparent pointer-events-none"></div>
        </motion.div>

        <div className="flex flex-col items-center text-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md shadow-sm border border-white/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] shadow-[0_0_10px_var(--color-gold)]"></span>
            <span className="text-xs font-bold text-white/90 font-body uppercase tracking-widest">E-Commerce Ready</span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-5xl md:text-8xl font-medium tracking-tighter font-heading leading-[1.05] text-white mb-8 max-w-4xl"
          >
            Flawless <span className="italic text-[var(--color-gold)] font-normal">Retouching</span>
            <br/> for Luxury Brands.
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-xl md:text-2xl font-body text-white/70 leading-relaxed max-w-2xl mb-12"
          >
            Providing expert photo editing, cropping, resizing, and precision formatting. We ensure you get the absolute best quality for your images in any quantity.
          </motion.p>
        </div>
      </section>

      {/* Scroll Velocity Animation */}
      <section className="py-10 bg-white overflow-hidden border-y border-stone-100">
        <ScrollVelocity
          texts={['Flawless Retouching', 'Premium Luxury Quality']} 
          velocity={50} 
          className="text-stone-900 font-heading"
        />
      </section>

      {/* Large Lifestyle Before/After Showcase */}
      <section className="w-full max-w-7xl mx-auto py-24 px-6 relative z-10">
        <div className="flex flex-col items-center text-center relative z-10 mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-4 text-stone-900"
          >
            The Art of <span className="italic text-[var(--color-gold)]">Transformation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-500 font-body max-w-2xl"
          >
            Drag the slider to experience the dramatic difference our high-end retouching makes on lifestyle and product photography.
          </motion.p>
        </div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full shadow-2xl rounded-3xl p-2 bg-white border border-stone-100"
        >
           <BeforeAfterSlider 
              beforeImage="/images/retouching/Lifestyle Before.jpg"
              afterImage="/images/retouching/Lifestyle After.jpg"
              alt="Lifestyle Jewelry Retouching"
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
              className="group relative bg-white rounded-[2.5rem] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-stone-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
               {/* Hover Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               
               <div className="px-2 pt-2">
                 {/* Icon */}
                 <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                 </div>

                 {/* Text */}
                 <h3 className="text-2xl font-heading font-bold text-stone-900 mb-4">{feature.title}</h3>
                 <p className="text-stone-500 font-body leading-relaxed mb-8 flex-grow">
                   {feature.desc}
                 </p>
               </div>

               {/* Before/After Slider inside Card */}
               <div className="mt-auto w-full">
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

      {/* Techniques Minimal List */}
      <section className="w-full bg-white py-32 border-y border-stone-100 my-20">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center justify-between">
               <motion.div 
                 initial={{ opacity: 0, x: -40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="w-full md:w-1/2"
               >
                 <h2 className="text-4xl md:text-5xl font-heading font-medium text-stone-900 mb-6 leading-tight">
                   The fine details <br/>make the masterpiece.
                 </h2>
                 <p className="text-lg text-stone-500 font-body leading-relaxed max-w-lg mb-8">
                   Basically, a clipping path is the selection of a certain area in an image. It is the core requirement of all advanced editing services. We exclusively use manual Adobe Photoshop pen tools to guarantee absolute accuracy, unlike automated software.
                 </p>
                 <Link href="/contact" className="inline-flex items-center gap-3 text-[var(--color-gold)] font-bold tracking-widest uppercase hover:gap-5 transition-all text-sm">
                    Start Exploring <ArrowRight size={18} />
                 </Link>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
               >
                  {techniques.map((tech, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[var(--color-gold)]/30 hover:bg-white transition-all shadow-sm">
                       <div className="text-[var(--color-gold)]">
                         {tech.icon}
                       </div>
                       <span className="font-heading font-bold text-lg text-stone-800">{tech.title}</span>
                    </div>
                  ))}
               </motion.div>
            </div>
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
