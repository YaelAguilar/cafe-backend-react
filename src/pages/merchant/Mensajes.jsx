"use client"

import { useState } from "react"
import Header from "../../components/common/layout/Header"
import Footer from "../../components/common/layout/Footer"
import SectionTitle from "../../components/common/ui/SectionTitle"
import ContactList from "../../components/features/messaging/ContactList"
import ChatHeader from "../../components/features/messaging/ChatHeader"
import MessageList from "../../components/features/messaging/MessageList"
import ChatInput from "../../components/features/messaging/ChatInput"

function Messages() {
  const [activeContact, setActiveContact] = useState(0)

  const contacts = [
    {
      id: 1,
      name: "Cooperativa El Triunfo",
      avatar:
        "https://images.unsplash.com/photo-1591287083773-9a52e5e93fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      lastMessage: "Claro, podemos enviar muestras la próxima...",
      time: "10:30",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Finca Los Altos",
      avatar:
        "https://images.unsplash.com/photo-1599639668273-c57372e7a82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      lastMessage: "Gracias por su interés en nuestro café...",
      time: "Ayer",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Productores Unidos",
      avatar:
        "https://images.unsplash.com/photo-1611174797136-5d9f8d2b1f62?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      lastMessage: "El precio incluye el transporte hasta...",
      time: "Lun",
      unread: 0,
      online: false,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Buenos días, gracias por contactarnos. Tenemos disponibilidad de café arábica de altura con notas frutales y chocolate.",
      time: "09:45",
    },
    {
      id: 2,
      sender: "me",
      text: "Hola, me interesa conocer más detalles. ¿Qué volumen pueden manejar mensualmente y cuáles son sus precios?",
      time: "10:02",
    },
    {
      id: 3,
      sender: "them",
      text: "Actualmente podemos suministrar hasta 1,000 kg mensuales. El precio es de $95 por kg para pedidos superiores a 500 kg.",
      time: "10:15",
    },
    {
      id: 4,
      sender: "me",
      text: "Suena bien. ¿Podrían enviarme muestras para evaluar la calidad antes de hacer un pedido grande?",
      time: "10:20",
    },
    {
      id: 5,
      sender: "them",
      text: "Claro, podemos enviar muestras la próxima semana. ¿Podría proporcionarnos su dirección de envío?",
      time: "10:30",
    },
  ]

  const handleSendMessage = (text) => {
    console.log("Mensaje enviado:", text)
  }

  return (
    <>
      <Header />
      <section className="messaging-section py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <SectionTitle>Sistema de Mensajería</SectionTitle>
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden h-[600px]">
            <ContactList contacts={contacts} activeContactIndex={activeContact} onContactSelect={setActiveContact} />

            <div className="flex-1 flex flex-col">
              <ChatHeader contact={contacts[activeContact]} />
              <MessageList messages={messages} />
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Messages

