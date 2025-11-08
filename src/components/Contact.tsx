// src/components/Contact.tsx - Minimal Social Links
"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Headphones, Video, Play, ExternalLink, ArrowRight } from "lucide-react";
import { ContactProps } from "@/lib/types";

export default function Contact({ data, eventInquiry, className = "" }: ContactProps) {
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
          {data.featuredContent && (
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-bold text-gabriel-dark text-center mb-6">
                Contenido Destacado
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Short Video Card */}
                {data.featuredContent.short && (
                  <motion.div
                    variants={itemVariants}
                    className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <a
                      href={data.featuredContent.short.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                          <Video size={28} className="text-red-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gabriel-dark mb-2 group-hover:text-red-600 transition-colors">
                            {data.featuredContent.short.title}
                          </h4>
                          <p className="text-gabriel-gray text-sm mb-3">
                            {data.featuredContent.short.description}
                          </p>
                          <div className="flex items-center text-red-600 font-medium text-sm group-hover:gap-2 transition-all">
                            <Play size={16} />
                            <span className="ml-1">Ver en YouTube</span>
                            <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                )}

                {/* Podcast Card */}
                {data.featuredContent.podcast && (
                  <motion.div
                    variants={itemVariants}
                    className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                        <Headphones size={28} className="text-green-700 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gabriel-dark mb-2">
                          {data.featuredContent.podcast.title}
                        </h4>
                        <p className="text-gabriel-gray text-sm">
                          {data.featuredContent.podcast.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      <a
                        href={data.featuredContent.podcast.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                      >
                        <Youtube size={16} />
                        YouTube
                      </a>
                      <a
                        href={data.featuredContent.podcast.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                      >
                        <Headphones size={16} />
                        Spotify
                      </a>
                    </div>
                  </motion.div>
                )}
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
        </motion.div>
      </div>
    </section>
  );
}
