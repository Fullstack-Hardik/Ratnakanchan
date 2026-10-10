'use client';
import React from 'react';
import FreeDemoSection from '@/components/FreeDemoSection';

export default function AIJewelryRetouching() {
  return (
    <main className="min-h-screen bg-white text-stone-900 pt-28 pb-12 selection:bg-[var(--color-gold)] selection:text-white">
      
      {/* Hero Banner Section */}
      <section className="w-full max-w-[1400px] mx-auto px-6 mb-16">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-stone-100">
          <img src="/images/ai-page/hero.jpeg" alt="CAD to Realistic Model Hand Images" className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-5xl mx-auto px-6">
        {/* Title Block */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">AI Jewelry Creative Services</h1>
          <h2 className="text-xl md:text-2xl font-serif text-stone-700 mb-6 font-bold">AI-Powered Jewelry Retouching & 3D Animation</h2>
          <p className="text-stone-700 font-medium leading-relaxed max-w-4xl text-[15px] md:text-base">
            <span className="font-bold text-stone-900">Transform</span> your jewelry designs into stunning, photorealistic visuals with AI-powered creativity and professional craftsmanship. Your page can feature AI retouching, lifestyle photography,
          </p>
        </div>

        {/* Section 1: AI jewelry retouching */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6">AI jewelry retouching</h2>
          <p className="text-stone-700 font-medium leading-relaxed max-w-4xl text-[15px] md:text-base mb-8">
            <span className="font-bold text-stone-900">Transform</span> your jewelry photos into stunning, professional-quality images with AI-powered retouching. Enhance diamond brilliance, refine gold and silver finishes, correct lighting and colors, remove imperfections, and create clean backgrounds for a premium look. Perfect for e-commerce listings, catalogs, and marketing campaigns.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-2xl shadow-stone-200/50 rounded-xl p-4 md:p-8 border border-stone-100">
            <div className="flex flex-col items-center justify-center h-full">
               <img src="/images/ai-page/card1.jpeg" alt="AI Jewelry Retouching" className="w-full h-auto rounded object-contain shadow-sm mb-2" />
            </div>
            <div className="flex flex-col items-center justify-center h-full">
               <img src="/images/ai-page/card2.jpeg" alt="AI Background & Lifestyle Images" className="w-full h-auto rounded object-contain shadow-sm mb-2" />
            </div>
            <div className="flex flex-col items-center justify-start h-full pt-2">
               <h3 className="text-[13px] font-serif text-stone-800 mb-3 text-center tracking-wide font-medium">AI Hand View</h3>
               <img src="/images/ai-page/card3.jpeg" alt="AI Hand View" className="w-full h-auto rounded object-cover shadow-sm border border-stone-100" />
            </div>
          </div>
        </div>

        {/* Section 2: 360 video animation */}
        <div className="mb-24 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-[55%]">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6">360° video animation</h2>
            <p className="text-stone-700 font-medium leading-[2.2] text-[15px] md:text-base">
              <span className="font-bold text-stone-900">Transform</span> your ring photos into captivating 360° video animations using AI-powered technology. Showcase your jewelry from multiple angles with smooth rotation, realistic lighting, and brilliant stone details. Perfect for e-commerce websites, product listings, social media, and digital marketing.
            </p>
          </div>
          <div className="w-full md:w-[45%] relative">
             <img src="/images/ai-page/image360.jpeg" alt="360 video animation" className="w-full h-auto" />
          </div>
        </div>

        {/* Section 3: AI Model Videos for Jewelry */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6">AI Model Videos for Jewelry</h2>
          <p className="text-stone-700 font-medium leading-relaxed max-w-5xl text-[15px] md:text-base mb-10">
            AI model videos for jewelry showcase elegant designs through realistic virtual models, highlighting the beauty, shine, and intricate details of each piece. These videos create visually appealing and engaging content for social media, advertisements, and online stores, helping brands attract customers and present their jewelry in a modern, stylish, and professional way. Cinematic video suitable for eBay, Etsy, Shopify, Instagram, and advertising campaigns.
          </p>

          <div className="bg-[#050A10] rounded-xl overflow-hidden p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center shadow-2xl">
            <div className="w-full lg:w-[28%] text-white pr-4">
              <h3 className="text-[22px] font-serif mb-4 leading-[1.3] text-white/90">AI Model Videos<br/>for Your Jewelry</h3>
              <p className="text-[11px] text-stone-300 font-light leading-relaxed">
                Showcase your jewelry on realistic AI models with natural poses, lighting and movements. Perfect for social media, ads and product pages.
              </p>
            </div>
            
            <div className="w-full lg:w-[72%] grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
               {/* Video 1 */}
               <div className="relative aspect-[4/5] rounded-xl overflow-hidden group bg-black shadow-lg border border-white/10">
                 <video src="/images/ai-page/video1.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                   <p className="text-white/90 text-[11px] tracking-wide font-medium text-center">Ring Model Video</p>
                 </div>
               </div>
               
               {/* Video 2 */}
               <div className="relative aspect-[4/5] rounded-xl overflow-hidden group bg-black shadow-lg border border-white/10">
                 <video src="/images/ai-page/video2.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                   <p className="text-white/90 text-[11px] tracking-wide font-medium text-center">Necklace & Ring Video</p>
                 </div>
               </div>
               
               {/* Video 3 */}
               <div className="relative aspect-[4/5] rounded-xl overflow-hidden group bg-black shadow-lg border border-white/10">
                 <video src="/images/ai-page/video3.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                   <p className="text-white/90 text-[11px] tracking-wide font-medium text-center">Earrings Model Video</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </section>

      <FreeDemoSection />
    </main>
  );
}
