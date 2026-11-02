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
      <section className="relative w-full bg-[#050B14] overflow-hidden text-white min-h-[420px] md:min-h-[560px] flex items-center">
        {/* Background Graphic Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/cad-designing/hero-cad-to-render.png" 
            alt="CAD to Render - Bring Your Jewelry Designs to Life" 
            className="w-full h-full object-cover object-center"
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

      {/* 7. 3D JEWELRY CAD TO REALISTIC MODEL PHOTOGRAPHY & VIDEO (Hand section) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-24 border-t border-stone-100">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border border-stone-200 aspect-[4/5] sm:aspect-square flex items-center justify-center">
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
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white tracking-wider uppercase border border-white/10">
                Model Photography & Video
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-[0.2em] block mb-3">
              Photorealistic Human Compositing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight text-stone-900">
              3D Jewelry CAD to Realistic <span className="italic text-[var(--color-gold)]">Model Photography & Video</span>
            </h2>
            <div className="space-y-4 text-stone-700 text-base leading-relaxed">
              <p>
                Bring your 3D jewelry CAD designs to life by showcasing them on realistic human models. We seamlessly integrate your jewelry designs onto realistic model hands, ears, necks, and fingers to create stunning, lifelike jewelry visuals that look like professional jewelry photography and video.
              </p>
              <p>
                Using advanced 3D rendering, jewelry compositing, and realistic lighting techniques, we transform your CAD models into high-quality product images and cinematic videos that showcase how your jewelry looks when worn.
              </p>
            </div>

            <ul className="my-6 space-y-3">
              <li className="flex items-start gap-3">
                <Check className="text-[var(--color-gold)] w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-stone-800 text-sm">
                  <strong>Realistic Ring on Model Hand:</strong> Showcase engagement rings, wedding bands, and fashion rings on realistic human hands and fingers.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[var(--color-gold)] w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-stone-800 text-sm">
                  <strong>Realistic Earrings on Model Ears:</strong> Display diamond studs, hoops, drops, and statement earrings on lifelike model ears.
                </span>
              </li>
            </ul>

            <p className="text-stone-700 text-sm leading-relaxed mb-6">
              We transform 3D jewelry CAD files into photorealistic renders featuring rings on realistic model hands. Using Blender and Cinema 4D, we create natural finger fitting, lifelike skin textures, realistic metal reflections, and brilliant gemstone details for professional e-commerce listings, websites, and marketing campaigns.
            </p>

            <div className="bg-[#FAF9F6] border border-stone-200 rounded-xl p-4 flex flex-col sm:flex-row gap-4 justify-between text-xs text-stone-600">
              <div>
                <span className="font-bold text-stone-900 block mb-1">Best For:</span>
                Instagram, social media advertising, jewelry websites, and online selling platforms.
              </div>
              <div className="sm:border-l sm:border-stone-200 sm:pl-4">
                <span className="font-bold text-stone-900 block mb-1">Software:</span>
                Cinema 4D, Blender, and other industry standard suites.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RENDER IMAGES AND 360ANIMATION PACKAGES (with 6th img) */}
      <section id="packages" className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-28 border-t border-stone-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-[0.2em] block mb-3">
            Tailored Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-stone-900 mb-4">
            Render Images and <span className="italic text-[var(--color-gold)]">360Animation</span>
          </h2>
          <p className="text-stone-600 text-base">
            Select the perfect rendering package engineered to elevate your jewelry brand, boost conversion rates, and mesmerize customers.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* 6th Image Illustration */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-stone-200 p-6 group max-w-md">
              <img 
                src="/images/cad-designing/render-packages-ring.jpg" 
                alt="High Detail Jewelry Render Ring" 
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">Photorealistic Precision</span>
                <p className="text-sm font-medium text-stone-700 mt-1">Multi-angle gemstone & band clarity</p>
              </div>
            </div>
          </div>

          {/* 3 Packages List */}
          <div className="w-full lg:w-7/12 space-y-6">
            
            {/* Package 1 */}
            <div className="p-6 md:p-8 rounded-2xl border border-stone-200 bg-white hover:border-[var(--color-gold)] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-stone-900">
                  1. Basic Pack – E-Commerce Essentials
                </h3>
                <span className="text-xs uppercase px-2.5 py-1 rounded bg-stone-100 font-semibold text-stone-600">Essential</span>
              </div>
              <p className="text-stone-600 text-sm mb-4">Clean, professional visuals for online product listings.</p>
              
              <ul className="space-y-2.5 text-sm text-stone-700 mb-5">
                <li className="flex items-start gap-2.5">
                  <Check className="text-[var(--color-gold)] w-4 h-4 mt-1 flex-shrink-0" />
                  <span><strong>4 High-Quality Images:</strong> Front, side, top, and perspective views (1000x1000 Pixel) of your jewelry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-[var(--color-gold)] w-4 h-4 mt-1 flex-shrink-0" />
                  <span><strong>White Background Rendering:</strong> Clean, consistent product images ideal for e-commerce platforms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-[var(--color-gold)] w-4 h-4 mt-1 flex-shrink-0" />
                  <span><strong>Product Animation:</strong> One 720x720 Full HD video featuring your jewelry on a white background.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-500 border-t border-stone-100 pt-3">
                <div><strong>Software:</strong> I-Jewel and other</div>
                <div><strong>Best For:</strong> Amazon, Etsy, online stores, jewelry catalogs, and product listings</div>
              </div>
            </div>

            {/* Package 2 */}
            <div className="p-6 md:p-8 rounded-2xl border-2 border-[var(--color-gold)] bg-gradient-to-br from-amber-50/20 via-white to-white transition-all duration-300 shadow-md relative">
              <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-stone-900">
                  2. Standard Pack – 360° Jewelry Showcase
                </h3>
              </div>
              <p className="text-stone-600 text-sm mb-4">Bring every detail to life with stunning 360° views and dynamic product animations.</p>
              
              <ul className="space-y-2.5 text-sm text-stone-700 mb-5">
                <li className="flex items-start gap-2.5">
                  <Check className="text-[var(--color-gold)] w-4 h-4 mt-1 flex-shrink-0" />
                  <span><strong>4 to 5 High-Quality Images:</strong> Front, side, top, perspective, and Hand views (1200x1200 Pixel) of your jewelry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-[var(--color-gold)] w-4 h-4 mt-1 flex-shrink-0" />
                  <span><strong>White Background Rendering:</strong> Clean, consistent product images ideal for e-commerce platforms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-[var(--color-gold)] w-4 h-4 mt-1 flex-shrink-0" />
                  <span><strong>High-Quality 360° Videos:</strong> One 720x720 Full HD video featuring your jewelry on a white background with 3 Metal colors (White, Yellow, and Rose Gold).</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-500 border-t border-stone-100 pt-3">
                <div><strong>Software:</strong> Keyshot and other</div>
                <div><strong>Best For:</strong> Instagram, social media advertising, jewelry websites, and online selling platforms</div>
              </div>
            </div>

            {/* Package 3 */}
            <div className="p-6 md:p-8 rounded-2xl border border-stone-200 bg-white hover:border-[var(--color-gold)] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-stone-900">
                  3. Premium Pack – Cinematic & Marketing Visuals
                </h3>
                <span className="text-xs uppercase px-2.5 py-1 rounded bg-stone-900 text-white font-semibold">Luxury Tier</span>
              </div>
              <p className="text-stone-600 text-sm mb-4">Create a luxurious brand experience with photorealistic renders and cinematic jewelry animations.</p>
              
              <ul className="space-y-2.5 text-sm text-stone-700 mb-5">
                <li className="flex items-start gap-2.5">
                  <Check className="text-[var(--color-gold)] w-4 h-4 mt-1 flex-shrink-0" />
                  <span><strong>4 to 6 High-Quality Images:</strong> Front, side, top, perspective, and Realistic Hand views (1500x1500 Pixel) of your jewelry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-[var(--color-gold)] w-4 h-4 mt-1 flex-shrink-0" />
                  <span><strong>Photorealistic Luxury Renders:</strong> Stunning, high-detail jewelry renders with realistic lighting, reflective gold finishes, brilliant diamonds, and elegant backgrounds for a premium luxury look.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="text-[var(--color-gold)] w-4 h-4 mt-1 flex-shrink-0" />
                  <span><strong>Cinematic 3D Jewelry Animation:</strong> Premium, photorealistic jewelry videos featuring smooth camera movements, dramatic lighting, 360° rotations, macro close-ups, and stunning reflections.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-500 border-t border-stone-100 pt-3">
                <div><strong>Software:</strong> Cinema 4D, Blender, and other</div>
                <div><strong>Best For:</strong> Instagram, social media advertising, luxury jewelry websites, and global brands</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Free Demo Section */}
      <FreeDemoSection />

    </main>
  );
}
