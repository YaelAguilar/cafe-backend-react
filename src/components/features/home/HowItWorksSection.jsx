import React from "react";
import { UserPlus, Coffee, Search, Handshake } from "lucide-react";

function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Cómo Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-teal-500 text-white font-bold mb-4">
              1
            </div>
            <div className="text-teal-500 flex justify-center mb-4">
              <UserPlus size={36} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Regístrate y Crea tu Perfil</h3>
            <p className="text-gray-600">
              Completa tu perfil con información detallada sobre tu finca, métodos de producción y certificaciones.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-teal-500 text-white font-bold mb-4">
              2
            </div>
            <div className="text-teal-500 flex justify-center mb-4">
              <Coffee size={36} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Publica tus Lotes de Café</h3>
            <p className="text-gray-600">
              Crea ofertas detalladas de tus lotes disponibles con información sobre variedad, proceso y calidad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-teal-500 text-white font-bold mb-4">
              3
            </div>
            <div className="text-teal-500 flex justify-center mb-4">
              <Search size={36} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Conecta con Compradores</h3>
            <p className="text-gray-600">
              Nuestro sistema te emparejará con comerciantes interesados en tu tipo de café.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-teal-500 text-white font-bold mb-4">
              4
            </div>
            <div className="text-teal-500 flex justify-center mb-4">
              <Handshake size={36} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Negocia y Cierra Tratos</h3>
            <p className="text-gray-600">
              Comunícate directamente, negocia términos y establece relaciones comerciales duraderas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
