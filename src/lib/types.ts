// src/lib/types.ts - Actualizado para Gabriel Colmenares

export interface SiteData {
  // Info básica del cliente/sitio
  site: {
    name: string;
    business: string;
    tagline: string;
    location: string;
  };

  // Hero section adaptado para Gabriel
  hero: {
    headline: string;
    subtitle: string;
    description: string;
    primaryCTA: {
      text: string;
      action: string;
    };
    secondaryCTA: {
      text: string;
      action: string;
    };
    backgroundImage?: string;
  };

  // About section para su historia personal
  about: {
    title: string;
    subtitle: string;
    description: string;
    achievements: string[];
    image?: string;
  };

  // Services adaptados para sus servicios creativos
  services: {
    id: string;
    title: string;
    description: string;
    icon: string;
    featured: boolean;    // Para destacar Stand Up Comedy
    premium: boolean;     // Para servicios premium
  }[];

  // Portfolio de casos de éxito
  portfolio: {
    title: string;
    description: string;
    result: string;
    image?: string;
  }[];

  // Contact info completo
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    instagram: string;
    youtube?: string;
    spotify?: string;
  };

  // Próximos shows (placeholder para Passline)
  shows?: {
  title: string;
  subtitle: string;
  mainShows: {
    id: string;
    title: string;
    description: string;
    date: string;
    venue: string;
    status: string;
    statusColor: string;
    bgGradient: string;
    showImage?: string;
    ticketsUrl: string;
    features: string[];
  }[];
  eventInquiry: {
    title: string;
    description: string;
    whatsappMessage: string;
  };
  // Mantienes el featured_show por si lo usas en otro lado
  featured_show?: {
    title: string;
    description: string;
    target_tickets: number;
    cta_text: string;
    cta_link: string;
  };
};
}

// Interfaces específicas para cada componente actualizado
export interface HeroProps {
  data: SiteData['hero'];
  site: SiteData['site'];
  className?: string;
}

export interface AboutProps {
  data: SiteData['about'];
  className?: string;
}

export interface ServicesProps {
  data: SiteData['services'];
  className?: string;
}

export interface PortfolioProps {
  data: SiteData['portfolio'];
  className?: string;
}

export interface ShowsProps {
  data: SiteData['shows'];
  className?: string;
}

export interface ContactProps {
  data: SiteData['contact'];
  className?: string;
}

// Mantenemos FAQ si Gabriel lo necesita después
export interface FAQProps {
  data: {
    question: string;
    answer: string;
  }[];
  className?: string;
}

// Interface genérica
export interface BaseComponentProps<T = unknown> {
  data: T;
  className?: string;
}

// Types para el header y footer actualizados
export interface HeaderData {
  name: string;
  business: string;
  whatsapp: string;
  instagram: string;
}

export interface FooterData {
  name: string;
  business: string;
  location: string;
  whatsapp: string;
  email: string;
  instagram: string;
  youtube?: string;
  spotify?: string;
}