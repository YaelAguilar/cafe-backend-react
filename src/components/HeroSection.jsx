function HeroSection() {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Conectamos comerciantes con los mejores productores de café
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Encuentra proveedores confiables y abastece tu negocio con café de calidad según tus necesidades
              específicas.
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
              src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Comerciante de café"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default HeroSection
  
  