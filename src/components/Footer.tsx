import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6 overflow-hidden relative">
      
      {/* 3D Diamond SVG Background Effect */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L90 30L50 100L10 30L50 0Z" fill="url(#paint0_linear)"/>
          <path d="M50 0L90 30L50 40L10 30L50 0Z" fill="url(#paint1_linear)"/>
          <path d="M10 30L50 40L50 100L10 30Z" fill="url(#paint2_linear)"/>
          <path d="M90 30L50 40L50 100L90 30Z" fill="url(#paint3_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D4AF37"/>
              <stop offset="1" stopColor="#D4AF37" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="50" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.8"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="30" y1="30" x2="30" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF2B2" stopOpacity="0.5"/>
              <stop offset="1" stopColor="#FFF2B2" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="70" y1="30" x2="70" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#AA8529" stopOpacity="0.6"/>
              <stop offset="1" stopColor="#AA8529" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 relative z-10">
        
        <div className="lg:col-span-1">
          <div className="text-2xl font-heading font-bold tracking-wider leading-none mb-6">
            RATNA<span className="text-[var(--color-gold)]">KANCHAN</span>
            <div className="text-[10px] tracking-[0.3em] font-body text-gray-400 uppercase mt-2">Creations</div>
          </div>
          <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
            Elevating jewelry imagery through pixel-perfect precision, secure data handling, and overnight turnarounds.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-white">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li><Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Jewelry Retouching</Link></li>
            <li><Link href="/cad" className="hover:text-[var(--color-gold)] transition-colors">CAD Designing</Link></li>
            <li><Link href="/" className="hover:text-[var(--color-gold)] transition-colors">360° Animations</Link></li>
            <li><Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Web Development</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-white">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li><Link href="/about" className="hover:text-[var(--color-gold)] transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-[var(--color-gold)] transition-colors">Gallery</Link></li>
            <li><Link href="/pricing" className="hover:text-[var(--color-gold)] transition-colors">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-white">Contact</h4>
          <address className="not-italic text-sm text-gray-400 font-light leading-relaxed space-y-4">
            <p>
              Rameshwar Gruh Nirman Society, Sandesh Nagar,<br/>
              Kurla (W), Mumbai – 400072
            </p>
            <p>
              <a href="mailto:info@ratnakanchan.com" className="hover:text-[var(--color-gold)] transition-colors">info@ratnakanchan.com</a><br/>
              <a href="tel:+919876543210" className="hover:text-[var(--color-gold)] transition-colors">+91 98765 43210</a>
            </p>
          </address>
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light uppercase tracking-widest relative z-10">
        <p>&copy; {new Date().getFullYear()} Ratnakanchan Creations. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
