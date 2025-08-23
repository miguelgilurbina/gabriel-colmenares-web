// src/components/Hero.tsx - Gabriel Colmenares (Clean Version)
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Mic, Calendar, MapPin } from "lucide-react";
import { HeroProps } from "@/lib/types";
import Image from "next/image";

export default function Hero({ data, site, className = "" }: HeroProps) {
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
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-background)] via-[var(--color-secondary)] to-white ${className}`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-custom pt-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge Venezuela/Santiago */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] font-medium text-sm border border-[var(--color-primary)]/20">
                <MapPin size={16} className="mr-2" />
                Venezolano en {site.location}
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-4 leading-tight">
                {data.headline}
              </h1>
              <div className="text-xl md:text-2xl text-[var(--color-accent)] font-semibold mb-6">
                {data.subtitle}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-[var(--color-text-light)] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {data.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <button
                onClick={() => scrollToSection(data.primaryCTA.action)}
                className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center group hover:bg-[var(--color-primary)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Calendar size={22} className="mr-3" />
                {data.primaryCTA.text}
                <ArrowRight
                  size={22}
                  className="ml-3 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => scrollToSection(data.secondaryCTA.action)}
                className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
              >
                {data.secondaryCTA.text}
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0 mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-1">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">
                    5
                  </span>
                  <Star size={20} className="text-[var(--color-accent)]" />
                </div>
                <p className="text-sm text-[var(--color-text-light)]">
                  Años experiencia
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-1">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">
                    4
                  </span>
                  <Users size={20} className="text-[var(--color-accent)]" />
                </div>
                <p className="text-sm text-[var(--color-text-light)]">
                  Sold Outs Mix
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-1">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">
                    100
                  </span>
                  <Mic size={20} className="text-[var(--color-accent)]" />
                </div>
                <p className="text-sm text-[var(--color-text-light)]">
                  Show +30k20
                </p>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-sm"
            >
              <p className="text-sm text-[var(--color-text-light)] text-center lg:text-left">
                <span className="text-[var(--color-text)] font-semibold">
                  Teloneado a:
                </span>{" "}
                Luis Slimming, Esteban Duch, Doctor Escalona
              </p>
            </motion.div>
          </div>

          {/* Right Column - Image/Visual */}
          <motion.div
            variants={itemVariants}
            className="relative order-first lg:order-last"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Main Image Container */}
              {data.backgroundImage ? (
                <Image
                  src={data.backgroundImage}
                  alt={`${site.name} en vivo`}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mic size={64} className="text-[var(--color-primary)]" />
                    </div>
                    <p className="text-[var(--color-text-light)] text-sm">
                      Imagen de Gabriel
                      <br />
                      en tarima próximamente
                    </p>
                  </div>
                </div>
              )}

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    Live Santiago
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-[var(--color-accent)] p-3 rounded-lg shadow-lg text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold">180</div>
                  <div className="text-xs opacity-90">meta diciembre</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 bg-white p-3 rounded-lg shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-[var(--color-accent)]" />
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    Alien Caribeño
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100 text-center">
            <div className="text-lg font-bold text-[var(--color-primary)] mb-1">
              WeWork
            </div>
            <p className="text-xs text-[var(--color-text-light)]">Las Condes</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100 text-center">
            <div className="text-lg font-bold text-[var(--color-primary)] mb-1">
              3 años
            </div>
            <p className="text-xs text-[var(--color-text-light)]">
              Cliente recurrente
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100 text-center">
            <div className="text-lg font-bold text-[var(--color-accent)] mb-1">
              Alien
            </div>
            <p className="text-xs text-[var(--color-text-light)]">Caribeño</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100 text-center">
            <div className="text-lg font-bold text-[var(--color-primary)] mb-1">
              100%
            </div>
            <p className="text-xs text-[var(--color-text-light)]">Directo</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-[var(--color-text-light)]">
              Conoce mi historia
            </span>
            <div className="w-6 h-10 border-2 border-[var(--color-primary)]/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[var(--color-primary)] rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
