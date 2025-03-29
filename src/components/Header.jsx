"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation() // Obtener la ubicación actual

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para determinar si un link está activo
  const isActive = (path) => {
    return location.pathname === path
  }

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
            <li className="mx-4">
              <Link
                to="/"
                className={`text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all ${
                  isActive("/") ? "text-teal-500 after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                Inicio
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/search"
                className={`text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all ${
                  isActive("/search") ? "text-teal-500 after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                Buscar Proveedores
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/profile"
                className={`text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all ${
                  isActive("/profile") ? "text-teal-500 after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                Mi Perfil
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/messages"
                className={`text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all ${
                  isActive("/messages") ? "text-teal-500 after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                Mensajes
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/faq"
                className={`text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all ${
                  isActive("/faq") ? "text-teal-500 after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex gap-2.5">
          <Link
            to="/login"
            className="px-4 py-2 border-2 border-teal-500 text-teal-500 font-semibold rounded hover:bg-teal-500 hover:text-white transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors"
          >
            Registrarse
          </Link>
        </div>

        <button className="md:hidden text-2xl text-gray-800" onClick={toggleMenu}>
          <Menu />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col absolute top-[80px] left-0 w-full bg-white p-4 shadow-md z-50">
            <li className="py-2">
              <Link
                to="/"
                className={`text-gray-800 font-medium hover:text-teal-500 ${isActive("/") ? "text-teal-500" : ""}`}
              >
                Inicio
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/search"
                className={`text-gray-800 font-medium hover:text-teal-500 ${isActive("/search") ? "text-teal-500" : ""}`}
              >
                Buscar Proveedores
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/profile"
                className={`text-gray-800 font-medium hover:text-teal-500 ${isActive("/profile") ? "text-teal-500" : ""}`}
              >
                Mi Perfil
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/messages"
                className={`text-gray-800 font-medium hover:text-teal-500 ${isActive("/messages") ? "text-teal-500" : ""}`}
              >
                Mensajes
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/faq"
                className={`text-gray-800 font-medium hover:text-teal-500 ${isActive("/faq") ? "text-teal-500" : ""}`}
              >
                FAQ
              </Link>
            </li>
          </ul>
          <div className="flex flex-col absolute top-[calc(80px+100%)] left-0 w-full bg-white p-4 shadow-md z-50 gap-2">
            <Link
              to="/login"
              className="px-4 py-2 border-2 border-teal-500 text-teal-500 font-semibold rounded text-center hover:bg-teal-500 hover:text-white transition-colors"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-teal-500 text-white font-semibold rounded text-center hover:bg-teal-600 transition-colors"
            >
              Registrarse
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

