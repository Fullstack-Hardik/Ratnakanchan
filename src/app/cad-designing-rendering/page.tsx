'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Box, Sparkles, Layers, Video } from 'lucide-react';

export default function CadDesigningPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-[var(--color-neutral-light)] text-stone-900 pt-28 pb-20 selection:bg-[var(--color-gold)] selection:text-white relative overflow-hidden">
      
      {/* Hero Section (Soluna Inspired Layout) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-32 z-10">
        
        {/* Massive Circular Background Image */}
        <div className="absolute -top-[5%] -right-[30%] md:-right-[10%] w-[120vw] md:w-[65vw] aspect-square rounded-full overflow-hidden -z-10 shadow-2xl border-4 border-white/50">
           <img 
              src="/images/cad-hero-bright.png" 
              alt="CAD Designing Hero"
              className="w-full h-full object-cover scale-110"
            />
           <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
        </div>

        {/* Hero Content Column */}
        <div className="max-w-2xl relative z-20 bg-white/70 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none p-6 md:p-0 rounded-3xl">
          <span className="text-sm font-bold text-[var(--color-gold)] mb-6 block font-body tracking-widest uppercase">
            3D Modeling & Visualization
          </span>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter font-heading leading-[1.05] text-stone-900 mb-8">
            CAD Designing <br className="hidden md:block"/> & Rendering
          </h1>
          <p className="text-xl md:text-2xl font-body text-stone-700 leading-relaxed mb-10">
            We use powerful software like Rhino and Matrix to create detailed 3D jewelry models, transforming your initial drawings into realistic digital masterpieces.
          </p>

          <Link href="/contact" className="inline-flex items-center gap-3 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-colors px-8 py-4 rounded-full font-body font-semibold tracking-wide shadow-xl">
            Start Your 3D Project <ArrowRight size={18} />
          </Link>
        </div>

      </section>

      {/* Stats Bar (Soluna Inspired Layout) */}
      <section className="relative z-20 max-w-7xl mx-auto md:pr-6 mt-12 md:mt-0">
        <div className="w-full md:w-[75%] bg-white text-stone-900 border border-stone-100 rounded-tr-[80px] md:rounded-tr-[120px] rounded-bl-3xl md:rounded-bl-none p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative z-10">
              <div className="md:border-r border-stone-700 md:pr-8">
                <div className="text-4xl font-heading font-bold text-[var(--color-gold)] mb-2">Rhino & Matrix</div>
                <div className="text-sm font-body text-stone-400 uppercase tracking-widest">Industry Standard Tools</div>
              </div>
              <div className="md:border-r border-stone-700 md:px-8">
                <div className="text-4xl font-heading font-bold text-[var(--color-gold)] mb-2">Fast Turnaround</div>
                <div className="text-sm font-body text-stone-400 uppercase tracking-widest">Reduced Modeling Time</div>
              </div>
              <div className="md:pl-8">
                <div className="text-4xl font-heading font-bold text-[var(--color-gold)] mb-2">100% Custom</div>
                <div className="text-sm font-body text-stone-400 uppercase tracking-widest">Client Collaboration</div>
              </div>
           </div>
        </div>
      </section>

      {/* Philosophy / Features (Soluna Inspired 2-Column Grid) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative">
              {/* Decorative Circle Background element */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full -z-10"></div>
              
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img src="/images/cad-software.png" alt="CAD to Rendered Image" className="w-full h-auto object-cover" />
              </div>
              
              <div className="absolute -top-8 -left-8 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                 <Box className="w-10 h-10 text-[var(--color-gold)] mb-2" />
                 <div className="font-heading font-bold text-lg">Hyper-Realistic</div>
                 <div className="text-xs font-body text-stone-500 uppercase tracking-wider">Photo Rendering</div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">CAD to Rendered Image</h2>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                High Quality Photo Rendering is very important, as they can be used to enhance proposals, presentations and website sales. The customer wants to see 3D models as they would appear in real life, using specific gemstones and material colors, in a specific environment or angle.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                We offer professional jewelry rendering for any type of project. Our talented jewelry CAD designers are able to create realistic 3D photo renderings where every single detail is visually represented. The visual simplicity is conditioned by hard work for each detail.
              </p>
            </div>

         </div>
      </section>

      {/* Video Rendering Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="flex flex-col gap-6 lg:order-1 order-2">
              <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">CAD to Rendered Video</h2>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                If a simple 3D photo rendering is not enough, we offer professional video rendering services. Whether it’s for a YouTube channel or a presentation, we will offer impressive high resolution videos to make your project a success.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Video rendering enables 3D models to be represented as video outputs. We will help you choose interesting backgrounds and interactive animations. Due to highly mastered video rendering tricks, we produce high resolution videos that perfectly visualize your jewelry design.
              </p>
            </div>

            <div className="relative lg:order-2 order-1">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[var(--color-gold)]/10 rounded-full -z-10"></div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full aspect-[4/3] object-cover"
                >
                  <source src="/videos/WhatsApp%20Video%202026-07-07%20at%207.55.45%20PM.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

         </div>
      </section>

      {/* 360 Video Animation Section (Soluna Inspired Horizontal Focus) */}
      <section className="w-full bg-white text-stone-900 mt-20 py-32 rounded-t-[4rem] relative overflow-hidden border-t border-stone-100 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center max-w-4xl mb-20 relative z-10">
           <Video className="w-16 h-16 text-[var(--color-gold)] mx-auto mb-8" />
           <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">360° Video Animation</h2>
           <p className="text-xl font-body text-stone-600 leading-relaxed">
             High Quality Photo Rendering is crucial for enhancing proposals, presentations, and website sales. The customer wants to see 3D models as they would appear in real life, using specific gemstones and material colors in a specific environment or angle. We offer professional, realistic 360° jewelry rendering for any type of project.
           </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
           <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-stone-200 bg-stone-50">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source src="/videos/gemini_generated_video_6ba995d4.mp4" type="video/mp4" />
              </video>
           </div>
        </div>

      </section>

    </main>
  );
}
