'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'h-12 bg-white/80 shadow-sm backdrop-blur-xl border-b border-gray-200' : 'h-14 bg-white/30 backdrop-blur-md border-b border-transparent'}`}>
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* LOGO - Left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img src="https://ratnakanchan.com/wp-content/uploads/2025/01/cropped-logo-new1123-249x59.png" alt="Ratnakanchan Creations" className="h-5 sm:h-6 w-auto opacity-90 transition-opacity hover:opacity-100" />
          </Link>
        </div>

        {/* DESKTOP LINKS - Middle (Apple-style minimal) */}
        <div className="hidden lg:flex items-center space-x-10 text-[11px] font-medium tracking-[0.15em] uppercase text-black/60">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          
          <div className="relative group h-full flex items-center">
            <button className="hover:text-black transition-colors uppercase tracking-[0.15em]">
              Services
            </button>
            <div className="absolute top-[120%] left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white/95 backdrop-blur-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 flex flex-col py-4 px-3 border border-gray-100 shadow-2xl">
              <Link href="/jewelry-retouching" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">Jewelry Retouching</Link>
              <Link href="/cad-designing-rendering" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">CAD Designing & Rendering</Link>
              <Link href="/360-animation-rendering" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">360° Animation Rendering</Link>
              <Link href="/marketing-printing-services" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">Marketing & Printing Services</Link>
              <Link href="/website-designing" className="px-4 py-2.5 hover:bg-gray-50 rounded-md hover:text-[var(--color-gold)] transition-colors text-xs tracking-wide text-black/80">Website Designing</Link>
            </div>
          </div>
          
          <Link href="/gallery" className="hover:text-black transition-colors">Gallery</Link>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <Link href="/pricing" className="hover:text-black transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        </div>

        {/* CTA BUTTONS - Right */}
        <div className="hidden lg:flex items-center space-x-5">
          <a href="tel:+919876543210" className="text-black/60 hover:text-[var(--color-gold)] transition-colors">
            <Phone size={16} strokeWidth={2} />
          </a>
          <a href="https://wa.link/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-[#25D366] hover:text-[#20bd5a] transition-colors">
            <MessageCircle size={16} strokeWidth={2.5} /> WhatsApp
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex lg:hidden items-center gap-4">
          <a href="https://wa.link/" className="text-[#25D366]">
             <MessageCircle size={20} strokeWidth={2.5} />
          </a>
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-black/80 p-1">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Side Drawer) */}
      <div 
        className={`lg:hidden fixed top-0 right-0 w-[80vw] sm:w-[60vw] h-screen bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col border-l border-gray-100 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
              <Link href="/jewelry-retouching" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">Jewelry Retouching</Link>
              <Link href="/cad-designing-rendering" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">CAD & Rendering</Link>
              <Link href="/360-animation-rendering" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">360° Animation</Link>
              <Link href="/marketing-printing-services" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">Marketing</Link>
              <Link href="/website-designing" onClick={() => setIsMobileMenuOpen(false)} className="text-xs tracking-widest uppercase font-medium text-black/60 hover:text-[var(--color-gold)] transition-colors">Website Design</Link>
            </div>
          </div>
          
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">Gallery</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">Blog</Link>
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">Pricing</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">About Us</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium text-black/70 hover:text-[var(--color-gold)] transition-colors">Contact</Link>
          
          <div className="border-t border-gray-100 pt-8 mt-auto flex flex-col gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-3 text-xs tracking-widest uppercase text-black/60 hover:text-[var(--color-gold)] transition-colors"><Phone size={16}/> Call Us</a>
            <a href="https://wa.link/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#25D366] hover:text-[#20bd5a] transition-colors"><MessageCircle size={16}/> WhatsApp Chat</a>
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
