'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Scissors, Wand2, Sparkles, Diamond, Sun, Droplets } from 'lucide-react';
import AutoFadeSlider from '@/components/AutoFadeSlider';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

// Custom component for the hover-fade effect
function HoverFadeCard({ title, items, beforeImg, afterImg }: { title: string, items?: string[], beforeImg: string, afterImg?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className="group relative bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-stone-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full overflow-hidden"
    >
      <div className="px-8 pt-8 pb-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-heading font-bold text-stone-900 mb-4">{title}</h3>
        {items && items.length > 0 && (
          <ul className="text-stone-500 font-body leading-relaxed space-y-2 list-disc pl-5">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-full aspect-[4/3] relative mt-auto border-t border-stone-100 bg-stone-50 overflow-hidden">
        <img src={beforeImg} alt={`${title}`} className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${afterImg ? 'group-hover:opacity-0' : 'group-hover:scale-110'}`} />
        {afterImg && (
          <img src={afterImg} alt={`${title} After`} className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100" />
        )}
      </div>
    </motion.div>
  );
}

export default function JewelryRetouching() {
  const originalFeatures = [
    {
      title: "Clipping Path & Masking",
      desc: "Perfect selections for multi-paths, complex maskings, and precision isolation. Every detail is retained. Our precision clipping path and masking service is designed for jewelry images with intricate shapes, delicate chains, multiple gemstones, prongs and fine edges.",
      icon: <Scissors className="w-6 h-6" />,
      before: "/images/retouching/ring-1-before.jpg",
      after: "/images/retouching/ring-1-after.jpg",
      delay: 0.1
    },
    {
      title: "Color & Contrast Editing",
      desc: "Restore dull metals to brilliant gold and silver. Improve gemstone vibrancy, color correct, and master brightness. We carefully balance color, brightness and contrast to present gold, silver, platinum, diamonds and gemstones with a natural and premium appearance.",
      icon: <Wand2 className="w-6 h-6" />,
      before: "/images/retouching/ring-4-before.jpg",
      after: "/images/retouching/ring-4-after.jpg",
      delay: 0.2
    },
    {
      title: "Flawless Enhancements",
      desc: "Remove poor reflections, dust, and imperfections to create a completely flawless, highly reflective, pristine surface. Our enhancement process removes distracting dust, scratches, unwanted reflections and minor imperfections while preserving realistic textures and highlights.",
      icon: <Sparkles className="w-6 h-6" />,
      before: "/images/retouching/front-banner-before.jpg",
      after: "/images/retouching/front-banner-after.jpg",
      delay: 0.3
    }
  ];

  const ecommerceSliderImages = [
    "/images/retouching/services/lifestyle-retouching.jpg",
    "/images/retouching/services/model-retouching.jpg",
    "/images/retouching/services/product-retouching.jpg"
  ];

  const newServicesCards = [
    {
      title: "Basic Retouching",
      items: ["Cutout", "Color Correction", "Natural Shadow", "Add some more text."],
      beforeImg: "/images/retouching/services/basic-retouch-before.jpg",
      afterImg: "/images/retouching/services/basic-retouch-after.jpg"
    },
    {
      title: "High End Retouching",
      items: ["Cutout", "Color Correction", "Natural Shadow", "Work on Center Diamond And Gemstone", "Remove Dust & Remove Poor Reflection", "Change in Metal shadow highlight for accuracy."],
      beforeImg: "/images/retouching/services/high-end-retouch-before.jpg",
      afterImg: "/images/retouching/services/high-end-retouch-after.jpg"
    },
    {
      title: "CAD Render image to Retouch",
      items: ["More Realistic Look", "Work on Diamond And Metal", "Natural Shadow", "Create All 3 Metal Color.", "Replace center diamond or Gemstone."],
      beforeImg: "/images/retouching/services/cad-render-retouch.jpg",
    },
    {
      title: "AI image Retouching",
      items: [],
      beforeImg: "/images/retouching/services/ai-image-retouch.png",
    },
    {
      title: "Model Photo and Image Retouching",
      items: [],
      beforeImg: "/images/retouching/services/model-photo-retouch.jpg"
    },
    {
      title: "E commerce Product Image Retouch",
      items: [],
      beforeImg: "/images/retouching/services/ecommerce-retouch.jpg",
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-14 md:pt-28 pb-20 overflow-x-hidden selection:bg-[var(--color-gold)] selection:text-white">

      {/* Hero Text Content with Split Layout */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-20 z-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-bold text-[var(--color-gold)] mb-6 block font-body tracking-widest uppercase"
          >
            Professional Jewelry Retouching
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter font-heading leading-[1.05] text-stone-900 mb-8"
          >
            Flawless <br className="md:hidden" /> <span className="italic text-[var(--color-gold)]">Perfection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-body text-stone-600 leading-relaxed mb-10 max-w-xl"
          >
            Transform your raw jewelry photos into breathtaking, high-end visuals. Our expert retouching services cover clipping, color correction, scratch removal, and flawless metallic enhancement to make every piece shine.
          </motion.p>
          
          {/* Mobile Only Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full block md:hidden mb-10 rounded-3xl overflow-hidden shadow-2xl relative border border-stone-100"
          >
             <img src="/assets/images/retouching/retouchinghero.jpg" alt="High End Retouching Hero" className="w-full h-auto object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/contact" className="inline-flex items-center gap-4 bg-stone-900 text-white hover:bg-[var(--color-gold)] transition-all duration-300 px-10 py-5 rounded-full font-body font-bold tracking-widest uppercase shadow-xl hover:-translate-y-1">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 hidden md:block"
        >
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl relative border border-stone-100">
             <img src="/assets/images/retouching/retouchinghero.jpg" alt="High End Retouching Hero" className="w-full h-auto object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Premium Animated Cards Section with Original Drag Before/After Sliders */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {originalFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: feature.delay }}
              className="group relative bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-stone-100 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="px-6 pt-6 pb-4">
                <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center text-[var(--color-gold)] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-stone-900 mb-4">{feature.title}</h3>
                <p className="text-stone-500 font-body leading-relaxed flex-grow">
                  {feature.desc}
                </p>
              </div>

              <div className="mt-auto w-full rounded-b-[2.5rem] overflow-hidden">
                <BeforeAfterSlider
                  beforeImage={feature.before}
                  afterImage={feature.after}
                  alt={feature.title}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Hover Cards from E-Drive Images */}
      <section className="w-full bg-white py-24 border-y border-stone-100 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col mb-16 text-center items-center">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-stone-900 mb-6">
              What We Do in <br /> <span className="italic text-[var(--color-gold)]">Our Retouching Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {newServicesCards.map((card, idx) => (
              <HoverFadeCard 
                key={idx}
                title={card.title}
                items={card.items}
                beforeImg={card.beforeImg}
                afterImg={card.afterImg}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Media and Content Section 1: Clipping & Editing */}
      <section className="w-full max-w-7xl mx-auto py-24 px-6 relative z-10">
        
        {/* Clipping Path (No Media) */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-stone-900 mb-6 tracking-tight uppercase">Clipping Path</h3>
          <p className="text-stone-500 font-body leading-relaxed text-lg">
            Clipping path Service covers Multi path, clipping mask, basic, compound, complex or super complex clipping path services. We use manual Photoshop clipping path tools for clippings. Accurate clipping is especially important for jewelry because even small errors around stones, prongs, chains and delicate edges can affect the final product image. Our detailed selections provide clean outlines and support background removal, color correction, shadow creation and other image editing requirements.
          </p>
        </div>

        {/* E-Commerce Product Editing (With AutoFadeSlider) */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-3xl font-heading font-bold text-stone-900 mb-6 tracking-tight uppercase">E-Commerce Product Editing</h3>
            <p className="text-stone-500 font-body leading-relaxed">
              If you are looking for a company who provide Product Image Editing Services with Cropping, Resizing, Straightening and formatting for publishing in website or any advertising purpose at affordable cost with top quality then Ratnakanchan Associate is the best solution for you. We prepare jewelry product images for online stores, marketplaces, websites and digital catalogs by maintaining consistent cropping, sizing, backgrounds and overall image quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <AutoFadeSlider images={ecommerceSliderImages} interval={2000} />
          </motion.div>
        </div>
      </section>

      {/* Media and Content Section 2: Why Us */}
      <section className="w-full bg-stone-900 text-white py-24 my-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h3 className="text-3xl font-heading font-bold text-[var(--color-gold)] mb-6 tracking-tight uppercase">Why Ratnakanchan.com</h3>
            <p className="text-stone-300 font-body leading-relaxed text-lg">
              Through innovative thinking which adheres to high standards of quality and excellence we make sure that you enhance your growth potential in the industry. We specialize in digital correction of images. Be it in any form, digitally shot, scanned, or a sketch (pencil design) from the designer’s board. Through requisite touch up we help you visualize your wax model in its final form, complete with gold and diamonds set in.
            </p>
          </motion.div>
        </div>
      </section>
</main>
  );
}
