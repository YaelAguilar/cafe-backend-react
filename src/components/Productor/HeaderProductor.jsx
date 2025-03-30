import { useState } from "react"
import { Menu } from "lucide-react"

const HeaderProductor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para determinar si un link está activo basado en la URL actual
  const isActive = (path) => {
    if (typeof window !== "undefined") {
      return window.location.pathname.endsWith(path)
    }
    return false
  }

  const navLinks = [
    { href: "/productor-inicio", text: "Inicio" },
    { href: "/productor-perfil", text: "Mi Perfil" },
    { href: "/productor-lotes", text: "Mis Lotes" },
    { href: "/productor-comerciantes", text: "Comerciantes" },
    { href: "/productor-mensajes", text: "Mensajes" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20desde%202025-03-27%2005-13-48-e2hTCeME7SE3XoLxy1UpQxqNRgWNa7.png"
            alt="Logo"
            className="h-10 mr-2.5"
          />
          <h1 className="text-2xl font-bold text-teal-500">CaféConnect</h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link.href} className="mx-4">
                <a
                  href={link.href}
                  className={`text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-green-700 after:transition-all ${
                    isActive(link.href) ? "text-teal-700 after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex gap-2.5">
          <a
            href="/login"
            className="px-4 py-2 border-2 border-teal-500 text-teal-500 font-semibold rounded hover:bg-teal-500 hover:text-white transition-colors"
          >
            Iniciar Sesión
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors"
          >
            Registrarse
          </a>
        </div>

        <button className="md:hidden text-2xl text-gray-800" onClick={toggleMenu} aria-label="Menú">
          <Menu />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col absolute top-[72px] left-0 w-full bg-white p-4 shadow-md z-50">
            {navLinks.map((link) => (
              <li key={link.href} className="py-2">
                <a
                  href={link.href}
                  className={`text-gray-800 font-medium hover:text-teal-500 ${
                    isActive(link.href) ? "text-teal-600" : ""
                  }`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col absolute top-[calc(72px+240px)] left-0 w-full bg-white p-4 shadow-md z-50 gap-2">
            <a
              href="/login"
              className="px-4 py-2 border-2 border-teal-500 text-teal-500 font-semibold rounded text-center hover:bg-teal-700 hover:text-white transition-colors"
            >
              Iniciar Sesión
            </a>
            <a
              href="/register"
              className="px-4 py-2 bg-teal-500 text-white font-semibold rounded text-center hover:bg-teal-600 transition-colors"
            >
              Registrarse
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default HeaderProductor

