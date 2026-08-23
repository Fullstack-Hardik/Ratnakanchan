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
   Desktop: Skiper30 Parallax Gallery (4‑column)
   ───────────────────────────────────────────────────── */
const Skiper30 = ({
  images,
  onImageClick,
}: {
  images: string[];
  onImageClick: (src: string, alt: string) => void;
}) => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-full bg-[#111] text-white">
      <div
        ref={gallery}
        className="relative box-border flex h-[150vh] gap-[2vw] overflow-hidden bg-[#0A0A0A] p-[2vw]"
      >
        <Column
          images={[images[0], images[1], images[2]]}
          y={y}
          onImageClick={onImageClick}
        />
        <Column
          images={[images[3], images[4], images[0]]}
          y={y2}
          onImageClick={onImageClick}
        />
        <Column
          images={[images[1], images[2], images[3]]}
          y={y3}
          onImageClick={onImageClick}
        />
        <Column
          images={[images[4], images[0], images[1]]}
          y={y4}
          onImageClick={onImageClick}
        />
      </div>
    </div>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  onImageClick: (src: string, alt: string) => void;
};

const Column = ({ images, y, onImageClick }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative h-full w-full overflow-hidden rounded-sm cursor-pointer group"
          onClick={() => onImageClick(src, "Gallery image")}
        >
          <Image
            src={src}
            alt="Gallery image"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
        </div>
      ))}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────
   Mobile: 2‑Column Grid with Scroll Animations
   ───────────────────────────────────────────────────── */
const MobileGalleryItem = ({
  src,
  alt,
  index,
  onImageClick,
}: {
  src: string;
  alt: string;
  index: number;
  onImageClick: (src: string, alt: string) => void;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 30, scale: 0.96 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: (index % 2) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-stone-100 cursor-pointer group"
      onClick={() => onImageClick(src, alt)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 100vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

const MobileGallery = ({
  cards,
  onImageClick,
}: {
  cards: CardData[];
  onImageClick: (src: string, alt: string) => void;
}) => {
  /* Double up the images to fill the grid nicely */
  const allImages = [...cards, ...cards];

  return (
    <div className="w-full bg-[#111] px-3 py-8">
      <div className="grid grid-cols-2 gap-3">
        {allImages.map((card, i) => (
          <MobileGalleryItem
            key={`${card.id}-${i}`}
            src={card.image}
            alt={card.alt || "Gallery image"}
            index={i}
            onImageClick={onImageClick}
          />
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────
   Responsive Wrapper — picks desktop vs. mobile
   ───────────────────────────────────────────────────── */
const ResponsiveGallery = ({
  cards,
  onImageClick,
}: {
  cards: CardData[];
  onImageClick: (src: string, alt: string) => void;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    setMounted(true);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!mounted) return null;

  const rawImages = cards.map((c) => c.image);

  if (isMobile) {
    return <MobileGallery cards={cards} onImageClick={onImageClick} />;
  }

  return <Skiper30 images={rawImages} onImageClick={onImageClick} />;
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
    { id: 1, image: "/images/gallery/new_1.jpg", alt: "Diamond Ring in Box" },
    { id: 2, image: "/images/gallery/new_2.jpg", alt: "Gold Diamond Ring" },
    { id: 3, image: "/images/gallery/new_3.jpg", alt: "Model wearing Diamond Ring" },
    { id: 4, image: "/images/gallery/new_4.jpg", alt: "Hand with Diamond Ring" },
    { id: 5, image: "/images/uploads/upload_1.png", alt: "Diamond Stud Earrings Front" },
    { id: 6, image: "/images/uploads/upload_2.png", alt: "Diamond Stud Earrings Side" },
    { id: 7, image: "/images/uploads/upload_3.jpg", alt: "Multiple Ring Views" },
    { id: 9, image: "/images/uploads/upload_5.png", alt: "Gold Diamond Rings" },
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

        {/* Responsive Gallery — Desktop: Skiper30 parallax, Mobile: 2‑col grid */}
        <ResponsiveGallery
          cards={galleryImages}
          onImageClick={handleImageClick}
        />

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
