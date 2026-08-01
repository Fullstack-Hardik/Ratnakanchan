"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  const container = useRef(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const imageElements = imageRefs.current;
      const totalCards = imageElements.length;

      if (!imageElements[0]) return;

      gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        const position = i;
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.7,
            rotation: 5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextImage,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className={cn("relative h-full w-full", className)} ref={container}>
      <div className="sticky-cards relative flex h-[100vh] w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[80vh] w-full max-w-md overflow-hidden rounded-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl shadow-2xl",
            containerClassName,
          )}
        >
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt={card.alt || ""}
              className={cn(
                "absolute h-full w-full object-cover",
                imageClassName,
              )}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skiper30 = ({ images }: { images: string[] }) => {
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
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[0]]} y={y2} />
        <Column images={[images[1], images[2], images[3]]} y={y3} />
        <Column images={[images[4], images[0], images[1]]} y={y4} />
      </div>
    </div>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden rounded-sm">
          <img
            src={src}
            alt="gallery image"
            className="pointer-events-none object-cover w-full h-full"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b13484-9088-41a1-be0e-aac832f13705_1600w.jpg", alt: "Luxury Ring" },
    { id: 2, image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1270766f-db0e-4d5b-85db-1cfedef9ac56_1600w.jpg", alt: "Jewelry Retouching" },
    { id: 3, image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7ff11b2-928c-4005-bf7d-47d33d2b58d0_1600w.jpg", alt: "CAD Design" },
    { id: 4, image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a50b35f0-09bf-4a77-8d53-270981b17e22_1600w.jpg", alt: "Signet Ring" },
    { id: 5, image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7998a59f-416e-4cb4-8999-bdf11936bc71_1600w.jpg", alt: "Necklace 360" },
  ];

  const rawImages = galleryImages.map(g => g.image);

  return (
    <ReactLenis root>
      <main className="bg-[#111] text-white">
        <section className="pt-32 pb-16 px-6 text-center bg-[#111]">
          <h1 className="text-5xl md:text-7xl font-heading mb-6 tracking-tight">
            Our <span className="text-[var(--color-gold)] italic">Gallery</span>
          </h1>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Scroll down to explore our precision-crafted jewelry renders, retouching excellence, and meticulous 3D models.
          </p>
        </section>

        {/* Skiper30 Parallax Component */}
        <Skiper30 images={rawImages} />
        
        {/* Sticky Cards Animation */}
        <div className="w-full bg-[#111]">
          <StickyCard002 cards={galleryImages} />
        </div>

        <section className="py-24 text-center bg-[#111]">
          <h2 className="text-3xl font-heading mb-6">Ready for pixel-perfect clarity?</h2>
          <a href="https://wa.link/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b-2 border-white pb-1 uppercase tracking-widest text-sm font-semibold hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors">
            Request a Free Sample
          </a>
        </section>
      </main>
    </ReactLenis>
  );
}
