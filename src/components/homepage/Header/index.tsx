"use client";

import React, { useState, useEffect } from "react";
import ProductImage from "@/components/common/ProductImage";
import { motion, AnimatePresence } from "framer-motion";
import { Banner } from "@/types/banner.types";

interface HeroBannerProps {
  banners?: Banner[];
}

export default function HeroBanner({ banners = [] }: HeroBannerProps) {
  // Filter active banners
  const activeBanners = banners.filter((b) => b.isActive);

  const listToRender = activeBanners;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (listToRender.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % listToRender.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(timer);
  }, [listToRender.length]);

  // Nothing to show until a banner is uploaded in the admin panel.
  if (listToRender.length === 0) return null;

  // Clamp: the list can shrink between renders (banner deleted / deactivated).
  const current = listToRender[currentIndex] ?? listToRender[0];

  return (
    <section className="w-full bg-[#070707] relative" aria-label="Hero banner">
      <AnimatePresence mode="wait">
        <motion.div
          key={current._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full"
        >
          {/* Full-bleed, uncropped: width 100%, height auto, natural aspect ratio.
              The container height follows the image, so nothing is trimmed and
              there are no letterbox bars on any screen size. */}

          {/* Desktop Banner: screens >= 768px */}
          <ProductImage
            src={current.desktopImage}
            alt="City Palace Residency"
            width={1920}
            height={800}
            sizes="100vw"
            className="hidden md:block w-full h-auto"
            priority
          />

          {/* Mobile Banner: screens < 768px.
              Falls back to the desktop image: uploading only the desktop asset
              is an easy miss in the admin panel, and a cropped-wide banner
              still beats a broken image on phones. */}
          <ProductImage
            src={current.mobileImage || current.desktopImage}
            alt="City Palace Residency Mobile"
            width={1080}
            height={810}
            sizes="100vw"
            className="block md:hidden w-full h-auto"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Carousel indicators/dots */}
      {listToRender.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {listToRender.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-[#D31018] w-6" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}