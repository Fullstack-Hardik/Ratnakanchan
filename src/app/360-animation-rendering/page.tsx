'use client';

import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Video, RefreshCw, Layers, MonitorPlay } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Animation360Page() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Parallax Scroll Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Hero Parallax
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);

  // Horizontal Scroll Showcase
  const { scrollYProgress: showcaseProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"]
  });
  
  const scaleImage = useTransform(showcaseProgress, [0.2, 0.5, 0.8], [0.8, 1, 0.8]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-white text-stone-900 pt-28 pb-20 selection:bg-[var(--color-gold)] selection:text-white overflow-x-hidden">
      
      {/* Hero Section with Transparent Video Background */}
      <section ref={heroRef} className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-40 z-10 min-h-[80vh] flex items-center justify-center overflow-hidden">
        
        {/* Parallax Video Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full -z-10 rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-stone-50"
        >
           <video 
              autoPlay={true} 
              loop={true} 
              muted={true} 
              playsInline={true}
              className="w-full h-full object-cover"
            >
              <source src="/videos/360m.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white pointer-events-none"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-stone-200 mb-8"
          >
            <RefreshCw size={14} className="text-[var(--color-gold)]" />
            <span className="text-xs font-bold text-stone-600 font-body uppercase tracking-widest">Interactive Visualization</span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter font-heading leading-[0.95] text-stone-900 mb-8"
          >
            360° HTML <br className="hidden md:block"/>
            <span className="text-[var(--color-gold)]">Product Animation</span>
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="text-xl md:text-2xl font-body text-stone-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Experience your designs in full 360-degrees. Interactive, high-quality, and completely realistic.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-32 bg-white">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
              <span className="text-sm font-bold text-stone-400 font-body tracking-widest uppercase">Types of Video Rendering</span>
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[1.05]">
                Why High Quality Rendering is Important
              </h2>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                High Quality Photo Rendering is very important, as they can be used to enhance proposals, presentations and website sales. The customer wants to see 3D models as they would appear in real life, using specific gemstones and material colors, in a specific environment or angle.
              </p>
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
                   <MonitorPlay className="w-5 h-5 text-[var(--color-gold)]" />
                 </div>
                 <div className="font-heading font-bold text-xl text-stone-900">Enhance your presentations</div>
              </div>
            </div>

            <div className="relative">
               {/* Premium Big Image */}
               <div className="w-full aspect-[4/3] bg-stone-50 rounded-[3rem] p-0 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-stone-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-[var(--color-gold)]/5 to-transparent z-10"></div>
                  <img src="/images/large-premium-360.png" alt="Premium 360 View" className="w-full h-full object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* Dynamic Video Showcase Section (Scroll Scale Effect) */}
      <section ref={showcaseRef} className="w-full bg-stone-50 py-40 relative overflow-hidden rounded-[4rem] border-y border-stone-100 shadow-inner">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none mix-blend-multiply"></div>
         
         <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
           <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">Professional Realism</h2>
           <p className="text-xl font-body text-stone-600 max-w-3xl mx-auto leading-relaxed">
             We offer professional jewelry rendering for any type of project. Our talented jewelry CAD designers are able to create realistic 3D photo renderings using powerful software where every single detail is visually represented. 
           </p>
         </div>

         {/* Enhanced Video Layout */}
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold)]/20 to-transparent blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500"></div>
               <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white border border-stone-200">
                  <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-500">360° Ring Render</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                    </div>
                  </div>
                  <video 
                    autoPlay={true} 
                    loop={true} 
                    muted={true} 
                    playsInline={true}
                    className="w-full aspect-[4/3] object-cover"
                  >
                    <source src="/videos/cad1.mp4" type="video/mp4" />
                  </video>
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative lg:translate-y-16"
            >
               <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-gold)]/20 to-transparent blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500"></div>
               <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white border border-stone-200">
                  <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-500">High Definition Video</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                    </div>
                  </div>
                  <video 
                    autoPlay={true} 
                    loop={true} 
                    muted={true} 
                    playsInline={true}
                    className="w-full aspect-[4/3] object-cover"
                  >
                    <source src="/videos/cad2.mp4" type="video/mp4" />
                  </video>
               </div>
            </motion.div>
         </div>
         <div className="h-32"></div> {/* Spacing for the staggered translate */}
      </section>



      {/* Pricing / CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-12 gap-8 relative">
          <div className="col-span-12 md:col-span-3">
            <div className="sticky top-32 text-xs font-bold text-stone-400 uppercase tracking-widest font-body">
              GET STARTED
            </div>
          </div>

          <div className="col-span-12 md:col-span-9 flex flex-col md:flex-row items-end justify-between gap-12 bg-white rounded-[3rem] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter text-stone-900 mb-6 leading-[1.05]">
                Visualize Perfection
              </h2>
              <p className="text-xl text-stone-600 font-body max-w-lg leading-relaxed">
                Contact us to discuss your 360° animation requirements and bring your designs to life.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-[var(--color-gold)] text-white hover:bg-stone-900 transition-all duration-300 font-body font-bold uppercase tracking-widest px-10 py-6 rounded-2xl shadow-xl hover:-translate-y-1 flex-shrink-0">
              CONTACT US <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}


