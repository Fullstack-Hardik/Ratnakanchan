"use client";
import Link from 'next/link';
import { FaCcPaypal, FaCcVisa, FaCcMastercard, FaCcAmex, FaCreditCard } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6] text-stone-800 pt-16 pb-12 px-6 border-t border-stone-200">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-10">
        
        {/* Column 1: WHY RATNAKANCHAN.COM */}
        <div className="pr-0 md:pr-8">
          <h4 className="text-[15px] font-bold uppercase mb-6 text-[#1A202C] tracking-wide">WHY RATNAKANCHAN.COM</h4>
          <Link href="/" className="inline-block mb-6">
            <img src="/images/logo.png" alt="Ratnakanchan Creations Logo" className="h-16 w-auto object-contain" />
          </Link>
          <p className="text-[#4A5568] font-normal text-[14px] leading-[1.8]">
            Through innovative thinking which adheres to high standards of quality and excellence we make sure that you enhance your growth potential in the industry. We specialize in digital correction of images. Be it in any form, digitally shot, scanned, or a sketch (pencil design) from the designer's board. Through requisite touch up we help you visualize your wax model in its final form, complete with gold and diamonds set in..
          </p>
        </div>

        {/* Column 2: NAVIGATION & CONTACT DETAILS */}
        <div>
          <h4 className="text-[15px] font-bold uppercase mb-6 text-[#1A202C] tracking-wide">NAVIGATION</h4>
          <div className="text-[13px] text-[#2F80ED] uppercase tracking-wide leading-relaxed mb-10 flex flex-wrap items-center gap-x-2 gap-y-2 font-medium">
            <Link href="/" className="hover:text-[#1A202C]">HOME</Link>
            <span className="text-[#A0AEC0]">|</span>
            <Link href="/about" className="hover:text-[#1A202C]">ABOUT</Link>
            <span className="text-[#A0AEC0]">|</span>
            <Link href="/jwellery-retouching" className="hover:text-[#1A202C]">JEWELRY RETOUCHING</Link>
            <span className="text-[#A0AEC0]">|</span>
            <Link href="/cad-designing" className="hover:text-[#1A202C]">CAD DESIGNING</Link>
            <span className="text-[#A0AEC0]">|</span>
            <Link href="/cad-to-render-image" className="hover:text-[#1A202C]">CAD TO RENDER IMAGE</Link>
            <span className="text-[#A0AEC0]">|</span>
            <Link href="/gallery" className="hover:text-[#1A202C]">GALLERY</Link>
            <span className="text-[#A0AEC0]">|</span>
            <Link href="/contact" className="hover:text-[#1A202C]">CONTACT</Link>
          </div>

          <h4 className="text-[15px] font-bold uppercase mb-6 text-[#1A202C] tracking-wide">CONTACT DETAILS</h4>
          <ul className="space-y-4 text-[14px] text-[#4A5568] font-normal leading-relaxed">
            <li>
              <span className="underline decoration-1 underline-offset-4">ADDRESS :</span><br/>
              Rameshwar Gruh Nirman Society, Sandesh<br/>
              Nagar, Kurla(W), Mumbai - 400 072.
            </li>
            <li>
              <span className="underline decoration-1 underline-offset-4">Mobile :</span> <a href="tel:+919820892246" className="text-[#2F80ED] hover:text-[#1A202C]">+(91) -9820892246</a>
            </li>
            <li>
              <span className="underline decoration-1 underline-offset-4">E-mail :</span>{' '}
              <a href="mailto:info@ratnakanchan.com" className="text-[#2F80ED] hover:text-[#1A202C]">info@ratnakanchan.com</a>,{' '}
              <a href="mailto:ratnakanchan@hotmail.com" className="text-[#2F80ED] hover:text-[#1A202C]">ratnakanchan@hotmail.com</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Payment Options & Get quote */}
        <div className="pl-0 md:pl-8">
          <h4 className="text-[18px] font-semibold mb-6 text-[#1A202C] tracking-wide">Payment Options</h4>
          
          {/* Payment Options Icons */}
          <div className="mb-14 border border-gray-200 rounded-lg p-3 bg-white shadow-sm inline-flex items-center gap-3 w-fit max-w-full flex-wrap">
            <div className="text-[#003087]">
              <FaCcPaypal size={40} />
            </div>
            <div className="text-[#1A1F71]">
              <FaCcVisa size={40} />
            </div>
            <div className="text-[#EB001B]">
              <FaCcMastercard size={40} />
            </div>
            <div className="text-[#006FCF]">
              <FaCreditCard size={36} /> {/* Maestro fallback */}
            </div>
            <div className="text-[#002663]">
              <FaCcAmex size={40} />
            </div>
          </div>

          {/* Pure CSS Get Quote Button */}
          <button 
            onClick={() => window.open('https://wa.me/919820892246?text=I%20would%20like%20to%20get%20a%20quote', '_blank')}
            className="group relative flex items-center h-[70px] bg-gradient-to-b from-[#444] to-[#111] hover:from-[#222] hover:to-[#000] text-white rounded-l-full rounded-r-full pl-10 pr-20 transition-all shadow-xl w-fit cursor-pointer border border-[#333]"
          >
            <span className="text-[28px] font-bold tracking-wide z-10 mr-4 font-sans">Get quote</span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[95px] w-[95px] bg-gradient-to-br from-[#FF2020] to-[#C80000] rounded-full flex items-center justify-center shadow-lg transform translate-x-5 group-hover:scale-105 transition-transform border-[3px] border-[#F3F4F6]">
              <svg className="w-10 h-10 text-white ml-2 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
