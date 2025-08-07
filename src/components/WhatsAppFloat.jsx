import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón cuando el usuario haga scroll más de 300px
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup del event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre tus servicios de desarrollo web."
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg cursor-pointer flex items-center justify-center transition-all duration-500 hover:scale-110 ${
        showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      onClick={handleWhatsAppClick}
    >
      <MessageCircle size={30} />
    </div>
  );
};

export default WhatsAppFloat;
