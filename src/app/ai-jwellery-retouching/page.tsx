'use client';
import FreeDemoSection from '@/components/FreeDemoSection';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlayCircle, Cpu, Layers, Sparkles } from 'lucide-react';
import ScrollVelocity from '@/components/ui/ScrollVelocity';

export default function AIJewelryRetouching() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-28  overflow-x-hidden selection:bg-[var(--color-gold)] selection:text-white">
      
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden mb-24">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
        >
          <source src="/assets/videos/animations/shot-1.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-stone-900/60 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide uppercase shadow-sm mb-8"
          >
            <Cpu className="w-4 h-4 text-[var(--color-gold)]" />
            AI-Powered Workflow
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-xl"
          >
            Next-Gen <br />
            <span className="text-[var(--color-gold)] italic font-light">AI Retouching</span>
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-lg md:text-xl text-stone-200 font-body max-w-2xl leading-relaxed drop-shadow-md"
          >
             Elevate your jewelry photos into gorgeous, flawless, and striking images that meet your creative standards and help you reach your company&apos;s goals.
          </motion.p>
        </div>
      </section>

      {/* Scroll Velocity Animation */}
      <section className="py-10 bg-white overflow-hidden border-y border-stone-100 shadow-sm">
        <ScrollVelocity
          texts={['Flawless AI Rendering', 'Photorealistic Output']} 
          velocity={40} 
          className="text-[var(--color-gold)] font-heading"
        />
      </section>

      {/* Content Block */}
      <section className="w-full max-w-6xl mx-auto py-24 px-6 relative z-10">
         <div className="text-center max-w-4xl mx-auto space-y-8">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-5xl font-heading font-medium text-stone-900 tracking-tight"
            >
               Transforming Jewelry CAD Designs into Photorealistic Model Animations
            </motion.h2>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="h-1 w-24 bg-[var(--color-gold)] mx-auto rounded-full"
            />
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="text-lg md:text-xl text-stone-600 font-body leading-relaxed"
            >
               Our photo retouching specialists have honed their technical skills and developed their creativity through years of practical application and experience in advertising and photo editing.
            </motion.p>

            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="text-lg md:text-xl text-stone-600 font-body leading-relaxed"
            >
               Jewelry Retouchers delivers some of the best high-end jewelry photo retouching work in the industry. We&apos;re confident in our skills yet recognize the importance of technology. So, apart from investing in ourselves, we also invest in powerful computers and photo editing tools and software. Your photos will get the high-end treatment they deserve.
            </motion.p>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-stone-900 mt-8 mb-4">AI Jewelry Retouching</h3>
            <p className="text-lg md:text-xl text-stone-600 font-body leading-relaxed">
               Our AI assisted jewelry retouching workflow helps improve efficiency when processing large volumes of jewelry photographs. AI based tools can assist with repetitive image editing tasks, while professional review helps preserve important details such as gemstone edges, diamond facets, metal reflections and product shape.
            </p>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-stone-900 mt-8 mb-4">AI Assisted Image Enhancement</h3>
            <p className="text-lg md:text-xl text-stone-600 font-body leading-relaxed">
               AI assisted processing can support background cleanup, image enhancement, imperfection detection and color adjustments. These techniques can reduce repetitive editing time while allowing the final image to be refined according to the specific requirements of the jewelry brand.
            </p>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-stone-900 mt-8 mb-4">Professional Quality Control</h3>
            <p className="text-lg md:text-xl text-stone-600 font-body leading-relaxed">
               Jewelry requires careful handling because excessive enhancement can change the appearance of the actual product. Our approach combines technology with professional retouching so that metals, diamonds, gemstones and fine details remain realistic and suitable for commercial use.
            </p>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-stone-900 mt-8 mb-4">For Large Jewelry Catalogs</h3>
            <p className="text-lg md:text-xl text-stone-600 font-body leading-relaxed">
               AI assisted workflows are particularly useful for jewelry manufacturers, retailers, wholesalers and e-commerce businesses managing large product collections. Consistent processing can help maintain a uniform appearance across hundreds or thousands of images.
            </p>
         </div>
      </section>

      {/* Animation Showcase */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-stone-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8 order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 mb-4">Precision Through AI</h3>
            <p className="text-stone-500 font-body text-lg leading-relaxed">
              Experience the future of jewelry presentation. Our AI-assisted animation workflow ensures that every facet, reflection, and shadow is rendered with photorealistic accuracy, giving your CAD models life and motion.
            </p>
            
            <ul className="space-y-4">
              {[
                { icon: <Sparkles className="w-5 h-5 text-[var(--color-gold)]" />, text: "Automated Flaw Detection & Correction" },
                { icon: <Layers className="w-5 h-5 text-[var(--color-gold)]" />, text: "Intelligent Material Rendering" },
                { icon: <PlayCircle className="w-5 h-5 text-[var(--color-gold)]" />, text: "Smooth 360-degree AI Interpolation" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-stone-50 p-4 rounded-xl border border-stone-100 hover:border-[var(--color-gold)]/30 hover:shadow-sm transition-all">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-stone-100">
                    {item.icon}
                  </div>
                  <span className="text-stone-700 font-medium font-heading">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl border border-stone-200 aspect-[4/3] relative group-hover:border-[var(--color-gold)]/40 transition-colors duration-500 bg-stone-100">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/assets/videos/rendering/comp-1-3-1.mp4" type="video/mp4" />
            </video>
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
          className="flex flex-col items-center text-center bg-stone-900 rounded-[3rem] p-16 shadow-2xl border border-stone-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/20 to-transparent pointer-events-none"></div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-white mb-6 relative z-10">
            Harness the power of AI.
          </h2>
          <p className="text-lg text-stone-300 font-body max-w-xl mb-10 relative z-10">
            Upgrade your jewelry presentations with photorealistic AI model animations. Contact us to learn how we integrate cutting-edge technology into our retouching.
          </p>
          <Link href="/contact" className="relative z-10 inline-flex items-center gap-4 bg-[var(--color-gold)] text-white hover:bg-white hover:text-stone-900 transition-all duration-300 font-body font-bold uppercase tracking-widest px-10 py-5 rounded-full shadow-xl hover:-translate-y-1">
            GET STARTED
          </Link>
        </motion.div>
      </section>

      <FreeDemoSection />


    </main>
  );
}
