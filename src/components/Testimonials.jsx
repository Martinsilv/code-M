import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const sectionRef = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "María González",
      company: "polirubro",
      text: "Me ayudó completamente. Las ventas aumentaron en los primeros 3 meses no tengo dudas de que su trabajo es excepcional.",
      rating: 5,
    },
    {
      name: "Carlos",
      company: "Restaurante",
      text: "El menu digital que desarrolló para mi restaurante es simplemente perfecto. Elegante, funcional y ha mejorado mucho nuestra presencia digital.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      company: "Clínica Dental",
      text: "El sitio web que creó para nuestra clínica es profesional , muy prolijo y facilita a los clientes a encontrar información de nuestros servicios y a contactarse.",
      rating: 5,
    },
    {
      name: "Patricia Silva",
      company: "Agencia de Viajes",
      text: "exelente trabajo y a tiempo, necesitabamos con urgencia un sitio que pueda brindar informacion acerca de nustros viajes, y en menos de una semana ya lo tenia terminado, recomendadisimo!!.",
      rating: 5,
    },
    {
      name: "Sofía Ledesma",
      company: "Tienda Online de Ropa",
      text: "Confié en Clyver para hacer mi tienda online y fue lo mejor que pude hacer. El diseño quedó hermoso  y todo funciona de maravilla. al principio tuvimos que hacer unos cambios y eso se demoro un poco la entrega de la web pero muy sastifecho con el trabajo. ¡Muchas gracias!",
      rating: 4,
    },
    {
      name: "Mariano",
      company: "landing page Arquitectura",
      text: "Necesitaba un sitio institucional para mostrar mis trabajos y que la gente me contacte más fácil. Me encantó cómo quedó, todo limpio, profesional y rápido de navegar.",
      rating: 5,
    },
    {
      name: "Luciana",
      company: "Comidas Saludables",
      text: "No tenía idea de cómo arrancar con una página para vender. Me armaron una tienda con todo listo, y me acompañaron en cada paso, muy buena predisposición.",
      rating: 5,
    },
    {
      name: "Clara Fernández",
      company: "Freelance Marketing",
      text: "Trabajo con muchos diseñadores web, pero acá se destacaron por la atención al detalle. Armamos una landing page que funcionó espectacular.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 segundos para un movimiento más continuo

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, currentIndex]);

  const handleArrowClick = () => {
    setIsAutoPlaying(false);
  };

  const handleCardClick = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="testimonials" className="py-20 hero-bg">
      <div className="container mx-auto  px-4">
        <div ref={sectionRef} className="scroll-reveal text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Lo que dicen mis clientes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La satisfacción de mis clientes es mi mayor logro. Descubre por
              qué confían en Clyver Studio para sus proyectos de desarrollo web.
            </p>
          </motion.div>
        </div>

        {/* Carrusel Desktop */}
        <div
          className="hidden lg:block relative  p-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-3 gap-8 py-2">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === 0 || index === 2 ? 0.3 : 1,
                    x: 0,
                    scale: index === 0 || index === 2 ? 0.95 : 1,
                  }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={
                    index === 0 || index === 2
                      ? "pointer-events-none"
                      : "cursor-pointer"
                  }
                  onClick={index === 1 ? handleCardClick : undefined}
                >
                  <Card className="testimonial-card glass-effect border-white/10 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Quote className="w-8 h-8 text-indigo-400 mr-3" />
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-200 mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center">
                        <div>
                          <h4 className="font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flechas de navegación Desktop */}
          <button
            onClick={() => {
              handleArrowClick();
              prevSlide();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              handleArrowClick();
              nextSlide();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carrusel Mobile */}
        <div
          className="lg:hidden relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onClick={handleCardClick}
                className="cursor-pointer"
              >
                <Card className="testimonial-card glass-effect border-white/10 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-indigo-400 mr-3" />
                      <div className="flex">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          )
                        )}
                      </div>
                    </div>

                    <p className="text-gray-200 mb-6 italic leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div className="flex items-center">
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flechas de navegación Mobile */}
          <button
            onClick={() => {
              handleArrowClick();
              prevSlide();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              handleArrowClick();
              nextSlide();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-indigo-900/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/60">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para ser el próximo caso de éxito?
            </h3>
            <p className="text-gray-300 mb-6">
              Únete a más de 50 clientes satisfechos que han transformado su
              presencia digital con Clyver Studio
            </p>
            <div className="flex justify-center items-center gap-8 text-gray-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-sm">Satisfacción del cliente</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5.0</div>
                <div className="text-sm">Calificación promedio</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">48h</div>
                <div className="text-sm">Tiempo de respuesta</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
