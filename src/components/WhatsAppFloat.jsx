import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import whatsappAnimation from "../components/assets/logo-whatsapp-hover.json";

const WhatsAppFloat = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre tus servicios de desarrollo web."
    );
    window.open(`https://wa.me/+5493794003399?text=${message}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 h-30 w-30 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg cursor-pointer flex items-center justify-center transition-all duration-500 hover:scale-110 ${
        showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      onClick={handleWhatsAppClick}
    >
      <Lottie
        animationData={whatsappAnimation}
        loop={true}
        autoplay={true}
        style={{ width: 30, height: 30 }}
      />
    </div>
  );
};

export default WhatsAppFloat;
