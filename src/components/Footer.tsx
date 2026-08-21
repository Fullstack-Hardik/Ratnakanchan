import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/ratnakanchan',
  facebook: 'https://www.facebook.com/ratnakanchan',
  whatsapp: 'https://wa.me/919876543210',
};

export default function Footer() {
  return (
    <footer className="bg-white text-stone-800 pt-24 pb-12 px-6 overflow-hidden relative border-t border-stone-200">
      
      {/* Top Accent Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-40"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 relative z-10">
        
        <div className="lg:col-span-5 mb-6 pr-8">
          <Link href="/" className="inline-block mb-8">
            <img src="/images/logo.png" alt="Ratnakanchan Creations Logo" className="h-14 sm:h-20 w-auto object-contain opacity-90" />
          </Link>
          <p className="text-stone-500 font-light text-base max-w-sm leading-relaxed mb-8">
            Elevating jewelry imagery through pixel-perfect precision, secure data handling, and overnight turnarounds. Setting the global standard since 2007.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow us on Instagram"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-stone-200 text-stone-400 hover:border-[var(--color-gold)] hover:text-[#E1306C] hover:shadow-sm transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow us on Facebook"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-stone-200 text-stone-400 hover:border-[var(--color-gold)] hover:text-[#1877F2] hover:shadow-sm transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-stone-200 text-stone-400 hover:border-[var(--color-gold)] hover:text-[#25D366] hover:shadow-sm transition-all duration-300"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-stone-400">Services</h4>
          <ul className="space-y-4 text-sm text-stone-600 font-light">
            <li><Link href="/jewelry-retouching" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">Jewelry Retouching</Link></li>
            <li><Link href="/cad-designing-rendering" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">CAD Designing</Link></li>
            <li><Link href="/360-animation-rendering" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">360° Animations</Link></li>
            <li><Link href="/cad-model-animations" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">CAD Model Animations</Link></li>
            <li><Link href="/cad-model-rendering" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">CAD Model Rendering</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-stone-400">Company</h4>
          <ul className="space-y-4 text-sm text-stone-600 font-light">
            <li><Link href="/about" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">Gallery</Link></li>
            <li><Link href="/pricing" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-stone-400">Contact</h4>
          <ul className="space-y-5 text-sm text-stone-600 font-light leading-relaxed">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5 opacity-80" />
              <span>Rameshwar Gruh Nirman Society, Sandesh Nagar,<br/>Kurla (W), Mumbai – 400072</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[var(--color-gold)] shrink-0 opacity-80" />
              <a href="mailto:info@ratnakanchan.com" className="hover:text-[var(--color-gold)] transition-colors">info@ratnakanchan.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[var(--color-gold)] shrink-0 opacity-80" />
              <a href="tel:+919876543210" className="hover:text-[var(--color-gold)] transition-colors">+91 98765 43210</a>
            </li>
          </ul>
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 font-medium uppercase tracking-[0.1em] relative z-10">
        <p>&copy; {new Date().getFullYear()} Ratnakanchan Creations. All rights reserved.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <Link href="#" className="hover:text-[var(--color-gold)] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[var(--color-gold)] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
