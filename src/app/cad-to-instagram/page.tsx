'use client';

import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Smartphone, RefreshCw, MonitorPlay } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CadToInstagramPage() {
  // Parallax Scroll Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Hero Parallax
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);

  return (
    <main className="min-h-screen bg-white text-stone-900 pt-28 pb-20 selection:bg-[var(--color-gold)] selection:text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-40 z-10 min-h-[80vh] flex items-center justify-center overflow-hidden">
        
        {/* Parallax Video Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full -z-10 rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-stone-50"
        >
           <video 
              autoPlay={true} 
              loop={true} 
              muted={true} 
              playsInline={true}
              className="w-full h-full object-cover"
            >
              <source src="/assets/videos/animations/Shot 6.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white pointer-events-none"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-stone-200 mb-8"
          >
            <Smartphone size={14} className="text-[var(--color-gold)]" />
            <span className="text-xs font-bold text-stone-600 font-body uppercase tracking-widest">Social Media Ready</span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter font-heading leading-[1.05] text-stone-900 mb-8"
          >
            Bring Your 3D CAD Models <br className="hidden md:block"/>
            <span className="text-[var(--color-gold)]">to Life for Instagram</span>
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="text-xl md:text-2xl font-body text-stone-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Turn your jewelry CAD models into attractive and professional content for Instagram.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-32 bg-white">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
              <span className="text-sm font-bold text-stone-400 font-body tracking-widest uppercase">Visual Storytelling</span>
              <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight leading-[1.05]">
                Showcase Your Jewelry Before Manufacturing
              </h2>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                One of the biggest advantages of 3D rendering is that you can start promoting a jewelry design before the physical product is available. This allows you to create early interest in upcoming collections, present designs to customers and build social media content in advance.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed mt-4">
                Our 3D rendering and animation services help transform your digital jewelry designs into realistic visuals that are designed to catch attention and showcase the details of your products.
              </p>
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
                   <Smartphone className="w-5 h-5 text-[var(--color-gold)]" />
                 </div>
                 <div className="font-heading font-bold text-xl text-stone-900">Instagram Ready Content</div>
              </div>
            </div>

            <div className="relative">
               {/* Premium Big Image */}
               <div className="w-full aspect-[4/3] bg-stone-50 rounded-[3rem] p-0 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-stone-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-[var(--color-gold)]/5 to-transparent z-10"></div>
                  <img src="/images/services/5.jpg" alt="Premium Instagram Render" className="w-full h-full object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* Dynamic Video Showcase Section (Scroll Scale Effect) */}
      <section ref={showcaseRef} className="w-full bg-stone-50 py-40 relative overflow-hidden rounded-[4rem] border-y border-stone-100 shadow-inner">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none mix-blend-multiply"></div>
         
         <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
           <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">Professional Realism</h2>
           <p className="text-xl font-body text-stone-600 max-w-3xl mx-auto leading-relaxed">
             We create realistic presentations using accurate metal materials, diamonds, gemstones, lighting and reflections. Smooth movement and carefully planned camera angles help show your jewelry from different views and make the design easier for your audience to understand.
           </p>
           <p className="text-xl font-body text-stone-600 max-w-3xl mx-auto leading-relaxed mt-6">
             Our Instagram ready content can be used for Instagram Reels, posts, stories, product launches, new collection announcements and promotional campaigns. We can work with your existing CAD models and prepare the visuals according to your preferred style and requirements.
           </p>
         </div>

         {/* Enhanced Video Layout */}
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold)]/20 to-transparent blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500"></div>
               <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white border border-stone-200">
                  <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Instagram Reel Format</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                    </div>
                  </div>
                  <video 
                    autoPlay={true} 
                    loop={true} 
                    muted={true} 
                    playsInline={true}
                    className="w-full aspect-[4/3] object-cover"
                  >
                    <source src="/assets/videos/animations/Shot 7.mp4" type="video/mp4" />
                  </video>
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative"
            >
               <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-gold)]/20 to-transparent blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500"></div>
               <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white border border-stone-200">
                  <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Social Media Post</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                      <div className="w-2 h-2 rounded-full bg-stone-300"></div>
                    </div>
                  </div>
                  <img src="/images/services/3.jpg" alt="Social Media Render" className="w-full aspect-[4/3] object-cover" />
               </div>
            </motion.div>
         </div>
      </section>

      {/* Insta Ads Showcase Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 bg-white relative z-20">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[var(--color-gold)] font-body tracking-widest uppercase mb-4 block">Our Work</span>
          <h2 className="text-5xl md:text-6xl font-heading font-medium tracking-tight text-stone-900">Instagram Ads Portfolio</h2>
          <p className="text-lg font-body text-stone-600 max-w-2xl mx-auto mt-6">
            Watch how our 3D animations and precise camera movements bring jewelry to life, creating perfect looping content for social media ads and posts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { src: "/assets/videos/insta-ads/2_camera.mp4", title: "Dynamic Camera Angles" },
            { src: "/assets/videos/insta-ads/box_2_animation_video2.mp4", title: "Creative Box Animation" },
            { src: "/assets/videos/insta-ads/camera_1.mp4", title: "Elegant Presentation" },
            { src: "/assets/videos/insta-ads/camera_4.mp4", title: "360° Detailed View" }
          ].map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-stone-50 border border-stone-200 shadow-lg relative"
            >
              <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-white">
                <span className="text-sm font-bold text-stone-800 font-heading">{video.title}</span>
                <MonitorPlay className="w-4 h-4 text-stone-400" />
              </div>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full aspect-[4/5] object-cover bg-stone-100"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing / CTA Section */}
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
                Stand Out
              </h2>
              <p className="text-xl text-stone-600 font-body max-w-lg leading-relaxed">
                Bring your jewelry designs to life and make your next Instagram post stand out.
              </p>
              <p className="text-lg text-stone-500 font-body max-w-lg leading-relaxed mt-4">
                Whether you are launching a new collection, promoting a custom design or building content for your jewelry brand, 3D animation allows you to create engaging visuals without waiting for the physical jewelry to be manufactured and photographed.
              </p>
              <p className="text-lg font-bold text-stone-700 font-body max-w-lg leading-relaxed mt-4">
                Give us your 3D CAD model and let us turn it into a realistic and engaging visual that represents your jewelry professionally.
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
