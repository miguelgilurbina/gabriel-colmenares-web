// src/components/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, Lightbulb } from "lucide-react";
import { FAQProps } from "@/lib/types";

export default function FAQ({ data, className = "" }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className={`section-padding bg-gradient-faq ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--primary)]/10 rounded-full text-[var(--primary)] font-medium text-sm mb-6">
            <Lightbulb size={16} className="mr-2" />
            Resolvemos tus dudas
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--neutral-dark)] mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto">
            Las dudas más importantes que nos hacen nuestros clientes antes de
            decidirse
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto mb-20">
          {data.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div key={index} className="mb-6">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-lg">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 group"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-[var(--neutral-dark)] pr-4 group-hover:text-[var(--primary)] transition-colors">
                      {item.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[var(--primary)] text-white scale-110"
                          : "bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)]/20"
                      }`}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <div className="px-8 pb-8">
                          <div className="border-t border-gray-100 pt-6">
                            <p className="text-[var(--neutral-medium)] leading-relaxed text-lg">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div>
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Sigues con dudas?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Conversemos sin compromiso. Te explico exactamente cómo podemos
                ayudarte con tu proyecto específico.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://calendly.com/miguel-gil-9210/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors duration-300 shadow-lg">
                    Agendar Llamada de 30 min
                  </button>
                </a>

                <a
                  href="https://wa.me/56912345678?text=Hola, me interesa tu servicio de páginas web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors duration-300">
                    Escribir por WhatsApp
                  </button>
                </a>
              </div>

              <div className="mt-6 text-white">
                📞 Respuesta en menos de 2 horas • 🚀 Sin presión de venta
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
