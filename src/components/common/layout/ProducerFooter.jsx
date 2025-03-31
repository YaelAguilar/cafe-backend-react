import React from "react"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const ProducerFooter = () => {
  return (
    <footer className="bg-gray-800 text-white pt-20 pb-8">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap gap-8 mb-12">
          <div className="flex-1 min-w-[300px]">
            <div className="flex items-center mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20desde%202025-03-27%2005-13-48-e2hTCeME7SE3XoLxy1UpQxqNRgWNa7.png"
                alt="Logo"
                className="h-[50px] mr-2.5"
              />
              <h2 className="text-2xl font-bold">CaféConnect</h2>
            </div>
            <p className="text-gray-300">
              Conectando productores con los mejores comerciantes de café.
            </p>
          </div>

          <div className="flex-2 flex flex-wrap gap-8">
            {[
              {
                title: "Plataforma",
                links: [
                  ["Inicio", "productorview"],
                  ["Mi Perfil", "productorprofile"],
                  ["Mis Lotes", "productor-lotes.html"],
                  ["Comerciantes", "merchant-interested"],
                  ["Mensajes", "productor-mensajes.html"],
                ],
              },
              {
                title: "Recursos",
                links: [
                  ["Blog", "#"],
                  ["Guías", "#"],
                  ["Eventos", "#"],
                  ["Webinars", "#"],
                ],
              },
              {
                title: "Empresa",
                links: [
                  ["Sobre Nosotros", "#"],
                  ["Equipo", "#"],
                  ["Carreras", "#"],
                  ["Contacto", "#"],
                ],
              },
              {
                title: "Legal",
                links: [
                  ["Términos de Servicio", "#"],
                  ["Política de Privacidad", "#"],
                  ["Política de Cookies", "#"],
                  ["Aviso Legal", "#"],
                ],
              },
            ].map((section, index) => (
              <div key={index} className="flex-1 min-w-[150px]">
                <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
                <ul>
                  {section.links.map(([text, href], i) => (
                    <li key={i} className="mb-3">
                      <a
                        href={href}
                        className="text-gray-300 hover:text-teal-400 transition-colors"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm md:text-base text-center md:text-left w-full md:w-auto">
            &copy; 2025 CaféConnect. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-teal-500 hover:-translate-y-1 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ProducerFooter