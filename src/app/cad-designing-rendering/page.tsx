'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Box, Sparkles, Layers, Video, Ruler, CheckCircle2, MonitorPlay } from 'lucide-react';

export default function CadDesigningPage() {
  const [activeMaterial, setActiveMaterial] = useState('yg');

  const materials = [
    { id: 'yg', name: 'Yellow Gold', color: 'bg-yellow-400', image: '/images/cad-renders/YG.jpg' },
    { id: 'wg', name: 'White Gold', color: 'bg-stone-200', image: '/images/cad-renders/WG.jpg' },
    { id: 'rg', name: 'Rose Gold', color: 'bg-rose-300', image: '/images/cad-renders/RG.jpg' }
  ];

  return (
    <main className="min-h-screen bg-[var(--color-neutral-light)] text-stone-900 pt-28 pb-20 selection:bg-[var(--color-gold)] selection:text-white relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start relative z-20">
            <span className="text-sm font-bold text-[var(--color-gold)] mb-6 block font-body tracking-widest uppercase">
              CAD Designing and Rendering Service
            </span>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter font-heading leading-[1.05] text-stone-900 mb-8">
              CAD Designing <br /> & Rendering
            </h1>
            <p className="text-lg md:text-xl font-body text-stone-600 leading-relaxed mb-10">
              The most powerful software for 3D modeling are Rhino and Matrix. They are enabling jewelry CAD designers to create different types of 3D jewelry models according to initial jewelry drawing. The mentioned software are giving possibility to show jewelry models in different surfaces and in detail. Our jewelry CAD designers will complete the jewelry modeling process in reduced time keeping the quality of jewelry models. The concept of the model can be produced as a result of discussions between CAD designers and clients.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-colors px-8 py-4 rounded-full font-body font-semibold tracking-wide shadow-xl">
              Start Your 3D Project <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-white">
               <img 
                  src="/images/uploads/upload_4.png" 
                  alt="CAD Designing Hero"
                  className="w-full h-full object-cover"
                />
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[var(--color-gold)]/20 rounded-full blur-3xl -z-10"></div>
          </div>
          
        </div>
      </section>

      {/* Stats Bar (Soluna Inspired Layout) */}
      <section className="relative z-20 max-w-7xl mx-auto md:pr-6 mt-12 md:mt-0">
        <div className="w-full md:w-[75%] bg-white text-stone-900 border border-stone-100 rounded-tr-[80px] md:rounded-tr-[120px] rounded-bl-3xl md:rounded-bl-none p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative z-10">
              <div className="md:border-r border-stone-200 md:pr-8">
                <div className="text-4xl font-heading font-bold text-[var(--color-gold)] mb-2">Rhino & Matrix</div>
                <div className="text-sm font-body text-stone-400 uppercase tracking-widest">Industry Standard Tools</div>
              </div>
              <div className="md:border-r border-stone-200 md:px-8">
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
                <img src="/images/cad-renders/RING.jpg" alt="CAD Design Background" className="w-full h-full object-cover opacity-[0.85]" />
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
                High Quality Photo Rendering is very important, as they can be used to enhance proposals, presentations and website sales. The customer wants to see 3D models as they would appear in real life, using specific gemstones and material colors, in a specific environment or angle. We offer professional jewelry rendering for any type of project. The talented jewelry CAD designers are able to create realistic 3D photo renderings due to powerful software used where every single detail is visually represented. The visual simplicity of jewelry rendering is conditioned by jewelry CAD designers hard work for each detail.
              </p>
              
              <div className="flex gap-4 mt-4">
                {materials.map((m) => (
                    <button 
                        key={m.id} 
                        onClick={() => setActiveMaterial(m.id)}
                        className={`px-4 py-2 rounded-full border ${activeMaterial === m.id ? 'border-[var(--color-gold)] bg-stone-50' : 'border-stone-200'}`}
                    >
                        {m.name}
                    </button>
                ))}
              </div>
            </div>

         </div>
      </section>

      {/* Video Rendering Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="flex flex-col gap-6 lg:order-1 order-2">
              <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">CAD to Rendered Video</h2>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                If a simple 3D photo rendering is not enough, We offer professional video rendering services. Whether it’s for a YouTube channel or a presentation, we will offer impressive high resolution videos to make your project a success. Video rendering enables 3D models to be represented as video outputs. Our jewelry CAD designers will help you to choose interesting backgrounds and interactive animations for 3D video rendering to capture your customer’s attention on the web or wherever you will display them.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Due to highly mastered video rendering tricks our jewelry CAD designers will produce high resolution videos and interactive animations. 3D video rendering is a major part of jewelry model creation as it gives a complete appearance to the 3D jewelry model. Jewelry video renderings are effectively used in jewelry design visualization.
              </p>
            </div>

            <div className="relative lg:order-2 order-1">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[var(--color-gold)]/10 rounded-full -z-10"></div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 bg-stone-900 aspect-square relative">
                 <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                   <source src="/assets/videos/rendering/Comp 1_3_1.mp4" type="video/mp4" />
                 </video>
              </div>
            </div>

         </div>
      </section>

      {/* CAD Portfolio Showcase */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4">Our Latest Work</h2>
            <p className="text-lg font-body text-stone-600">A glimpse into our high-quality CAD designs and realistic renders.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-100 bg-white p-4">
               <Image src="/images/cad/snapshot1.png" width={800} height={800} alt="CAD Render Showcase 1" className="w-full h-auto object-cover rounded-2xl" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-100 bg-white p-4">
               <Image src="/images/cad/snapshot2.png" width={800} height={800} alt="CAD Render Showcase 2" className="w-full h-auto object-cover rounded-2xl" />
            </div>
         </div>
      </section>

      {/* 360 Video Animation Section (Soluna Inspired Horizontal Focus) */}
      <section className="w-full bg-stone-900 text-white mt-20 py-32 relative overflow-hidden border-t border-stone-800 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center max-w-5xl mb-20 relative z-10">
           <Video className="w-16 h-16 text-[var(--color-gold)] mx-auto mb-8" />
           <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8 text-[var(--color-gold)]">360° Video Animation</h2>
           <p className="text-xl font-body text-stone-300 leading-relaxed mb-6">
             High Quality Photo Rendering is very important, as they can be used to enhance proposals, presentations and website sales. The customer wants to see 3D models as they would appear in real life, using specific gemstones and material colors, in a specific environment or angle.
           </p>
           <p className="text-xl font-body text-stone-300 leading-relaxed">
             We offer professional jewelry rendering for any type of project. The talented jewelry CAD designers are able to create realistic 3D photo renderings due to powerful software used where every single detail is visually represented. The visual simplicity of jewelry rendering is conditioned by jewelry CAD designers hard work for each detail.
           </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
           <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-stone-800 bg-black aspect-video relative">
               <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                 <source src="/assets/videos/rendering/Comp 3_1.mp4" type="video/mp4" />
               </video>
           </div>
        </div>

      </section>

    </main>
  );
}
