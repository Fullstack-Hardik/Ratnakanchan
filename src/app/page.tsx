'use client';

import React, { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-white text-black font-body selection:bg-[var(--color-gold)] selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 h-24 backdrop-blur-md bg-white/80 border-b border-gray-100/50 flex items-center transition-all">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#services" className="hover:text-[var(--color-gold)] transition-colors duration-300">Services</a>
            <a href="#about" className="hover:text-[var(--color-gold)] transition-colors duration-300">About</a>
            <a href="#testimonials" className="hover:text-[var(--color-gold)] transition-colors duration-300">Clients</a>
          </div>
          
          <div className="flex md:hidden">
            <button className="text-black p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>

          <div className="text-center absolute left-1/2 -translate-x-1/2">
             <div className="text-2xl md:text-3xl font-heading font-bold text-black tracking-wider">
                RATNA<span className="text-[var(--color-gold)]">KANCHAN</span>
             </div>
             <div className="text-[10px] tracking-[0.3em] font-body text-gray-500 uppercase mt-1">Creations</div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://wa.link/" target="_blank" rel="noreferrer" className="group relative hidden md:block">
               <span className="text-sm font-medium tracking-wider uppercase hover:text-[var(--color-gold)] transition-colors duration-300">Free Sample</span>
            </a>
            <button className="relative group text-black bg-gray-50 p-3 rounded-full hover:bg-[var(--color-gold)] hover:text-white transition-colors duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION (Vidalli style adapted to Ratnakanchan) */}
      <section className="pt-24 min-h-[90vh] md:min-h-screen flex flex-col md:flex-row relative">
        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-0 relative z-10 mix-blend-difference text-white md:mix-blend-normal md:text-black mt-[-15vh] md:mt-0 pointer-events-none md:pointer-events-auto bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading leading-[1.1] mb-6">
            Elevating <br/>
            <span className="italic font-normal text-[var(--color-gold)] md:text-black">Jewelry</span> <br/>
            Imagery.
          </h1>
          <p className="text-lg md:text-xl font-light text-white md:text-gray-600 max-w-md mb-10 font-body leading-relaxed">
            Premium photo retouching, precise CAD designing, and stunning 360° renders. Trusted by global brands since 2007.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <a href="https://wa.link/" target="_blank" rel="noreferrer" className="text-center relative overflow-hidden border border-black md:border-black bg-white md:bg-black text-black md:text-white px-8 py-4 font-medium uppercase tracking-widest text-sm group">
              <span className="relative z-10 transition-colors duration-300 md:group-hover:text-black group-hover:text-white">Get Free Sample</span>
              <div className="absolute inset-0 bg-[var(--color-gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0"></div>
            </a>
            <a href="#services" className="text-center border border-white md:border-black text-white md:text-black px-8 py-4 font-medium uppercase tracking-widest text-sm hover:bg-white/10 md:hover:bg-gray-50 transition-colors duration-300">
              Explore Services
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 h-[70vh] md:h-auto relative bg-yellow-300">
           <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b13484-9088-41a1-be0e-aac832f13705_1600w.jpg" 
            alt="Luxury Jewelry Editing"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="w-full overflow-hidden border-y border-gray-100 py-8 bg-white relative flex">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-16 px-8">
              <span className="text-3xl text-black/5 font-body uppercase tracking-wider font-bold">Jewelry Retouching</span>
              <span className="text-4xl text-[var(--color-gold)]/40 font-heading italic">CAD Design</span>
              <span className="text-3xl text-black/5 font-body uppercase tracking-wider font-bold">360° Animation</span>
              <span className="text-4xl text-[var(--color-gold)]/40 font-heading italic">Global Agency</span>
              <span className="text-3xl text-black/5 font-body uppercase tracking-wider font-bold">Marketing & Web</span>
              <span className="text-4xl text-[var(--color-gold)]/40 font-heading italic">Est. 2007</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT EXPERTISE (Adapted from Maya Chen Prompt) */}
      <section id="about" className="bg-[#0A0A0A] py-24 sm:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <h2 className="leading-none text-white tracking-tight">
                <span className="block text-5xl md:text-7xl lg:text-8xl font-heading font-medium">
                  <span className="block tracking-tighter">17+ Years of</span>
                  <span className="block text-[var(--color-gold)] italic mt-2">Excellence</span>
                </span>
              </h2>
              <p className="sm:mt-8 sm:text-2xl leading-relaxed max-w-2xl text-lg text-white/70 tracking-tight mt-6 font-light">
                Based in Mumbai, Ratnakanchan Creations blends traditional jewelry knowledge with cutting-edge digital rendering. We handle high-volume e-commerce retouching and bespoke CAD visualizations for brands worldwide.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-sm font-medium tracking-widest uppercase text-black bg-white hover:bg-gray-100 transition-colors">
                  Our Services
                </a>
                <a href="mailto:info@ratnakanchan.com" className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-widest uppercase text-white bg-white/5 border border-white/10 rounded-sm px-8 py-4 hover:bg-white/10 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                  <span>info@ratnakanchan.com</span>
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3 border-t border-white/10 pt-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-gold)] mt-0.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                  <div>
                    <p className="text-sm font-medium tracking-wide">Mumbai HQ</p>
                    <p className="text-xs text-white/50 mt-1">Serving USA, UK, UAE & AUS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-white/10 pt-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-gold)] mt-0.5"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
                  <div>
                    <p className="text-sm font-medium tracking-wide">Scale & Quality</p>
                    <p className="text-xs text-white/50 mt-1">Bulk discounts available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-t border-white/10 pt-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-gold)] mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                  <div className="">
                    <p className="text-sm font-medium tracking-wide">100% Quality</p>
                    <p className="text-xs text-white/50 mt-1">Secure & fast turnaround</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl bg-white/5 rounded-sm border border-white/10">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da81b8a5-ec37-4de5-86fb-e9896c5bb37b_1600w.jpg" alt="Atelier workspace" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                  <div className="rounded-sm bg-white/10 backdrop-blur-md border border-white/15 p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-2xl font-heading font-bold text-white">100+</div>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-widest text-white/70">Global Clients</p>
                  </div>
                  <div className="rounded-sm bg-white/10 backdrop-blur-md border border-white/15 p-4 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-2xl font-heading font-bold text-white">24/7</div>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-gold)]">Support Available</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES GRID (Vidalli Collection style applied to Ratnakanchan PRD) */}
      <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 mb-6">
              <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">Start at $0.5</span>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1270766f-db0e-4d5b-85db-1cfedef9ac56_1600w.jpg" alt="Jewelry Retouching" className="w-full h-full object-cover image-hover-zoom" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
            </div>
            <h3 className="text-2xl font-heading mb-3">1. Jewelry Retouching</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-light mb-4">Clipping paths, e-commerce photo editing, diamond masking, metal color correction, and natural shadow generation.</p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 mb-6">
              <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">Start at $20</span>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7ff11b2-928c-4005-bf7d-47d33d2b58d0_1600w.jpg" alt="CAD Designing" className="w-full h-full object-cover image-hover-zoom" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
            </div>
            <h3 className="text-2xl font-heading mb-3">2. CAD Designing & Renders</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-light mb-4">Transform sketches into precise CAD models (STL) and generate photorealistic 4-angle image renders.</p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 mb-6">
              <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">Start at $25</span>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fabedb0d-467e-45ed-930f-2a561895a076_1600w.jpg" alt="360 Animation" className="w-full h-full object-cover image-hover-zoom" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
            </div>
            <h3 className="text-2xl font-heading mb-3">3. 360° Animation Render</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-light mb-4">Immersive turntable video renders at 700x700 or custom sizes. Perfect for e-commerce and Instagram reels.</p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SLIDER (Adapted from Hiking Prompt to Jewelry PRD) */}
      <section id="testimonials" className="overflow-hidden bg-[#F8F6F2] border-y border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 relative">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-x-6 gap-y-6">
            <div>
              <div className="inline-flex text-xs text-black/70 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 items-center gap-2 font-medium tracking-widest uppercase">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"></span>
                Partner Success
              </div>
              <h2 className="sm:text-6xl leading-[1.1] text-4xl font-heading mt-6">What jewelers are saying.</h2>
              <p className="mt-5 text-gray-500 max-w-2xl font-light text-lg">
                Stories from independent designers and e-commerce brands who trust our pixel-perfect precision on a daily basis.
              </p>
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
          </div>

          <div className="mt-16 relative min-h-[400px]">
            {/* Slide 1 */}
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
                    <div className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Service: High-End Retouching • Volume: 500+ SKUs
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Slide 2 */}
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
                    <div className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Service: CAD Designing & Render • Project: Nova Collection
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Slide 3 */}
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
                    <div className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Service: 360° Animation • Output: Custom MP4
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* FOOTER (Dark, minimal, luxury) */}
      <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          <div className="lg:col-span-5">
            <div className="text-2xl md:text-3xl font-heading font-bold text-white tracking-widest mb-1">
              RATNA<span className="text-[var(--color-gold)]">KANCHAN</span>
            </div>
            <div className="text-[10px] tracking-[0.3em] font-body text-gray-500 uppercase mb-8">Creations</div>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-10 max-w-sm">
              Rameshwar Gruh Nirman Society, Sandesh Nagar,<br/>
              Kurla (W), Mumbai – 400072, India
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-sm hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300 group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-sm hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="mailto:info@ratnakanchan.com" className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-sm hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-8">Capabilities</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Jewelry Retouching</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">CAD Designing</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">360° Animation</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Marketing & Printing</a></li>
              <li><a href="#" className="hover:text-[var(--color-gold)] transition-colors">Website Designing</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-8">Business</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#about" className="hover:text-[var(--color-gold)] transition-colors">About Us</a></li>
              <li><a href="/pricing" className="hover:text-[var(--color-gold)] transition-colors">Pricing & Bulk</a></li>
              <li><a href="https://wa.link/" target="_blank" rel="noreferrer" className="hover:text-[var(--color-gold)] transition-colors">Request Free Sample</a></li>
              <li><a href="mailto:info@ratnakanchan.com" className="hover:text-[var(--color-gold)] transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-light tracking-wide uppercase">
          <p>© 2026 Ratnakanchan Creations. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Terms</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
