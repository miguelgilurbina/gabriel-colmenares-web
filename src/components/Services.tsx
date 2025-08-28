// src/components/Services.tsx - Minimalist Extension
"use client";

import { motion } from "framer-motion";
import { Users, Video, PenTool, ArrowRight } from "lucide-react";
import { ServicesProps } from "@/lib/types";

export default function Services({ data, className = "" }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  // Servicios específicos filtrados
  const targetServices = ["hosting", "creative", "writing"];
  const filteredServices = data.filter((service) =>
    targetServices.includes(service.id)
  );

  // Icon mapping
  const serviceIcons = {
    Users: Users,
    Video: Video,
    PenTool: PenTool,
  };

  return (
    <section
      id="servicios"
      className={`py-12 bg-gabriel-light border-t border-gray-200 ${className}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header compacto */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="heading-3 text-gabriel-dark mb-3">
              También Ofrezco
            </h3>
            <p className="text-gabriel-gray max-w-2xl mx-auto">
              Servicios complementarios para hacer tu evento o proyecto único
            </p>
          </motion.div>

          {/* Services Grid - Desktop horizontal, Mobile vertical */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {filteredServices.map((service) => {
              const IconComponent =
                serviceIcons[service.icon as keyof typeof serviceIcons] ||
                Users;

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gabriel-blue/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gabriel-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gabriel-blue/20 transition-colors">
                      <IconComponent size={24} className="text-gabriel-blue" />
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-semibold text-gabriel-dark mb-2">
                      {service.title}
                    </h4>

                    <p className="text-gabriel-gray text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA compacto */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://wa.me/56932323094?text=Hola Gabriel! Me interesa información sobre tus servicios adicionales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gabriel-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors group"
            >
              Consultar Servicios
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
