'use client';
import React, { useState, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import Hero3DBackground from '@/components/Hero3DBackground';

const heroMedia = [
  {
    type: 'image',
    src: '/images/hero/image.png',
    alt: 'Premium Yellow Diamond Ring Retouching',
  },
  {
    type: 'video',
    src: '/images/hero/YG.mp4',
    alt: 'Jewelry Video',
  },
  {
    type: 'image',
    src: '/images/hero/image_copy.png',
    alt: 'Diamond Bracelet',
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
      setActiveHeroIndex((prev) => (prev + 1) % heroMedia.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  return (
    <div className="bg-white">
      
      {/* HERO SECTION */}
      <section className="pt-32 min-h-[95vh] flex flex-col relative overflow-hidden bg-[#FAFAFA]">
        
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
            {heroMedia.map((media, idx) => {
              if (media.type === 'video') {
                return (
                  <motion.video
                    key={media.src}
                    src={media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    initial={{ opacity: 0 }}
                    animate={{ opacity: idx === activeHeroIndex ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                );
              }
              return (
                <motion.img 
                  key={media.src}
                  src={media.src} 
                  alt={media.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === activeHeroIndex ? 1 : 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              );
            })}

            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none"></div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
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
        </div>



      </section>

      {/* WHAT YOU GET FROM US SECTION */}
      <section className="py-12 md:py-16 bg-white max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase tracking-wider">What You Get From Us</h2>
          <p className="text-gray-500 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Experience our unmatched quality standards for your visual assets. Digital presence plays a crucial role in standing out from the competition and capturing the target audience. As the leading jewelry photo retouching and 360° video animation company, we guarantee pristine visuals that elevate your brand value and drive more sales. From simple cleanups to complex CAD designs, we have got you covered.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="font-semibold text-sm text-center">24/7 Service</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="font-semibold text-sm text-center">Quality Service<br/>Guaranteed</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="font-semibold text-sm text-center">Faster Turnaround Time</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            <span className="font-semibold text-sm text-center">Full File Security</span>
          </div>
        </div>
      </section>

      {/* NEW OUR SERVICES SECTION */}
      <section className="pt-12 md:pt-16 pb-6 bg-white max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 uppercase tracking-wider text-black">Our Services</h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold)] mt-2"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2">
            <img src="/images/services/model_necklace.jpg" alt="Model Photo Retouching" className="w-full h-auto rounded-md shadow-lg" />
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
            { id: 1, name: 'Retouching Jewelry Photos', img: '/images/services/1.jpg', desc: 'Our expert photo retouching services are tailored specifically for jewelry businesses. We meticulously handle standard cleanups, dust removal, and scratch elimination, alongside advanced enhancements like diamond masking, metal color correction, and natural shadow generation. We ensure every facet of your jewelry sparkles perfectly, significantly increasing your chances of turning online visitors into loyal buyers.' },
            { id: 2, name: 'CAD Designing', img: '/images/services/2.jpg', desc: 'We deliver highly accurate 3D CAD models crafted from your rough sketches, physical pieces, or reference images. Our experienced designers ensure that every prong, setting, and curve is mathematically perfect. We provide you with precise STL files that are strictly ready for 3D printing and seamless manufacturing, guaranteeing the final piece perfectly matches your original vision.' },
            { id: 3, name: 'CAD to Render Image', img: '/images/services/3.jpg', desc: 'Transform your raw CAD files into breathtaking, photorealistic render images with stunning clarity. We meticulously customize the studio lighting, camera angles, metal textures, and appealing backgrounds to showcase your designs beautifully. This completely eliminates the need for expensive physical photography while providing marketing-ready assets for your website and social media.' },
            { id: 4, name: 'CAD to 360 Degree Animation', img: '/images/services/4.mp4', desc: 'Bring your static designs to life with our smooth, high-resolution 360-degree turntable animations. Ideal for e-commerce platforms and Instagram reels, these looping videos allow your customers to interactively view every intricate detail of your jewelry from every angle, building immense trust and boosting your online conversion rates significantly.' },
            { id: 5, name: 'Transforming Jewelry CAD Designs', img: '/images/services/5.jpg', desc: 'We take complex, unpolished CAD designs and transform them into gorgeous, market-ready visual assets. By applying advanced texturing, hyper-realistic diamond shading, and environment mapping, we ensure that your digital designs look completely indistinguishable from physical, high-end studio photography, elevating your overall brand perception.' },
            { id: 6, name: 'Photorealistic Model Animations', img: '/images/services/6.mp4', desc: 'Take your jewelry presentation to the absolute next level. We seamlessly integrate your 3D jewelry renders with realistic human models, showing true-to-life scale, lighting interaction, and wearability. This premium service helps customers visualize exactly how the jewelry will look on themselves, driving higher engagement and sales.' },
          ].map((srv, idx) => (
            <motion.div 
              key={srv.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
              className="group flex flex-col border border-gray-100 bg-[#FAFAFA] p-6 hover:bg-white transition-colors duration-500"
            >
              <div className="relative overflow-hidden w-full aspect-[4/3] mb-8 bg-gray-200">
                {srv.img.endsWith('.mp4') ? (
                  <video src={srv.img} autoPlay muted loop playsInline className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                ) : (
                  <img src={srv.img} alt={srv.name} className="w-full h-full object-cover transform scale-[1.02] group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
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
      <section className="flex flex-col md:flex-row bg-[#727575]">
        <div className="w-full md:w-[45%] min-h-[400px] md:min-h-[500px] relative">
          <img src="/images/demo/free_demo.jpg" alt="Demo Model" className="absolute inset-0 w-full h-full object-contain p-4" />
        </div>
        <div className="w-full md:w-[55%] p-10 md:p-24 flex flex-col justify-center text-white">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-wide text-white">Get A Free Demo</h2>
          <p className="text-sm text-gray-200 mb-10 max-w-lg leading-loose font-light">
            Apply for a free photo retouching trial. Send us your test image or CAD file and discover the world-class quality we provide. Fill the form below with your details and we will reach out to you.
          </p>
          
          <form 
            className="flex flex-col gap-6 max-w-lg"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              
              const waText = `*New Free Demo Request*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
              window.open(`https://wa.me/919876543210?text=${waText}`, "_blank");
            }}
          >
            <input name="name" type="text" placeholder="Name *" className="w-full bg-white text-black px-5 py-4 text-sm focus:outline-none border border-transparent focus:border-black transition-colors" required />
            <input name="email" type="email" placeholder="Email *" className="w-full bg-white text-black px-5 py-4 text-sm focus:outline-none border border-transparent focus:border-black transition-colors" required />
            <textarea name="message" placeholder="Message *" rows={4} className="w-full bg-white text-black px-5 py-4 text-sm focus:outline-none resize-none border border-transparent focus:border-black transition-colors" required></textarea>
            <button type="submit" className="bg-black text-white uppercase tracking-widest text-xs font-semibold py-5 px-10 mt-4 w-fit hover:bg-gray-800 transition-colors">
              Send
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
