const HeroProductor = () => {
    return (
      <section id="inicio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Conecta tu producción de café con comerciantes de todo el mundo
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expande tu mercado, obtén mejores precios y establece relaciones comerciales duraderas con compradores que valoran la calidad de tu café.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-teal-500 text-white font-semibold rounded text-lg hover:bg-teal-600 transition-colors">
                Comenzar Ahora
              </button>
              <button className="px-6 py-3 border-2 border-teal-500 text-teal-500 font-semibold rounded text-lg hover:bg-teal-500 hover:text-white transition-colors">
                Conocer Más
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Productor de café"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroProductor;
  