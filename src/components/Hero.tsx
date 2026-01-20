// src/components/Hero.tsx - Balanced Layout Approach
"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { HeroProps } from "@/lib/types";

export default function Hero({ data, className = "" }: HeroProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.3,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src={data.backgroundImage || "/images/gabriel-hero-bg.jpg"}
          alt="Gabriel Colmenares - Comediante"
          fill
          className="object-cover object-center stage-spotlight-enhanced"
          style={{ objectPosition: "center center" }}
          sizes="100vw"
          priority
        />

        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
      </div>

      {/* Main content grid */}
      <motion.div
        className="relative z-10 container mx-auto px-6 lg:px-8 min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 min-h-screen items-center py-20">
          {/* Left Column - Brand & Info */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            variants={leftColumnVariants}
          >
            {/* Main Name */}
            <div className="space-y-2">
              <motion.h1
                className="text-white font-bold leading-tight"
                style={{
                  fontSize: "clamp(3rem, 8vw, 5rem)",
                  fontFamily: "Montserrat, sans-serif",
                  letterSpacing: "-0.02em",
                }}
                variants={ctaVariants}
              >
                GABRIEL
              </motion.h1>
              <motion.h1
                className="text-gabriel-blue font-bold leading-tight"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 4rem)",
                  fontFamily: "Montserrat, sans-serif",
                  letterSpacing: "-0.01em",
                }}
                variants={ctaVariants}
              >
                COLMENARES
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              className="text-xl md:text-2xl text-gray-200 font-medium max-w-md"
              variants={ctaVariants}
            >
              {data.subtitle ||
                "Comediante que convierte la vida cotidiana en momentos inolvidables"}
            </motion.p>

            {/* Optional short description */}
            <motion.p
              className="text-lg text-gray-300 max-w-lg leading-relaxed hidden md:block"
              variants={ctaVariants}
            >
              Stand up, Impro, Podcast, sketches, guiones y todo eso con un riñón.
            </motion.p>
          </motion.div>

          {/* Right Column - CTAs */}
          <motion.div
            className="flex flex-col items-center lg:items-end justify-center space-y-6 px-4 lg:px-0"
            variants={rightColumnVariants}
          >
            <div className="space-y-4 w-full max-w-xs sm:max-w-sm">
              {/* Primary CTA - Ver Shows */}
              <motion.button
                onClick={() => scrollToSection(data.primaryCTA.action)}
                className="w-full bg-gabriel-blue border-2 border-gabriel-white text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl font-bold rounded-xl hover:bg-white hover:border-black hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl group flex items-center justify-center gap-2 sm:gap-3"
                variants={ctaVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                VER SHOWS
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary CTA - Contacto */}
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-transparent border-2 border-gabriel-blue text-gabriel-blue px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl font-bold rounded-xl hover:bg-gabriel-white hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg group flex items-center justify-center gap-2 sm:gap-3"
                variants={ctaVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                CONTÁCTAME
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Optional: Social proof or additional info */}
              <motion.div
                className="text-center text-gray-400 text-sm pt-4"
                variants={ctaVariants}
              >
                <p>📍 Disponible para shows en todo Chile</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
