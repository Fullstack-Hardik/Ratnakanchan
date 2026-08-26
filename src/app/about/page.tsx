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
              <strong className="font-semibold text-black">Ratnakanchan Creations</strong> is one of the most professional and trustworthy jewelry photo editing service providers in Mumbai, India. Established in 2007, we have built a strong customer base across the globe, including the USA, Australia, UK, Dubai, and other parts of the world, with thousands of satisfied clients.
            </p>
            <p>
              In today’s rapidly evolving industry, with shrinking verticals, new standards, and constantly shifting parameters, information is a critical asset. At Ratnakanchan Creations, we blend style and substance to help you thrive. Through innovative thinking and a steadfast commitment to quality and excellence, we empower you to enhance your growth potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6 bg-white text-black relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpBlur}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl relative border-8 border-gray-50">
               <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1270766f-db0e-4d5b-85db-1cfedef9ac56_1600w.jpg" alt="Expertise" className="w-full h-full object-cover" />
            </div>
            
            {/* Floating 3D Elements (Simulated) */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-gold)]/20 backdrop-blur-xl rounded-full border border-white/40 shadow-xl flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--color-gold)] to-white/50 shadow-inner"></div>
            </motion.div>
            
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpBlur}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-6xl font-heading mb-8">Our Areas of <span className="text-[var(--color-gold)] italic">Expertise</span></h2>
            <div className="text-lg text-gray-600 font-light leading-relaxed space-y-6">
              <p>
                At Ratnakanchan Creations, we specialize in high-end jewelry photo retouching and 3D CAD modeling. With years of experience working closely with jewelry brands, we understand the precise details that make a piece truly shine—from color correcting rose gold and enhancing diamond brilliance to cleaning up minor imperfections in metal.
              </p>
              <p>
                Our digital artists are masters at balancing realism with perfection. Whether it’s raw product photography that needs pristine reflections or creating photorealistic 3D renders from scratch, we deliver marketing-ready visuals that elevate your brand and drive sales.
              </p>
              <p>
                We also offer specialized 360-degree turntable animations and on-model retouching, helping customers visualize your jewelry from every angle and giving them the confidence they need before they ever buy.
              </p>
              
              <div className="pt-4 space-y-2 text-sm text-black italic font-medium">
                {/* [USER WILL PROVIDE THE FINAL TWO EXPERTISE POINTS] */}
                <p>1. [Final Expertise Point Placeholder 1]</p>
                <p>2. [Final Expertise Point Placeholder 2]</p>
              </div>
            </div>
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
