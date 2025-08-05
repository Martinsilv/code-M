import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Menu, X, Home, User, Settings, Mail, Phone } from "lucide-react";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: Home, label: "Inicio", href: "#home" },
    { icon: User, label: "Sobre Nosotros", href: "#about" },
    { icon: Settings, label: "Servicios", href: "#services" },
    { icon: Mail, label: "Contacto", href: "#contact" },
    { icon: Phone, label: "Testimonios", href: "#testimonials" },
  ];

  return (
    <div className="relative">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20 cursor-pointer hover:bg-white/20 transition-colors duration-200"
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Code className="text-indigo-400" size={20} />
          <span className="font-semibold text-white">Code M</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="text-indigo-400" size={16} />
            ) : (
              <Menu className="text-indigo-400" size={16} />
            )}
          </motion.div>
        </motion.div>

        {/* Menú desplegable */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full min-w-[280px] sm:min-w-[320px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl z-50"
            >
              <div className="p-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/20 rounded-xl transition-all duration-200 group"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                      setIsOpen(false);
                    }}
                  >
                    <item.icon
                      className="text-indigo-400 group-hover:text-indigo-300 transition-colors"
                      size={18}
                    />
                    <span className="font-medium group-hover:text-indigo-100 transition-colors">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
