"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  MotionValue,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import ReactLenis from "lenis/react";
import { X } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
}

/* ─────────────────────────────────────────────────────
   Lightbox — Premium Apple‑like Image Viewer
   ───────────────────────────────────────────────────── */
const Lightbox = ({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  /* Lock body scroll */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  /* ESC to close */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Gallery image viewer"}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        ref={closeBtnRef}
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-5 right-5 z-[110] w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-black"
      >
        <X size={20} />
      </button>

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[105] max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
        draggable={false}
      />
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────
   Clean Static Image Grid Gallery
   ───────────────────────────────────────────────────── */
const SimpleGallery = ({
  cards,
  onImageClick,
}: {
  cards: CardData[];
  onImageClick: (src: string, alt: string) => void;
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={`${card.id}-${i}`}
            className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => onImageClick(card.image, card.alt || "Gallery image")}
          >
            <Image
              src={card.image}
              alt={card.alt || "Gallery image"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────
   Gallery Page
   ───────────────────────────────────────────────────── */
export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const handleImageClick = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const handleClose = useCallback(() => {
    setLightbox(null);
  }, []);

  const galleryImages: CardData[] = [
    { id: 1, image: "/images/gallery_new/24-2.webp", alt: "Diamond Ring Works" },
    { id: 2, image: "/images/gallery_new/25.webp", alt: "Gold Diamond Ring" },
    { id: 3, image: "/images/gallery_new/01.jpg", alt: "Jewelry Render" },
    { id: 4, image: "/images/gallery_new/dsc-9239-r.jpg", alt: "Necklace Piece" },
    { id: 5, image: "/images/gallery_new/retouch.jpg", alt: "Retouch Example" },
    { id: 6, image: "/images/gallery/lotus-halo-ov-02.jpg", alt: "Lotus Halo OV" },
    { id: 9, image: "/images/gallery/lotus-halo-ov-02yg.jpg", alt: "Lotus Halo OV Yellow Gold" },
  ];

  const beforeAfterPairs = [
    { before: "/images/retouching/ring-4-before.jpg", after: "/images/retouching/ring-4-after.jpg", alt: "High-End Retouching" },
    { before: "/images/retouching/lifestyle-before.jpg", after: "/images/retouching/lifestyle-after.jpg", alt: "Lifestyle Retouching" },
    { before: "/images/retouching/ring-1-before.jpg", after: "/images/retouching/ring-1-after.jpg", alt: "Ring Retouching" },
    { before: "/images/retouching/front-banner-before.jpg", after: "/images/retouching/front-banner-after.jpg", alt: "Banner Retouching" }
  ];

  return (
    <ReactLenis root>
      <main className="bg-[#111] text-white">
        <section className="pt-32 pb-16 px-6 text-center bg-[#111]">
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-6 tracking-tight">
            Our{" "}
            <span className="text-[var(--color-gold)] italic">Gallery</span>
          </h1>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Scroll down to explore our precision-crafted jewelry renders,
            retouching excellence, and meticulous 3D models.
          </p>
        </section>

        {/* Before / After Section */}
        <section className="py-16 bg-white px-6">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading text-black mb-4 uppercase tracking-wider">Before & After</h2>
            <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto"></div>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the remarkable difference our professional retouching brings to raw jewelry photography.
              Drag the slider to see the transformation.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {beforeAfterPairs.map((pair, idx) => (
              <div key={idx} className="w-full aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                <BeforeAfterSlider beforeImage={pair.before} afterImage={pair.after} alt={pair.alt} />
              </div>
            ))}
          </div>
        </section>

        {/* Our Works Section (Images) */}
        <section className="py-16 bg-[#111]">
          <div className="max-w-7xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-5xl font-heading text-white mb-4 uppercase tracking-wider">Image Gallery</h2>
            <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto mb-10"></div>
          </div>
          {/* Simple Clean Static Grid */}
          <SimpleGallery
            cards={[...galleryImages, { id: 7, image: "/images/gallery/lifestyle-image.jpg", alt: "Lifestyle Jewelry" }]}
            onImageClick={handleImageClick}
          />
        </section>

        {/* Video Gallery Section */}
        <section className="py-16 bg-white px-6">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading text-black mb-4 uppercase tracking-wider">Video Portfolio</h2>
            <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto"></div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/assets/videos/gallery/01sample.mp4",
              "/assets/videos/gallery/1.mp4",
              "/assets/videos/gallery/oval-center-ring.mp4",
              "/assets/videos/gallery/pear-yg.mp4",
              "/assets/videos/gallery/penyg.mp4",
              "/assets/videos/gallery/vid-20190204.mp4"
            ].map((videoSrc, idx) => (
              <div key={idx} className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 text-center bg-[#111]">
          <h2 className="text-3xl font-heading text-white mb-6">
            Ready for pixel-perfect clarity?
          </h2>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-b-2 border-white pb-1 uppercase tracking-widest text-sm font-semibold text-white hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors"
          >
            Request a Free Sample
          </a>
        </section>
      </main>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            src={lightbox.src}
            alt={lightbox.alt}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </ReactLenis>
  );
}
