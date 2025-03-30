import React, { useState } from "react"

function PTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      content:
        "Gracias a CaféConnect hemos logrado conectar con compradores internacionales que valoran nuestro café orgánico y pagan precios justos por nuestra producción.",
      author: "María Hernández",
      company: "Cooperativa Café Altura, Chiapas",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      content:
        "La plataforma nos ha permitido mostrar nuestras certificaciones y métodos sostenibles, lo que ha atraído a compradores que comparten nuestros valores y visión.",
      author: "Roberto Sánchez",
      company: "Finca El Paraíso, Veracruz",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      content:
        "Desde que nos unimos a CaféConnect, hemos eliminado intermediarios y aumentado nuestros márgenes en un 30%. La comunicación directa con los compradores ha sido clave.",
      author: "Juan Carlos Méndez",
      company: "Asociación Café de Altura, Oaxaca",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-500 after:rounded">
          Lo que dicen nuestros productores
        </h2>

        <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg min-w-[350px] flex-1"
            >
              <div className="mb-8 relative px-6">
                <p className="text-gray-600 italic relative">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-[60px] h-[60px] rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-teal-500" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PTestimonialsSection
