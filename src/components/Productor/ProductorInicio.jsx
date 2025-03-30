// import { useState } from "react";
import {
  UserPlus,
  Coffee,
  Search,
  MessageSquareDotIcon
} from "lucide-react";
import HeaderProductor from "./HeaderProductor";
import HeroProductor from "./HeroProductor";
import FeaturesSection from "../FeaturesSection";
import Testimonios from "./Testimonios";
import FooterProductor from "./FooterProductor";

const ProductorInicio = () => {

  const stats = [
    { number: "1,500+", label: "Productores Registrados" },
    { number: "850+", label: "Comerciantes Activos" },
    { number: "3,200+", label: "Conexiones Exitosas" },
    { number: "25%", label: "Aumento Promedio en Ingresos" },
  ];

  // Datos para la sección de cómo funciona
  const steps = [
    {
      number: 1,
      title: "Regístrate y Crea tu Perfil",
      description:
        "Completa tu perfil con información detallada sobre tu finca, métodos de producción y certificaciones.",
      icon: <UserPlus className="mx-auto" />,
    },
    {
      number: 2,
      title: "Publica tus Lotes de Café",
      description:
        "Crea ofertas detalladas de tus lotes disponibles con información sobre variedad, proceso y calidad.",
      icon: <Coffee className="mx-auto" />,
    },
    {
      number: 3,
      title: "Conecta con Compradores",
      description:
        "Nuestro sistema te emparejará con comerciantes interesados en tu tipo de café.",
      icon: <Search className="mx-auto" />,
    },
    {
      number: 4,
      title: "Negocia y Cierra Tratos",
      description:
        "Comunícate directamente, negocia términos y establece relaciones comerciales duraderas.",
      icon: <MessageSquareDotIcon className="mx-auto" />,
    },
  ];

  return (
    <>
      <HeaderProductor />
      <main>
        <HeroProductor />
        <FeaturesSection />

        {/* Sección de Estadísticas */}
        <section className="bg-teal-500 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-gray-600 text-6xl font-bold text-center mb-10">
              Impulsando el Comercio Justo del Café
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-lg p-8 transition-transform duration-300 hover:-translate-y-2.5"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonios/>

        {/* Sección de Cómo Funciona */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Cómo Funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="text-center relative p-8 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2.5"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="text-4xl text-teal-500 mb-6">{step.icon}</div>
                  <h3 className="text-xl mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FooterProductor/>
      </main>
    </>
  );
};

export default ProductorInicio;
