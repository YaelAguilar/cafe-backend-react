import React from "react";

const PStatisticsSection = () => {
  return (
    <section className="bg-teal-500 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          Impulsando el Comercio Justo del Café
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-teal-400/40 rounded-lg py-8 px-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-white">1,500+</div>
            <div className="mt-2 text-white">Productores Registrados</div>
          </div>

          <div className="bg-teal-400/40 rounded-lg py-8 px-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-white">850+</div>
            <div className="mt-2 text-white">Comerciantes Activos</div>
          </div>

          <div className="bg-teal-400/40 rounded-lg py-8 px-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-white">3,200+</div>
            <div className="mt-2 text-white">Conexiones Exitosas</div>
          </div>

          <div className="bg-teal-400/40 rounded-lg py-8 px-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-white">25%</div>
            <div className="mt-2 text-white">Aumento Promedio en Ingresos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PStatisticsSection;
