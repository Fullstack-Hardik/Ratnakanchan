'use client';
import { motion } from 'framer-motion';
import { GLSLHills } from '@/components/ui/glsl-hills';

const pricingTiers = [
  {
    id: 1,
    name: "Clipping Path",
    price: "$0.5",
    features: ["Image Cutout", "Product Path", "Crop Image"],
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop", // Ring on plain bg
    message: "I am interested in the Clipping Path service starting at $0.5. Please provide more details."
  },
  {
    id: 2,
    name: "E-Commerce Product Retouch",
    price: "$1",
    features: ["Image Cutout", "Crop Image", "Color Correction"],
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b13484-9088-41a1-be0e-aac832f13705_1600w.jpg", // Standard product
    message: "I am interested in the E-Commerce Product Retouch service starting at $1. Please provide more details."
  },
  {
    id: 3,
    name: "Basic Retouching",
    price: "$1.5",
    features: ["Clipping Path", "Crop Image", "Diamond Masking", "Noise & Dust Removal", "Retouching"],
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1270766f-db0e-4d5b-85db-1cfedef9ac56_1600w.jpg", // Retouched ring
    message: "I am interested in the Basic Retouching service starting at $1.5. Please provide more details."
  },
  {
    id: 4,
    name: "High-End Retouching",
    price: "$2.5",
    features: ["Clipping Path", "Crop Image", "Diamond Masking", "Color Correction", "Diamond Facet", "Metal Color Correction", "Natural Shadow"],
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a50b35f0-09bf-4a77-8d53-270981b17e22_1600w.jpg", // High end signet
    message: "I am interested in the High-End Retouching service starting at $2.5. Please provide more details."
  },
  {
    id: 5,
    name: "CAD Design",
    price: "$20",
    features: ["CAD Design", "STL File", "4 Angle Render Images"],
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7ff11b2-928c-4005-bf7d-47d33d2b58d0_1600w.jpg", // CAD wireframe
    message: "I am interested in the CAD Design service starting at $20. Please provide more details."
  },
  {
    id: 6,
    name: "Video Rendering",
    price: "$25",
    features: ["700x700 Size Video", "Optional Custom Size Video", "4 Angle Render Image"],
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fabedb0d-467e-45ed-930f-2a561895a076_1600w.jpg", // 360 Video
    message: "I am interested in the Video Rendering service starting at $25. Please provide more details."
  }
];

export default function PricingPage() {
  return (
    <main className="pt-24 min-h-screen bg-white text-black font-body relative overflow-hidden">
      
      {/* Background Effect */}
      <GLSLHills />

      <section className="py-20 px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex text-xs text-black/60 bg-white border border-gray-200 rounded-full px-4 py-2 items-center gap-2 font-medium tracking-widest uppercase mb-6 shadow-sm"
        >
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"></span>
          Pricing & Bulk
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading mb-6 tracking-tight"
        >
          Retouch/Render in <span className="text-[var(--color-gold)] italic">bulk</span> <br/> and get a great deal.
        </motion.h1>
      </section>

      {/* Pricing Grid */}
      <section className="pb-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-sm overflow-hidden group shadow-xl bg-black"
            >
              {/* Dimmed Background Image */}
              <img 
                src={tier.image} 
                alt={tier.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full min-h-[450px]">
                <div>
                  <h3 className="text-2xl font-heading text-white mb-2">{tier.name}</h3>
                  <div className="text-[var(--color-gold)] font-medium tracking-widest uppercase text-xs mb-1">Starting From</div>
                  <div className="text-4xl font-heading text-white mb-8">{tier.price}</div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                        <svg className="shrink-0 w-4 h-4 text-[var(--color-gold)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Button */}
                <a 
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(tier.message)}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-8 w-full block text-center bg-white text-black font-semibold uppercase tracking-widest text-xs py-4 rounded-sm hover:bg-[var(--color-gold)] transition-colors shadow-md"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}
