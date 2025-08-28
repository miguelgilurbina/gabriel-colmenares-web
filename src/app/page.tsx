// src/app/page.tsx - Página principal para Gabriel Colmenares

import Hero from "@/components/Hero";
// import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Shows from "@/components/Shows";
import Contact from "@/components/Contact";

// Import Gabriel's template data
import templateData from "@/data/template.json";
import { SiteData } from "@/lib/types";

// Type assertion para los datos importados
const siteData = templateData as SiteData;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* Main Content */}
      <div className="pt-20">
        {" "}
        {/* Offset for fixed header */}
        {/* Hero Section */}
        <Hero data={siteData.hero} site={siteData.site} />
        {/* About Section - Su historia */}
        {/* <About data={siteData.about} />
        Shows Section - Próximos shows (placeholder para Passline) */}
        <Shows data={siteData.shows} />
        {/* Services Section - Sus servicios creativos */}
        <Services data={siteData.services} />
        {/* Contact Section - Contacto directo */}
        <Contact data={siteData.contact} />
      </div>
    </main>
  );
}
