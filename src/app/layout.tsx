// src/app/layout.tsx - Fixes para warnings Next.js

import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Import Gabriel's template data
import templateData from "@/data/template.json";
import { SiteData } from "@/lib/types";

// Fonts actualizados para Gabriel
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Metadata específico para Gabriel - con metadataBase
export const metadata: Metadata = {
  metadataBase: new URL("https://gabrielcolmenares.com"), // Fix para warning
  title: "Gabriel Colmenares - Comediante & Director Creativo",
  description:
    "Comediante venezolano en Santiago con 5 años de experiencia. Stand Up Comedy, Dirección Creativa, Presentación de Eventos. Todo es conmigo, todo es directo.",
  keywords:
    "Gabriel Colmenares, comediante Santiago, stand up comedy Chile, director creativo, presentador eventos, @uncolmenares, comedia venezolana",
  authors: [{ name: "Gabriel Colmenares" }],
  openGraph: {
    title: "Gabriel Colmenares - Comediante & Director Creativo",
    description:
      "5 años creando conexiones genuinas desde Santiago. Stand Up Comedy, Dirección Creativa y más. Todo es conmigo, todo es directo.",
    url: "https://gabrielcolmenares.com",
    siteName: "Gabriel Colmenares",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/gabriel-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Colmenares - Comediante & Director Creativo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Colmenares - Comediante & Director Creativo",
    description:
      "Comediante venezolano en Santiago. Stand Up Comedy, Dirección Creativa, Presentación de Eventos.",
    images: ["/images/gabriel-og.jpg"],
  },
  // Favicon
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// Viewport separado según Next.js 14 requirements
export const viewport: Viewport = {
  themeColor: "#4A90E2", // Nuevo color del logo
  colorScheme: "light",
};

// Type assertion para los datos importados
const siteData = templateData as SiteData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased min-h-screen flex flex-col bg-[var(--color-background)]`}
      >
        {/* Header con datos de Gabriel */}
        <Header
          data={{
            name: siteData.site.name,
            business: siteData.site.business,
            whatsapp: siteData.contact.whatsapp,
            instagram: siteData.contact.instagram,
          }}
        />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer con datos completos de Gabriel */}
        <Footer
          data={{
            name: siteData.site.name,
            business: siteData.site.business,
            location: siteData.site.location,
            whatsapp: siteData.contact.whatsapp,
            email: siteData.contact.email,
            instagram: siteData.contact.instagram,
            youtube: siteData.contact.youtube,
            spotify: siteData.contact.spotify,
          }}
        />
      </body>
    </html>
  );
}
