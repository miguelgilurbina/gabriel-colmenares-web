// src/components/About.tsx - Gabriel Colmenares
"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Star,
  Users,
  Award,
  TrendingUp,
  Heart,
  MapPin,
  Calendar,
  Zap,
  Target,
} from "lucide-react";
import { AboutProps } from "@/lib/types";

export default function About({ data, className = "" }: AboutProps) {
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
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
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
              {data.title}
            </h2>
            <p className="text-xl text-[var(--color-accent)] font-semibold mb-4 max-w-3xl mx-auto">
              {data.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Column - Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative max-w-md mx-auto">
                {/* Image Container */}
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/10">
                  {data.image ? (
                    <img
                      src={data.image}
                      alt="Gabriel Colmenares"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Heart
                            size={48}
                            className="text-[var(--color-primary)]"
                          />
                        </div>
                        <p className="text-[var(--color-text-light)] text-sm">
                          Foto de Gabriel
                          <br />
                          próximamente
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-[var(--color-accent)]" />
                    <span className="text-sm font-medium text-[var(--color-text)]">
                      Santiago, Chile
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-[var(--color-accent)] p-3 rounded-lg shadow-lg text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold">5</div>
                    <div className="text-xs opacity-90">años</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Story */}
            <motion.div variants={itemVariants}>
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                  {data.description}
                </p>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-4 flex items-center">
                    <Target
                      size={24}
                      className="text-[var(--color-accent)] mr-3"
                    />
                    Por qué hago esto
                  </h3>
                  <p className="text-[var(--color-text-light)] italic">
                    La conexión genuina con las personas, hacer reír incluso en
                    crisis, vivir de la creatividad sin perder autenticidad.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                Logros que Definen mi Carrera
              </h3>
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
                Cada hito representa crecimiento, aprendizaje y conexiones
                auténticas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {index === 0 && (
                        <Star
                          size={24}
                          className="text-[var(--color-accent)]"
                        />
                      )}
                      {index === 1 && (
                        <Users
                          size={24}
                          className="text-[var(--color-primary)]"
                        />
                      )}
                      {index === 2 && (
                        <Award
                          size={24}
                          className="text-[var(--color-accent)]"
                        />
                      )}
                      {index === 3 && (
                        <TrendingUp
                          size={24}
                          className="text-[var(--color-primary)]"
                        />
                      )}
                      {index === 4 && (
                        <Mic size={24} className="text-[var(--color-accent)]" />
                      )}
                    </div>
                    <div>
                      <p className="text-[var(--color-text)] font-medium leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                Mi Journey Creativo
              </h3>
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
                De asistente de producción a crear mi propia productora
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)]"></div>

              <div className="space-y-12">
                {/* Teatro Municipal */}
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg max-w-md mx-8 relative">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                        <Users size={16} className="text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">
                        Teatro Municipal Las Condes
                      </h4>
                      <p className="text-[var(--color-text-light)] text-sm">
                        Asistente de producción - Aprendiendo el oficio desde
                        adentro
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primeros Shows */}
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg max-w-md mx-8 relative">
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                        <Mic size={16} className="text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">
                        De putero adaptado a 100 personas
                      </h4>
                      <p className="text-[var(--color-text-light)] text-sm">
                        La transformación que definió mi profesionalismo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Alien Caribeño */}
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl p-6 text-white max-w-md mx-8 relative shadow-xl">
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Star
                          size={16}
                          className="text-[var(--color-primary)]"
                        />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Alien Caribeño</h4>
                      <p className="text-white/90 text-sm">
                        Mi productora propia - Independencia creativa total
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 lg:p-12 border border-[var(--color-primary)]/10 max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} className="text-[var(--color-accent)]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                  Mi Promesa
                </h3>
                <p className="text-xl text-[var(--color-text-light)] mb-8 max-w-2xl mx-auto">
                  {data.value_proposition}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                    Sin intermediarios
                  </div>
                  <p className="text-[var(--color-text-light)] text-sm">
                    Todo pasa por mí directamente
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-accent)] mb-2">
                    100% auténtico
                  </div>
                  <p className="text-[var(--color-text-light)] text-sm">
                    Creatividad genuina siempre
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                    Adaptable
                  </div>
                  <p className="text-[var(--color-text-light)] text-sm">
                    Sin perder mi esencia
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary)]/90 transition-colors flex items-center mx-auto group"
              >
                Trabajemos juntos
                <Zap
                  size={20}
                  className="ml-2 group-hover:scale-110 transition-transform"
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
