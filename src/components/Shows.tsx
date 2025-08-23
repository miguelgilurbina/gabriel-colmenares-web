// src/components/Shows.tsx - Gabriel Colmenares
"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  ArrowRight,
  Clock,
  Ticket,
  TrendingUp,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { ShowsProps } from "@/lib/types";

export default function Shows({ data, className = "" }: ShowsProps) {
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

  // Si no hay data, usar valores por defecto
  const showsData = data || {
    title: "Próximos Shows",
    subtitle: "Conectando en vivo, una risa a la vez",
    featured_show: {
      title: "🎭 SHOW GRANDE DICIEMBRE 2024",
      description:
        "Mi evento más ambicioso del año. Una noche especial de comedia que no te puedes perder.",
      target_tickets: 180,
      cta_text: "Comprar Entradas",
      cta_link: "#tickets",
    },
  };

  return (
    <section
      id="shows"
      className={`py-20 bg-gradient-to-b from-[var(--color-secondary)] to-white ${className}`}
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
              {showsData.title}
            </h2>
            <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
              {showsData.subtitle}
            </p>
          </motion.div>

          {/* Featured Show - Show Grande Diciembre */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Info */}
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
                      <Star size={16} className="mr-2" />
                      Evento Principal
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {showsData.featured_show?.title}
                    </h3>

                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      {showsData.featured_show?.description}
                    </p>

                    <div className="flex items-center space-x-6 mb-8">
                      <div className="flex items-center space-x-2">
                        <Calendar size={20} className="text-white/80" />
                        <span className="text-white/90">Diciembre 2024</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={20} className="text-white/80" />
                        <span className="text-white/90">Santiago</span>
                      </div>
                    </div>

                    {/* CTA Principal */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://wa.me/56932323094?text=Hola Gabriel! Me interesa información sobre el show de diciembre 2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors flex items-center justify-center group"
                      >
                        <MessageCircle size={20} className="mr-2" />
                        Info y Entradas
                        <ArrowRight
                          size={20}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </a>

                      <button
                        onClick={() => {
                          const element = document.querySelector("#contact");
                          if (element)
                            element.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
                      >
                        Más información
                      </button>
                    </div>
                  </div>

                  {/* Right Column - Stats */}
                  <div className="text-center lg:text-right">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <div className="mb-6">
                        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                          {showsData.featured_show?.target_tickets}
                        </div>
                        <div className="text-white/80 text-lg">
                          Entradas Meta
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white/80">Estado:</span>
                          <span className="text-white font-semibold">
                            Pre-venta
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/80">Venue:</span>
                          <span className="text-white font-semibold">
                            Por anunciar
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/80">Formato:</span>
                          <span className="text-white font-semibold">
                            Unipersonal
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shows Regulares */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                Shows Regulares
              </h3>
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
                Mientras preparamos el show grande, sigo presentándome en
                diferentes venues de Santiago
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mix Chatarritas */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                    <Users size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[var(--color-accent)] font-semibold">
                      4 Sold Outs
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[var(--color-text)] mb-2">
                  Mix Chatarritas
                </h4>
                <p className="text-[var(--color-text-light)] text-sm mb-4">
                  Show semanal de crowdwork e improvisación
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--color-text-light)]">
                    Estado:
                  </span>
                  <span className="text-[var(--color-accent)] font-medium">
                    Temporada completa
                  </span>
                </div>
              </div>

              {/* Eventos Corporativos */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center">
                    <TrendingUp
                      size={24}
                      className="text-[var(--color-accent)]"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[var(--color-primary)] font-semibold">
                      Disponible
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[var(--color-text)] mb-2">
                  Eventos Corporativos
                </h4>
                <p className="text-[var(--color-text-light)] text-sm mb-4">
                  Presentaciones y animación de eventos empresariales
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--color-text-light)]">
                    Modalidad:
                  </span>
                  <span className="text-[var(--color-primary)] font-medium">
                    Bajo demanda
                  </span>
                </div>
              </div>

              {/* Shows Especiales */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                    <Star size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[var(--color-accent)] font-semibold">
                      Planificando
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[var(--color-text)] mb-2">
                  Shows Especiales
                </h4>
                <p className="text-[var(--color-text-light)] text-sm mb-4">
                  Colaboraciones y eventos únicos en desarrollo
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--color-text-light)]">
                    Próximamente:
                  </span>
                  <span className="text-[var(--color-accent)] font-medium">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Calendario Placeholder - Integración Passline */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 lg:p-12 border-2 border-dashed border-[var(--color-primary)]/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar size={32} className="text-[var(--color-primary)]" />
                </div>

                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">
                  Calendario Interactivo
                </h3>
                <p className="text-[var(--color-text-light)] mb-6 max-w-2xl mx-auto">
                  Estamos implementando la integración con Passline para que
                  puedas ver todos mis próximos shows y comprar entradas
                  directamente desde aquí.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a
                    href="https://wa.me/56932323094?text=Hola Gabriel! Me gustaría información sobre tus próximos shows"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)]/90 transition-colors flex items-center"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Consultar disponibilidad
                  </a>

                  <button
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    Solicitar presentación
                  </button>
                </div>

                <div className="text-sm text-[var(--color-text-light)]">
                  <Clock size={16} className="inline mr-1" />
                  Calendario completo disponible próximamente
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                ¿Quieres que presente en tu evento?
              </h3>
              <p className="text-[var(--color-text-light)] mb-8 max-w-2xl mx-auto">
                Shows corporativos, eventos privados, venues. Cada presentación
                es única y adaptada a tu audiencia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <a
                  href="https://wa.me/56932323094?text=Hola Gabriel! Me interesa que presentes en mi evento. Te cuento los detalles:"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary)]/90 transition-colors flex items-center group"
                >
                  Hablemos de tu evento
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <button
                  onClick={() => {
                    const element = document.querySelector("#portfolio");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                >
                  Ver mi trabajo
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-sm text-[var(--color-text-light)]">
                <div className="flex items-center justify-center space-x-2">
                  <Ticket size={16} className="text-[var(--color-accent)]" />
                  <span>Shows personalizados</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Users size={16} className="text-[var(--color-accent)]" />
                  <span>Todas las audiencias</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock size={16} className="text-[var(--color-accent)]" />
                  <span>Respuesta rápida</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
