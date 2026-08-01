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
      <section className="relative py-32 px-6 flex items-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da81b8a5-ec37-4de5-86fb-e9896c5bb37b_1600w.jpg" alt="Workspace" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F2] via-white/80 to-[#F8F6F2]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <h1 className="text-6xl md:text-8xl font-heading mb-6 tracking-tight">
              Elevating <span className="text-[var(--color-gold)] italic">Jewelry</span> Imagery
            </h1>
          </motion.div>
          
          <motion.div
            variants={fadeUpBlur}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed mt-10 space-y-6"
          >
            <p>
              Ratnakanchan Creations is one of the most professional and trustworthy jewelry photo editing service providers in Mumbai, India. Established in 2007, we have built a strong customer base across the globe, including the USA, Australia, UK, Dubai, and other parts of the world, with thousands of satisfied clients.
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
                We specialize in the digital correction of diamond jewelry images/photo editing, regardless of their origin: digitally shot (photoshoots), scanned images, CAD-rendered images, or even sketches from a designer’s board.
              </p>
              <p>
                The digital world, particularly e-commerce platforms, demands exceptional jewelry photo retouching, CAD designing, jewelry rendering images (rings, earrings, pendants, bracelets, necklaces), 360-degree turntable animations, jewelry wear model photo retouching, and e-commerce photo editing.
              </p>
              <p>
                Our team of expert retouchers and CAD designers fulfills all your needs. With over 17 years of experience, we possess in-depth knowledge of jewelry gold colors, diamonds, and designs.
              </p>
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
            Unmatched Technical Knowledge
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpBlur}
            className="text-gray-500 font-light text-lg"
          >
            We don't just edit images; we understand jewelry engineering.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          
          {[
            { title: "Types of Claw/Prong Settings", desc: "Precise visualization of V-prongs, shared prongs, and bezel settings." },
            { title: "Types of Earring Posts", desc: "Accurate modeling of push-backs, screw-backs, and omega clips." },
            { title: "Diamond Types & Settings", desc: "Mastery over pave, channel, flush, and tension diamond settings." },
            { title: "Gold Color Accuracy", desc: "Perfectly calibrated 10k, 14k, and 18k White, Rose, and Yellow Gold." }
            ].map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: idx % 2 === 0 ? -40 : 40, filter: 'blur(10px)' },
                visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, delay: idx * 0.1 } }
              }}
              className="bg-[#F8F6F2] border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-2xl font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
              <p className="text-gray-600 font-light">{item.desc}</p>
            </motion.div>
          ))}
          
        </div>
      </section>

    </main>
  );
}
