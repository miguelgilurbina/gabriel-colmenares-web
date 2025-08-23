// src/components/Process.tsx
"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  CreditCard,
  Presentation,
  Rocket,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Monitor,
  Code,
} from "lucide-react";
import { ProcessProps } from "@/lib/types";

export default function Process({ data, className = "" }: ProcessProps) {
  const stepIcons = [MessageCircle, CreditCard, Presentation, Rocket];

  const deliverableIcons = {
    "Propuesta clara y timeline definido": FileText,
    "Manual de marca fundacional + estrategia web": Users,
    "Demo funcional + sesión de feedback": Presentation,
    "Web online + código fuente + documentación": Code,
  };

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

  return (
    <section
      id="process"
      className={`section-padding bg-gradient-process ${className}`}
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--neutral-dark)] mb-6">
              {data.title}
            </h2>
            <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Important Note */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--primary)]/20 rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-2">
                    ⏰ Los 7 días hábiles empiezan después del pago inicial
                  </h3>
                  <p className="text-[var(--neutral-medium)]">
                    Tu timeline garantizado comienza una vez confirmado el
                    proyecto. No incluye fines de semana ni feriados - solo días
                    hábiles de trabajo efectivo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              {data.steps.map((step, index) => {
                const IconComponent = stepIcons[index];
                const DeliverableIcon =
                  deliverableIcons[
                    step.deliverable as keyof typeof deliverableIcons
                  ] || CheckCircle;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className={`${isEven ? "lg:mt-0" : "lg:mt-16"}`}>
                      {/* Timeline Badge */}
                      <div className="text-center mb-4">
                        <span className="inline-block bg-[var(--accent)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {step.timeline}
                        </span>
                      </div>

                      {/* Step Number & Icon */}
                      <div className="relative mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg relative z-10">
                          {step.number}
                        </div>
                        {/* Icon overlay */}
                        <div className="absolute inset-0 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                          <IconComponent size={28} className="text-white/80" />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-lg group">
                        <h3 className="text-lg font-bold text-[var(--neutral-dark)] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[var(--neutral-medium)] leading-relaxed text-sm mb-4">
                          {step.description}
                        </p>

                        {/* Deliverable */}
                        <div className="border-t border-gray-100 pt-4 mt-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <DeliverableIcon
                                size={16}
                                className="text-[var(--primary)]"
                              />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-[var(--primary)] mb-1">
                                ENTREGABLE:
                              </p>
                              <p className="text-xs text-[var(--neutral-dark)] font-medium leading-tight">
                                {step.deliverable}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Arrow */}
                      {index < data.steps.length - 1 && (
                        <div className="lg:hidden flex justify-center mt-6">
                          <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]"></div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Included Services Highlight */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-white rounded-2xl p-8 border border-[var(--primary)]/20 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
                  ¿Qué incluye cada reunión?
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle
                      size={32}
                      className="text-[var(--primary)]"
                    />
                  </div>
                  <h4 className="font-semibold text-[var(--neutral-dark)] mb-2">
                    📞 Reunión Inicial (30 min)
                  </h4>
                  <p className="text-[var(--neutral-medium)] text-sm">
                    Explicación completa del proceso, timeline y resolución de
                    dudas. Sin presión de venta.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-[var(--accent)]" />
                  </div>
                  <h4 className="font-semibold text-[var(--neutral-dark)] mb-2">
                    🎯 Assessment de Marca (45 min)
                  </h4>
                  <p className="text-[var(--neutral-medium)] text-sm">
                    Sesión estratégica para definir tu propuesta de valor,
                    audiencia y diferenciadores únicos.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor size={32} className="text-[var(--secondary)]" />
                  </div>
                  <h4 className="font-semibold text-[var(--neutral-dark)] mb-2">
                    🖥️ Demo + Feedback (30 min)
                  </h4>
                  <p className="text-[var(--neutral-medium)] text-sm">
                    Te muestro tu web funcionando y ajustamos detalles según tu
                    feedback directo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment & Domain Options */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Payment Structure */}
              <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Estructura de Costos
                </h3>

                {/* Main Project */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-white/90">
                    📄 Proyecto Landing Page
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Pago inicial (50%)</span>
                      <span className="font-bold">$125.000</span>
                    </div>
                    <div className="w-full h-px bg-white/30"></div>
                    <div className="flex justify-between items-center">
                      <span>Pago final (50%)</span>
                      <span className="font-bold">$125.000</span>
                    </div>
                    <div className="w-full h-px bg-white/30"></div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Proyecto</span>
                      <span>$250.000</span>
                    </div>
                  </div>
                </div>

                {/* Maintenance Service */}
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    🔧 Servicio de Mantenimiento
                    <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                      OPCIONAL
                    </span>
                  </h4>
                  <div className="space-y-2 text-sm text-white/90">
                    <div className="flex justify-between items-center">
                      <span>Plan Básico (mensual)</span>
                      <span className="font-semibold">$25.000/mes</span>
                    </div>
                    <div className="text-xs text-white/80 mt-2">
                      ✅ Actualizaciones de seguridad • ✅ Backup semanal • ✅
                      Soporte técnico • ✅ 2 cambios menores/mes
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-white/90 text-sm">
                  ⏰ Timer de 7 días inicia con el pago inicial
                </div>
              </div>

              {/* Domain Options */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-6">
                  Gestión de Dominio
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[var(--neutral-dark)]">
                        Dominio .com
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        ~$15 USD/año
                      </span>
                    </div>
                    <p className="text-[var(--neutral-medium)] text-sm">
                      Dominio internacional. Tú compras directamente en Vercel o
                      tu proveedor preferido.
                    </p>
                  </div>

                  <div className="border border-[var(--primary)]/30 rounded-lg p-4 bg-[var(--primary)]/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[var(--neutral-dark)]">
                        Dominio .cl
                      </span>
                      <span className="bg-[var(--secondary)] text-white px-3 py-1 rounded-full text-sm font-medium">
                        ~$15.000 CLP/año
                      </span>
                    </div>
                    <p className="text-[var(--neutral-medium)] text-sm">
                      Identidad chilena. Tú compras en NIC.cl, nosotros
                      configuramos todo.
                    </p>
                  </div>

                  <div className="bg-[var(--neutral-light)] rounded-lg p-4 mt-4">
                    <p className="text-[var(--neutral-dark)] text-sm">
                      💡 <strong>Importante:</strong> Los dominios se gestionan
                      después de la entrega. Te ayudamos con la configuración
                      sin costo adicional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-[var(--primary)]/5 to-[var(--accent)]/5 rounded-2xl p-8 border border-[var(--primary)]/20">
              <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4">
                ¿Listo para tener tu web en 7 días?
              </h3>
              <p className="text-[var(--neutral-medium)] mb-6 max-w-2xl mx-auto">
                Empezamos con una conversación de 30 minutos sin compromiso. Te
                explico todo el proceso y resolvemos tus dudas.
              </p>
              <a
                href="https://calendly.com/miguel-gil-9210/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary text-lg px-10 py-4 mr-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  Agendar Reunión Inicial
                </button>
              </a>

              <p className="text-[var(--neutral-medium)] mt-4 text-sm">
                📞 Reunión por Google Meet • Sin compromisos • 100% gratuita
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
