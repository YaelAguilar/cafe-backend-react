import React from "react";

const PHeroSection = () => {
  return (
    <section id="inicio" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conecta tu producción de café con comerciantes de todo el mundo
          </h1>
          <p className="text-gray-600 mb-6">
            Expande tu mercado, obtén mejores precios y establece relaciones comerciales duraderas con compradores que valoran la calidad de tu café.
          </p>
          <div className="flex space-x-4">
            <button className="btn btn-primary btn-large">Comenzar Ahora</button>
            <button className="btn btn-outline btn-large">Conocer Más</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Productor de café"
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PHeroSection;
