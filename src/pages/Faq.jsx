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
      question: "¿Cómo puedo editar mi perfil de productor?",
      answer:
        "Para editar tu perfil de productor, inicia sesión en tu cuenta, ve a la sección 'Mi Perfil' y haz clic en 'Editar Perfil'. Allí podrás actualizar tu información personal, detalles de producción, fotos, certificaciones y datos de contacto. Recuerda guardar los cambios al finalizar.",
    },
    {
      question: "¿Cómo actualizo mi catálogo de productos?",
      answer:
        "Para actualizar tu catálogo, dirígete a la sección 'Mi Perfil' y selecciona la pestaña 'Productos'. Allí podrás agregar nuevos productos, editar los existentes o eliminar aquellos que ya no ofreces. Puedes incluir fotos, descripciones detalladas, precios y disponibilidad.",
    },
    {
      question: "¿Cuánto tiempo toma el proceso de emparejamiento?",
      answer:
        "El sistema de emparejamiento es automático y muestra resultados inmediatos. Sin embargo, recomendamos dedicar tiempo a revisar los perfiles de los proveedores sugeridos para encontrar la mejor opción para tu negocio.",
    },
    {
      question: "¿Cómo puedo destacar mi perfil entre otros productores?",
      answer:
        "Para destacar tu perfil, asegúrate de completar toda la información solicitada, incluir fotos de alta calidad de tus productos, detallar tus certificaciones, mantener actualizada tu disponibilidad y responder rápidamente a los mensajes. También puedes considerar suscribirte a nuestro plan Premium que ofrece mayor visibilidad.",
    },
    {
      question: "¿La plataforma cobra comisión por las transacciones?",
      answer:
        "No, CaféConnect no cobra comisión por las transacciones realizadas entre comerciantes y proveedores. Nuestro modelo de negocio se basa en suscripciones premium que ofrecen funcionalidades adicionales.",
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

