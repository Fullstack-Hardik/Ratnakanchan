'use client';

import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Printer, Star, LayoutTemplate, Briefcase, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MarketingPrintingPage() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Parallax Scroll Refs
  const heroRef = useRef<HTMLDivElement>(null);

  // Hero Parallax
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-white text-stone-900 pt-28 pb-20 selection:bg-[var(--color-gold)] selection:text-white overflow-x-hidden">
      
      {/* Hero Section with Parallax Image Background */}
      <section ref={heroRef} className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-40 z-10 min-h-[80vh] flex flex-col justify-center overflow-hidden">
        
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full -z-10 rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-stone-50 border border-stone-200 shadow-inner"
        >
           <img 
              src="/images/hero-marketing-flyer.png" 
              alt="Premium Marketing Flyer"
              className="w-full h-full object-cover opacity-60"
            />
           <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/50 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-stone-200 mb-8"
          >
            <Printer size={14} className="text-[var(--color-gold)]" />
            <span className="text-xs font-bold text-stone-600 font-body uppercase tracking-widest">Premium Output</span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-6xl md:text-8xl font-medium tracking-tighter font-heading leading-[1.0] text-stone-900 mb-8"
          >
            Marketing Kit <br/>
            <span className="text-[var(--color-gold)] italic">& Printing</span>
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="text-xl md:text-2xl font-body text-stone-600 leading-relaxed mb-12 max-w-2xl"
          >
            Capture the success story of your business with Ratnakanchan high quality printing services. Spend more time doing what you love and less time designing.
          </motion.p>
        </div>
      </section>

      {/* Catalog Design & Printing - Slide In From Left */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-32 bg-white overflow-hidden">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               className="relative"
            >
               <div className="absolute -inset-4 bg-[var(--color-gold)]/5 rounded-[3rem] -z-10 rotate-3"></div>
               <div className="w-full aspect-square bg-stone-50 rounded-[3rem] p-0 shadow-2xl border border-stone-200 flex items-center justify-center relative overflow-hidden">
                  <img src="/images/jewelry-catalog.png" alt="Jewelry Catalog" className="w-full h-full object-cover" />
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-[var(--color-gold)] text-white flex items-center justify-center shrink-0">
                    <FileText className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight">Catalog Design</h2>
              </div>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Present your company’s journey in a fascinating way by printing catalogs, an important part of your marketing kit to showcase your highlights. Ratnakanchan ensures superior color printing, secure binding and varied card stock options.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Use Ratnakanchan catalogs to inform valued clients and staff about the praiseworthy achievements of your business.
              </p>
            </motion.div>
         </div>
      </section>

      {/* Dynamic Scroll Text Animation Section */}
      <section className="relative w-full h-[150vh] bg-stone-50 text-stone-900 border-y border-stone-200">
         <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-6 md:p-20 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
               <ScrollText />
            </div>
         </div>
      </section>

      {/* Marketing Kit - Slide In From Right */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-32 bg-white overflow-hidden">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               className="flex flex-col gap-8 order-2 lg:order-1"
            >
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-stone-900 text-[var(--color-gold)] flex items-center justify-center shrink-0">
                    <Briefcase className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight">Marketing Kit</h2>
              </div>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Designed to make a flawless impression, your studio will be seen as THE one to partner with right now. Use our stunning Vendor Marketing Kit to share your displays in high profile businesses like boutiques, offices and other locations your target client frequents.
              </p>
              <ul className="space-y-4 mt-4">
                 {[
                   'Wide 4×5.5 quadfold introductory presentation',
                   'Folded 4×5.5 studio offerings card',
                   'Flat 4×5.5 referral card for vendor referrals',
                   '3 gorgeous borders for personalized 5×7 sample prints',
                   'Business cards for your new contacts'
                 ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <Star className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                       <span className="text-stone-700 font-body">{item}</span>
                    </li>
                 ))}
              </ul>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               className="relative order-1 lg:order-2"
            >
               <div className="absolute -inset-4 bg-stone-100 rounded-[3rem] -z-10 -rotate-3"></div>
               <div className="w-full aspect-[4/3] bg-stone-50 rounded-[3rem] p-0 shadow-2xl border border-stone-200 flex items-center justify-center relative overflow-hidden">
                  <img src="/images/marketing-kit.png" alt="Marketing Kit" className="w-full h-full object-cover" />
               </div>
            </motion.div>

         </div>
      </section>

      {/* Flyer Designing - Slide In Up Sequence (Simplified Light Mode) */}
      <section className="w-full bg-white text-stone-900 py-40 relative overflow-hidden rounded-[4rem] mx-auto max-w-[98%] my-10 border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-6 text-center mb-20 relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="w-20 h-20 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[var(--color-gold)]/20"
           >
              <LayoutTemplate className="w-10 h-10 text-[var(--color-gold)]" />
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8"
           >
             Flyer Designing & Printing
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl font-body text-stone-600 max-w-3xl mx-auto leading-relaxed"
           >
             No matter what kind of flyer you need, we’ve got you covered. For maximum visual impact, our event and club flyers include a two-sided, super high-gloss coating, which is sure to get you extra attention.
           </motion.p>
         </div>

         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { title: 'Business Flyers', desc: 'Numerous folding and paper options, ideal for professional functions and handouts.' },
              { title: 'Promotional', desc: 'Customizable size options and premium papers, great for events and high-impact marketing.' },
              { title: 'Event & Club', desc: 'Included ultra-high gloss coating and custom size choices, a great fit for eye-catching graphics.' }
            ].map((flyer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-stone-50 border border-stone-200 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                 <div className="text-stone-900 font-heading font-bold text-3xl mb-4 group-hover:text-[var(--color-gold)] group-hover:-translate-y-2 transition-all">{flyer.title}</div>
                 <p className="text-stone-600 font-body leading-relaxed">{flyer.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-stone-50 rounded-[3rem] p-12 shadow-sm border border-stone-200">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-stone-900 mb-4">
              Ready to print perfection?
            </h2>
            <p className="text-lg text-stone-600 font-body max-w-lg">
              Get in touch to explore paper types, printing options, and design strategies.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-4 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-all duration-300 font-body font-bold uppercase tracking-widest px-10 py-6 rounded-2xl shadow-xl hover:-translate-y-1 flex-shrink-0">
            ORDER PRINTING <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}

// Subcomponent for the Text Scroll Reveal Effect (Re-used and adapted for Marketing)
function ScrollText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  const textLines = [
    { text: "Your brand.", style: "font-medium" },
    { text: "In high definition.", style: "font-bold text-6xl md:text-8xl" },
    { text: "On premium paper.", style: "font-bold text-6xl md:text-8xl" },
    { text: "Flawless impression.", style: "font-medium" },
    { text: "Stunning displays", style: "font-bold italic text-5xl md:text-7xl text-[var(--color-gold)]" },
    { text: "that captivate your audience", style: "font-medium text-3xl" }
  ];

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center gap-2 py-40">
      {textLines.map((line, i) => {
        const start = i / textLines.length;
        const end = start + (1 / textLines.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        const y = useTransform(scrollYProgress, [start, end], [20, 0]);
        const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);
        
        return (
          <motion.div 
            key={i}
            style={{ opacity, y, scale }}
            className={`font-heading tracking-tight leading-[1.1] ${line.style}`}
          >
            {line.text}
          </motion.div>
        );
      })}
    </div>
  );
}
