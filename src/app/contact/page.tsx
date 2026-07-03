'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiry: 'General Inquiry',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, inquiry, details } = formData;
    const message = `Hi Ratnakanchan Creations,%0A%0AI am ${firstName} ${lastName}.%0A%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Inquiry:* ${inquiry}%0A%0A*Details:*%0A${details}`;
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <main className="pt-24 min-h-screen bg-white text-black font-body">
      
      {/* Header */}
      <section className="py-16 px-6 bg-[#0A0A0A] text-white text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading mb-4"
        >
          Let's <span className="text-[var(--color-gold)] italic">Connect</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-400 font-light max-w-xl mx-auto"
        >
          Whether you need high-volume retouching or bespoke 360° renders, our team in Mumbai is ready to assist.
        </motion.p>
      </section>

      {/* Content & Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-heading mb-6 text-black">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed font-light mb-8 text-lg">
              Reach out to us for project inquiries, pricing quotes, or sample requests. We aim to respond within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[var(--color-gold)] shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm text-black mb-1">Headquarters</h4>
                  <p className="text-gray-500 font-light text-sm">Rameshwar Gruh Nirman Society, Sandesh Nagar,<br/>Kurla (W), Mumbai – 400072, India</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[var(--color-gold)] shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm text-black mb-1">Phone</h4>
                  <p className="text-gray-500 font-light text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[var(--color-gold)] shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-sm text-black mb-1">Working Hours</h4>
                  <p className="text-gray-500 font-light text-sm">Mon - Sat: 9:00 AM - 7:00 PM (IST)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map iframe */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-full min-h-[400px] bg-gray-100 rounded-sm overflow-hidden shadow-xl border border-gray-200 relative group"
          >
            {/* Minimal stylized iframe for Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.835150937175!2d72.880467!3d19.070966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c897f262bba3%3A0x6b19dc18c1569429!2sKurla%20West%2C%20Kurla%2C%20Mumbai%2C%20Maharashtra%20400070!5e0!3m2!1sen!2sin!4v1717240000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 group-hover:filter-none transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 bg-[#F8F6F2] border-t border-gray-200 relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-gold)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-gold)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 text-black">Start a Project</h2>
            <p className="text-gray-500 font-light text-lg">Leave your details and our team will get back to you within 24 hours.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">First Name</label>
                  <input required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-black focus:outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all shadow-sm" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Last Name</label>
                  <input required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} type="text" className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-black focus:outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all shadow-sm" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Email Address</label>
                  <input required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-black focus:outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all shadow-sm" placeholder="jane@brand.com" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Phone Number</label>
                  <input required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-black focus:outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all shadow-sm" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">How can we help?</label>
                <select value={formData.inquiry} onChange={(e) => setFormData({...formData, inquiry: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-black focus:outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all shadow-sm appearance-none">
                  <option>Jewelry Retouching (High Volume)</option>
                  <option>CAD Modeling & Renders</option>
                  <option>360° Video Animation</option>
                  <option>Website Design</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Project Details</label>
                <textarea required value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-3 text-black focus:outline-none focus:border-[var(--color-gold)] focus:bg-white transition-all shadow-sm resize-none" placeholder="Tell us about your volume, timelines, or specific design requirements..."></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-black text-white font-semibold uppercase tracking-widest text-sm py-4 rounded-sm hover:bg-[var(--color-gold)] transition-colors shadow-md">
                  Send Message via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
