'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X, Home, PenTool, Image, FileText, Mail, Info } from 'lucide-react';

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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'h-20 bg-white/90 shadow-sm backdrop-blur-md' : 'h-24 bg-white/70 backdrop-blur-sm'}`}>
      <div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* LOGO - Left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img src="https://ratnakanchan.com/wp-content/uploads/2025/01/cropped-logo-new1123-249x59.png" alt="Ratnakanchan Creations" className="h-10 w-auto" />
          </Link>
        </div>

        {/* DESKTOP LINKS - Middle */}
        <div className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold text-gray-700">
          <Link href="/" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors"><Home size={14} /> Home</Link>
          <Link href="/cad" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors"><PenTool size={14} /> CAD</Link>
          <Link href="/gallery" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors"><Image size={14} /> Gallery</Link>
          <Link href="/blog" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors"><FileText size={14} /> Blog</Link>
          <Link href="/pricing" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors"><FileText size={14} /> Pricing</Link>
          <Link href="/about" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors"><Info size={14} /> About</Link>
          <Link href="/contact" className="flex items-center gap-2 hover:text-[var(--color-gold)] transition-colors"><Mail size={14} /> Contact</Link>
        </div>

        {/* CTA BUTTONS - Right */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:+919876543210" className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors">
            <Phone size={16} />
          </a>
          <a href="https://wa.link/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#20bd5a] transition-colors shadow-sm">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex lg:hidden items-center gap-4">
          <a href="https://wa.link/" className="text-[#25D366]">
             <MessageCircle size={24} />
          </a>
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-black p-1">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Side Drawer) */}
      <div 
        className={`lg:hidden fixed top-0 right-0 w-[80vw] h-screen bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-black p-1 hover:text-[var(--color-gold)] transition-colors">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col space-y-8 px-8 py-4 flex-grow overflow-y-auto">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-base uppercase tracking-widest font-semibold text-gray-800 hover:text-[var(--color-gold)] transition-colors"><Home size={20} className="text-[var(--color-gold)]" /> Home</Link>
          <Link href="/cad" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-base uppercase tracking-widest font-semibold text-gray-800 hover:text-[var(--color-gold)] transition-colors"><PenTool size={20} className="text-[var(--color-gold)]" /> CAD Services</Link>
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-base uppercase tracking-widest font-semibold text-gray-800 hover:text-[var(--color-gold)] transition-colors"><Image size={20} className="text-[var(--color-gold)]" /> Gallery</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-base uppercase tracking-widest font-semibold text-gray-800 hover:text-[var(--color-gold)] transition-colors"><FileText size={20} className="text-[var(--color-gold)]" /> Blog</Link>
          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-base uppercase tracking-widest font-semibold text-gray-800 hover:text-[var(--color-gold)] transition-colors"><FileText size={20} className="text-[var(--color-gold)]" /> Pricing</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-base uppercase tracking-widest font-semibold text-gray-800 hover:text-[var(--color-gold)] transition-colors"><Info size={20} className="text-[var(--color-gold)]" /> About Us</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-base uppercase tracking-widest font-semibold text-gray-800 hover:text-[var(--color-gold)] transition-colors"><Mail size={20} className="text-[var(--color-gold)]" /> Contact</Link>
          
          <div className="border-t border-gray-100 pt-8 mt-4 flex flex-col gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-4 text-base font-semibold text-gray-700 hover:text-black transition-colors"><Phone size={20} className="text-gray-500" /> +91 98765 43210</a>
            <a href="https://wa.link/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-base font-semibold text-[#25D366] hover:text-[#20bd5a] transition-colors"><MessageCircle size={20} /> Chat on WhatsApp</a>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
