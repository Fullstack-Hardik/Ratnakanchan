'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Video, Play, Layers, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CadModelAnimationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);

  const features = [
    {
      title: 'Turntable Animations',
      desc: 'Smooth 360° turntable videos that showcase every angle of your jewelry design with cinematic precision and flawless loop transitions.',
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: 'Exploded View Animations',
      desc: 'Detailed component breakdowns showing assembly, gemstone settings, and intricate internal structures of your CAD models.',
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: 'Photorealistic Motion',
      desc: 'Hyper-realistic material rendering with accurate lighting, reflections, and caustics that bring your designs to life in motion.',
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-stone-900 pt-28 pb-20 selection:bg-[var(--color-gold)] selection:text-white overflow-x-hidden">
      
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-40 z-10 min-h-[80vh] flex items-center justify-center overflow-hidden">
        
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
              <source src="/videos/cad1.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white pointer-events-none"></div>
        </motion.div>

        <div className="relative z-20 text-center max-w-4xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-stone-200 mb-8"
          >
            <Play size={14} className="text-[var(--color-gold)]" />
            <span className="text-xs font-bold text-stone-600 font-body uppercase tracking-widest">CAD Animation Services</span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter font-heading leading-[0.95] text-stone-900 mb-8"
          >
            CAD Model <br className="hidden md:block"/>
            <span className="text-[var(--color-gold)] italic">Animations</span>
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="text-xl md:text-2xl font-body text-stone-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Bring your jewelry CAD models to life with stunning animations. From smooth turntables to cinematic reveals — crafted for impact.
          </motion.p>
        </div>
      </section>

      {/* Philosophy / How It Works Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-32 bg-white">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <span className="text-sm font-bold text-stone-400 font-body tracking-widest uppercase">Why Animate?</span>
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight leading-[1.05]">
                Motion Sells More Than Static
              </h2>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Animated CAD models allow customers to visualize designs from every angle, increasing buyer confidence and driving engagement. Whether for e-commerce product pages, social media, or client presentations — motion content converts.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                We produce high-resolution, loop-ready animations using industry-standard 3D tools, ensuring every facet, prong, and gemstone sparkles with photorealistic accuracy.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-[var(--color-gold)] font-bold tracking-widest uppercase hover:gap-5 transition-all text-sm w-fit">
                 Get Started <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full -z-10"></div>
               <div className="w-full aspect-[4/3] bg-stone-50 rounded-[3rem] p-0 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-stone-200 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/images/gallery/Earring_5.png" 
                    alt="Animated 3D Model Render"
                    className="w-full h-full object-cover"
                  />
               </div>
            </motion.div>
         </div>
      </section>

      {/* Feature Cards Section */}
      <section className="w-full bg-stone-50 text-stone-900 py-40 relative overflow-hidden rounded-[4rem] mx-auto max-w-[98%] my-10 border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="w-20 h-20 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[var(--color-gold)]/20"
           >
              <Video className="w-10 h-10 text-[var(--color-gold)]" />
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8"
           >
             Animation Capabilities
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl font-body text-stone-600 max-w-3xl mx-auto leading-relaxed"
           >
             From concept to final render — we handle every step of the animation pipeline to deliver polished, production-ready visuals.
           </motion.p>
         </div>

         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white border border-stone-200 p-10 rounded-[2.5rem] hover:shadow-xl transition-all duration-300 group"
              >
                 <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[var(--color-gold)] mb-8 group-hover:scale-110 transition-transform duration-500">
                   {feature.icon}
                 </div>
                 <div className="text-stone-900 font-heading font-bold text-2xl mb-4 group-hover:text-[var(--color-gold)] group-hover:-translate-y-1 transition-all">{feature.title}</div>
                 <p className="text-stone-600 font-body leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Video Showcase Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
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
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-500">360° Ring Animation</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                    </div>
                  </div>
                  <img 
                    src="/images/gallery/Ring_8.png" 
                    alt="360 Ring Animation Frame"
                    className="w-full aspect-[4/3] object-cover"
                  />
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
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-500">High Definition Preview</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                    </div>
                  </div>
                  <img 
                    src="/images/gallery/Earring_9.png" 
                    alt="High Definition Preview"
                    className="w-full aspect-[4/3] object-cover"
                  />
               </div>
            </motion.div>
         </div>
         <div className="h-32"></div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-stone-50 rounded-[3rem] p-12 shadow-sm border border-stone-200">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-stone-900 mb-4">
              Ready to animate your designs?
            </h2>
            <p className="text-lg text-stone-600 font-body max-w-lg">
              Get in touch to discuss your CAD animation requirements and bring your jewelry concepts to life.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-4 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-all duration-300 font-body font-bold uppercase tracking-widest px-10 py-6 rounded-2xl shadow-xl hover:-translate-y-1 flex-shrink-0">
            CONTACT US <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
