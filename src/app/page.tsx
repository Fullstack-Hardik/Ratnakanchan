'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  // Simple testimonial slider logic
  const nextSlide = () => setCurrentSlide(prev => (prev === totalSlides ? 1 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 1 ? totalSlides : prev - 1));

  // Autoplay slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-body selection:bg-[var(--color-gold)] selection:text-white">
      
      {/* SECTION 1 - Navigation */}
      <nav className="fixed w-full top-0 z-50 h-24 backdrop-blur-md bg-white/70 border-b border-gray-100/50 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#services" className="hover:text-[var(--color-gold)] transition-colors duration-300">Services</a>
            <a href="#testimonials" className="hover:text-[var(--color-gold)] transition-colors duration-300">Clients</a>
            <a href="#about" className="hover:text-[var(--color-gold)] transition-colors duration-300">Atelier</a>
          </div>
          
          <div className="flex md:hidden">
            <button className="text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>

          <div className="text-center absolute left-1/2 -translate-x-1/2">
             <div className="text-3xl font-heading font-bold text-black tracking-wide relative">
                LUXE<span className="text-[var(--color-gold)]">ATELIER</span>
                <div className="text-[9px] tracking-[0.2em] font-body text-gray-500 uppercase mt-1">by Ratnakanchan</div>
             </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#contact" className="group relative hidden md:block">
               <span className="text-sm font-medium tracking-wider uppercase hover:text-[var(--color-gold)] transition-colors duration-300">Get Quote</span>
            </a>
            <button className="relative group text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--color-gold)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION 2 - Hero */}
      <section className="pt-24 min-h-[90vh] md:min-h-screen flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center px-6 md:px-20 lg:px-32 py-16 md:py-0 relative z-10 mix-blend-difference text-white md:mix-blend-normal md:text-black mt-[-20vh] md:mt-0 pointer-events-none md:pointer-events-auto">
          <h1 className="text-6xl md:text-8xl font-heading leading-tight mb-8">
            Elevating <br/>
            <span className="italic font-normal">Jewelry</span> <br/>
            Imagery.
          </h1>
          <p className="text-lg md:text-xl font-light text-white/90 md:text-gray-600 max-w-md mb-12 font-body leading-relaxed">
            Premium photo retouching, precise CAD designing, and stunning 360° renders. Trusted globally since 2007.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
            <button className="relative overflow-hidden border border-black bg-black text-white px-8 py-4 font-medium uppercase tracking-widest text-sm group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Request Sample</span>
              <div className="absolute inset-0 bg-[var(--color-gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0"></div>
            </button>
            <button className="border border-white md:border-black text-white md:text-black px-8 py-4 font-medium uppercase tracking-widest text-sm hover:bg-white/10 md:hover:bg-gray-50 transition-colors duration-300">
              View Pricing
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 h-[60vh] md:h-auto relative bg-yellow-300">
           <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b13484-9088-41a1-be0e-aac832f13705_1600w.jpg" 
            alt="Luxury Jewelry Retouching"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 cursor-pointer"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </section>

      {/* SECTION 3 - Marquee */}
      <section className="w-full overflow-hidden border-y border-gray-100 py-6 bg-white relative flex">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12 px-6">
              <span className="text-4xl text-black/5 font-body uppercase tracking-wider font-bold">Premium Retouching</span>
              <span className="text-5xl text-[var(--color-gold)]/30 font-heading italic">Flawless Details</span>
              <span className="text-4xl text-black/5 font-body uppercase tracking-wider font-bold">360° Renders</span>
              <span className="text-5xl text-[var(--color-gold)]/30 font-heading italic">CAD Design</span>
              <span className="text-4xl text-black/5 font-body uppercase tracking-wider font-bold">Global Agency</span>
              <span className="text-5xl text-[var(--color-gold)]/30 font-heading italic">Since 2007</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 - Services/Collection Grid */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading mb-6">Our Services</h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto tracking-wide">Bringing your jewelry concepts to life with uncompromising precision and artistic vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          
          {/* Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 mb-6">
              <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-widest text-black">Retouching</span>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1270766f-db0e-4d5b-85db-1cfedef9ac56_1600w.jpg" alt="Aura Ring Retouching" className="w-full h-full object-cover image-hover-zoom" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10"></div>
            </div>
            <h3 className="text-2xl font-heading mb-2">High-End E-Commerce Retouching</h3>
            <p className="text-sm text-gray-400 font-light group-hover:text-[var(--color-gold)] transition-colors duration-300">Diamond masking & color correction</p>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 mb-6">
              <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-widest text-black">CAD & Renders</span>
              <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" alt="Nova Earrings Render" className="w-full h-full object-cover image-hover-zoom" />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 z-10" style={{
                backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de3055f3-7ce2-4f8e-810a-1d061b7f3537_1600w.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0
              }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}></div>
            </div>
            <h3 className="text-2xl font-heading mb-2">CAD Model to Photorealism</h3>
            <p className="text-sm text-gray-400 font-light group-hover:text-[var(--color-gold)] transition-colors duration-300">4-angle renders from STL files</p>
          </div>

          {/* Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 mb-6">
              <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-widest text-black">Animation</span>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fabedb0d-467e-45ed-930f-2a561895a076_1600w.jpg" alt="Luna Necklace 360" className="w-full h-full object-cover image-hover-zoom" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10"></div>
            </div>
            <h3 className="text-2xl font-heading mb-2">360° Turntable Video</h3>
            <p className="text-sm text-gray-400 font-light group-hover:text-[var(--color-gold)] transition-colors duration-300">Fluid animations for social & web</p>
          </div>

        </div>
      </section>

      {/* SECTION 5 - Atelier Background & Stats */}
      <section id="about" className="py-32 bg-black relative overflow-hidden flex items-center justify-center min-h-[70vh]">
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da81b8a5-ec37-4de5-86fb-e9896c5bb37b_1600w.jpg" alt="Our Atelier" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
          {/* Brackets */}
          <div className="hidden md:block absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-[var(--color-gold)]"></div>
          <div className="hidden md:block absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-[var(--color-gold)]"></div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-heading text-white mb-6">The Studio</h2>
            <p className="text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Based in Mumbai since 2007, our atelier combines traditional jewelry knowledge with cutting-edge digital rendering and retouching techniques, serving leading brands across the USA, UK, Australia, and Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - Testimonials (from Prompt) */}
      <section id="testimonials" className="overflow-hidden bg-[#0A0A0A] text-white border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 relative">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-x-6 gap-y-6">
            <div>
              <div className="inline-flex text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 items-center gap-2 font-medium tracking-wide">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"></span>
                Global Partners
              </div>
              <h2 className="sm:text-6xl leading-[1.1] text-4xl font-heading mt-6">What jewelers are saying</h2>
              <p className="mt-5 text-neutral-400 max-w-2xl font-light">
                Stories from independent designers and e-commerce brands who trust our pixel-perfect precision.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-6">
              <div className="text-sm text-white/80 font-body">
                <span className="text-xl font-medium tracking-tight text-[var(--color-gold)]">0{currentSlide}</span> 
                <span className="text-white/40 mx-2">/</span> 
                <span className="text-white/60">03</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prevSlide} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-[var(--color-gold)] transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button onClick={nextSlide} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-[var(--color-gold)] transition-all">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 relative">
            {/* Slide 1 */}
            <article className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-opacity duration-500 ${currentSlide === 1 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
              <div className="lg:col-span-5">
                <div className="rounded-sm overflow-hidden ring-1 ring-white/10 bg-neutral-900 relative">
                  <div className="absolute inset-0 bg-[var(--color-gold)]/10 mix-blend-overlay z-10"></div>
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2c958486-bfef-4917-862a-7e3de9f9e62c_1600w.webp" alt="Client 1" className="w-full h-full object-cover aspect-[4/5] grayscale" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[var(--color-gold)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <div>
                    <h3 className="mt-1 text-2xl sm:text-4xl font-heading text-white">Emily R.</h3>
                    <p className="text-xs text-[var(--color-gold)] uppercase tracking-widest mt-2 mb-6">New York, USA</p>
                    <p className="text-neutral-300 text-xl leading-relaxed font-light italic">
                      “Luxe Atelier transformed our raw CAD files into photorealistic masterpieces. The metal textures and diamond facets were so accurate that our customers couldn't tell they were digital renders.”
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Slide 2 & 3 (using same structure for brevity, changing content slightly) */}
            <article className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-opacity duration-500 ${currentSlide === 2 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
              <div className="lg:col-span-5">
                <div className="rounded-sm overflow-hidden ring-1 ring-white/10 bg-neutral-900 relative">
                  <div className="absolute inset-0 bg-[var(--color-gold)]/10 mix-blend-overlay z-10"></div>
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/782ff660-820f-4153-aa85-b3d60237bd11_1600w.webp" alt="Client 2" className="w-full h-full object-cover aspect-[4/5] grayscale" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[var(--color-gold)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <div>
                    <h3 className="mt-1 text-2xl sm:text-4xl font-heading text-white">James K.</h3>
                    <p className="text-xs text-[var(--color-gold)] uppercase tracking-widest mt-2 mb-6">London, UK</p>
                    <p className="text-neutral-300 text-xl leading-relaxed font-light italic">
                      “We send hundreds of raw photos for high-end e-commerce retouching every month. The consistency, turnaround time, and natural shadow recreation are unmatched in the industry.”
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center transition-opacity duration-500 ${currentSlide === 3 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
              <div className="lg:col-span-5">
                <div className="rounded-sm overflow-hidden ring-1 ring-white/10 bg-neutral-900 relative">
                  <div className="absolute inset-0 bg-[var(--color-gold)]/10 mix-blend-overlay z-10"></div>
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c2c54da9-4434-41f6-a5e4-7988893b20a7_1600w.webp" alt="Client 3" className="w-full h-full object-cover aspect-[4/5] grayscale" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30 text-[var(--color-gold)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                  <div>
                    <h3 className="mt-1 text-2xl sm:text-4xl font-heading text-white">Amira S.</h3>
                    <p className="text-xs text-[var(--color-gold)] uppercase tracking-widest mt-2 mb-6">Dubai, UAE</p>
                    <p className="text-neutral-300 text-xl leading-relaxed font-light italic">
                      “The 360° video animations they provided for our Instagram reels skyrocketed our engagement. Extremely professional communication and stunning final results.”
                    </p>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* SECTION 7 - Footer (Redesigned from Vidalli Andrea prompt) */}
      <footer className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          <div className="lg:col-span-4">
            <div className="text-3xl font-heading font-bold text-white tracking-wide mb-6">
              LUXE<span className="text-[var(--color-gold)]">ATELIER</span>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
              Rameshwar Gruh Nirman Society, Sandesh Nagar,<br/>
              Kurla (W), Mumbai – 400072, India
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-800 flex items-center justify-center rounded-full hover:scale-110 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-800 flex items-center justify-center rounded-full hover:scale-110 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="mailto:info@ratnakanchan.com" className="w-10 h-10 border border-gray-800 flex items-center justify-center rounded-full hover:scale-110 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[var(--color-gold)] text-xs uppercase tracking-widest font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Jewelry Retouching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CAD Designing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">360° Animation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-commerce Ops</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[var(--color-gold)] text-xs uppercase tracking-widest font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Atelier</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing Structure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[var(--color-gold)] text-xs uppercase tracking-widest font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 font-light text-sm mb-6">Subscribe to receive exclusive offers and industry insights.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-600 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-300"
              />
              <button type="button" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 font-light">
          <p>© 2026 Ratnakanchan Creations. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
