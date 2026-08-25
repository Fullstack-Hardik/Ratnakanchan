'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/ratnakanchan',
  facebook: 'https://www.facebook.com/ratnakanchan',
  whatsapp: 'https://wa.me/919876543210',
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-1 bg-white/90 shadow-sm backdrop-blur-xl border-b border-gray-200' : 'py-2 bg-white/60 backdrop-blur-md border-b border-transparent'}`}>
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center relative">
        
        {/* LOGO - Top Center */}
        <div className="flex justify-center items-center lg:mb-2">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Ratnakanchan Creations Logo" className="h-10 sm:h-14 w-auto object-contain transition-opacity hover:opacity-90 mix-blend-multiply" />
          </Link>
        </div>

        {/* DESKTOP LINKS & SOCIAL - Bottom Center */}
        <div className="hidden lg:flex items-center justify-center w-full relative">
          
          {/* Nav Links */}
          <div className="flex items-center justify-center space-x-6 lg:space-x-8 text-[11px] font-medium tracking-[0.15em] uppercase text-black/60">
            <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
            
            <div className="relative group flex items-center">
              <button className="hover:text-[var(--color-gold)] transition-colors uppercase tracking-[0.15em] py-1">
                Services
              </button>
              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-white/95 backdrop-blur-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-4 px-3 border border-gray-100 shadow-2xl">
              <Link href="/jwellery-retouching" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">Jewelry Retouching</Link>
              <Link href="/cad-designing" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">CAD Designing</Link>
              <Link href="/cad-to-render-image" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">CAD to Render Image</Link>
              <Link href="/360-animation-rendering" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">360 Animation Rendering</Link>
              <Link href="/jwellery-retouching-with-model" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">Jewelry Retouching with Model</Link>
              <Link href="/ai-jwellery-retouching" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">AI Jewelry Retouching</Link>
            </div>
          </div>
          
            <Link href="/gallery" className="hover:text-[var(--color-gold)] transition-colors">Gallery</Link>
            <Link href="/blog" className="hover:text-[var(--color-gold)] transition-colors">Blog</Link>
            <Link href="/pricing" className="hover:text-[var(--color-gold)] transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-[var(--color-gold)] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors">Contact</Link>
          </div>

          {/* Social Links (Absolute right aligned with nav links) */}
          <div className="absolute right-0 flex items-center gap-4">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-black/50 hover:text-[#E1306C] transition-colors duration-300">
              <FaInstagram size={17} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-black/50 hover:text-[#1877F2] transition-colors duration-300">
              <FaFacebookF size={15} />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-black/50 hover:text-[#25D366] transition-colors duration-300">
              <FaWhatsapp size={17} />
            </a>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE (Absolute Left on Mobile) */}
        <div className="flex lg:hidden absolute top-1/2 -translate-y-1/2 left-6">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-black/80 p-1 -ml-1">
            <Menu size={24} />
          </button>
        </div>

        {/* MOBILE WHATSAPP (Absolute Right on Mobile) */}
        <div className="flex lg:hidden absolute top-1/2 -translate-y-1/2 right-6">
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="text-[#25D366] p-1 -mr-1">
             <FaWhatsapp size={22} />
          </a>
        </div>
      </div>

      {/* MOBILE MENU (Side Drawer) */}
      <div 
        className={`lg:hidden fixed top-0 left-0 w-[80vw] sm:w-[60vw] h-screen bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col border-r border-gray-100 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6 border-b border-gray-100">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-black/50 hover:text-black transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-8 py-8 flex-grow overflow-y-auto">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">Home</Link>
          
          <div className="flex flex-col space-y-4">
            <div className="text-sm uppercase tracking-widest font-medium text-black/40">Services</div>
            <div className="flex flex-col space-y-4 pl-4 border-l border-gray-100">
              <Link href="/jwellery-retouching" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">Jewelry Retouching</Link>
              <Link href="/cad-designing" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">CAD Designing</Link>
              <Link href="/cad-to-render-image" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">CAD to Render Image</Link>
              <Link href="/360-animation-rendering" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">360 Animation Rendering</Link>
              <Link href="/jwellery-retouching-with-model" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">Jewelry Retouching with Model</Link>
              <Link href="/ai-jwellery-retouching" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">AI Jewelry Retouching</Link>
            </div>
          </div>
          
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">Gallery</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">Blog</Link>
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">Pricing</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">About Us</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">Contact</Link>
          
          <div className="border-t border-gray-100 pt-8 mt-auto flex flex-col gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-3 text-xs tracking-widest uppercase text-black/60 hover:text-[var(--color-gold)] transition-colors"><Phone size={16}/> Call Us</a>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-5 pt-2">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-black/40 hover:text-[#E1306C] transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-black/40 hover:text-[#1877F2] transition-colors duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-black/40 hover:text-[#25D366] transition-colors duration-300">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
