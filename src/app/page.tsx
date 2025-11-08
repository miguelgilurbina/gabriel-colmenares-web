// src/app/page.tsx - Página principal para Gabriel Colmenares

import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Services from "@/components/Services";
// import Portfolio from "@/components/Portfolio";
import Shows from "@/components/Shows";
import Contact from "@/components/Contact";

// Import Gabriel's template data
import templateData from "@/data/template.json";
import { SiteData } from "@/lib/types";

// Type assertion para los datos importados
const siteData = templateData as SiteData;

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/notebook-background.jpg')",
        }}
      >
        <div className="pt-20 bg-white/70 backdrop-blur-[0.5px] min-h-screen">
          {" "}
          {/* Offset for fixed header */}
          {/* Hero Section */}
          <Hero data={siteData.hero} site={siteData.site} />
          {/* About Section - Su historia */}
          {/* <About data={siteData.about} /> */}
          {/* Portfolio Section - Casos de éxito y contenido */}
          {/* <Portfolio data={siteData.portfolio} /> */}
          {/* Shows Section - Próximos shows (placeholder para Passline) */}
          <Shows data={siteData.shows} />
          {/* Contact Section - Contacto directo */}
          <Contact
            data={siteData.contact}
            eventInquiry={siteData.shows?.eventInquiry}
            servicesData={siteData.services}
          />
        </div>
      </div>
    </main>
  );
}
