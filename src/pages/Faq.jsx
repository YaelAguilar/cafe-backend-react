"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionTitle from "../components/ui/SectionTitle"
import FaqItem from "../components/faq/FaqItem"

function Faq() {
  const [activeItem, setActiveItem] = useState(0)

  const faqItems = [
    {
      question: "¿Cómo funciona el proceso de verificación?",
      answer:
        "El proceso de verificación consta de 5 pasos: registro básico, documentación comercial, verificación de identidad, revisión final y obtención del perfil verificado. Cada paso requiere información específica que será validada por nuestro equipo.",
    },
    {
      question: "¿Qué documentos necesito para verificar mi negocio?",
      answer:
        "Necesitarás proporcionar documentos como: registro comercial, RFC, comprobante de domicilio comercial, identificación oficial del representante legal y, en algunos casos, referencias comerciales.",
    },
    {
      question: "¿Cómo se garantiza la calidad de los proveedores?",
      answer:
        "Todos los proveedores pasan por un riguroso proceso de verificación similar al de los comerciantes. Además, contamos con un sistema de calificaciones y reseñas que permite a los usuarios compartir sus experiencias.",
    },
    {
      question: "¿Cuánto tiempo toma el proceso de emparejamiento?",
      answer:
        "El sistema de emparejamiento es automático y muestra resultados inmediatos. Sin embargo, recomendamos dedicar tiempo a revisar los perfiles de los proveedores sugeridos para encontrar la mejor opción para tu negocio.",
    },
    {
      question: "¿La plataforma cobra comisión por las transacciones?",
      answer:
        "No, CaféCollect no cobra comisión por las transacciones realizadas entre comerciantes y proveedores. Nuestro modelo de negocio se basa en suscripciones premium que ofrecen funcionalidades adicionales.",
    },
  ]

  const toggleItem = (index) => {
    setActiveItem(index === activeItem ? null : index)
  }

  return (
    <>
      <Header />
      <section className="faq-section py-20 bg-white">
        <div className="container mx-auto px-5">
          <SectionTitle>Preguntas Frecuentes</SectionTitle>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isActive={activeItem === index}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Faq

