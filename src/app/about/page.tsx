'use client';
import { motion, Variants } from 'framer-motion';

export default function AboutPage() {
  const fadeUpBlur: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: 'easeOut' } }
  };

  return (
    <main className="pt-24 min-h-screen bg-[#F8F6F2] text-black font-body overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 px-6 flex items-center min-h-[70vh] overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hand_jewelry_bg.png" 
            alt="Hand with Jewelry" 
            className="w-full h-full object-cover opacity-[0.15] md:opacity-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-10 text-black">
              Elevating Jewelry Imagery
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-8 text-lg md:text-xl text-gray-700 font-light leading-relaxed"
          >
            <p>
              <strong className="font-semibold text-black">Our Mission:</strong><br/>
              To establish a global reputation for exceptional creativity and unwavering commitment to excellence in graphic design. We strive to build strong trust within the world’s graphic design community by consistently delivering outstanding results.
            </p>
            <p>
              <strong className="font-semibold text-black">Our Focus:</strong><br/>
              We dedicate ourselves to addressing the most challenging graphic design service requirements. Driven by a vision of an artistic world, we aim to redefine the boundaries of contemporary graphic design. This ambitious vision fuels our mission to consistently exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6 bg-white text-black relative">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpBlur}
            className="text-4xl md:text-6xl font-heading mb-12 text-center"
          >
            Our Areas of <span className="text-[var(--color-gold)] italic">Expertise</span>
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpBlur}
            className="relative mb-12 w-full max-w-3xl"
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl relative border-8 border-gray-50 bg-white flex items-center justify-center">
               <img src="/assets/images/retouching/Lifestyle After.jpg" alt="Expertise" className="w-full h-auto object-contain" />
            </div>
            
            {/* Floating 3D Elements (Simulated) */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-24 h-24 md:w-32 md:h-32 bg-[var(--color-gold)]/20 backdrop-blur-xl rounded-full border border-white/40 shadow-xl flex items-center justify-center z-10"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[var(--color-gold)] to-white/50 shadow-inner"></div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpBlur}
            className="text-lg text-gray-600 font-light leading-relaxed space-y-6 text-center"
          >
            <p>
              At Ratnakanchan Creations, we specialize in professional jewelry photo editing and CAD design services for jewelry brands, retailers, and e-commerce sellers across the United States. With over 17 years of hands on experience, our team understands exactly how to represent gold tones, diamond clarity, and gemstone color with precision, so your products look as stunning online as they do in person.
            </p>
            <p>
              Our expert photo retouching services are tailored specifically for jewelry businesses. We handle standard cleanups, dust removal, and scratch elimination, alongside advanced enhancements like diamond masking, metal color correction, and natural shadow generation, ensuring every piece sparkles perfectly and increasing your chances of turning online visitors into loyal buyers.
            </p>
            <p>
              To speed up delivery without compromising quality, we also use AI powered retouching for background cleanup, color consistency, and repetitive corrections at scale, while our expert retouchers refine every image by hand for accuracy, giving you faster turnaround on large batches without losing that human crafted finish.
            </p>
            <p>
              On the design side, we deliver highly accurate 3D CAD models crafted from your rough sketches, physical pieces, or reference images. Our experienced designers ensure every prong, setting, and curve is mathematically perfect, providing you with precise STL files that are ready for 3D printing and seamless manufacturing.
            </p>
            <p>
              We then transform your raw CAD files into breathtaking, photorealistic render images with stunning clarity, customizing studio lighting, camera angles, metal textures, and backgrounds to showcase your designs beautifully and eliminate the need for expensive physical photography.
            </p>
            <p>
              For unpolished CAD designs, we apply advanced texturing, hyper realistic diamond shading, and environment mapping to make them look completely indistinguishable from real photography. We bring designs to life further with smooth, high resolution 360 degree turntable animations, ideal for e-commerce platforms and Instagram reels, letting customers interactively view every intricate detail from every angle and building trust that boosts conversion rates. Finally, we seamlessly integrate your 3D jewelry renders with realistic human models, showing true to life scale, lighting interaction, and wearability, helping customers visualize exactly how a piece will look and feel when worn before they ever buy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Knowledge Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-gold)] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpBlur}
            className="text-4xl md:text-5xl font-heading mb-4 text-black"
          >
            17+ Years of Jewellery Expertise
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpBlur}
            className="text-gray-500 font-light text-lg"
          >
            Accurate representation requires deep industry knowledge.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          
          {[
            { title: "Claw & Prong Settings", desc: "Understanding and accurately reproducing different claw/prong configurations while maintaining realistic proportions, highlights, shadows, and diamond visibility." },
            { title: "Earring Posts & Components", desc: "Expertise in accurately presenting different earring post styles and jewelry components while maintaining realistic metal appearance and geometry." },
            { title: "Diamond Types & Settings", desc: "Knowledge of different diamond cuts, shapes, settings, reflections, brilliance, and visual presentation required for professional jewelry imagery." },
            { title: "Gold Colors & Finishes", desc: "Specialized understanding of 10K, 14K, 18K White, Rose, and Yellow Gold. Accurate metal color representation is critical for e-commerce." },
            { title: "CAD Visualization", desc: "Transforming preliminary concepts and CAD models into photorealistic representations ready for production and marketing." },
            { title: "Model Jewelry Retouching", desc: "Seamlessly enhancing jewelry worn by live models, ensuring skin tones remain natural while the jewelry sparkles with brilliance." }
            ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, delay: idx * 0.1 } }
              }}
              className="bg-white border border-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-heading text-black mb-4 flex items-center gap-3">
                <span className="text-[var(--color-gold)]">✧</span> {item.title}
              </h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
          
        </div>
      </section>

    </main>
  );
}
