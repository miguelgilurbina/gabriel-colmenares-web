// src/components/Shows.tsx - Clean Redesign
"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Ticket,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { ShowsProps } from "@/lib/types";

export default function Shows({ data, className = "" }: ShowsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
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
    title: "Shows Actuales",
    subtitle: "Dos propuestas únicas de comedia. Elige tu experiencia.",
    mainShows: [
      {
        id: "+30k20",
        title: "+30K20",
        description:
          "El show que ha conquistado Santiago. Humor inteligente sobre la vida después de los 30 en pleno 2020s.",
        date: "Sábados 21:00",
        venue: "Teatro XYZ, Santiago",
        ticketsUrl: "https://passline.com/eventos/gabriel-colmenares-30k20",
        showImage: "/images/30k20-flyer.jpg, // Imagen del show en acción",
      },
      {
        id: "idilico",
        title: "IDÍLICO",
        description:
          "Mi nuevo unipersonal. Una mirada fresca y divertida a las expectativas vs realidad de la vida adulta.",
        date: "Viernes 20:30",
        venue: "Café Concert ABC, Santiago",
        ticketsUrl: "https://passline.com/eventos/gabriel-colmenares-idilico",
        showImage: "/images/idilico-flyer.jpg", // Imagen del show en acción
      },
    ],
    eventInquiry: {
      title: "¿Eventos Corporativos o Privados?",
      description:
        "Adaptamos cualquiera de estos shows para tu evento especial. Shows corporativos, celebraciones privadas y eventos únicos.",
      whatsappMessage:
        "Hola Gabriel! Me interesa contratar uno de tus shows para un evento",
    },
  };

  const mainShows = showsData.mainShows;

  return (
    <section id="shows" className={`py-20 bg-gabriel-light ${className}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="heading-2 text-gabriel-dark mb-6">
              {showsData.title}
            </h2>
            <p className="text-large max-w-2xl mx-auto">{showsData.subtitle}</p>
          </motion.div>

          {/* Main Shows - Horizontal Cards */}
          <div className="space-y-8 mb-16">
            {mainShows.map((show, index) => (
              <motion.div
                key={show.id}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Image Section - 2/5 del ancho */}
                    <div className="col-span-1 lg:col-span-2 relative">
                      <div className="aspect-[3/4] relative bg-gray-100">
                        {show.showImage ? (
                          <Image
                            src={show.showImage}
                            alt={`${show.title} show`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        ) : (
                          // Placeholder elegante
                          <div className="absolute inset-0 bg-gradient-to-br from-gabriel-blue/10 to-gabriel-yellow/10 flex items-center justify-center">
                            <div className="text-gabriel-gray text-center">
                              <Ticket
                                size={48}
                                className="mx-auto mb-2 opacity-20"
                              />
                              <div className="text-sm">Show Image</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section - 3/5 del ancho */}
                    <div className="col-span-1 lg:col-span-3 p-6 lg:p-10 flex flex-col justify-center">
                      {/* Show Title */}
                      <h3 className="heading-3 text-gabriel-dark mb-4">
                        {show.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gabriel-gray text-lg mb-6 leading-relaxed">
                        {show.description}
                      </p>

                      {/* Show Details */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                        <div className="flex items-center space-x-2">
                          <Calendar size={18} className="text-gabriel-blue" />
                          <span className="text-gabriel-dark font-medium">
                            {show.date}
                          </span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-gabriel-gray rounded-full"></div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={18} className="text-gabriel-blue" />
                          <span className="text-gabriel-dark">
                            {show.venue}
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={show.ticketsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary group w-full sm:w-auto"
                        >
                          {/* <Ticket className="w-4 h-4" /> */}
                          COMPRAR ENTRADAS
                          {/* <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                        </a>

                        <a
                          href={`https://wa.me/56932323094?text=Hola Gabriel! Me interesa información sobre el show ${show.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline w-full sm:w-auto"
                        >
                          MÁS INFO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section - Event Inquiries */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto text-center">
              <h3 className="heading-3 text-gabriel-dark mb-4">
                {showsData.eventInquiry.title}
              </h3>
              <p className="text-gabriel-gray mb-6 max-w-2xl mx-auto">
                {showsData.eventInquiry.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/56932323094?text=${encodeURIComponent(
                    showsData.eventInquiry.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg group"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => {
                    const element = document.querySelector("#servicios");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn btn-outline btn-lg"
                >
                  Ver Servicios
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
