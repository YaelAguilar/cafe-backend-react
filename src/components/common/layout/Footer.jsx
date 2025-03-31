import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
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
              <h2 className="text-2xl font-bold">CaféCollect</h2>
            </div>
            <p className="text-gray-300">Conectando comerciantes con los mejores productores de café.</p>
          </div>

          <div className="flex-2 flex flex-wrap gap-8">
            <div className="flex-1 min-w-[150px]">
              <h3 className="text-xl font-semibold mb-6">Plataforma</h3>
              <ul>
                <li className="mb-3">
                  <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/buscar" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Buscar Proveedores
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/perfil" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Mi Perfil
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/mensajes" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Mensajes
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/faq" className="text-gray-300 hover:text-teal-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 min-w-[150px]">
              <h3 className="text-xl font-semibold mb-6">Recursos</h3>
              <ul>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Guías
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Eventos
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 min-w-[150px]">
              <h3 className="text-xl font-semibold mb-6">Empresa</h3>
              <ul>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Equipo
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Carreras
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 min-w-[150px]">
              <h3 className="text-xl font-semibold mb-6">Legal</h3>
              <ul>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Términos de Servicio
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Política de Cookies
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Aviso Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <p className="text-gray-300 mb-4 md:mb-0">&copy; 2025 CaféCollect. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link
              to="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-teal-500 hover:-translate-y-1 transition-all"
            >
              <Facebook size={20} />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-teal-500 hover:-translate-y-1 transition-all"
            >
              <Twitter size={20} />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-teal-500 hover:-translate-y-1 transition-all"
            >
              <Instagram size={20} />
            </Link>
            <Link
              to="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-teal-500 hover:-translate-y-1 transition-all"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer