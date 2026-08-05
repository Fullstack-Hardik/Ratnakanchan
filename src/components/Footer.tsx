import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 px-6 overflow-hidden relative border-t border-white/5">
      
      {/* Subtle Premium Background Effect */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-gold)] rounded-full blur-[150px] opacity-[0.03] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 relative z-10">
        
        <div className="lg:col-span-5 mb-6 pr-8">
          <Link href="/" className="inline-block mb-8">
            <img src="/images/logo.png" alt="Ratnakanchan Creations Logo" className="h-14 sm:h-20 w-auto object-contain brightness-0 invert opacity-90" />
          </Link>
          <p className="text-gray-400 font-light text-base max-w-sm leading-relaxed mb-8">
            Elevating jewelry imagery through pixel-perfect precision, secure data handling, and overnight turnarounds. Setting the global standard since 2007.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.84 6.366L.004 24l5.772-1.513A11.96 11.96 0 0 0 11.944 24c6.627 0 12-5.373 12-12S18.571 0 11.944 0Zm6.892 17.15c-.274.773-1.59 1.442-2.193 1.503-.566.057-1.3-.122-4.041-1.258-3.486-1.446-5.748-5-5.922-5.234-.173-.234-1.41-1.878-1.41-3.585 0-1.706.885-2.54 1.206-2.883.321-.343.696-.429.927-.429.231 0 .462.004.654.013.202.01.474-.078.741.564.281.674.962 2.348 1.047 2.52.085.172.143.373.028.604-.115.231-.173.374-.346.575-.173.201-.363.435-.519.575-.172.158-.358.33-.153.684.205.354.915 1.512 1.96 2.443 1.35 1.202 2.482 1.572 2.844 1.73.363.158.575.143.791-.101.216-.244.933-1.085 1.185-1.458.252-.374.503-.316.835-.187.332.129 2.1 1.006 2.463 1.185.362.179.603.273.69.429.086.158.086.918-.188 1.691Z"/></svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-white/50">Services</h4>
          <ul className="space-y-4 text-sm text-gray-300 font-light">
            <li><Link href="/" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">Jewelry Retouching</Link></li>
            <li><Link href="/cad" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">CAD Designing</Link></li>
            <li><Link href="/" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">360° Animations</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-white/50">Company</h4>
          <ul className="space-y-4 text-sm text-gray-300 font-light">
            <li><Link href="/about" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">Gallery</Link></li>
            <li><Link href="/pricing" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-gold)] hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-white/50">Contact</h4>
          <ul className="space-y-5 text-sm text-gray-300 font-light leading-relaxed">
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

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-medium uppercase tracking-[0.1em] relative z-10">
        <p>&copy; {new Date().getFullYear()} Ratnakanchan Creations. All rights reserved.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <Link href="#" className="hover:text-[var(--color-gold)] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[var(--color-gold)] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
