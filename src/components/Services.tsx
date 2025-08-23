// src/components/Services.tsx - Gabriel Colmenares
"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Users,
  Video,
  Headphones,
  PenTool,
  Star,
  ArrowRight,
  Crown,
} from "lucide-react";
import { ServicesProps } from "@/lib/types";

export default function Services({ data, className = "" }: ServicesProps) {
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
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Icon mapping para servicios de Gabriel
  const serviceIcons = {
    Mic: Mic,
    Users: Users,
    Video: Video,
    Headphones: Headphones,
    PenTool: PenTool,
  };

  return (
    <section
      id="services"
      className={`py-20 bg-gradient-to-b from-white to-[var(--color-secondary)] ${className}`}
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-6">
              Lo Que Hago
            </h2>
            <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
              Creatividad multifacética con enfoque genuino. Cada proyecto es
              único, cada conexión es auténtica.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {data.map((service, index) => {
              const IconComponent =
                serviceIcons[service.icon as keyof typeof serviceIcons] || Mic;

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`relative group ${
                    service.featured
                      ? "md:col-span-2 lg:col-span-1 lg:row-span-2"
                      : ""
                  }`}
                >
                  <div
                    className={`
                    ${
                      service.featured
                        ? "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white"
                        : "bg-white border border-gray-200 hover:border-[var(--color-primary)]/30"
                    } 
                    rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full relative overflow-hidden
                  `}
                  >
                    {/* Background decoration para el servicio destacado */}
                    {service.featured && (
                      <>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                      </>
                    )}

                    {/* Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {service.featured && (
                          <div className="flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium">
                            <Star size={12} className="mr-1" />
                            Servicio Estrella
                          </div>
                        )}
                        {service.premium && !service.featured && (
                          <div className="flex items-center px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-xs font-medium">
                            <Crown size={12} className="mr-1" />
                            Premium
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                      ${
                        service.featured
                          ? "bg-white/20"
                          : "bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)]/20"
                      } 
                      transition-colors
                    `}
                    >
                      <IconComponent
                        size={32}
                        className={
                          service.featured
                            ? "text-white"
                            : "text-[var(--color-primary)]"
                        }
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3
                        className={`
                        text-xl lg:text-2xl font-bold mb-4 
                        ${
                          service.featured
                            ? "text-white"
                            : "text-[var(--color-text)]"
                        }
                      `}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`
                        leading-relaxed mb-6 
                        ${
                          service.featured
                            ? "text-white/90"
                            : "text-[var(--color-text-light)]"
                        }
                        ${
                          service.featured
                            ? "text-base lg:text-lg"
                            : "text-base"
                        }
                      `}
                      >
                        {service.description}
                      </p>

                      {/* CTA específico para Stand Up */}
                      {service.featured && (
                        <button
                          onClick={() => scrollToSection("#shows")}
                          className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center group"
                        >
                          Ver Próximos Shows
                          <ArrowRight
                            size={18}
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                          />
                        </button>
                      )}
                    </div>

                    {/* Hover effect for non-featured services */}
                    {!service.featured && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 lg:p-12 border border-[var(--color-primary)]/10 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                ¿Necesitas algo específico?
              </h3>
              <p className="text-[var(--color-text-light)] mb-8 max-w-2xl mx-auto">
                Cada proyecto es único. Si tienes una idea especial o necesitas
                algo que no ves aquí, hablemos. La creatividad no tiene límites.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary)]/90 transition-colors flex items-center group"
                >
                  Hablemos de tu proyecto
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={() => scrollToSection("#portfolio")}
                  className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                >
                  Ver mi trabajo
                </button>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-[var(--color-text-light)]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                  <span>Respuesta en 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                  <span>Trato directo conmigo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                  <span>Sin intermediarios</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievement Banner */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  5 años
                </div>
                <p className="text-[var(--color-text-light)]">
                  De experiencia en Santiago
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">
                  4 sold outs
                </div>
                <p className="text-[var(--color-text-light)]">
                  Mix Chatarritas consecutivos
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  100%
                </div>
                <p className="text-[var(--color-text-light)]">
                  Trato directo y genuino
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
