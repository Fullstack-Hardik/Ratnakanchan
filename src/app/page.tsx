'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Carousel_003 } from '@/components/ui/skiper-carousel';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const nextSlide = () => setCurrentSlide(prev => (prev === totalSlides ? 1 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 1 ? totalSlides : prev - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      
      {/* HERO SECTION */}
      <section className="pt-20 min-h-[95vh] flex flex-col relative overflow-hidden bg-[#FAFAFA]">
        
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
                <a href="https://wa.link/" target="_blank" rel="noreferrer" className="text-center relative overflow-hidden bg-black text-white px-8 py-4 font-medium uppercase tracking-widest text-sm group rounded-sm shadow-xl hover:scale-105 transition-all">
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
            className="w-full md:w-1/2 h-[50vh] md:h-auto relative bg-gray-100 overflow-hidden md:rounded-bl-[100px] rounded-b-3xl shadow-2xl z-10 mb-8 md:mb-0 md:mt-0"
          >
             {/* Fix for mobile: md:grayscale means colorful on mobile by default */}
             <motion.img 
              initial={{ scale: 1.2, filter: "grayscale(100%)" }}
              animate={{ scale: 1, filter: "grayscale(0%)" }}
              transition={{ 
                scale: { duration: 2, ease: "easeOut" },
                filter: { delay: 1, duration: 1.5, ease: "easeOut" }
              }}
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b13484-9088-41a1-be0e-aac832f13705_1600w.jpg" 
              alt="Luxury Jewelry Editing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-black/10"></div>
          </motion.div>
        </div>

        {/* HERO MARQUEE - Animated continuously */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full overflow-hidden border-y border-gray-200 py-6 bg-white relative flex z-20 shadow-sm mt-auto"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-12 px-6">
                <span className="text-xl md:text-2xl text-black/20 font-body uppercase tracking-wider font-bold">Jewelry Retouching</span>
                <span className="text-2xl md:text-3xl text-[var(--color-gold)]/60 font-heading italic">CAD Design</span>
                <span className="text-xl md:text-2xl text-black/20 font-body uppercase tracking-wider font-bold">360° Animation</span>
                <span className="text-2xl md:text-3xl text-[var(--color-gold)]/60 font-heading italic">Global Agency</span>
                <span className="text-xl md:text-2xl text-black/20 font-body uppercase tracking-wider font-bold">Marketing & Web</span>
              </div>
            ))}
          </div>
        </motion.div>

      </section>

      {/* ABOUT EXPERTISE - Redesigned to be Glassmorphic & Animated */}
      <section id="about" className="relative py-24 sm:py-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da81b8a5-ec37-4de5-86fb-e9896c5bb37b_1600w.jpg" 
            alt="Workspace" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-[4px]"></div>
          {/* Animated floating gradients */}
          <motion.div 
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-gold)]/20 rounded-full blur-[120px]"
          ></motion.div>
          <motion.div 
            animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-gold)]/10 rounded-full blur-[100px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]"></span>
                About Us
              </div>
              <h2 className="leading-[1.1] text-white tracking-tight">
                <span className="block text-5xl md:text-7xl font-heading font-medium mb-2">17+ Years of</span>
                <span className="block text-6xl md:text-8xl text-[var(--color-gold)] font-heading italic">Excellence</span>
              </h2>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-white/80 font-light max-w-xl">
                Based in Mumbai, Ratnakanchan Creations blends traditional jewelry knowledge with cutting-edge digital rendering. We handle high-volume e-commerce retouching and bespoke CAD visualizations for brands worldwide.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#services" className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold tracking-widest uppercase text-black bg-[var(--color-gold)] hover:bg-white transition-all shadow-lg hover:shadow-[var(--color-gold)]/20">
                  Our Services
                </a>
                <a href="mailto:info@ratnakanchan.com" className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-widest uppercase text-white bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 hover:bg-white/10 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                  <span>info@ratnakanchan.com</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Glassmorphism Cards Container */}
              <div className="grid gap-6">
                
                {/* Card 1 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-gold)]/30 rounded-full blur-[40px]"></div>
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[var(--color-gold)]">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">100+</h3>
                      <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-gold)]">Global Clients</p>
                      <p className="text-white/60 text-sm mt-3 font-light leading-relaxed">Trusted by independent designers and high-volume e-commerce brands across the globe.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl relative overflow-hidden lg:ml-12"
                >
                  <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[var(--color-gold)]/30 rounded-full blur-[40px]"></div>
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[var(--color-gold)]">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">24/7</h3>
                      <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-gold)]">Dedicated Support</p>
                      <p className="text-white/60 text-sm mt-3 font-light leading-relaxed">Overnight turnaround times available for urgent campaigns and seasonal drops.</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SWIPER CAROUSEL (Skiper 49) */}
      <section className="py-24 bg-[#FAFAFA] border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-4">Our Visual Portfolio</h2>
          <p className="text-gray-500 font-light text-lg">Swipe to explore our latest high-end jewelry visualizations.</p>
        </div>
        <div className="flex h-full w-full items-center justify-center overflow-hidden">
          <Carousel_003 
            images={[
              { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b13484-9088-41a1-be0e-aac832f13705_1600w.jpg", alt: "Luxury Ring" },
              { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1270766f-db0e-4d5b-85db-1cfedef9ac56_1600w.jpg", alt: "Jewelry Retouching" },
              { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7ff11b2-928c-4005-bf7d-47d33d2b58d0_1600w.jpg", alt: "CAD Design" },
              { src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop", alt: "Earring Render" },
              { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a50b35f0-09bf-4a77-8d53-270981b17e22_1600w.jpg", alt: "Signet Ring" },
              { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7998a59f-416e-4cb4-8999-bdf11936bc71_1600w.jpg", alt: "Necklace 360" },
              { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fabedb0d-467e-45ed-930f-2a561895a076_1600w.jpg", alt: "360 Video" },
            ]} 
            showPagination 
            loop 
            autoplay
          />
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
            { id: 1, name: 'Jewelry Retouching', price: '$0.5', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1270766f-db0e-4d5b-85db-1cfedef9ac56_1600w.jpg', desc: 'Clipping paths, e-commerce photo editing, diamond masking, metal color correction, and natural shadow generation.' },
            { id: 2, name: 'CAD Designing & Renders', price: '$20', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7ff11b2-928c-4005-bf7d-47d33d2b58d0_1600w.jpg', desc: 'Transform sketches into precise CAD models (STL) and generate photorealistic 4-angle image renders.' },
            { id: 3, name: '360° Animation Render', price: '$25', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fabedb0d-467e-45ed-930f-2a561895a076_1600w.jpg', desc: 'Immersive turntable video renders at 700x700 or custom sizes. Perfect for e-commerce and Instagram reels.' },
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
                <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">Start at {srv.price}</span>
                <img src={srv.img} alt={srv.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
              </div>
              <h3 className="text-2xl font-heading mb-3">{srv.id}. {srv.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light mb-4">{srv.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section id="testimonials" className="overflow-hidden bg-[#F8F6F2] border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-x-6 gap-y-6"
          >
            <div>
              <div className="inline-flex text-xs text-black/70 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 items-center gap-2 font-medium tracking-widest uppercase">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"></span>
                Partner Success
              </div>
              <h2 className="sm:text-6xl leading-[1.1] text-4xl font-heading mt-6">What jewelers are saying.</h2>
            </div>
            <div className="shrink-0 flex items-center gap-6">
              <div className="text-sm text-gray-400 font-body">
                <span className="text-xl font-medium tracking-tight text-black">0{currentSlide}</span> 
                <span className="mx-2">/</span> 
                <span>03</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prevSlide} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-black hover:bg-gray-50 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button onClick={nextSlide} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-black hover:bg-gray-50 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </motion.div>

          <div className="mt-16 relative min-h-[400px]">
            <article className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-opacity duration-700 absolute inset-0 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <div className="lg:col-span-4">
                <div className="rounded-sm overflow-hidden bg-white shadow-xl aspect-[4/5] relative">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a50b35f0-09bf-4a77-8d53-270981b17e22_1600w.jpg" alt="Signet Ring Render" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-[var(--color-gold)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <div>
                    <h3 className="mt-1 text-3xl sm:text-4xl font-heading text-black">Sarah Ahmed</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 mb-6">Operations Manager, NYC E-Commerce</p>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-light italic">
                      “Ratnakanchan delivered outstanding bulk retouching results with great professionalism and timely execution. Their precision on diamond masking and metal color correction saved our holiday launch completely.”
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-opacity duration-700 absolute inset-0 ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <div className="lg:col-span-4">
                <div className="rounded-sm overflow-hidden bg-white shadow-xl aspect-[4/5] relative">
                  <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" alt="Earring Render" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-[var(--color-gold)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <div>
                    <h3 className="mt-1 text-3xl sm:text-4xl font-heading text-black">Marco Lee</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 mb-6">Independent Designer, Australia</p>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-light italic">
                      “The CAD rendering check-ins were spot on. We were able to visualize the wax model in its final form perfectly. Their 4-angle photorealistic renders were flawlessly executed end to end.”
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-opacity duration-700 absolute inset-0 ${currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <div className="lg:col-span-4">
                <div className="rounded-sm overflow-hidden bg-white shadow-xl aspect-[4/5] relative">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7998a59f-416e-4cb4-8999-bdf11936bc71_1600w.jpg" alt="Necklace 360" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-[var(--color-gold)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <div>
                    <h3 className="mt-1 text-3xl sm:text-4xl font-heading text-black">Aisha Patel</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 mb-6">Marketing Director, Dubai Boutique</p>
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-light italic">
                      “Clear protocols, incredibly fast delivery, and stunning 360° video animations that doubled our social media engagement. I’d trust this team with any high-end jewelry marketing asset.”
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
