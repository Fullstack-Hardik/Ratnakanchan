'use client';
import FreeDemoSection from '@/components/FreeDemoSection';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CadDesigningPage() {
  return (
    <main className="min-h-screen bg-[var(--color-neutral-light)] text-stone-900 pt-28  selection:bg-[var(--color-gold)] selection:text-white relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-20 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start relative z-20">
            <span className="text-sm font-bold text-[var(--color-gold)] mb-6 block font-body tracking-widest uppercase">
              CAD Designing Service
            </span>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter font-heading leading-[1.05] text-stone-900 mb-8">
              CAD Designing
            </h1>
            <p className="text-lg md:text-xl font-body text-stone-600 leading-relaxed mb-10">
              The most powerful software for 3D modeling are Rhino and Matrix. They are enabling jewelry CAD designers to create different types of 3D jewelry models according to initial jewelry drawing. The mentioned software are giving possibility to show jewelry models in different surfaces and in detail. Our jewelry CAD designers will complete the jewelry modeling process in reduced time keeping the quality of jewelry models. The concept of the model can be produced as a result of discussions between CAD designers and clients.
            </p>
            <p className="text-lg md:text-xl font-body text-stone-600 leading-relaxed mb-10">
              Our jewelry CAD designing service helps transform sketches, reference images, physical jewelry and creative concepts into accurate three dimensional models. Every design is developed with careful attention to proportions, stone placement, settings, prongs, curves and fine details so that the digital model closely represents the intended jewelry piece.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-colors px-8 py-4 rounded-full font-body font-semibold tracking-wide shadow-xl">
              Start Your 3D Project <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-white">
               <img 
                  src="/images/uploads/upload-4.png" 
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

      {/* CAD Portfolio Showcase */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 mt-10 relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4">Our Latest Work</h2>
            <p className="text-lg font-body text-stone-600">A glimpse into our high-quality CAD designs.</p>
            <p className="text-lg font-body text-stone-600 mt-4 text-left">A professionally prepared jewelry CAD model provides a strong foundation for manufacturing, rendering and product presentation. Our designers can refine design details based on client feedback and prepare models that support the next stage of the jewelry production workflow. This approach helps reduce design uncertainty and allows the final concept to be reviewed before manufacturing begins.</p>
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

      {/* Why Ratnakanchan.com Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-[var(--color-gold)]">Why Ratnakanchan.com</h2>
            <p className="text-lg font-body text-stone-600 leading-relaxed">
              Our CAD workflow combines design understanding with attention to manufacturing requirements. We work with jewelry businesses that need reliable digital models for custom pieces, new collections, production development and visualization. Each project is handled according to the design specifications and the intended final use.
            </p>
         </div>
      </section>

      <FreeDemoSection />


    </main>
  );
}
