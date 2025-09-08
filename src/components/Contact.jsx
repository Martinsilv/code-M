import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sectionRef = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Inicializar EmailJS (hazlo solo una vez, preferiblemente en tu main.jsx o App.jsx)
      emailjs.init("9kQ-UbE1ydNBQ05nu"); // Reemplaza con tu Public Key

      // Configurar EmailJS con tus credenciales
      const result = await emailjs.send(
        "service_lbji7re", // Reemplaza con tu Service ID
        "template_unrrq9g", // Reemplaza con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "No proporcionado",
          service: formData.service || "No especificado",
          message: formData.message,
          to_name: "Code M", // Tu nombre o el de tu empresa
        }
      );

      console.log("Email enviado exitosamente:", result);

      toast({
        title: "¡Mensaje enviado con éxito! ✨",
        description:
          "Te contactaré dentro de las próximas 24 horas. ¡Gracias por confiar en Code M!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error detallado:", error);

      let errorMessage =
        "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.";

      // Mensajes de error más específicos
      if (error.status === 400) {
        errorMessage =
          "Error de configuración. Por favor verifica los datos del formulario.";
      } else if (error.status === 401) {
        errorMessage =
          "Error de autenticación. Verifica tu configuración de EmailJS.";
      } else if (error.status === 402) {
        errorMessage = "Límite de emails alcanzado. Contacta al administrador.";
      } else if (error.text) {
        errorMessage = `Error: ${error.text}`;
      }

      toast({
        title: "Error al enviar el mensaje",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "martinsilva510@gmail.com",
      action: "mailto:martinsilva510@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+54 9 3794-003399",
      action: "tel:+5493794003399",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: "Corrientes Capital, Argentina",
      action: null,
    },
  ];

  return (
    <section id="contacto" className="py-20 hero-bg">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="scroll-reveal text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cuéntame sobre tu proyecto y transformemos juntos tu idea en una
              realidad digital extraordinaria.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Send className="w-6 h-6 mr-3 text-indigo-400" />
                  Solicitar cotización
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-200 text-sm font-medium mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-200 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-200 text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-200 text-sm font-medium mb-2">
                        Tipo de servicio
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white"
                      >
                        <option value="" className="bg-slate-800">
                          Seleccionar servicio
                        </option>
                        <option value="landing" className="bg-slate-800">
                          Landing Page
                        </option>
                        <option value="institucional" className="bg-slate-800">
                          Sitio Institucional
                        </option>
                        <option value="ecommerce" className="bg-slate-800">
                          Tienda E-commerce
                        </option>
                        <option value="otro" className="bg-slate-800">
                          Otro
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-200 text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntame sobre tu proyecto, objetivos y cualquier detalle importante..."
                      rows={5}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 glass-effect rounded-lg border border-white/10"
                  >
                    <div className="bg-indigo-600 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-lg border border-white/10 p-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                ¿Por qué elegir Code M?
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                  Respuesta en menos de 24 horas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                  Desarrollo web a medida
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                  Soporte técnico continuo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                  Garantía de satisfacción
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
