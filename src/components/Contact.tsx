// src/components/Contact.tsx - Minimal Social Links
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Youtube, Headphones, Video, Play, ExternalLink, ArrowRight, ChevronDown, ChevronUp, Mic } from "lucide-react";
import { ContactProps, ServicesProps } from "@/lib/types";
import Services from "./Services";

interface ContactWithServicesProps extends ContactProps {
  servicesData?: ServicesProps["data"];
}

export default function Contact({ data, eventInquiry, servicesData = [], className = "" }: ContactWithServicesProps) {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const socialLinks = [
    {
      name: "Instagram",
      description: data.instagram,
      icon: Instagram,
      href: `https://instagram.com/${data.instagram?.replace("@", "")}`,
      color: "hover:bg-pink-500",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600 group-hover:text-white",
    },
  ];

  return (
    <section id="contact" className={`py-16  ${className}`}>
      <div className="container mx-auto px-6 lg:px-8 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-2 text-gabriel-dark mb-4 section-title">
              {data.title}
            </h2>
            {/* <p className="text-large text-gabriel-gray max-w-2xl mx-auto">
              {data.subtitle}
            </p> */}
          </motion.div>

          {/* Featured Content Section */}
          {data.featuredContent && data.featuredContent.length > 0 && (
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-bold text-gabriel-dark text-center mb-6">
                Contenido Destacado
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {data.featuredContent.map((content, index) => {
                  // Determinar colores e iconos basados en el tipo y color
                  const getIcon = () => {
                    if (content.icon === 'Mic') return Mic;
                    if (content.icon === 'Headphones') return Headphones;
                    return Video;
                  };

                  const Icon = getIcon();

                  const colorClasses = {
                    red: {
                      bg: 'bg-red-100',
                      hover: 'hover:bg-red-500',
                      text: 'text-red-600',
                      border: 'hover:border-red-300',
                      hoverText: 'group-hover:text-red-600'
                    },
                    blue: {
                      bg: 'bg-blue-100',
                      hover: 'hover:bg-blue-500',
                      text: 'text-blue-600',
                      border: 'hover:border-blue-300',
                      hoverText: 'group-hover:text-blue-600'
                    },
                    green: {
                      bg: 'bg-green-100',
                      hover: 'hover:bg-green-600',
                      text: 'text-green-700',
                      border: 'hover:border-green-300',
                      hoverText: 'group-hover:text-green-600'
                    }
                  };

                  const colors = colorClasses[content.color as keyof typeof colorClasses] || colorClasses.red;

                  if (content.type === 'video') {
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`group bg-white rounded-xl p-6 border border-gray-100 ${colors.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                      >
                        <a
                          href={content.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 ${colors.hover} transition-colors`}>
                              <Icon size={28} className={`${colors.text} group-hover:text-white transition-colors`} />
                            </div>
                            <div className="flex-1">
                              <h4 className={`text-lg font-semibold text-gabriel-dark mb-2 ${colors.hoverText} transition-colors`}>
                                {content.title}
                              </h4>
                              <p className="text-gabriel-gray text-sm mb-3">
                                {content.description}
                              </p>
                              <div className={`flex items-center ${colors.text} font-medium text-sm group-hover:gap-2 transition-all`}>
                                <Play size={16} />
                                <span className="ml-1">Ver en YouTube</span>
                                <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </div>
                          </div>
                        </a>
                      </motion.div>
                    );
                  } else if (content.type === 'podcast') {
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`group bg-white rounded-xl p-6 border border-gray-100 ${colors.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 ${colors.hover} transition-colors`}>
                            <Icon size={28} className={`${colors.text} group-hover:text-white transition-colors`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gabriel-dark mb-2">
                              {content.title}
                            </h4>
                            <p className="text-gabriel-gray text-sm">
                              {content.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                          <a
                            href={content.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                          >
                            <Youtube size={16} />
                            YouTube
                          </a>
                          <a
                            href={content.spotifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                          >
                            <Headphones size={16} />
                            Spotify
                          </a>
                        </div>
                      </motion.div>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>
          )}

          {/* Social Links */}
          <div className="flex justify-center">
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                variants={itemVariants}
                className="group w-full max-w-sm"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-white rounded-xl p-6 border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color} group`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${social.bgColor} rounded-xl flex items-center justify-center mb-4 ${social.color} transition-colors`}
                  >
                    <social.icon
                      size={28}
                      className={`${social.iconColor} transition-colors`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gabriel-dark mb-2 group-hover:text-white transition-colors">
                    {social.name}
                  </h3>

                  <p className="text-gabriel-gray text-sm group-hover:text-white/80 transition-colors">
                    {social.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Event Inquiries Section */}
          {eventInquiry && (
            <motion.div variants={itemVariants} className="mt-12">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto text-center">
                <h3 className="heading-3 text-gabriel-dark mb-4">
                  {eventInquiry.title}
                </h3>
                <p className="text-gabriel-gray mb-6 max-w-2xl mx-auto">
                  {eventInquiry.description}
                </p>

                <a
                  href={`https://wa.me/56932323094?text=${encodeURIComponent(
                    eventInquiry.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg group inline-flex items-center"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          )}

          {/* Services Section - Toggle Button */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-4xl mx-auto text-center">
              <button
                onClick={toggleServices}
                className="btn btn-outline btn-lg flex items-center gap-2 mx-auto"
              >
                {showServices ? "Ocultar Servicios" : "Ver Servicios"}
                {showServices ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
            </div>
          </motion.div>

          {/* Services Section - Collapsible Content */}
          <AnimatePresence>
            {showServices && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <Services data={servicesData} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
