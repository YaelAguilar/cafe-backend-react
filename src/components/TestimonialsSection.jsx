"use client"

import { useState } from "react"

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      content:
        "Gracias a CaféCollect hemos encontrado proveedores confiables que cumplen con nuestros estándares de calidad. El proceso de verificación nos da mucha tranquilidad.",
      author: "Carlos Mendoza",
      company: "Cafetería El Aroma",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      content:
        "La plataforma nos ha permitido expandir nuestro negocio al conectarnos con productores de diferentes regiones. El sistema de mensajería facilita mucho la negociación.",
      author: "Laura Jiménez",
      company: "Distribuidora Café Premium",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      content:
        "Como tostadores, necesitábamos encontrar café de especialidad con características muy específicas. CaféCollect nos ha ayudado a encontrar exactamente lo que buscábamos.",
      author: "Miguel Ángel Rodríguez",
      company: "Tostadores Artesanales",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-500 after:rounded">
          Lo que dicen nuestros usuarios
        </h2>

        <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg min-w-[350px] flex-1">
              <div className="mb-8 relative px-6">
                <p className="text-gray-600 italic relative">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-[60px] h-[60px] rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{testimonial.author}</h4>
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
              className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-teal-500" : "bg-gray-300"}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

