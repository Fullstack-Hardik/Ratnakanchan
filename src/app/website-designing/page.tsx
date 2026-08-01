'use client';

import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MonitorSmartphone, Code2, ShoppingCart, Info, CheckCircle2 } from 'lucide-react';

export default function WebsiteDesigningPage() {
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
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-28 pb-20 selection:bg-[var(--color-gold)] selection:text-white overflow-x-hidden">
      
      {/* Hero Section with Parallax Image Background */}
      <section ref={heroRef} className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-40 z-10 min-h-[85vh] flex flex-col justify-center overflow-hidden">
        
        {/* Parallax Image Background */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full -z-10 rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-white border border-stone-200 shadow-sm"
        >
           <img 
              src="/images/web-design-hero.png" 
              alt="Luxury Web Design"
              className="w-full h-full object-cover opacity-60"
            />
           <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/70 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-stone-200 mb-8"
          >
            <MonitorSmartphone size={14} className="text-[var(--color-gold)]" />
            <span className="text-xs font-bold text-stone-600 font-body uppercase tracking-widest">Digital Experiences</span>
          </motion.div>
          
          <motion.h1 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-6xl md:text-8xl font-medium tracking-tighter font-heading leading-[1.0] text-stone-900 mb-8"
          >
            Custom Web <br/>
            <span className="text-[var(--color-gold)] italic">& E-Commerce</span>
          </motion.h1>
          
          <motion.p 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="text-xl md:text-2xl font-body text-stone-600 leading-relaxed mb-12 max-w-2xl"
          >
            From simple informative sites to full e-commerce suites. We build aesthetically pleasing, simple, and compelling digital assets tailored to your brand.
          </motion.p>
        </div>
      </section>

      {/* The ABCs of Web Design */}
      <section className="w-full bg-white py-32 border-y border-stone-200 relative overflow-hidden -mt-20 z-20 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-stone-900">
               THE "ABC" OF WEB DESIGNING
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { letter: 'A', title: 'Aesthetically Pleasing', desc: 'The design should be pleasing to your customers. Use colors that are complementary while sneaking in some neutrals to turn focus and attention to your main picture, logo or banner. Use fonts that are readable.' },
              { letter: 'B', title: 'Build with Simplicity', desc: 'Your custom web page should be as simple as possible. Organize info well, keep navigation bar links to a minimum and group similar info. Use understandable labels and avoid jargon.' },
              { letter: 'C', title: 'Compelling Content', desc: 'Use professionally written content that will make customers want to know more about your company. The tone and word choice should be simple and straight to the point.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-stone-50 border border-stone-100 rounded-[2.5rem] p-10 hover:shadow-xl hover:border-[var(--color-gold)]/30 transition-all duration-300 group"
              >
                 <div className="text-6xl font-heading font-bold text-[var(--color-gold)]/20 mb-6 group-hover:text-[var(--color-gold)] transition-colors">{item.letter}</div>
                 <h3 className="text-2xl font-heading font-bold text-stone-900 mb-4">{item.title}</h3>
                 <p className="text-stone-600 font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informative Website - Slide in Left */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-32 bg-stone-50 overflow-hidden">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-stone-900 text-[var(--color-gold)] flex items-center justify-center shrink-0">
                    <Info className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">Informative Website</h2>
              </div>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                You may not be ready to sell your products and services over the internet – but that doesn’t mean you should not have a website! If you are unsure whether a website is right for your business, the best thing to do is start with a simple information site.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                As your customer base and confidence grows, this can then be upgraded to a full e-commerce suite when you are ready.
              </p>
              
              <div className="mt-6 space-y-4">
                <h4 className="font-heading font-bold text-lg text-stone-900 border-b border-stone-200 pb-2">What's included?</h4>
                <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                     <span className="text-stone-700 font-body"><strong>Web Site Hosting:</strong> 12 months physical storage for your site.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                     <span className="text-stone-700 font-body"><strong>Domain Name:</strong> We’ll register the domain name of your choice.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                     <span className="text-stone-700 font-body"><strong>Email:</strong> 5 email addresses (@yourdomainname) forwarding to your personal email.</span>
                   </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               className="relative"
            >
               <div className="absolute -inset-4 bg-stone-200 rounded-[3rem] -z-10 rotate-3"></div>
               <div className="w-full aspect-[4/3] bg-white rounded-[3rem] p-0 shadow-xl border border-stone-100 flex items-center justify-center relative overflow-hidden">
                  <img src="/images/web-design-hero.png" alt="Informative Website" className="w-full h-full object-cover" />
               </div>
            </motion.div>
         </div>
      </section>

      {/* Custom Website - Slide in Right */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-32 bg-stone-50 overflow-hidden border-t border-stone-200">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
               initial={{ opacity: 0, x: -100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               className="relative order-2 lg:order-1"
            >
               <div className="absolute -inset-4 bg-[var(--color-gold)]/10 rounded-[3rem] -z-10 -rotate-3"></div>
               <div className="w-full aspect-square bg-white rounded-[3rem] p-0 shadow-xl border border-stone-100 flex items-center justify-center relative overflow-hidden">
                  <img src="/images/web-design-custom.png" alt="Custom Website Strategy" className="w-full h-full object-cover" />
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               className="flex flex-col gap-8 order-1 lg:order-2"
            >
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-[var(--color-gold)] text-white flex items-center justify-center shrink-0">
                    <Code2 className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">Custom Website</h2>
              </div>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Custom web design is much more than the color scheme, images, and fonts of your website. A custom web design is the process of learning and understanding your business, and applying a sound strategy of user experience, design execution, programming, and marketing to form a successful online business presence.
              </p>
              <p className="text-lg font-body text-stone-600 leading-relaxed">
                Every aspect of your website is built specifically for your organizational goals. We believe this service is the most important in creating an effective digital asset with a highly positive ROI.
              </p>
              
              <div className="mt-6 space-y-4">
                <h4 className="font-heading font-bold text-lg text-stone-900 border-b border-stone-200 pb-2">What's included?</h4>
                <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                     <span className="text-stone-700 font-body"><strong>Web Site Hosting:</strong> 12 months physical storage for your site.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                     <span className="text-stone-700 font-body"><strong>Domain Name:</strong> Registration of your chosen domain.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                     <span className="text-stone-700 font-body"><strong>Email:</strong> 5 configured email addresses, expandable to Exchange Mailboxes.</span>
                   </li>
                </ul>
              </div>
            </motion.div>

         </div>
      </section>

      {/* E-Commerce Section - Dark Mode */}
      <section className="w-full bg-stone-900 text-white py-40 relative overflow-hidden rounded-[4rem] mx-auto max-w-[98%] my-10 border border-stone-800 shadow-2xl">
         
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/40 text-[var(--color-gold)] flex items-center justify-center shrink-0">
                    <ShoppingCart className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">E-Commerce Website</h2>
              </div>
              
              <div className="space-y-8 mt-4">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-[var(--color-gold)] mb-3">Flexible store setup.</h3>
                  <p className="text-stone-400 font-body leading-relaxed text-lg">
                    Add up to 1,500 products, with up to 5 images per product. Plus, manage your entire inventory with just a few clicks.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-[var(--color-gold)] mb-3">Make buying easy.</h3>
                  <p className="text-stone-400 font-body leading-relaxed text-lg">
                    Accept all major credit cards, debit cards, net banking, and wallets. Securely accept preferred payment methods, including PayPal® and Apple Pay. Have the money from your sales automatically transferred to your bank accounts with fees starting as low as 1.1%.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-black/50 border border-stone-800 p-8 rounded-3xl">
                <h4 className="font-heading font-bold text-xl text-white mb-6">What's included?</h4>
                <ul className="space-y-4">
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                     <span className="text-stone-300 font-body"><strong>Unlimited Web Hosting:</strong> For 12 months.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                     <span className="text-stone-300 font-body"><strong>Domain Name:</strong> Seamless registration and setup.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-1" />
                     <span className="text-stone-300 font-body"><strong>Unlimited Email:</strong> Unlimited professional addresses with direct inbox and forwarding.</span>
                   </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative w-full aspect-[4/5] lg:aspect-square"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/20 to-transparent blur-3xl -z-10 rounded-full"></div>
               <img src="/images/web-design-ecommerce.png" alt="E-Commerce Ecosystem" className="w-full h-full object-contain" />
            </motion.div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white rounded-[3rem] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-stone-100">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-stone-900 mb-4">
              Launch your digital asset.
            </h2>
            <p className="text-lg text-stone-600 font-body max-w-lg">
              Get in touch to discuss your web design strategy, domain registration, and e-commerce goals.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-4 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-all duration-300 font-body font-bold uppercase tracking-widest px-10 py-6 rounded-2xl shadow-xl hover:-translate-y-1 flex-shrink-0">
            START PROJECT <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
