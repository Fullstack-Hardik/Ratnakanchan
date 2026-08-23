'use client';
import React, { useState, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import Hero3DBackground from '@/components/Hero3DBackground';

const heroImages = [
  {
    src: '/images/hero/hero_bracelet_1787335681322.png',
    alt: 'Premium Diamond Bracelet',
  },
  {
    src: '/images/hero/Model Phto Retouching Service.jpeg',
    alt: 'Professional Jewelry Model Retouching',
  },
  {
    src: '/images/hero/front_banner_after.jpg',
    alt: 'High-End Jewelry Retouching',
  },
];

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

export default function Home() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  return (
    <div className="bg-white">
      
      {/* HERO SECTION */}
      <section className="pt-20 min-h-[95vh] flex flex-col relative overflow-hidden bg-[#FAFAFA]">
        
        <Hero3DBackground />

        <div className="flex-1 flex flex-col-reverse md:flex-row relative z-10 max-w-7xl mx-auto w-full pt-8 md:pt-0">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-10 md:py-0 relative z-20">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, staggerChildren: 0.2 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-7xl lg:text-8xl font-heading leading-[1.05] mb-6 text-black"
              >
                Elevating <br/>
                <span className="italic font-normal text-[var(--color-gold)] relative inline-block">
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    Jewelry
                  </motion.span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-[var(--color-gold)] opacity-50"
                  ></motion.span>
                </span> <br/>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Imagery.
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl font-light text-gray-600 max-w-md mb-10 font-body leading-relaxed"
              >
                Premium photo retouching, precise CAD designing, and stunning 360° renders. Trusted by global brands since 2007.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-center relative overflow-hidden bg-black text-white px-8 py-4 font-medium uppercase tracking-widest text-sm group rounded-sm shadow-xl hover:scale-105 transition-all">
                  <span className="relative z-10">Get Free Sample</span>
                  <div className="absolute inset-0 bg-[var(--color-gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0 ease-out"></div>
                </a>
                <a href="#services" className="text-center border border-gray-300 text-black px-8 py-4 font-medium uppercase tracking-widest text-sm hover:bg-gray-50 transition-all duration-300 rounded-sm">
                  Explore Services
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[55%] h-[50vh] md:h-auto min-h-[400px] relative bg-gray-100 overflow-hidden md:rounded-bl-[100px] rounded-b-3xl shadow-2xl z-10 mb-8 md:mb-0 md:mt-0"
          >
            {heroImages.map((img, idx) => (
              <motion.img 
                key={img.src}
                src={img.src} 
                alt={img.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: idx === activeHeroIndex ? 1 : 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            ))}

            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none"></div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHeroIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === activeHeroIndex
                      ? 'w-6 bg-[var(--color-gold)]'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* HERO MARQUEE - Animated continuously */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full overflow-hidden border-y-2 border-black/5 py-6 bg-white relative flex z-20 shadow-xl mt-auto transform -rotate-2 scale-[1.03] origin-center translate-y-3"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center space-x-12 px-6">
                <span className="text-xl md:text-2xl text-[var(--color-gold)] font-body uppercase tracking-widest font-black">Jewelry Retouching</span>
                <span className="text-2xl text-black/30">✦</span>
                <span className="text-2xl md:text-3xl text-black font-serif italic font-bold">CAD Design</span>
                <span className="text-2xl text-[var(--color-gold)]/50">✦</span>
                <span className="text-xl md:text-2xl text-[var(--color-gold)] font-body uppercase tracking-widest font-black">360° Animation</span>
                <span className="text-2xl text-black/30">✦</span>
                <span className="text-2xl md:text-3xl text-black font-serif italic font-bold">Global Agency</span>
                <span className="text-2xl text-[var(--color-gold)]/50">✦</span>
              </div>
            ))}
          </div>
        </motion.div>

      </section>

      {/* STATS COUNTER SECTION - NATURE / DARK LEAVES BACKGROUND */}
      <section 
        className="py-6 md:py-10 border-y border-white/10 relative overflow-hidden mt-6 md:mt-8 bg-black shadow-inner"
        style={{ 
          backgroundImage: 'url(/dark_leaves_bg.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        
        {/* Dark radial overlay to keep text readable while showing leaves on edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <AnimatedCounter value={500} text="Projects Delivered" delay={0} />
            <AnimatedCounter value={1200} text="Images Retouched" delay={0.4} />
            <AnimatedCounter value={20000} text="Videos Rendered" delay={0.8} />
            <AnimatedCounter value={2000} text="Happy Clients" delay={1.2} />
          </div>
        </div>
      </section>


      {/* SERVICES GRID */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24"
        >
          <div>
            <div className="inline-flex text-xs text-black/60 bg-gray-100 rounded-full px-4 py-2 items-center gap-2 font-medium tracking-widest uppercase mb-6">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"></span>
              Our Offerings
            </div>
            <h2 className="text-4xl md:text-6xl font-heading max-w-2xl leading-[1.1]">End-to-end jewelry visualization.</h2>
          </div>
          <a href="/pricing" className="mt-8 md:mt-0 hidden md:inline-flex items-center gap-2 border-b-2 border-black pb-1 uppercase tracking-widest text-sm font-semibold hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors">
            View Pricing <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          
          {[
            { id: 1, name: 'Jewelry Retouching', price: '$0.5', img: '/images/services/retouching_thumb.jpg', desc: 'Clipping paths, e-commerce photo editing, diamond masking, metal color correction, and natural shadow generation.' },
            { id: 2, name: 'CAD Designing & Renders', price: '$20', img: '/images/services/cad_thumb.jpg', desc: 'Transform sketches into precise CAD models (STL) and generate photorealistic 4-angle image renders.' },
            { id: 3, name: '360° Animation Render', price: '$25', img: '/images/services/360_thumb_alt.jpg', desc: 'Immersive turntable video renders at 700x700 or custom sizes. Perfect for e-commerce and Instagram reels.' },
          ].map((srv, idx) => (
            <motion.div 
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 mb-6 rounded-sm">
                <img src={srv.img} alt={srv.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
              </div>
              <h3 className="text-2xl font-heading mb-3">{srv.id}. {srv.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-4">{srv.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}
