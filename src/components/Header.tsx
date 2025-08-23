// src/components/Header.tsx - Adaptado para Gabriel Colmenares
"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Instagram } from "lucide-react";
import { HeaderData } from "@/lib/types";

interface HeaderProps {
  data: HeaderData;
  className?: string;
}

// Hook para navegación inteligente (mantenido del original)
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

export default function Header({ data, className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isHomePage, navigateToSection, navigateToPage, pathname } =
    useSmartNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navegación adaptada para Gabriel
  const navigation = [
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
  ];

  const handleNavigation = (item: (typeof navigation)[0]) => {
    if (item.type === "link") {
      if (item.href.startsWith("/#")) {
        navigateToSection(item.href.substring(1));
      } else {
        navigateToPage(item.href);
      }
    } else {
      navigateToSection(item.href);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      navigateToSection("#hero");
    } else {
      navigateToPage("/");
    }
  };

  const handleCtaClick = () => {
    if (isHomePage) {
      navigateToSection("#contact");
    } else {
      navigateToSection("#contact");
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      } ${className}`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo Gabriel - Con logo real cuando esté listo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            {/* Placeholder para logo - cambiar cuando tengamos el real */}
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">GC</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-[var(--color-text)]">
                {data.name}
              </h1>
              <p className="text-xs text-[var(--color-text-light)] hidden sm:block">
                {data.business}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="transition-colors duration-200 font-medium text-[var(--color-text)] hover:text-[var(--color-primary)]"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA - Adaptado para Gabriel */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm">
              <a
                href={`https://wa.me/${data.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-[var(--color-text-light)] hover:text-green-600 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <div className="w-px h-4 bg-gray-300"></div>
              <a
                href={`https://instagram.com/${data.instagram.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-[var(--color-text-light)] hover:text-pink-600 transition-colors"
              >
                <Instagram size={16} />
                <span className="hidden xl:inline">{data.instagram}</span>
              </a>
            </div>
            <button
              onClick={handleCtaClick}
              className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg font-medium hover:bg-[var(--color-primary)]/90 transition-colors text-sm"
            >
              Trabajemos Juntos
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="text-left transition-colors duration-200 font-medium py-2 text-[var(--color-text)] hover:text-[var(--color-primary)]"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-col space-y-3">
                  <a
                    href={`https://wa.me/${data.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[var(--color-text-light)] hover:text-green-600"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`https://instagram.com/${data.instagram.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[var(--color-text-light)] hover:text-pink-600"
                  >
                    <Instagram size={16} />
                    <span>{data.instagram}</span>
                  </a>
                  <button
                    onClick={handleCtaClick}
                    className="bg-[var(--color-primary)] text-white px-4 py-3 rounded-lg font-medium mt-4 self-start"
                  >
                    Trabajemos Juntos
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
