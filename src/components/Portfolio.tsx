// src/components/Portfolio.tsx - Gabriel Colmenares
"use client";

import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  Play,
  Calendar,
  Award,
  Building,
} from "lucide-react";
import { PortfolioProps } from "@/lib/types";

export default function Portfolio({ data, className = "" }: PortfolioProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Icons para diferentes tipos de casos
  const getCaseIcon = (title: string) => {
    if (title.includes("Show") || title.includes("Mix")) return Users;
    if (title.includes("Corporativo") || title.includes("Cliente"))
      return Building;
    return Star;
  };

  return (
    <section
      id="portfolio"
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
              Casos de Éxito
            </h2>
            <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
              Proyectos reales que demuestran mi versatilidad y compromiso con
              la excelencia
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {data.map((project, index) => {
              const IconComponent = getCaseIcon(project.title);
              const isMainProject = index === 0; // Destacar el primer proyecto

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-2xl ${
                    isMainProject
                      ? "lg:col-span-2 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white"
                      : "bg-white border border-gray-200 hover:border-[var(--color-primary)]/30"
                  } transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  {/* Background decoration para proyecto principal */}
                  {isMainProject && (
                    <>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
                    </>
                  )}

                  <div
                    className={`p-8 ${
                      isMainProject ? "lg:p-12" : "lg:p-8"
                    } relative z-10`}
                  >
                    {/* Badge y Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center 
                        ${
                          isMainProject
                            ? "bg-white/20"
                            : "bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)]/20"
                        } 
                        transition-colors
                      `}
                      >
                        <IconComponent
                          size={32}
                          className={
                            isMainProject
                              ? "text-white"
                              : "text-[var(--color-primary)]"
                          }
                        />
                      </div>

                      {isMainProject && (
                        <div className="flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium">
                          <Award size={16} className="mr-2" />
                          Proyecto Destacado
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <h3
                      className={`
                      text-2xl lg:text-3xl font-bold mb-4 
                      ${
                        isMainProject
                          ? "text-white"
                          : "text-[var(--color-text)]"
                      }
                    `}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`
                      leading-relaxed mb-6 
                      ${
                        isMainProject
                          ? "text-white/90 text-lg"
                          : "text-[var(--color-text-light)]"
                      }
                    `}
                    >
                      {project.description}
                    </p>

                    {/* Result Badge */}
                    <div
                      className={`
                      inline-flex items-center px-4 py-2 rounded-lg font-medium mb-6
                      ${
                        isMainProject
                          ? "bg-white/20 text-white"
                          : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      }
                    `}
                    >
                      <TrendingUp size={16} className="mr-2" />
                      {project.result}
                    </div>

                    {/* Image placeholder */}
                    <div
                      className={`
                      aspect-video rounded-xl overflow-hidden mb-6
                      ${
                        isMainProject
                          ? "bg-white/10"
                          : "bg-[var(--color-primary)]/5"
                      }
                    `}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <Play
                              size={48}
                              className={`mx-auto mb-2 ${
                                isMainProject
                                  ? "text-white/60"
                                  : "text-[var(--color-primary)]/40"
                              }`}
                            />
                            <p
                              className={`text-sm ${
                                isMainProject
                                  ? "text-white/60"
                                  : "text-[var(--color-text-light)]"
                              }`}
                            >
                              Contenido visual
                              <br />
                              próximamente
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA específico para cada tipo de proyecto */}
                    {project.title.includes("Show") && (
                      <button
                        onClick={() => {
                          const element = document.querySelector("#shows");
                          if (element)
                            element.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`
                          flex items-center font-semibold transition-colors group/button
                          ${
                            isMainProject
                              ? "text-white hover:text-white/80"
                              : "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                          }
                        `}
                      >
                        Ver próximos shows
                        <ArrowRight
                          size={18}
                          className="ml-2 group-hover/button:translate-x-1 transition-transform"
                        />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                  4
                </div>
                <p className="text-[var(--color-text-light)]">
                  Sold Outs consecutivos
                </p>
                <p className="text-sm text-[var(--color-text-light)] mt-1">
                  Mix Chatarritas
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">
                  3
                </div>
                <p className="text-[var(--color-text-light)]">
                  Años cliente recurrente
                </p>
                <p className="text-sm text-[var(--color-text-light)] mt-1">
                  Clínica odontológica
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                  100%
                </div>
                <p className="text-[var(--color-text-light)]">Ocupación</p>
                <p className="text-sm text-[var(--color-text-light)] mt-1">
                  Show +30k20
                </p>
              </div>
            </div>
          </motion.div>

          {/* Testimonials/Social Proof */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 lg:p-12 border border-[var(--color-primary)]/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                  Lo que Dicen de Mi Trabajo
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-[var(--color-accent)] fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[var(--color-text-light)] italic mb-4">
                    Gabriel logró que nuestros eventos corporativos tuvieran un
                    toque personal y divertido. Su profesionalismo y carisma
                    natural conectaron perfectamente con nuestro equipo.
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mr-3">
                      <Building
                        size={20}
                        className="text-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-text)]">
                        Cliente Corporativo
                      </p>
                      <p className="text-sm text-[var(--color-text-light)]">
                        Clínica Odontológica
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-[var(--color-accent)] fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[var(--color-text-light)] italic mb-4">
                    La energía de Gabriel en Mix Chatarritas era increíble. Su
                    capacidad para improvisar y conectar con la audiencia hizo
                    que cada show fuera único.
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mr-3">
                      <Users
                        size={20}
                        className="text-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-text)]">
                        Fan Regular
                      </p>
                      <p className="text-sm text-[var(--color-text-light)]">
                        Mix Chatarritas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                ¿Listo para tu próximo proyecto?
              </h3>
              <p className="text-[var(--color-text-light)] mb-8 max-w-2xl mx-auto">
                Cada proyecto es único, cada conexión es auténtica. Hablemos
                sobre cómo puedo aportar creatividad genuina a tu próximo evento
                o proyecto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={scrollToContact}
                  className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary)]/90 transition-colors flex items-center group"
                >
                  Iniciar conversación
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button
                  onClick={() => {
                    const element = document.querySelector("#shows");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                >
                  Ver próximos shows
                </button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[var(--color-text-light)]">
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
                  <span>Proyectos únicos y personalizados</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
