'use client';
import FreeDemoSection from '@/components/FreeDemoSection';
import React from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Check, Sparkles, Box, Layers, Video, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
      <div className="flex items-baseline mb-3">
        <motion.h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-gold)] font-medium">
          {display}
        </motion.h3>
        <span className="text-3xl md:text-4xl font-serif text-[var(--color-gold)] ml-1">+</span>
      </div>
      <p className="text-xs md:text-sm uppercase tracking-widest font-light text-white/80">{text}</p>
    </motion.div>
  );
}

export default function CadDesigningPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900 pt-24 selection:bg-[var(--color-gold)] selection:text-white relative overflow-hidden">
      
      {/* 1. HERO BANNER: CAD TO RENDER */}
      <section className="relative w-full bg-[#050B14] overflow-hidden text-white flex items-center">
        <div className="w-full">
          <img 
            src="/images/cad-designing/hero-cad-to-render.png" 
            alt="CAD to Render - Bring Your Jewelry Designs to Life" 
            className="w-full h-auto object-contain object-center mx-auto block"
          />
        </div>
      </section>

      {/* 2. CAD DESIGNING SECTION (with 2nd img) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-[0.2em] block mb-3">
              Precision 3D Modeling
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900 mb-6 leading-tight">
              CAD <span className="italic text-[var(--color-gold)]">Designing</span>
            </h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed font-normal">
              <p>
                The most powerful software for 3D modeling are Rhino and Matrix. They are enabling jewelry CAD designers to create different types of 3D jewelry models according to initial jewelry drawing.
              </p>
              <p>
                The mentioned software are giving possibility to show jewelry models in different surfaces and in detail. Our jewelry CAD designers will complete the jewelry modeling process in reduced time keeping the quality of jewelry models.
              </p>
              <p>
                The concept of the model can be produced as a result of discussions between CAD designers and clients.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-stone-200 pt-6">
              <div className="flex items-center gap-3">
                <Box className="text-[var(--color-gold)] w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-stone-800">Rhino & Matrix Experts</span>
              </div>
              <div className="flex items-center gap-3">
                <Layers className="text-[var(--color-gold)] w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-stone-800">Print-Ready STL Files</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#FAF9F6] border border-stone-200 p-4 lg:p-6 group">
              <img 
                src="/images/cad-designing/cad-designing-models.jpg" 
                alt="CAD Designing 3D Models" 
                className="w-full h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.02]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. RENDER ANGLE SECTION (with 3rd img) */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-20">
        <div className="border border-stone-200/80 rounded-2xl bg-white shadow-xl overflow-hidden p-4 md:p-8">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest font-bold text-stone-400">Angle Showcase</span>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-stone-900 mt-1">
              Render <span className="text-[var(--color-gold)] italic">Angle</span>
            </h3>
          </div>
          <div className="overflow-hidden rounded-xl bg-stone-50">
            <img 
              src="/images/cad-designing/render-angles-banner.jpg" 
              alt="Render Angles - Front, Side, Perspective and Hand Views" 
              className="w-full h-auto object-contain mx-auto" 
            />
          </div>
        </div>
      </section>

      {/* 4. STATS COUNTER BAR */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-[#0A0D14] shadow-2xl my-8">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <AnimatedCounter value={500} text="Projects Delivered" delay={0} />
            <AnimatedCounter value={1200} text="Images Retouched" delay={0.15} />
            <AnimatedCounter value={20000} text="Videos Rendered" delay={0.3} />
            <AnimatedCounter value={2000} text="Happy Clients" delay={0.45} />
          </div>
        </div>
      </section>

      {/* 5. CAD RENDER IMAGE HERO / BANNER SECTION (with Luxury Jewelry CAD Render Banner.png) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0b0c10] border border-stone-200">
          <img 
            src="/images/cad-designing/luxury-cad-render-banner.png" 
            alt="Luxury Jewelry CAD Render Banner" 
            className="w-full h-auto min-h-[460px] md:min-h-[540px] object-cover" 
          />
        </div>
      </section>

      {/* 6. CAD TO RENDER 360 ANIMATION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-[0.2em] block mb-3">
              Cinematic Jewelry Motions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight text-stone-900">
              CAD to Render <span className="italic text-[var(--color-gold)]">360Animation</span>
            </h2>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed font-normal mb-8">
              If a simple 3D photo rendering is not enough, we offer professional video rendering services. Whether it&apos;s for a YouTube channel or a presentation, we will offer impressive high resolution videos to make your project a success. Video rendering enables 3D models to be represented as video outputs.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="text-[var(--color-gold)] w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-stone-800">Ultra HD 360° Seamless Rotation</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-[var(--color-gold)] w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-stone-800">Reflective Gold & Diamond Sparkle Simulation</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-[var(--color-gold)] w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium text-stone-800">Ready for E-commerce & Social Media Ads</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-stone-200 aspect-video flex items-center justify-center">
              <video 
                src="/videos/CAD to Render 360Animation.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                suppressHydrationWarning 
                preload="auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. 3D JEWELRY CAD TO REALISTIC MODEL HAND RENDERING */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-20 border-t border-stone-200">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Media */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden bg-stone-100 shadow-sm border border-stone-200 relative">
              <video 
                src="/assets/videos/animations/shot-6.mp4" 
                poster="/images/cad-designing/model-hand-ring-preview.jpg"
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                suppressHydrationWarning 
                preload="auto" 
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-stone-900 mb-5 leading-tight">
              3D Jewelry CAD to Realistic Model Hand Rendering
            </h2>

            <div className="space-y-4 text-stone-800 text-sm sm:text-base leading-relaxed">
              <p>
                We transform 3D jewelry CAD files into photorealistic renders featuring rings on realistic model hands. Using Blender and Cinema 4D, we create natural finger fitting, lifelike skin textures, realistic metal reflections, and brilliant gemstone details for professional e-commerce listings, websites, and marketing campaigns.
              </p>

              <ul className="list-disc pl-5 space-y-1.5 py-1 text-stone-900 text-sm sm:text-base">
                <li>
                  <strong>Best For:</strong> Instagram, social media advertising, jewelry websites, and online selling platforms.
                </li>
                <li>
                  <strong>Software:</strong> Cinema4d, Blender and Other .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RENDER IMAGES AND 360ANIMATION PACKAGES (with 6th img) */}
      <section id="packages" className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-20 border-t border-stone-200">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900">
            Render Images and 360Animation
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left: 6th Image (Ring render) */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden bg-stone-50 border border-stone-200 p-6 flex items-center justify-center">
              <img 
                src="/images/cad-designing/render-packages-ring.jpg" 
                alt="Render Images and 360Animation" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          {/* Right: Packages List */}
          <div className="w-full lg:w-7/12 space-y-6 text-stone-900">
            
            {/* Package 1 */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                1. Basic Pack — E-Commerce Essentials
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-2">
                Clean, professional visuals for online product listings.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-stone-800 leading-relaxed">
                <li>
                  <strong>4 High-Quality Images:</strong> Front, side, top, and perspective views(1000X1000Pixel) of your jewelry.
                </li>
                <li>
                  <strong>White Background Rendering:</strong> Clean, consistent product images ideal for e-commerce platforms.
                </li>
                <li>
                  <strong>Product Animation:</strong> One 720X720 Full HD video featuring your jewelry on a white background.
                </li>
                <li>
                  <strong>Software:</strong> I-Jewel and Other .
                </li>
                <li>
                  <strong>Best For:</strong> Amazon, Etsy, online stores, jewelry catalogs, and e-commerce product listings.
                </li>
              </ul>
            </div>

            {/* Package 2 */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                2. Standard Pack — 360° Jewelry Showcase
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-2">
                Bring every detail to life with stunning 360° views and dynamic product animations.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-stone-800 leading-relaxed">
                <li>
                  <strong>4 to 5 High-Quality Images:</strong> Front, side, top, perspective and Hand views(1200X1200Pixel) of your jewelry.
                </li>
                <li>
                  <strong>White Background Rendering:</strong> Clean, consistent product images ideal for e-commerce platforms.
                </li>
                <li>
                  <strong>High-Quality 360° Videos:</strong> One 720X720 Full HD video featuring your jewelry on a white background with 3 Metal colors(White, yellow and Rose Gold).
                </li>
                <li>
                  <strong>Software:</strong> Keyshot and Other .
                </li>
                <li>
                  <strong>Best For:</strong> Instagram, social media advertising, jewelry websites, and online selling platforms.
                </li>
              </ul>
            </div>

            {/* Package 3 */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                3. Premium Pack — Cinematic & Marketing Visuals
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-2">
                Create a luxurious brand experience with photorealistic renders and cinematic jewelry animations.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-stone-800 leading-relaxed">
                <li>
                  <strong>4-6 High-Quality Images:</strong> Front, side, top, and perspective and Realistic Hand views(1500X1500Pixel) of your jewelry.
                </li>
                <li>
                  <strong>Image Rendering:</strong> Photorealistic Luxury Renders: Stunning, high-detail jewelry renders with realistic lighting, reflective gold finishes, brilliant diamonds, and elegant backgrounds for a premium luxury look.
                </li>
                <li>
                  <strong>Cinematic 3D Jewelry Animation:</strong> Premium, photorealistic jewelry videos featuring smooth camera movements, dramatic lighting, 360° rotations, macro close-ups, and stunning reflections to highlight every detail and deliver a luxurious brand experience.
                </li>
                <li>
                  <strong>Best For:</strong> Instagram, social media advertising, jewelry websites, and online selling platforms.
                </li>
                <li>
                  <strong>Software:</strong> Cinema4d, Blender and Other .
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Free Demo Section */}
      <FreeDemoSection />

    </main>
  );
}
