'use client';
import FreeDemoSection from '@/components/FreeDemoSection';

import React, { useState } from 'react';
import { Box, Video } from 'lucide-react';

export default function CadToRenderImagePage() {
  const [activeMaterial, setActiveMaterial] = useState('yg');

  const materials = [
    { id: 'yg', name: 'Yellow Gold', color: 'bg-yellow-400', image: '/images/cad-renders/yellow-gold-ring.jpg' },
    { id: 'wg', name: 'White Gold', color: 'bg-stone-200', image: '/images/cad-renders/white-gold-ring.jpg' },
    { id: 'rg', name: 'Rose Gold', color: 'bg-rose-300', image: '/images/cad-renders/rose-gold-ring.jpg' }
  ];

  return (
    <main className="min-h-screen bg-[var(--color-neutral-light)] text-stone-900 pt-28 pb-20 selection:bg-[var(--color-gold)] selection:text-white relative overflow-hidden">
      
      {/* Philosophy / Features (Soluna Inspired 2-Column Grid) */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-32 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative">
              {/* Decorative Circle Background element */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full -z-10"></div>
              
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img src="/images/cad-renders/diamond-ring.jpg" alt="CAD Design Background" className="w-full h-full object-cover opacity-[0.85]" />
              </div>
              
              <div className="absolute -top-8 -left-8 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                 <Box className="w-10 h-10 text-[var(--color-gold)] mb-2" />
                 <div className="font-heading font-bold text-lg">Hyper-Realistic</div>
                 <div className="text-xs font-body text-stone-500 uppercase tracking-wider">Photo Rendering</div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-sm font-bold text-[var(--color-gold)] mb-2 block font-body tracking-widest uppercase">
                Render Services
              </span>
              <h1 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">CAD to Rendered Image</h1>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                High Quality Photo Rendering is very important, as they can be used to enhance proposals, presentations and website sales. The customer wants to see 3D models as they would appear in real life, using specific gemstones and material colors, in a specific environment or angle. We offer professional jewelry rendering for any type of project. The talented jewelry CAD designers are able to create realistic 3D photo renderings due to powerful software used where every single detail is visually represented. The visual simplicity of jewelry rendering is conditioned by jewelry CAD designers hard work for each detail.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Our CAD to render service transforms digital jewelry models into realistic product images that can be used for websites, catalogs, presentations and marketing campaigns. Materials, lighting, camera angles, backgrounds and gemstone appearance are carefully refined to create a professional visual representation of the final jewelry design.
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
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Professional jewelry video rendering allows a design to be presented through smooth movement and multiple viewpoints. This is useful for product demonstrations, presentations, social media and digital marketing. We can create high resolution visuals that showcase the design, materials and gemstone details in an engaging format.
              </p>
            </div>

            <div className="relative lg:order-2 order-1">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[var(--color-gold)]/10 rounded-full -z-10"></div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 bg-stone-900 aspect-square relative">
                 <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                   <source src="/assets/videos/rendering/comp-1-3-1.mp4" type="video/mp4" />
                 </video>
              </div>
            </div>

         </div>
      </section>

      {/* 360 Video Animation Section */}
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
           <p className="text-xl font-body text-stone-300 leading-relaxed mt-6">
             A 360 degree jewelry presentation gives customers a complete view of the product from different angles. It can highlight the front, side, back and fine structural details that may not be visible in a single image. Consistent lighting, materials and reflections help maintain a realistic appearance throughout the animation.
           </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
           <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-stone-800 bg-black aspect-video relative">
               <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                 <source src="/assets/videos/rendering/comp-3-1.mp4" type="video/mp4" />
               </video>
           </div>
        </div>

      </section>

      {/* Why Ratnakanchan.com Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-[var(--color-gold)]">Why Ratnakanchan.com</h2>
            <p className="text-lg font-body text-stone-600 leading-relaxed">
              Our rendering workflow is designed to help jewelry businesses present new designs before physical production or photography is available. High quality renders can support customer approvals, collection launches, online product listings, advertising and sales presentations.
            </p>
         </div>
      </section>

      <FreeDemoSection />


    </main>
  );
}
