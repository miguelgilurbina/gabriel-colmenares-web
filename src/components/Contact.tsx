// src/components/Contact.tsx - Minimal Social Links
"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Headphones } from "lucide-react";
import { ContactProps } from "@/lib/types";

export default function Contact({ data, className = "" }: ContactProps) {
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
    {
      name: "YouTube",
      description: "@uncolmenares",
      icon: Youtube,
      href: data.youtube,
      color: "hover:bg-red-500",
      bgColor: "bg-red-100",
      iconColor: "text-red-600 group-hover:text-white",
    },
    {
      name: "Dialogo Interno",
      description: "Escúchalo en Spotify",
      icon: Headphones,
      href: data.spotify,
      color: "hover:bg-green-600",
      bgColor: "bg-green-100",
      iconColor: "text-green-700 group-hover:text-white",
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

          {/* Social Links Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                variants={itemVariants}
                className="group"
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
        </motion.div>
      </div>
    </section>
  );
}
