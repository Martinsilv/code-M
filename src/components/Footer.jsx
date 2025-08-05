import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-[#01010e] border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Code M</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Transformando ideas en experiencias digitales extraordinarias.
                Desarrollo web profesional que impulsa el crecimiento de tu
                negocio.
              </p>
            </motion.div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold text-white mb-4 block">
                Enlaces rápidos
              </span>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#portafolio"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Portafolio
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonios"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Servicios */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold text-white mb-4 block">
                Servicios
              </span>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">Landing Pages</span>
                </li>
                <li>
                  <span className="text-gray-400">Sitios Institucionales</span>
                </li>
                <li>
                  <span className="text-gray-400">Tiendas E-commerce</span>
                </li>
                <li>
                  <span className="text-gray-400">Desarrollo a medida</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-gray-400">Sígueme en:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center text-gray-400">
            <span>Desarrollado con</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
            <span>por</span>
            <span className="ml-1 font-semibold text-white">Code M</span>
            <span className="ml-2">© {currentYear}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
