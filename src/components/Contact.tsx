// src/components/Contact.tsx - Gabriel Colmenares
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Headphones,
  User,
  Briefcase,
  Calendar,
  Mic,
} from "lucide-react";
import { ContactProps } from "@/lib/types";

interface FormData {
  name: string;
  email: string;
  phone: string;
  project_type: string;
  message: string;
  budget_range?: string;
  event_date?: string;
}

export default function Contact({ data, className = "" }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    }

    setIsSubmitting(false);
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
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="contact"
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
              {data.title}
            </h2>
            <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto mb-4">
              {data.subtitle}
            </p>
            <p className="text-lg text-[var(--color-accent)] font-medium">
              Respuesta garantizada en 24 horas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">
                  Cuéntame sobre tu proyecto
                </h3>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg text-green-700">
                    ¡Gracias! Tu mensaje ha sido enviado. Te contactaré pronto.
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-lg text-red-700">
                    Hubo un error enviando tu mensaje. Por favor intenta por
                    WhatsApp o Instagram.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Tu nombre *
                    </label>
                    <input
                      {...register("name", {
                        required: "Tu nombre es requerido",
                      })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                      placeholder="¿Cómo te llamas?"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: "Tu email es requerido",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email inválido",
                        },
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      WhatsApp
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                      placeholder="+56 9 1234 5678 (opcional)"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Tipo de proyecto *
                    </label>
                    <select
                      {...register("project_type", {
                        required: "Selecciona el tipo de proyecto",
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="stand_up">Stand Up Comedy - Show</option>
                      <option value="corporate_event">
                        Evento Corporativo
                      </option>
                      <option value="creative_direction">
                        Dirección Creativa
                      </option>
                      <option value="private_event">Evento Privado</option>
                      <option value="podcast_collaboration">
                        Colaboración Podcast
                      </option>
                      <option value="content_creation">
                        Creación de Contenido
                      </option>
                      <option value="other">Otro</option>
                    </select>
                    {errors.project_type && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.project_type.message}
                      </p>
                    )}
                  </div>

                  {/* Event Date */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Fecha del evento (si aplica)
                    </label>
                    <input
                      {...register("event_date")}
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                    />
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Rango presupuestario (opcional)
                    </label>
                    <select
                      {...register("budget_range")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                    >
                      <option value="">Prefiero no especificar</option>
                      <option value="under_500k">Menos de $500.000</option>
                      <option value="500k_1m">$500.000 - $1.000.000</option>
                      <option value="1m_2m">$1.000.000 - $2.000.000</option>
                      <option value="over_2m">Más de $2.000.000</option>
                      <option value="negotiate">A conversar</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Cuéntame más detalles
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-colors"
                      placeholder="Describe tu proyecto, audiencia, expectativas, o cualquier detalle que consideres importante..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-primary)]/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">
                  Contacto directo
                </h3>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${data.whatsapp?.replace(
                      /\D/g,
                      ""
                    )}?text=Hola Gabriel! Vi tu página web y me interesa hablar sobre un proyecto`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <MessageCircle
                        size={24}
                        className="text-green-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--color-text)]">
                        WhatsApp (preferido)
                      </div>
                      <div className="text-[var(--color-text-light)]">
                        {data.whatsapp}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${data.email}?subject=Proyecto con Gabriel Colmenares`}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Mail
                        size={24}
                        className="text-blue-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--color-text)]">
                        Email
                      </div>
                      <div className="text-[var(--color-text-light)]">
                        {data.email}
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-6">
                  Sígueme en redes
                </h3>

                <div className="space-y-4">
                  {/* Instagram */}
                  <a
                    href={`https://instagram.com/${data.instagram?.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-pink-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                      <Instagram
                        size={24}
                        className="text-pink-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--color-text)]">
                        Instagram
                      </div>
                      <div className="text-[var(--color-text-light)]">
                        {data.instagram}
                      </div>
                    </div>
                  </a>

                  {/* YouTube */}
                  {data.youtube && (
                    <a
                      href={data.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-red-50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                        <Youtube
                          size={24}
                          className="text-red-600 group-hover:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--color-text)]">
                          YouTube
                        </div>
                        <div className="text-[var(--color-text-light)]">
                          @uncolmenares
                        </div>
                      </div>
                    </a>
                  )}

                  {/* Spotify/Podcast */}
                  {data.spotify && (
                    <a
                      href={data.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                        <Headphones
                          size={24}
                          className="text-green-700 group-hover:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--color-text)]">
                          Podcast
                        </div>
                        <div className="text-[var(--color-text-light)]">
                          Escúchalo en Spotify
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Info adicional */}
              <div className="bg-gradient-to-r from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 rounded-2xl p-8 border border-[var(--color-primary)]/10">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">
                  Información importante
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin
                      size={18}
                      className="text-[var(--color-primary)] mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="font-medium text-[var(--color-text)]">
                        Ubicación
                      </div>
                      <div className="text-[var(--color-text-light)]">
                        Santiago, Chile (disponible para viajes)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock
                      size={18}
                      className="text-[var(--color-primary)] mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="font-medium text-[var(--color-text)]">
                        Respuesta
                      </div>
                      <div className="text-[var(--color-text-light)]">
                        Garantizada en 24 horas
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Calendar
                      size={18}
                      className="text-[var(--color-primary)] mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="font-medium text-[var(--color-text)]">
                        Planificación
                      </div>
                      <div className="text-[var(--color-text-light)]">
                        Reserva con mínimo 2 semanas de anticipación
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mic
                      size={18}
                      className="text-[var(--color-accent)] mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="font-medium text-[var(--color-text)]">
                        Especialidades
                      </div>
                      <div className="text-[var(--color-text-light)]">
                        Stand up, eventos corporativos, dirección creativa
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
