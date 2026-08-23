'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, MoveHorizontal, Sparkles, Wand2 } from 'lucide-react';
import ScrollVelocity from '@/components/ui/ScrollVelocity';

const BeforeAfterSlider = ({ beforeImage, afterImage, alt }: { beforeImage: string, afterImage: string, alt: string }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const beforeContainerRef = React.useRef<HTMLDivElement>(null);
  const handleRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

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
      className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden cursor-ew-resize select-none group shadow-2xl border border-stone-200"
      onMouseMove={handleMouseMove}
      onMouseUp={() => isDragging.current = false}
      onMouseLeave={() => isDragging.current = false}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => isDragging.current = false}
      onMouseDown={() => isDragging.current = true}
      onTouchStart={() => isDragging.current = true}
    >
      <Image src={afterImage} alt={alt + " After"} fill className="object-cover pointer-events-none" draggable={false} sizes="(max-width: 768px) 100vw, 50vw" />
      <div 
        ref={beforeContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 50% 0 0)` }}
      >
        <Image src={beforeImage} alt={alt + " Before"} fill className="object-cover" draggable={false} sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div 
        ref={handleRef}
        className="absolute top-0 bottom-0 w-1 bg-white/90 cursor-ew-resize flex items-center justify-center transition-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
        style={{ left: `50%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 border-stone-100 text-stone-700 group-hover:scale-110 group-hover:text-[var(--color-gold)] transition-all duration-300">
          <MoveHorizontal size={20} />
        </div>
      </div>
      <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">Before</div>
      <div className="absolute top-6 right-6 bg-[var(--color-gold)]/90 backdrop-blur-md text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium shadow-lg">After</div>
    </div>
  );
};

export default function JewelryRetouchingWithModel() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-28 pb-20 overflow-x-hidden selection:bg-[var(--color-gold)] selection:text-white">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 mb-20">
        <div className="relative w-full h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl group flex items-center justify-center">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-105"
          >
            <source src="/assets/videos/Model.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-stone-900/40 pointer-events-none"></div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
            >
              Jewelry Retouching <br />
              <span className="text-[var(--color-gold)] italic font-light drop-shadow-md">With Model</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Scroll Velocity Animation */}
      <section className="py-10 bg-white overflow-hidden border-y border-stone-100">
        <ScrollVelocity
          texts={['Flawless Model Photography', 'High-End Retouching', 'Editorial Quality']} 
          velocity={40} 
          className="text-[var(--color-gold)] font-heading"
        />
      </section>

      {/* Content Block */}
      <section className="w-full max-w-6xl mx-auto py-24 px-6 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-8"
            >
               <h2 className="text-4xl md:text-5xl font-heading font-medium text-stone-900 tracking-tight leading-tight">
                 Transforming Jewelry CAD Designs into Photorealistic Model Photos Render
               </h2>
               
               <div className="h-1 w-20 bg-[var(--color-gold)] rounded-full"></div>
               
               <p className="text-lg text-stone-600 font-body leading-relaxed">
                 Elevate your jewelry photos into gorgeous, flawless, and striking images that meet your creative standards and help you reach your company&apos;s goals. Our photo retouching specialists have honed their technical skills and developed their creativity through years of practical application and experience in advertising and photo editing.
               </p>

               <p className="text-lg text-stone-600 font-body leading-relaxed">
                 Jewelry Retouchers delivers some of the best high-end jewelry photo retouching work in the industry. We&apos;re confident in our skills yet recognize the importance of technology. So, apart from investing in ourselves, we also invest in powerful computers and photo editing tools and software. Your photos will get the high-end treatment they deserve.
               </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative rounded-[2.5rem] p-8 bg-white border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
               <div className="absolute top-0 right-0 p-8 text-[var(--color-gold)]/10">
                 <Wand2 className="w-32 h-32" />
               </div>
               <h3 className="text-2xl font-heading font-bold text-stone-900 mb-6 relative z-10">Why Model Retouching Matters</h3>
               <ul className="space-y-6 relative z-10">
                 {[
                   { title: "Skin Retouching", desc: "Flawless yet natural skin textures that don't distract from the jewelry." },
                   { title: "Lighting Alignment", desc: "Matching studio lighting on the model with CAD rendered jewelry." },
                   { title: "Shadow & Reflection", desc: "Creating realistic interactions between the piece and the model's skin." }
                 ].map((item, idx) => (
                   <li key={idx} className="flex gap-4 items-start">
                     <div className="mt-1 bg-stone-50 p-2 rounded-lg border border-stone-100">
                       <Sparkles className="w-5 h-5 text-[var(--color-gold)]" />
                     </div>
                     <div>
                       <h4 className="font-heading font-bold text-stone-900 text-lg">{item.title}</h4>
                       <p className="text-stone-500 font-body">{item.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </motion.div>
         </div>
      </section>

      {/* Before/After Showcase */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-stone-100"
        >
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h3 className="text-4xl font-heading font-bold text-stone-900 mb-4 tracking-tight">Model Retouching Magic</h3>
            <p className="text-stone-500 font-body text-lg">Slide to see the flawless transformation of lifestyle jewelry photography. Notice the enhanced brilliance of the stones and the smoothed, perfected skin texture.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider 
              beforeImage="/images/retouching/Lifestyle Before.jpg"
              afterImage="/images/retouching/Lifestyle After.jpg"
              alt="Lifestyle Model Retouching"
            />
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center bg-stone-900 text-white rounded-[3rem] p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-gold)]/20 via-stone-900 to-stone-900 pointer-events-none"></div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[var(--color-gold)] mb-6 relative z-10">
            Ready for the perfect shot?
          </h2>
          <p className="text-lg text-white font-body max-w-xl mb-10 relative z-10 leading-relaxed drop-shadow-md">
            Let our experts transform your model jewelry photography into stunning editorial-quality images that captivate your audience.
          </p>
          <Link href="/contact" className="relative z-10 inline-flex items-center gap-4 bg-[var(--color-gold)] text-white hover:bg-white hover:text-stone-900 transition-all duration-300 font-body font-bold uppercase tracking-widest px-10 py-5 rounded-full shadow-xl hover:-translate-y-1">
            CONTACT US TODAY
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
