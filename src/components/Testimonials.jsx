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
      company: "Boutique Fashion",
      text: "Code M transformó completamente mi tienda online. Las ventas aumentaron un 300% en los primeros 3 meses. Su trabajo es excepcional.",
      rating: 5,
      avatar: "Professional businesswoman smiling confidently",
    },
    {
      name: "Carlos Rodríguez",
      company: "Restaurante El Sabor",
      text: "El sitio web que desarrolló para mi restaurante es simplemente perfecto. Elegante, funcional y ha mejorado mucho nuestra presencia digital.",
      rating: 5,
      avatar: "Professional chef in restaurant uniform smiling",
    },
    {
      name: "Ana Martínez",
      company: "Clínica Dental Sonrisa",
      text: "Profesionalismo y calidad excepcional. El sistema de citas online ha revolucionado la forma en que atendemos a nuestros pacientes.",
      rating: 5,
      avatar: "Professional female doctor in white coat smiling",
    },
    {
      name: "Luis Fernández",
      company: "Tech Startup",
      text: "La landing page que creó para nuestra startup generó más leads en un mes que nuestra página anterior en todo el año. ¡Increíble!",
      rating: 5,
      avatar: "Young professional entrepreneur in modern office",
    },
    {
      name: "Patricia Silva",
      company: "Agencia de Viajes",
      text: "Trabajo impecable y atención al detalle extraordinaria. Nuestros clientes constantemente elogian lo fácil que es navegar por nuestro sitio.",
      rating: 5,
      avatar: "Professional travel agent with world map background",
    },
    {
      name: "Roberto Jiménez",
      company: "Consultoría Legal",
      text: "Code M entendió perfectamente nuestras necesidades. El sitio web transmite la seriedad y profesionalismo que buscábamos.",
      rating: 5,
      avatar: "Professional lawyer in suit with law books background",
    },
    // NUEVOS TESTIMONIOS
    {
      name: "Sofía Ledesma",
      company: "SofTrends.ar",
      text: "Confié en Code M para hacer mi tienda online y fue lo mejor que pude hacer. El diseño quedó hermoso y fácil de usar. Desde que lancé la web, las ventas subieron un montón.",
      rating: 5,
      avatar: "Young Argentine woman with long hair and stylish outfit",
    },
    {
      name: "Mariano Toledo",
      company: "Toledo Arquitectura",
      text: "Necesitaba un sitio institucional para mostrar mis trabajos y que la gente me contacte más fácil. Me encantó cómo quedó, todo limpio, profesional y rápido de navegar.",
      rating: 5,
      avatar: "Argentine male architect with glasses and blueprints",
    },
    {
      name: "Luciana Moyano",
      company: "Sabores del Alma",
      text: "No tenía idea de cómo arrancar con una página para vender. Me armaron una tienda con todo listo, y me acompañaron en cada paso. ¡Gente que realmente quiere ayudarte!",
      rating: 5,
      avatar:
        "Argentine woman entrepreneur with food jars or kitchen background",
    },
    {
      name: "Rodrigo Méndez",
      company: "Punto Legal SRL",
      text: "Contratamos a Code M para rediseñar nuestra página institucional. Cumplieron los plazos, el diseño quedó impecable, y ahora nuestra imagen online es mucho más profesional.",
      rating: 5,
      avatar: "Middle-aged Argentine businessman in suit, smiling",
    },
    {
      name: "Clara Fernández",
      company: "Freelance Marketing",
      text: "Trabajo con muchos diseñadores web, pero Code M se destacó por la atención al detalle. Armamos una landing page que funcionó espectacular.",
      rating: 5,
      avatar: "Young Argentine woman with laptop in modern workspace",
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
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-indigo-500 flex items-center justify-center">
                      <img
                        className="w-full h-full object-cover"
                        alt={`${testimonial.name} - ${testimonial.company}`}
                        src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d"
                      />
                    </div>
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
