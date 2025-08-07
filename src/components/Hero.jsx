import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Zap,
  Star,
  Barcode,
  KeyIcon,
  KeyboardIcon,
  LucideFileKey,
  PencilLine,
  LineChart,
  ArrowUpToLine,
  LucideSend,
  LucideLineChart,
} from "lucide-react";
import { DropdownMenu } from "./DropdownMenu";
import CountUp from "../components/ui/countUp";
const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Diseño web profesional";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);
  const scrollToContact = () => {
    document.getElementById("contacto").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative ">
      <div className="container mx-auto  px-10 text-center relative z-10">
        <motion.div className="max-w-4xl mx-auto">
          <div className="mt-8">
            <DropdownMenu />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 -mt-6 leading-tight h-32  text-white">
            <span>{typedText}</span>
            <span className="pulse-bar ">|</span>
          </h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          >
            Transformo ideas en experiencias digitales extraordinarias para
            hacer crecer tu negocio
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.5,
              duration: 0.6,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg h-14 font-semibold rounded-full shadow-2xl shadow-indigo-500/20 transform hover:scale-105 transition-all duration-300"
              onClick={scrollToContact}
            >
              Comenzar mi proyecto
              <ArrowRight className="ml-2" size={20} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
              onClick={() =>
                document.getElementById("servicios").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <Zap className="mr-2" size={20} />
              Ver servicios
            </Button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            className="mt-5 md:mt-12  flex justify-center items-center gap-5 text-gray-400"
          >
            <div className="text-center gi text-white text-2xl ">
              +
              <CountUp
                from={0}
                to={"45"}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text text-2xl font-semibold text-white"
              />
              <div className="text-sm text-gray-400">Proyectos completados</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center ">
              <div className="text-2xl font-bold  text-white">
                %
                <CountUp
                  from={0}
                  to={"100"}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text text-2xl font-bold text-white"
                />
              </div>
              <div className="text-sm text-gray-400">Clientes satisfechos</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold  text-white">
                <CountUp
                  from={0}
                  to={"24"}
                  separator=","
                  direction="up"
                  duration={2}
                  className="count-up-text text-2xl font-bold text-white"
                />
                /
                <CountUp
                  from={0}
                  to={"7"}
                  separator=","
                  direction="up"
                  duration={4}
                  className="count-up-text text-2xl font-bold text-white"
                />
              </div>
              <div className="text-sm">Soporte técnico</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
    </section>
  );
};
export default Hero;
