import { useState } from 'react';

const Testimonios = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      content: "Gracias a CaféConnect hemos logrado conectar con compradores internacionales que valoran nuestro café orgánico y pagan precios justos por nuestra producción.",
      author: "María Hernández",
      company: "Cooperativa Café Altura, Chiapas",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      content: "La plataforma nos ha permitido mostrar nuestras certificaciones y métodos sostenibles, lo que ha atraído a compradores que comparten nuestros valores y visión.",
      author: "Roberto Sánchez",
      company: "Finca El Paraíso, Veracruz",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      content: "Desde que nos unimos a CaféConnect, hemos eliminado intermediarios y aumentado nuestros márgenes en un 30%. La comunicación directa con los compradores ha sido clave.",
      author: "Juan Carlos Méndez",
      company: "Asociación Café de Altura, Oaxaca",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-600 text-3xl font-bold text-center mb-12">Lo que dicen nuestros productores</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-6">
              <p className="text-xl text-gray-700 italic">"{testimonials[activeIndex].content}"</p>
            </div>
            <div className="flex items-center">
              <img 
                src={testimonials[activeIndex].image || "/placeholder.svg"} 
                alt={testimonials[activeIndex].author} 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-lg">{testimonials[activeIndex].author}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].company}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-teal-500' : 'bg-gray-300'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
