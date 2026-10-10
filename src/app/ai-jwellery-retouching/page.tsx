'use client';
import React from 'react';
import FreeDemoSection from '@/components/FreeDemoSection';

export default function AIJewelryRetouching() {
  return (
    <main className="min-h-screen bg-white text-black pt-28 pb-12 selection:bg-[var(--color-gold)] selection:text-white">
      
      {/* Hero Banner Section */}
      <section className="w-full max-w-[1400px] mx-auto px-6 mb-16">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img src="/images/ai-page/hero-banner.jpeg" alt="CAD to Realistic Model Hand Images" loading="lazy" className="w-full h-auto object-contain" />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-6xl mx-auto px-6">
        {/* Title Block */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-heading text-black mb-6 uppercase tracking-wider">AI Jewelry Creative Services</h1>
          <h2 className="text-xl md:text-2xl font-heading text-gray-700 mb-6 font-bold uppercase">AI-Powered Jewelry Retouching & 3D Animation</h2>
          <p className="text-gray-600 font-body leading-relaxed max-w-4xl text-[15px] md:text-base">
            <span className="font-bold text-black">Transform</span> your jewelry designs into stunning, photorealistic visuals with AI-powered creativity and professional craftsmanship. Your page can feature AI retouching, lifestyle photography,
          </p>
        </div>

        {/* Section 1: AI jewelry retouching */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-6 uppercase">AI jewelry retouching</h2>
          <p className="text-gray-600 font-body leading-relaxed max-w-4xl text-[15px] md:text-base mb-8">
            <span className="font-bold text-black">Transform</span> your jewelry photos into stunning, professional-quality images with AI-powered retouching. Enhance diamond brilliance, refine gold and silver finishes, correct lighting and colors, remove imperfections, and create clean backgrounds for a premium look. Perfect for e-commerce listings, catalogs, and marketing campaigns.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* The two cards image */}
            <div className="w-full lg:w-[70%]">
               <img src="/images/ai-page/hand-view.jpeg" alt="AI Jewelry Retouching Features" loading="lazy" className="w-full h-auto object-contain rounded-xl shadow-lg border border-gray-100" />
            </div>
            {/* The Hand View image */}
            <div className="w-full lg:w-[30%] flex flex-col items-center justify-start bg-white p-4 rounded-xl shadow-lg border border-gray-100">
               <h3 className="text-lg font-heading text-black mb-4 text-center tracking-wide font-medium uppercase">AI Hand View</h3>
               <img src="/images/ai-page/retouching-before-after.jpeg" alt="AI Hand View" loading="lazy" className="w-full h-full object-cover rounded-md shadow-sm" />
            </div>
          </div>
        </div>

        {/* Section 2: 360 video animation */}
        <div className="mb-24 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-[50%]">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-6 uppercase">360° video animation</h2>
            <p className="text-gray-600 font-body leading-relaxed text-[15px] md:text-base">
              <span className="font-bold text-black">Transform</span> your ring photos into captivating 360° video animations using AI-powered technology. Showcase your jewelry from multiple angles with smooth rotation, realistic lighting, and brilliant stone details. Perfect for e-commerce websites, product listings, social media, and digital marketing.
            </p>
          </div>
          <div className="w-full md:w-[50%] relative">
             <img src="/images/ai-page/360-turntable.jpeg" alt="360 video animation" loading="lazy" className="w-full h-auto rounded-xl shadow-lg border border-gray-100" />
          </div>
        </div>

        {/* Section 3: AI Model Videos for Jewelry */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-6 uppercase">AI Model Videos for Jewelry</h2>
          <p className="text-gray-600 font-body leading-relaxed max-w-5xl text-[15px] md:text-base mb-10">
            AI model videos for jewelry showcase elegant designs through realistic virtual models, highlighting the beauty, shine, and intricate details of each piece. These videos create visually appealing and engaging content for social media, advertisements, and online stores, helping brands attract customers and present their jewelry in a modern, stylish, and professional way. Cinematic video suitable for eBay, Etsy, Shopify, Instagram, and advertising campaigns.
          </p>

          <div className="bg-[#050A10] rounded-2xl overflow-hidden p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center shadow-2xl border border-gray-800">
            <div className="w-full lg:w-[25%] text-white pr-4">
              <h3 className="text-3xl font-heading mb-4 leading-snug text-white/90">AI Model Videos<br/>for Your Jewelry</h3>
              <p className="text-sm text-gray-400 font-body leading-relaxed">
                Showcase your jewelry on realistic AI models with natural poses, lighting and movements. Perfect for social media, ads and product pages.
              </p>
            </div>
            
            <div className="w-full lg:w-[75%] grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
               {/* Video 1 */}
               <div className="relative aspect-[4/5] rounded-xl overflow-hidden group bg-black shadow-lg border border-white/10">
                 <video src="/images/ai-page/video1.mp4" 
                    ref={(el: HTMLVideoElement | null) => { if (el) { el.defaultMuted = true; el.muted = true; el.play().catch(() => {}); } }}
                    autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                   <p className="text-white/90 text-sm tracking-wide font-heading text-center">Ring Model Video</p>
                 </div>
               </div>
               
               {/* Video 2 */}
               <div className="relative aspect-[4/5] rounded-xl overflow-hidden group bg-black shadow-lg border border-white/10">
                 <video src="/images/ai-page/video2.mp4" 
                    ref={(el: HTMLVideoElement | null) => { if (el) { el.defaultMuted = true; el.muted = true; el.play().catch(() => {}); } }}
                    autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                   <p className="text-white/90 text-sm tracking-wide font-heading text-center">Necklace & Ring Video</p>
                 </div>
               </div>
               
               {/* Video 3 */}
               <div className="relative aspect-[4/5] rounded-xl overflow-hidden group bg-black shadow-lg border border-white/10">
                 <video src="/images/ai-page/video3.mp4" 
                    ref={(el: HTMLVideoElement | null) => { if (el) { el.defaultMuted = true; el.muted = true; el.play().catch(() => {}); } }}
                    autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                   <p className="text-white/90 text-sm tracking-wide font-heading text-center">Earrings Model Video</p>
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
