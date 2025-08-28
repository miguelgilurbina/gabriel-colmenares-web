// src/components/About.tsx - Gabriel's Story Notebook Style
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { AboutProps } from "@/lib/types";

export default function About({ data, className = "" }: AboutProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Testimoniales estructurados
  const testimonials = [
    {
      name: "Daniela Mujica",
      role: "Project Manager",
      company: "The Culture Makers",
      logo: "/images/logos/culture-makers.jpg",
      text: "Gabriel se prepara de manera personalizada para cada evento. Hemos colaborado en distintas ocasiones y siempre ha sido una grata experiencia. El público disfruta mucho de su capacidad de improvisar y siempre genera muy buenos comentarios.",
    },
    {
      name: "Aily Linares",
      role: "Administradora",
      company: "Izarra Publicidad",
      logo: "/images/logos/izarra.jpg",
      text: "Trabajar con Gabriel ha traído reconocimiento por nuevo público a la marca, ventas e interacción mediante redes sociales. 10/10 el trabajo en conjunto, siempre con responsabilidad, eficiencia y respeto.",
    },
    {
      name: "Gregory Ortiz",
      role: "Encargado y Docente",
      company: "Flow Barber Studio",
      logo: "/images/logos/flow-barbers.jpg",
      text: "Su participación fue realmente favorecedora: además de ser talentoso, aportó ideas frescas y mostró gran proactividad. Su buena vibra hizo que el proceso creativo fuera mucho más enriquecedor.",
    },
    {
      name: "Tony Lara",
      role: "Dueño",
      company: "Laville",
      logo: "/images/logos/laville.jpg",
      text: "Es muy grato compartir ideas y trabajar en conjunto a un artista con tanta creatividad y compromiso con la marca.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className={`min-h-screen bg-cover bg-center relative ${className}`}
      style={{
        backgroundImage: "url('/images/notebook-background.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay sutil para legibilidad */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[0.5px]"></div>

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 lg:px-8 py-20"
        >
          {/* Header - Título del cuaderno */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block transform -rotate-1 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border-l-4 border-gabriel-blue">
              <h1 className="heading-1 text-gabriel-dark mb-4 handwritten">
                La Historia de Gabriel
              </h1>
              <p className="text-gabriel-gray italic">
                *Apuntes desde Santiago, con amor y risas*
              </p>
            </div>
          </motion.div>

          {/* Narrative Sections - Como páginas de cuaderno */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Sección 1: El Comediante */}
            <motion.div
              variants={itemVariants}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg transform rotate-1 border-l-4 border-gabriel-yellow">
                  <h2 className="text-2xl font-bold text-gabriel-dark mb-4 handwritten">
                    📝 Capítulo 1: De Caracas a Santiago
                  </h2>
                  <div className="notebook-lines p-4 bg-white/50 rounded-lg">
                    <p className="text-gabriel-gray leading-relaxed mb-4">
                      Llegué a Santiago con una maleta llena de chistes
                      venezolanos y la esperanza de hacer reír a chilenos. 5
                      años después, he aprendido que el humor universal existe,
                      pero la conexión genuina es lo que realmente importa.
                    </p>
                    <p className="text-gabriel-gray leading-relaxed">
                      Desde telonear a Luis Slimming y Doctor Escalona, hasta
                      crear mi productora Alien Caribeño, cada show ha sido una
                      oportunidad de conectar sin intermediarios.{" "}
                      <strong>Todo es conmigo, todo es directo.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <Image
                    src="/images/gabriel-stage.jpg"
                    alt="Gabriel en escena"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gabriel-yellow text-gabriel-dark px-3 py-1 rounded-full text-sm font-medium transform rotate-12">
                    En mi elemento 🎤
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sección 2: El Improvisador */}
            <motion.div
              variants={itemVariants}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-1">
                <div className="relative">
                  <Image
                    src="/images/impro-3.jpg"
                    alt="Gabriel improvisando"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-gabriel-blue text-white px-3 py-1 rounded-full text-sm font-medium transform -rotate-12">
                    Crowdwork master ⚡
                  </div>
                </div>
              </div>

              <div className="order-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg transform -rotate-1 border-l-4 border-gabriel-dark">
                  <h2 className="text-2xl font-bold text-gabriel-dark mb-4 handwritten">
                    🎭 Capítulo 2: La Magia de la Improvisación
                  </h2>
                  <div className="notebook-lines p-4 bg-white/50 rounded-lg">
                    <p className="text-gabriel-gray leading-relaxed mb-4">
                      Los 4 sold outs consecutivos en Mix Chatarritas no fueron
                      casualidad. Cada show de crowdwork es único porque la
                      audiencia es única. No hay dos noches iguales.
                    </p>
                    <p className="text-gabriel-gray leading-relaxed">
                      La improvisación me ha enseñado a leer la sala, adaptarme
                      al momento y crear conexiones auténticas. Es donde mi
                      experiencia venezolana se encuentra con la realidad
                      chilena, y surge algo completamente nuevo.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sección 3: El Creativo */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg transform rotate-0 border-l-4 border-gabriel-yellow max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-gabriel-dark mb-4 handwritten">
                  🎬 Capítulo 3: Más Allá del Micrófono
                </h2>
                <div className="notebook-lines p-4 bg-white/50 rounded-lg">
                  <p className="text-gabriel-gray leading-relaxed mb-4">
                    La comedia abrió puertas a la dirección creativa, el
                    podcasting y la creación de contenido. Cada proyecto es una
                    oportunidad de contar historias desde ángulos diferentes.
                  </p>
                  <p className="text-gabriel-gray leading-relaxed">
                    Alien Caribeño no es solo una productora, es mi forma de
                    mantener esa conexión directa en cada proyecto, sea un
                    videoclip, un evento corporativo o una colaboración
                    creativa.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Testimonials Section - Como cartas en el cuaderno */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-block bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform -rotate-1">
                <h2 className="text-2xl font-bold text-gabriel-dark handwritten">
                  💌 Cartas de Colaboradores
                </h2>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Testimonial Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-200 min-h-[300px] flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                      {testimonials[currentTestimonial].logo ? (
                        <Image
                          src={testimonials[currentTestimonial].logo}
                          alt={`${testimonials[currentTestimonial].company} logo`}
                          width={70}
                          height={70}
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gabriel-blue rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {testimonials[currentTestimonial].company.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gabriel-dark">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-gabriel-gray text-sm">
                        {testimonials[currentTestimonial].role} •{" "}
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-grow flex items-center">
                    <Quote className="text-gabriel-blue/20 w-8 h-8 mr-4 flex-shrink-0" />
                    <p className="text-gabriel-gray leading-relaxed italic">
                      {testimonials[currentTestimonial].text}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gabriel-blue hover:text-white transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentTestimonial
                            ? "bg-gabriel-blue"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-gabriel-blue hover:text-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg transform rotate-1 max-w-2xl mx-auto border-l-4 border-gabriel-yellow">
              <h3 className="text-xl font-bold text-gabriel-dark mb-4 handwritten">
                ¿Listo para crear algo juntos?
              </h3>
              <p className="text-gabriel-gray mb-6">
                Cada proyecto es una nueva página en blanco. Hablemos de cómo
                podemos llenar esa página con ideas increíbles.
              </p>
              <a
                href="https://wa.me/56932323094?text=Hola Gabriel! Leí tu historia y me encantaría trabajar contigo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg group"
              >
                Escribamos juntos la próxima página
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
