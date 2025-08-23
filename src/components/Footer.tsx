// src/components/Footer.tsx - Adaptado para Gabriel Colmenares
"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import {
  Heart,
  Mail,
  MessageCircle,
  Instagram,
  Youtube,
  Headphones,
  MapPin,
} from "lucide-react";
import { FooterData } from "@/lib/types";

interface FooterProps {
  data: FooterData;
  className?: string;
}

// Hook reutilizable para navegación inteligente
const useSmartNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const navigateToSection = (href: string) => {
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  const navigateToPage = (href: string) => {
    router.push(href);
  };

  return {
    isHomePage,
    navigateToSection,
    navigateToPage,
    pathname,
  };
};

export default function Footer({ data, className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { isHomePage, navigateToSection, navigateToPage } =
    useSmartNavigation();

  // Navegación adaptativa para Gabriel
  const navigation = {
    main: [
      {
        name: "Inicio",
        href: isHomePage ? "#hero" : "/",
        type: isHomePage ? "scroll" : "link",
      },
      {
        name: "Mi Historia",
        href: isHomePage ? "#about" : "/#about",
        type: isHomePage ? "scroll" : "link",
      },
      {
        name: "Shows",
        href: isHomePage ? "#shows" : "/#shows",
        type: isHomePage ? "scroll" : "link",
      },
    ],
    support: [
      {
        name: "Servicios",
        href: isHomePage ? "#services" : "/#services",
        type: isHomePage ? "scroll" : "link",
      },
      {
        name: "Portfolio",
        href: isHomePage ? "#portfolio" : "/#portfolio",
        type: isHomePage ? "scroll" : "link",
      },
      {
        name: "Contacto",
        href: isHomePage ? "#contact" : "/#contact",
        type: isHomePage ? "scroll" : "link",
      },
    ],
  };

  const handleNavigation = (item: {
    name: string;
    href: string;
    type: string;
  }) => {
    if (item.type === "link") {
      if (item.href.startsWith("/#")) {
        navigateToSection(item.href.substring(1));
      } else {
        navigateToPage(item.href);
      }
    } else {
      navigateToSection(item.href);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      navigateToSection("#hero");
    } else {
      navigateToPage("/");
    }
  };

  // Social links adaptados para Gabriel
  const socialLinks = [
    {
      name: "Instagram",
      href: `https://instagram.com/${
        data.instagram?.replace("@", "") || "uncolmenares"
      }`,
      icon: Instagram,
    },
    {
      name: "YouTube",
      href: data.youtube,
      icon: Youtube,
    },
    {
      name: "Spotify",
      href: data.spotify,
      icon: Headphones,
    },
  ];

  return (
    <footer className={`bg-[var(--color-primary)] text-white ${className}`}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section - Gabriel */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo clickeable */}
                <button
                  onClick={handleLogoClick}
                  className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent)] to-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">GC</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{data.name}</h3>
                    <p className="text-white/80 text-sm">{data.business}</p>
                  </div>
                </button>

                <p className="text-white/90 mb-6 max-w-md">
                  Comediante venezolano en Santiago. 5 años creando conexiones
                  genuinas a través del humor y la creatividad. Todo es conmigo,
                  todo es directo.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/80">
                    <MapPin size={16} />
                    <span>{data.location}</span>
                  </div>
                  <a
                    href={`https://wa.me/${data.whatsapp?.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white/80 hover:text-green-300 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp: {data.whatsapp}</span>
                  </a>
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                    <span>{data.email}</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-6">Navegación</h4>
                <ul className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation(item)}
                        className="text-left transition-colors text-white/80 hover:text-white"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services & Social */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold mb-6">Servicios</h4>
                <ul className="space-y-3">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation(item)}
                        className="text-left transition-colors text-white/80 hover:text-white"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="mt-8">
                  <h5 className="text-sm font-medium mb-4 text-white/60">
                    Sígueme
                  </h5>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => {
                      if (!social.href) return null;

                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)]/50 transition-colors"
                          title={social.name}
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} {data.name}. Todos los derechos reservados.
            </div>

            <div className="flex items-center space-x-6 text-white/60 text-sm">
              <button
                className="hover:text-white transition-colors"
                onClick={() =>
                  handleNavigation({
                    name: "Contacto",
                    href: isHomePage ? "#contact" : "/#contact",
                    type: isHomePage ? "scroll" : "link",
                  })
                }
              >
                Términos de Uso
              </button>
              <button
                className="hover:text-white transition-colors"
                onClick={() =>
                  handleNavigation({
                    name: "Contacto",
                    href: isHomePage ? "#contact" : "/#contact",
                    type: isHomePage ? "scroll" : "link",
                  })
                }
              >
                Privacidad
              </button>
            </div>
          </motion.div>
        </div>

        {/* Made with love - Actualizado para Gabriel */}
        <div className="border-t border-white/20 py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="flex flex-col items-center justify-center space-y-2 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <span>Desarrollado con</span>
                <Heart size={16} className="text-[var(--color-accent)]" />
                <span>para conectar y hacer reír</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <a
                  href="https://tuweben7dias.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:text-white transition-colors font-medium"
                >
                  Tu Web en 7 Días
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href={`https://wa.me/${data.whatsapp?.replace(
            /\D/g,
            ""
          )}?text=Hola Gabriel! Vi tu página web y me interesa hablar contigo sobre...`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle
            size={24}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </a>
      </motion.div>
    </footer>
  );
}
