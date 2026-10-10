'use client';
import React, { useState, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import Hero3DBackground from '@/components/Hero3DBackground';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import FreeDemoSection from '@/components/FreeDemoSection';
const heroMedia = [
  {
    type: 'image',
    src: '/images/hero/image.png',
    alt: 'Premium Yellow Diamond Ring Retouching',
  },
  {
    type: 'video',
    src: '/images/hero/yg.mp4',
    alt: 'Jewelry Video',
  },
  {
    type: 'video',
    src: '/images/hero/model.mp4',
    alt: 'Model Video',
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
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  // Handle hero carousel auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroMedia.length);
    }, 5000); // 5 seconds per media
    return () => clearInterval(interval);
  }, []);

  // Handle video play/pause reliably
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === activeHeroIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0; // Rewind for next time
        }
      }
    });
  }, [activeHeroIndex]);


  return (
    <div className="bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-20 z-20 flex flex-col md:flex-row items-center gap-12 bg-stone-50">
        <Hero3DBackground />
        
        <div className="w-full md:w-[55%] flex flex-col items-start text-left relative z-30">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-bold text-[var(--color-gold)] mb-6 block font-body tracking-widest uppercase"
          >
            Digital Jewelry Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-heading leading-[1.1] text-stone-900 mb-8"
          >
            Elevating <br className="md:hidden" />
            <span className="italic text-[var(--color-gold)]">Jewelry</span> Imagery.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-stone-800 mb-10 max-w-xl leading-relaxed"
          >
            Premium photo retouching, precise CAD designing, and stunning 360° renders. Trusted by global brands since 2007.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-4 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-all duration-300 px-10 py-5 rounded-full font-body font-bold tracking-widest uppercase shadow-xl hover:-translate-y-1">
              Get Free Sample <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-4 border-2 border-stone-200 text-stone-900 hover:border-stone-900 transition-all duration-300 px-10 py-5 rounded-full font-body font-bold tracking-widest uppercase shadow-sm hover:-translate-y-1">
              Explore Services
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[96%] mx-auto md:w-[45%] h-[50vh] md:h-[80vh] min-h-[400px] relative bg-gray-100 overflow-hidden md:rounded-bl-[100px] rounded-2xl md:rounded-b-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] z-10 mb-8 md:mb-0 mt-8 md:mt-0"
        >
          {/* Active media rendered solely to prevent browser memory/autoplay issues */}
          {heroMedia.map((media, idx) => (
            <div 
              key={media.src} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {media.type === 'video' ? (
                <video
                  src={media.src}
                  ref={(el: HTMLVideoElement | null) => { 
                    videoRefs.current[idx] = el;
                    if (el) {
                      el.defaultMuted = true;
                      el.muted = true;
                      el.setAttribute('playsinline', '');
                      el.setAttribute('muted', '');
                      el.setAttribute('autoplay', '');
                    }
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  suppressHydrationWarning 
                  preload="auto"
                />
              ) : (
                <img 
                  src={media.src} 
                  alt={media.alt}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none z-20"></div>

          <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-auto">
            {heroMedia.map((_, idx) => (
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
      </section>

      {/* WHAT YOU GET FROM US SECTION */}
      <section className="py-12 md:py-16 bg-white max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase tracking-wider">What You Get From Us</h2>
          <p className="text-gray-500 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Experience our unmatched quality standards for your visual assets. Digital presence plays a crucial role in standing out from the competition and capturing the target audience. As the leading jewelry photo retouching and 360° video animation company, we guarantee pristine visuals that elevate your brand value and drive more sales. From simple cleanups to complex CAD designs, we have got you covered.
          </p>
        </div>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-12 lg:gap-24 items-start justify-items-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center w-full px-2">
              <svg className="w-10 h-10 md:w-12 md:h-12 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="font-semibold text-sm md:text-sm">24/7 Service</span>
            </div>
            <div className="flex flex-col items-center text-center w-full px-2">
              <svg className="w-10 h-10 md:w-12 md:h-12 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="font-semibold text-sm md:text-sm leading-snug">Quality Service<br className="hidden md:block"/>Guaranteed</span>
            </div>
            <div className="flex flex-col items-center text-center w-full px-2">
              <svg className="w-10 h-10 md:w-12 md:h-12 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span className="font-semibold text-sm md:text-sm leading-snug">Faster Turnaround<br className="hidden md:block"/>Time</span>
            </div>
            <div className="flex flex-col items-center text-center w-full px-2">
              <svg className="w-10 h-10 md:w-12 md:h-12 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span className="font-semibold text-sm md:text-sm">Full File Security</span>
            </div>
          </div>
      </section>

      {/* NEW OUR SERVICES SECTION */}
      <section className="pt-12 md:pt-16 pb-6 bg-white max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-heading mb-4 uppercase tracking-wider text-black">Our Services</h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold)] mt-2"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2">
            <img src="/images/services/model-necklace-service.jpg" alt="Model Photo Retouching" loading="lazy" className="w-full h-auto rounded-md shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif text-black mb-6">Model Photo Retouching Services</h3>
            <p className="text-gray-500 font-light leading-relaxed mb-4 text-sm md:text-base">
              Elevate your jewelry presentation with our premium model photo retouching services. We understand that showcasing jewelry on a live model provides crucial context and scale, but raw photography often lacks the perfect polish required for high-end brands.
            </p>
            <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
              Our expert retouching team meticulously enhances skin texture, corrects lighting, and brings out the brilliant sparkle of your jewelry pieces, ensuring they stand out flawlessly while maintaining a natural and authentic look.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-8 md:py-12 px-6 md:px-12 max-w-[1400px] mx-auto bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {[
            { id: 1, name: 'Retouching Jewelry Photos', isSlider: true, before: '/images/retouching/retouch-before.jpg', after: '/images/retouching/retouch-after.jpg', desc: "Professional jewelry photo retouching built for online jewelry sales. We remove dust, scratches, and imperfections while enhancing diamond clarity, metal color accuracy, and natural shadow depth. Every image is polished to the standard today's online shoppers expect, helping you turn browsers into buyers." },
            { id: 2, name: 'CAD Designing', img: '/images/services/cad-designing-service.jpg', desc: "Precision 3D CAD design services for jewelry manufacturers and designers. From a rough sketch or reference photo, our team builds mathematically accurate CAD models with clean prongs, settings, and curves, delivered as print-ready STL files for smooth, error-free manufacturing." },
            { id: 3, name: 'CAD to render images and animations', img: '/images/services/instagram-render.jpg', desc: "High-resolution, photorealistic jewelry renders from your CAD files. We customize lighting, camera angle, metal texture, and background to create stunning marketing-ready images, no physical photoshoot required. Perfect for catalogs, websites, and social media." },
            { id: 4, name: 'AI Jewelry Photo Retouching and Video', img: '/images/services/ai-retouching-service.jpg', desc: "We turn raw, unpolished CAD files into market-ready visual assets. Using advanced texturing, realistic diamond shading, and environment mapping, we make your digital jewelry designs look indistinguishable from real photography." },
            { id: 5, name: '3D hand and ring animation', img: '/images/services/hand-animation-service.jpeg', desc: "Show your jewelry the way customers want to see it, worn. We combine 3D renders with lifelike human models to demonstrate true scale, fit, and sparkle, giving online shoppers the confidence to buy without ever seeing the piece in person." },
            { id: 6, name: 'Get Social - ready renders', img: '/images/services/social-render-service.jpeg', desc: "Turn your jewelry CAD models into attractive and professional content for Instagram. Our 3D rendering and animation services help transform your digital jewelry designs into realistic visuals that catch attention.", link: "/cad-to-instagram" }
          ].map((srv, idx) => (
            <motion.div 
              key={srv.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
              className="group flex flex-col border border-gray-100 bg-[#FAFAFA] p-6 hover:bg-white transition-colors duration-500"
            >
              <div className={`relative w-full aspect-[4/3] mb-8 ${srv.id === 2 ? 'bg-black' : 'bg-white overflow-hidden'}`}>
                {srv.isSlider ? (
                  <BeforeAfterSlider beforeImage={srv.before!} afterImage={srv.after!} alt={srv.name} />
                ) : srv.img?.endsWith('.mp4') ? (
                  <video 
                    src={srv.img} 
                    ref={(el: HTMLVideoElement | null) => {
                      if (el) {
                        el.defaultMuted = true;
                        el.muted = true;
                        el.play().catch(() => {});
                      }
                    }}
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                    suppressHydrationWarning 
                    preload="auto" 
                  />
                ) : (
                  <img src={srv.img} alt={srv.name} loading="lazy" className={`w-full h-full ${[2, 4, 5, 6].includes(srv.id) ? 'object-contain' : 'object-cover'} transform scale-[1.02] group-hover:scale-105 transition-transform duration-[1.5s] ease-out`} />
                )}
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-serif text-black mb-4 tracking-wide">{srv.name}</h3>
                <p className="text-[13px] md:text-sm text-gray-500 leading-loose font-light">{srv.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS COUNTER SECTION - NATURE / DARK LEAVES BACKGROUND */}
      <section 
        className="py-12 md:py-20 relative overflow-hidden bg-[#111] shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <AnimatedCounter value={500} text="Projects Delivered" delay={0} />
            <AnimatedCounter value={1200} text="Images Retouched" delay={0.2} />
            <AnimatedCounter value={20000} text="Videos Rendered" delay={0.4} />
            <AnimatedCounter value={2000} text="Happy Clients" delay={0.6} />
          </div>
        </div>
      </section>

      {/* GET A FREE DEMO SECTION */}
      <FreeDemoSection />
</div>
  );
}


