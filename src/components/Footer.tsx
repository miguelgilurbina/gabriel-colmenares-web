// src/components/Footer.tsx - Minimal Footer
"use client";

import { useRouter, usePathname } from "next/navigation";
import { MessageCircle, Instagram, Youtube, Headphones } from "lucide-react";
import { FooterData } from "@/lib/types";

interface FooterProps {
  data: FooterData;
  className?: string;
}

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
  };
};

export default function Footer({ data, className = "" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { isHomePage, navigateToSection, navigateToPage } =
    useSmartNavigation();

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

  const socialLinks = [
    {
      name: "Instagram",
      href: `https://instagram.com/${data.instagram?.replace("@", "")}`,
      icon: Instagram,
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      href: data.youtube,
      icon: Youtube,
      hoverColor: "hover:text-red-500",
    },
    {
      name: "Spotify",
      href: data.spotify,
      icon: Headphones,
      hoverColor: "hover:text-green-600",
    },
  ];

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

  return (
    <footer className={`bg-white border-t border-gray-200 ${className}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="py-12">
          {/* Main Content */}
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="text-gabriel-gray hover:text-gabriel-blue transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                if (!social.href) return null;
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gabriel-gray ${social.hoverColor} hover:bg-gray-50 transition-all`}
                    title={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Copyright & Credits */}
            <div className="space-y-2 text-sm text-gabriel-gray">
              <p>
                © {currentYear} {data.name} • {data.location}
              </p>
              <p>
                Desarrollado por{" "}
                <a
                  href="https://tuweben7dias.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gabriel-blue hover:text-blue-600 transition-colors font-medium"
                >
                  tuweben7dias.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://instagram.com/${data.instagram?.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Sígueme en Instagram"
        >
          <Instagram
            size={24}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </footer>
  );
}
