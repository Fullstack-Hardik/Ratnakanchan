'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Box, Sparkles, Sun, Camera, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CadModelRenderingPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState('yg');

  const materials = [
    { id: 'yg', name: 'Yellow Gold', color: 'bg-yellow-400', image: '/images/cad-renders/YG.jpg' },
    { id: 'wg', name: 'White Gold', color: 'bg-stone-200', image: '/images/cad-renders/WG.jpg' },
    { id: 'rg', name: 'Rose Gold', color: 'bg-rose-300', image: '/images/cad-renders/RG.jpg' }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const renderTypes = [
    {
      title: 'Standard Renders',
      desc: 'Clean, white-background product renders with accurate materials — ideal for e-commerce catalogs and online stores.',
      icon: <Camera className="w-6 h-6" />,
    },
    {
      title: 'Lifestyle Renders',
      desc: 'Contextual scenes with styled environments, reflective surfaces, and mood lighting that evoke emotion and luxury.',
      icon: <Sun className="w-6 h-6" />,
    },
    {
      title: 'Multi-Angle Sets',
      desc: 'Complete 4-angle or custom-angle render packages for product listings — front, side, top, and detail close-ups.',
      icon: <Palette className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-neutral-light)] text-stone-900 pt-28 pb-20 selection:bg-[var(--color-gold)] selection:text-white relative overflow-hidden">
      
      {/* Hero Section (Soluna Inspired Layout) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-32 z-10">
        
        {/* Massive Circular Background Image */}
        <div className="absolute -top-[5%] -right-[30%] md:-right-[10%] w-[120vw] md:w-[65vw] aspect-square rounded-full overflow-hidden -z-10 shadow-2xl border-4 border-white/50">
           <img 
              src={materials.find(m => m.id === activeMaterial)?.image} 
              alt={`${materials.find(m => m.id === activeMaterial)?.name} Render`}
              className="w-full h-full object-contain"
            />
           <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
        </div>

        {/* Hero Content Column */}
        <div className="max-w-2xl relative z-20 bg-white/70 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none p-6 md:p-0 rounded-3xl">
          <span className="text-sm font-bold text-[var(--color-gold)] mb-6 block font-body tracking-widest uppercase">
            Photorealistic Visualization
          </span>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter font-heading leading-[1.05] text-stone-900 mb-8">
            CAD Model <br className="hidden md:block"/> Rendering
          </h1>
          <p className="text-xl md:text-2xl font-body text-stone-700 leading-relaxed mb-10">
            Transform your 3D CAD models into stunning photorealistic images. Every facet, every reflection, every detail — rendered to perfection.
          </p>

          <Link href="/contact" className="inline-flex items-center gap-3 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-colors px-8 py-4 rounded-full font-body font-semibold tracking-wide shadow-xl">
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>

      </section>

      {/* Stats Bar */}
      <section className="relative z-20 max-w-7xl mx-auto md:pr-6 mt-12 md:mt-0">
        <div className="w-full md:w-[75%] bg-white text-stone-900 border border-stone-100 rounded-tr-[80px] md:rounded-tr-[120px] rounded-bl-3xl md:rounded-bl-none p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative z-10">
              <div className="md:border-r border-stone-200 md:pr-8">
                <div className="text-4xl font-heading font-bold text-[var(--color-gold)] mb-2">4K Resolution</div>
                <div className="text-sm font-body text-stone-400 uppercase tracking-widest">Crystal Clear Output</div>
              </div>
              <div className="md:border-r border-stone-200 md:px-8">
                <div className="text-4xl font-heading font-bold text-[var(--color-gold)] mb-2">Accurate Materials</div>
                <div className="text-sm font-body text-stone-400 uppercase tracking-widest">Gold, Silver, Platinum</div>
              </div>
              <div className="md:pl-8">
                <div className="text-4xl font-heading font-bold text-[var(--color-gold)] mb-2">24hr Delivery</div>
                <div className="text-sm font-body text-stone-400 uppercase tracking-widest">Express Turnaround</div>
              </div>
           </div>
        </div>
      </section>

      {/* Rendering Process Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative">
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full -z-10"></div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl relative"
              >
                <img src="/images/cad-renders/Render on Hand.jpg" alt="CAD Rendering Background" className="w-full h-full object-cover opacity-[0.25] mix-blend-luminosity" />
              </motion.div>
              
              <div className="absolute -top-8 -left-8 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                 <Box className="w-10 h-10 text-[var(--color-gold)] mb-2" />
                 <div className="font-heading font-bold text-lg">Photorealistic</div>
                 <div className="text-xs font-body text-stone-500 uppercase tracking-wider">High Fidelity</div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">From CAD to Photorealism</h2>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                High quality photo rendering is essential for proposals, presentations, and e-commerce sales. Customers want to see 3D models as they would appear in real life — with accurate gemstone colors, precise metal finishes, and realistic environmental lighting.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                We offer professional jewelry rendering for any type of project. Our talented CAD designers create realistic 3D photo renderings where every single detail is visually represented — from micro-pavé settings to brushed metal textures.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-3 text-[var(--color-gold)] font-bold tracking-widest uppercase hover:gap-5 transition-all text-sm w-fit mt-4">
                 Request Sample Render <ArrowRight size={18} />
              </Link>
            </motion.div>

         </div>
      </section>

      {/* Render Types Grid */}
      <section className="w-full bg-white text-stone-900 py-40 relative overflow-hidden rounded-[4rem] mx-auto max-w-[98%] my-10 border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="w-20 h-20 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[var(--color-gold)]/20"
           >
              <Sparkles className="w-10 h-10 text-[var(--color-gold)]" />
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8"
           >
             Rendering Services
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl font-body text-stone-600 max-w-3xl mx-auto leading-relaxed"
           >
             We deliver production-ready renders optimized for e-commerce, print catalogs, and marketing materials.
           </motion.p>
         </div>

         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {renderTypes.map((type, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-stone-50 border border-stone-200 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                 <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-[var(--color-gold)] mb-8 group-hover:scale-110 transition-transform duration-500">
                   {type.icon}
                 </div>
                 <div className="text-stone-900 font-heading font-bold text-2xl mb-4 group-hover:text-[var(--color-gold)] group-hover:-translate-y-1 transition-all">{type.title}</div>
                 <p className="text-stone-600 font-body leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Sample Render Showcase */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 lg:order-1 order-2"
            >
              <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight">Studio-Quality Results</h2>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Our rendering pipeline produces images indistinguishable from professional photography. We simulate real-world studio lighting, accurate material physics, and subtle environmental reflections.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Each render goes through our quality assurance process — checking for material accuracy, lighting consistency, and output resolution before delivery.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-2 order-1"
            >
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[var(--color-gold)]/10 rounded-full -z-10"></div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100">
                <img src="/images/cad-software.png" alt="CAD Model Rendering Output" className="w-full h-auto object-cover" />
              </div>
            </motion.div>

         </div>
      </section>

      {/* CTA Section */}
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
                Render Perfection
              </h2>
              <p className="text-xl text-stone-600 font-body max-w-lg leading-relaxed">
                Contact us to discuss your rendering requirements. We deliver photorealistic results that elevate your jewelry brand.
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
