
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre tus servicios de desarrollo web.');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div 
      className="whatsapp-float cursor-pointer flex items-center justify-center"
      onClick={handleWhatsAppClick}
    >
      <MessageCircle size={30} />
    </div>
  );
};

export default WhatsAppFloat;
