'use client';
import { motion } from 'framer-motion';

export default function CadPage() {
  return (
    <main className="pt-24 min-h-screen bg-white text-black">
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading mb-6"
          >
            Jewelry <span className="text-[var(--color-gold)] italic">CAD</span> Designing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-light"
          >
            We take your hand-drawn sketches or reference images and transform them into precise 3D CAD models ready for manufacturing or photorealistic rendering.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-gray-100 rounded-sm overflow-hidden"
          >
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7ff11b2-928c-4005-bf7d-47d33d2b58d0_1600w.jpg" alt="CAD Render" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading mb-6">Precision at Every Angle</h2>
            <p className="text-gray-600 font-light mb-6">
              Our 3D designers use industry-standard software to create wax-ready STL files. We ensure prongs, metal thickness, and stone settings are flawlessly engineered for your manufacturer. 
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm uppercase tracking-widest font-semibold"><span className="w-2 h-2 rounded-full bg-[var(--color-gold)]"></span> Ready for 3D Printing</li>
              <li className="flex items-center gap-3 text-sm uppercase tracking-widest font-semibold"><span className="w-2 h-2 rounded-full bg-[var(--color-gold)]"></span> Photorealistic Rendering</li>
              <li className="flex items-center gap-3 text-sm uppercase tracking-widest font-semibold"><span className="w-2 h-2 rounded-full bg-[var(--color-gold)]"></span> 360° Video Animations</li>
            </ul>
            <a href="https://wa.link/" className="inline-flex items-center gap-2 border-b-2 border-black pb-1 uppercase tracking-widest text-sm font-semibold hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors">
              Get a Quote
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
