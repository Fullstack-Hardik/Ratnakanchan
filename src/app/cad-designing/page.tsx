'use client';
import FreeDemoSection from '@/components/FreeDemoSection';
import React from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

function AnimatedCounter({ value, text, delay = 0 }: { value: number, text: string, delay?: number }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 15,
  });

  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  );

  React.useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <motion.div 
      className="flex flex-col items-center text-center p-6 relative z-10" 
      ref={ref}
      animate={{ y: [0, -6, 0] }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay 
      }}
    >
      <div className="flex items-baseline mb-4">
        <motion.h3 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--color-gold)]">
          {display}
        </motion.h3>
        <span className="text-4xl md:text-5xl font-serif text-[var(--color-gold)] ml-1">+</span>
      </div>
      <p className="text-sm md:text-base uppercase tracking-widest font-light text-white/70">{text}</p>
    </motion.div>
  );
}

export default function CadDesigningPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900 pt-28 selection:bg-[var(--color-gold)] selection:text-white relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-20 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col items-start relative z-20"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-bold text-stone-500 mb-4 block font-body tracking-widest uppercase"
            >
              PRACTICE MAKES PERFECT
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-heading leading-[1.1] text-stone-900 mb-6"
            >
              Custom Jewelry CAD Design
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-stone-800 mb-4"
            >
              Turn your jewelry concepts into precise, production-ready 3D CAD models with professional detailing and accurate proportions.
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold font-heading text-stone-900 mb-2 mt-2"
            >
              Render Sample
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-stone-600 mb-10"
            >
              Photorealistic jewelry renders created with realistic metals, diamonds, gemstones, lighting and fine details.
            </motion.p>
          </motion.div>

          <div className="w-full lg:w-1/2 relative z-10">
            <div className="rounded-[2rem] overflow-hidden shadow-xl relative border border-gray-200 bg-black">
               <img 
                  src="/images/uploads/upload-4.png" 
                  alt="Custom Jewelry CAD Design"
                  className="w-full h-auto object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* CAD Designing */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
           <div className="w-full lg:w-1/2">
             <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">CAD <span className="italic text-[var(--color-gold)]">Designing & Render</span></h2>
             <p className="text-lg text-stone-700 leading-relaxed mb-6 font-medium">
               The most powerful software for 3D modeling are Rhino and Matrix. They are enabling jewelry CAD designers to create different types of 3D jewelry models according to initial jewelry drawing. The mentioned software are giving possibility to show jewelry models in different surfaces and in detail. Our jewelry CAD designers will complete the jewelry modeling process in reduced time keeping the quality of jewelry models. The concept of the model can be produced as a result of discussions between CAD designers and clients.
             </p>
           </div>
           <div className="w-full lg:w-1/2">
              <img src="/images/cad-designing/CAD Designing.jpg" alt="CAD Designing" className="w-full h-auto object-contain" />
           </div>
        </div>
      </section>

      {/* Types of render and Animation */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
         <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">Types of <span className="italic text-[var(--color-gold)]">render and Animation</span></h2>
         
         <div className="space-y-6 text-stone-800 font-medium text-lg">
            <div>
               <h3 className="text-xl font-bold mb-2">1. Basic Pack (E-Commerce)</h3>
               <ul className="list-disc pl-6 space-y-1 text-stone-700">
                  <li>On/Amazon 4-6 Images (Front, Side, Top, Perspective) on a plain white background.</li>
                  <li>Animation 1920x1080px One Video on White Color.</li>
                  <li>Best for: Standard online catalogs listings, Etsy, where raw details matter above overall</li>
               </ul>
            </div>
            
            <div>
               <h3 className="text-xl font-bold mb-2">2. Standard Pack (360 Video)</h3>
               <ul className="list-disc pl-6 space-y-1 text-stone-700">
                  <li>On/Amazon 4 High-quality 360 videos (Yellow, White, and Rose Gold) hand/props.</li>
                  <li>Animation 4 seconds to 8 seconds video (14-7 Sec/each & Color).</li>
                  <li>Best for: Instagram Other Selling Platform</li>
               </ul>
            </div>
            
            <div>
               <h3 className="text-xl font-bold mb-2">3. Premium Pack (Cinematic / Marketing)</h3>
               <ul className="list-disc pl-6 space-y-1 text-stone-700">
                  <li>On/Amazon High-resolution renders with realistic lighting, dark thematic background options, and macro close-up of set/settings.</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Render Sample */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 bg-white">
         <div className="border border-gray-200 shadow-sm p-8 max-w-6xl mx-auto">
             <img src="/images/cad-designing/Render Sample Banner.jpg" alt="Render Sample" className="w-full h-auto object-contain" />
         </div>
      </section>

      {/* CAD Render Image */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 mt-8">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <img src="/images/cad-designing/CAD Render Image.jpg" alt="CAD Render Image" className="w-full h-auto object-contain" />
            </div>
            <div className="w-full md:w-1/2">
               <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">CAD <span className="italic text-[var(--color-gold)]">Render Image</span></h2>
               <div className="space-y-4 text-stone-700 font-medium leading-relaxed">
                  <p>High Quality Photo Rendering is very important, as they can be used to enhance proposals, presentations and website sales. The customer wants to see 3D models as they would appear in real life, using specific gemstones and material colors, in a specific environment or angle. We offer professional jewelry rendering for any type of project. The talented jewelry CAD designers are able to create realistic 3D photo renderings due to powerful software used where every single detail is visually represented. The visual simplicity of jewelry rendering is conditioned by jewelry CAD designers hard work for each detail.</p>
                  <p>Our CAD to render service transform digital jewelry models into realistic product images that can be used for websites, catalogs, presentations and marketing campaigns. Materials, lighting, camera angles, backgrounds and gemstone appearance are carefully refined to create a professional, visual representation of the final jewelry design.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 md:py-20 relative overflow-hidden bg-[#111] shadow-2xl mt-12 mb-12">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <AnimatedCounter value={500} text="Projects completed" delay={0} />
            <AnimatedCounter value={1200} text="Happy clients" delay={0.2} />
            <AnimatedCounter value={20000} text="Models rendered" delay={0.4} />
            <AnimatedCounter value={2000} text="Hours of CAD" delay={0.6} />
          </div>
        </div>
      </section>

      {/* CAD to Render 360Animation */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">CAD to Render <span className="italic text-[var(--color-gold)]">360Animation</span></h2>
               <p className="text-stone-700 font-medium leading-relaxed">
                  If a simple 3D photo rendering is not enough. We offer professional video rendering services. Whether it&apos;s for a YouTube channel or a presentation, we will offer impressive high resolution videos to render your project a success. Video rendering enables 3D models to be represented as video outputs.
               </p>
            </div>
            <div className="w-full md:w-1/2 relative">
               <video 
                 src="/videos/CAD to Render 360Animation.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline
                 className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
               />
            </div>
         </div>
      </section>

      {/* High Render Images and 360Animation */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 mb-16">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <img src="/images/cad-designing/High Render Images and 360Animation.jpg" alt="High Render" className="w-full h-auto object-contain bg-gray-100 p-8 rounded-xl" />
            </div>
            <div className="w-full md:w-1/2">
               <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">High Render <span className="italic text-[var(--color-gold)]">Images and 360Animation</span></h2>
               <p className="text-stone-700 font-medium leading-relaxed mb-6">
                  If a simple 3D photo rendering is not enough. We offer professional video rendering services. Whether it&apos;s for a YouTube channel or a presentation, we will offer impressive high resolution videos to render your project a success. Video rendering enables 3D models to be represented as video outputs.
               </p>
               <ul className="space-y-3 text-stone-700 font-medium">
                  <li className="flex items-center gap-2"><span className="text-stone-400">-</span> Can you see the diamond?</li>
                  <li className="flex items-center gap-2"><span className="text-stone-400">-</span> Can replay rings on background?</li>
                  <li className="flex items-center gap-2"><span className="text-stone-400">-</span> Jewelry details for 24 images including need Modeled</li>
                  <li className="flex items-center gap-2"><span className="text-stone-400">-</span> Your High-End Video</li>
               </ul>
            </div>
         </div>
      </section>

      <FreeDemoSection />

    </main>
  );
}
