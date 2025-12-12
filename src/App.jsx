import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Clyver Studio - Desarrollo Web Profesional | Landing Pages, Sitios Web
          y E-commerce
        </title>
        <meta
          name="description"
          content="Desarrollo web profesional con Clyver Studio. Creamos landing pages efectivas, sitios web institucionales y tiendas e-commerce modernas que impulsan tu presencia digital y hacen crecer tu negocio."
        />
        <meta
          name="keywords"
          content="desarrollo web, landing page, sitio web institucional, tienda online, e-commerce, diseño web profesional, presencia digital, desarrollo a medida"
        />
        <meta
          property="og:title"
          content="Code M - Desarrollo Web Profesional"
        />
        <meta
          property="og:description"
          content="Transformamos ideas en experiencias digitales extraordinarias. Desarrollo web profesional que impulsa el crecimiento de tu negocio."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://codem.dev" />
      </Helmet>

      <div className="min-h-screen bg-[#0a0a1a]">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </div>
    </>
  );
}

export default App;
