import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const sectionRef = useScrollReveal();

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

    // NUEVOS TESTIMONIOS
    {
      name: "Sofía Ledesma",
      company: "Tienda Online de Ropa",
      text: "Confié en Code M para hacer mi tienda online y fue lo mejor que pude hacer. El diseño quedó hermoso  y todo funciona de maravilla. al principio tuvimos que hacer unos cambios y eso se demoro un poco la entrega de la web pero muy sastifecho con el trabajo. ¡Muchas gracias!",
      rating: 4,
    },
    {
      name: "Mariano Toledo",
      company: "Toledo Arquitectura",
      text: "Necesitaba un sitio institucional para mostrar mis trabajos y que la gente me contacte más fácil. Me encantó cómo quedó, todo limpio, profesional y rápido de navegar.",
      rating: 5,
      avatar: "Argentine male architect with glasses and blueprints",
    },
    {
      name: "Luciana Rojas",
      company: "Sabores del Alma",
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

  return (
    <section id="testimonios" className="py-20 hero-bg">
      <div className="container mx-auto px-4">
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
              qué confían en Code M para sus proyectos de desarrollo web.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
              presencia digital con Code M
            </p>
            <div className="flex justify-center items-center gap-8 text-gray-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
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
