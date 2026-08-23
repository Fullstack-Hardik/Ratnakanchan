import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-heading' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "Ratnakanchan Creations | Luxury Jewelry Photo Retouching & CAD Design",
  description: "Global B2B High-end Jewelry Photo Retouching, CAD Designing, and 360° Animation Services based in Mumbai, India. Established in 2007.",
  keywords: "Jewelry Retouching, CAD Designing, 360 Animation, E-commerce Jewelry, High-end Retouching, Ratnakanchan Creations",
  openGraph: {
    title: "Ratnakanchan Creations | Luxury Jewelry Photo Retouching",
    description: "Expert jewelry photo editing, CAD modeling, and 360 rendering for global brands.",
    url: "https://ratnakanchan.com",
    siteName: "Ratnakanchan Creations",
    locale: "en_US",
    type: "website",
  }
};

import Strands from "@/components/ui/Strands";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${outfit.variable} font-body bg-white text-black selection:bg-[var(--color-gold)] selection:text-white`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <div style={{ width: '100%', height: '300px', position: 'relative', overflow: 'hidden' }}>
            <Strands
              colors={["#d4af37", "#111111", "#a88e2c"]}
              count={3}
              speed={0.5}
              amplitude={1}
              waviness={1}
              thickness={0.7}
              glow={2.6}
              taper={3}
              spread={1}
              intensity={0.6}
              saturation={1.5}
              opacity={1}
              scale={1.5}
              glass={false}
              refraction={1}
              dispersion={1}
              glassSize={1}
            />
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
