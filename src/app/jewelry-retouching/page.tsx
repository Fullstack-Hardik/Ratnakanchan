'use client';

import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Scissors, Wand2, Sparkles, Diamond, Sun, Droplets, PlayCircle } from 'lucide-react';
import ScrollVelocity from '@/components/ui/ScrollVelocity';

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
      desc: "Perfect selections for multi-paths, complex maskings, ghost mannequins, and neck joint services using expert manual tools.",
      icon: <Scissors className="w-6 h-6" />,
      image: "/images/retouching-clipping.png",
      delay: 0.1
    },
    {
      title: "Color & Contrast Editing",
      desc: "Restore dull metals to brilliant gold and silver. Improve gemstone vibrancy, color correct, and master brightness levels.",
      icon: <Wand2 className="w-6 h-6" />,
      image: "/images/retouching-color.png",
      delay: 0.2
    },
    {
      title: "Noise & Dust Removal",
      desc: "Remove poor reflections, dust, and imperfections to create a completely flawless, highly reflective, pristine surface.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/images/retouching-noise.png",
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
          className="absolute inset-0 w-full h-full -z-10"
        >
           <img 
              src="/images/retouching-clipping.png" 
              alt="Jewelry Retouching Hero"
              className="w-full h-full object-cover opacity-60"
            />
           <div className="absolute inset-0 bg-gradient-to-tr from-stone-50/95 via-stone-50/70 to-transparent pointer-events-none"></div>
        </motion.div>

        <div className="flex flex-col items-center text-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-stone-200 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]"></span>
            <span className="text-xs font-bold text-stone-600 font-body uppercase tracking-widest">E-Commerce Ready</span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-5xl md:text-8xl font-medium tracking-tighter font-heading leading-[1.05] text-stone-900 mb-8 max-w-4xl"
          >
            Flawless <span className="italic text-[var(--color-gold)] font-normal">Retouching</span>
            <br/> for Luxury Brands.
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-xl md:text-2xl font-body text-stone-600 leading-relaxed max-w-2xl mb-12"
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

      {/* Video Showcase Section */}
      <section className="w-full max-w-[98%] mx-auto py-24 px-6 bg-stone-900 text-white rounded-[4rem] my-20 border border-stone-800 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-screen"></div>
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-16"
          >
            The Art of <span className="italic text-[var(--color-gold)]">Transformation</span>
          </motion.h2>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-stone-700 bg-black relative group"
          >
             <video 
               autoPlay={true} 
               loop={true} 
               muted={true} 
               playsInline={true}
               className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
             >
               <source src="/videos/retouching.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 border-[4px] md:border-[8px] border-white/5 pointer-events-none rounded-[2rem] md:rounded-[3rem]"></div>
          </motion.div>
        </div>
      </section>

      {/* Premium Animated Cards Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: feature.delay }}
              className="group relative bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-stone-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
               {/* Hover Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
               
               {/* Icon */}
               <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[var(--color-gold)] mb-8 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
               </div>

               {/* Text */}
               <h3 className="text-2xl font-heading font-bold text-stone-900 mb-4">{feature.title}</h3>
               <p className="text-stone-500 font-body leading-relaxed mb-10 flex-grow">
                 {feature.desc}
               </p>

               {/* Image Wrapper (Animated on hover) */}
               <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mt-auto">
                 <img 
                   src={feature.image} 
                   alt={feature.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                 />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
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
