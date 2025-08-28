// src/components/Header.tsx - Simplified for Gabriel
"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Instagram } from "lucide-react";
import Image from "next/image";
import { HeaderData } from "@/lib/types";

interface HeaderProps {
  data: HeaderData;
  className?: string;
}

// Hook para navegación inteligente
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
  const { isHomePage, navigateToSection, navigateToPage } =
    useSmartNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navegación simplificada - solo 3 items
  const navigation = [
    {
      name: "Inicio",
      href: isHomePage ? "#hero" : "/",
      type: isHomePage ? "scroll" : "link",
    },
    {
      name: "Shows",
      href: isHomePage ? "#shows" : "/#shows",
      type: isHomePage ? "scroll" : "link",
    },
    {
      name: "Sobre Gabo",
      href: "/about",
      type: "link",
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

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 ${className}`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Gabriel - Tamaño más visible */}
          <button
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="relative w-18 h-18 md:w-16 md:h-16  sm:w-14 sm:h-14">
              <Image
                src="/images/gabriel-logo.png" // Aquí va tu logo real
                alt="Gabriel Colmenares Logo"
                fill
                className="object-contain"
                sizes="96 px"
              />
            </div>
          </button>

          {/* Desktop Navigation - Centrada con texto consistente */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-gabriel-dark font-medium text-lg hover:text-gabriel-blue transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Links - Consistentes */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`https://wa.me/${data.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gabriel-gray hover:bg-gabriel-blue hover:text-white transition-all"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href={`https://instagram.com/${data.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gabriel-gray hover:bg-gabriel-blue hover:text-white transition-all"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile menu button - Consistente */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gabriel-dark transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="text-left py-3 text-gabriel-dark hover:text-gabriel-blue transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile contact links */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex space-x-4">
                  <a
                    href={`https://wa.me/${data.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gabriel-gray hover:text-green-600 transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`https://instagram.com/${data.instagram.replace(
                      "@",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gabriel-gray hover:text-pink-600 transition-colors"
                  >
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
