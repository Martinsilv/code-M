import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Eye, Code } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import imgSakura from "./assets/sakuramarket1.png";

const Portfolio = () => {
  const sectionRef = useScrollReveal();
  const { toast } = useToast();

  const portfolioItems = [
    {
      title: "E-commerce Sakura market",
      category: "Tienda Online",
      description:
        "Tienda online de productos importados con carrito de compras, animaciones personalizadas",
      image: { src: imgSakura, alt: "E-commerce Sakura market" },
      tech: ["React", "Firebase", "TailwindCSS", "JavaScript"],
      repo: "https://github.com/Martinsilv/sakuraMarket",
      site: "https://mrsakura-market.com/",
    },
    {
      title: "Restaurante Gourmet",
      category: "Sitio Institucional",
      description:
        "Sitio web elegante para restaurante con menú digital y sistema de reservas online.",
      image:
        "Elegant restaurant website with digital menu and reservation system",
      tech: ["React", "Firebase", "TailwindCSS", "JavaScript"],
    },
    {
      title: "Landing Page SaaS",
      category: "Landing Page",
      description:
        "Landing page de alta conversión para startup tecnológica con formularios optimizados.",
      image:
        "High-conversion landing page for tech startup with optimized forms",
      tech: ["React", "TailwindCSS", "Framer Motion", "Analytics"],
    },
    {
      title: "Clínica Médica",
      category: "Sitio Institucional",
      description:
        "Portal web profesional para clínica médica con sistema de citas y información de servicios.",
      image: "Professional medical clinic website with appointment system",
      tech: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    },
    {
      title: "Tienda de Electrónicos",
      category: "E-commerce",
      description:
        "Plataforma e-commerce completa para venta de productos electrónicos con comparador de precios.",
      image:
        "Complete e-commerce platform for electronics with price comparison",
      tech: ["Shopify", "Liquid", "JavaScript", "API Integration"],
    },
    {
      title: "Agencia de Marketing",
      category: "Landing Page",
      description:
        "Landing page dinámica para agencia de marketing digital con portfolio interactivo.",
      image:
        "Dynamic landing page for digital marketing agency with interactive portfolio",
      tech: ["Next.js", "GSAP", "Styled Components", "CMS"],
    },
  ];

  const handleViewProject = () => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description:
        "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  return (
    <section id="portafolio" className="py-20 hero-bg">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="scroll-reveal text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explora algunos de mis trabajos más recientes. Cada proyecto
              refleja mi compromiso con la excelencia en el desarrollo web a
              medida.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="portfolio-item relative rounded-xl overflow-hidden glass-effect border border-white/10 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  alt={`${item.title} - ${item.category}`}
                  src={item.image.src || item.image}
                />

                <div className="portfolio-overlay">
                  <div className="text-center">
                    {item.repo ? (
                      <a
                        href={item.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 mb-2"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Ver proyecto
                        </Button>
                      </a>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 mb-2"
                        onClick={handleViewProject}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver proyecto
                      </Button>
                    )}

                    {item.site ? (
                      <a
                        href={item.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent border-white/20 text-white hover:bg-white/10"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Sitio web
                        </Button>
                      </a>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent border-white/20 text-white hover:bg-white/10"
                        onClick={handleViewProject}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Sitio web
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <Code className="w-5 h-5 text-gray-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-indigo-500/20"
            onClick={() =>
              document
                .getElementById("contacto")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver más proyectos
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
