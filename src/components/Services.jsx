import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Globe,
  ShoppingCart,
  Building,
  ArrowRight,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

const Services = () => {
  const sectionRef = useScrollReveal();

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-indigo-400" />,
      title: "Landing Pages Efectivas",
      description:
        "Páginas bien optimizadas para aumentar tus ventas, conseguir más contactos, mejorar tu presencia online. Diseño persuasivo con llamadas a la acción estratégicas.",
      features: [
        "Diseño responsive",
        "Optimización SEO",
        "Formularios de contacto",
        "Integración con analytics",
      ],
    },
    {
      icon: <Building className="w-12 h-12 text-indigo-400" />,
      title: "Sitios Web Institucionales",
      description:
        "Presencia digital profesional para tu empresa. Sitios web corporativos que transmiten confianza y credibilidad a tus clientes.",
      features: [
        "Diseño profesional",
        "Gestión de contenido",
        "Múltiples páginas",
        "Panel administrativo",
      ],
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-indigo-400" />,
      title: "Tiendas E-commerce Modernas",
      description:
        "Tiendas online completas con carrito de compras, pasarelas de pago y gestión de inventario. Soluciones e-commerce a medida.",
      features: [
        "Carrito de compras",
        "Pasarelas de pago",
        "Gestión de productos",
        "Panel de administración",
      ],
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 hero-bg">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="scroll-reveal text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Servicios de Desarrollo Web
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones digitales completas para impulsar tu negocio online.
              Desarrollo web a medida con tecnologías modernas y diseño
              profesional.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="service-card glass-effect border-white/10 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-white/5 backdrop-blur-sm w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-200">
                        <Zap className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    onClick={scrollToContact}
                  >
                    Solicitar cotización
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              100% Responsive
            </h3>
            <p className="text-gray-400">
              Diseños que se adaptan perfectamente a todos los dispositivos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Carga Rápida
            </h3>
            <p className="text-gray-400">
              Optimización avanzada para máximo rendimiento
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Seguridad Total
            </h3>
            <p className="text-gray-400">
              Protección avanzada contra amenazas digitales
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
