import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-heading' });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body bg-white text-black selection:bg-[var(--color-gold)] selection:text-white`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
