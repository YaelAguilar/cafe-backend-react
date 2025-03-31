"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, User, LogOut } from 'lucide-react'
import { useAuth } from "../../../context/useAuth"

const ProducerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const location = useLocation()
  const { currentUser, logout } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  const isActive = (path) => location.pathname === path

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
                to="/productorview"
                className={`text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all ${
                  isActive("/productorview") ? "text-teal-500 after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                Inicio
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/productorprofile"
                className={`text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all ${
                  isActive("/productorprofile") ? "text-teal-500 after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                Mi Perfil
              </Link>
            </li>
            <li className="mx-4">
              <a
                href="productor-lotes.html"
                className="text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all hover:after:w-full"
              >
                Mis Lotes
              </a>
            </li>
            <li className="mx-4">
              <a
                href="merchant-interested"
                className="text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all hover:after:w-full"
              >
                Comerciantes
              </a>
            </li>
            <li className="mx-4">
              <a
                href="productor-mensajes.html"
                className="text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all hover:after:w-full"
              >
                Mensajes
              </a>
            </li>
          </ul>
        </nav>

        {currentUser ? (
          <div className="hidden md:block relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-teal-500 text-teal-500 hover:bg-teal-50 transition-colors"
            >
              <User size={20} />
              <span className="font-medium">{currentUser.firstName}</span>
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <button
                  onClick={() => {
                    logout()
                  }}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut size={16} className="mr-2" />
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            )}
          </div>
        ) : (
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
        )}

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col absolute top-[80px] left-0 w-full bg-white p-4 shadow-md z-50">
            <li className="py-2">
              <Link
                to="/productorview"
                className={`text-gray-800 font-medium hover:text-teal-500 ${
                  isActive("/productorview") ? "text-teal-500" : ""
                }`}
              >
                Inicio
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/productorprofile"
                className={`text-gray-800 font-medium hover:text-teal-500 ${
                  isActive("/productorprofile") ? "text-teal-500" : ""
                }`}
              >
                Mi Perfil
              </Link>
            </li>
            <li className="py-2">
              <a
                href="productor-lotes.html"
                className="text-gray-800 font-medium hover:text-teal-500"
              >
                Mis Lotes
              </a>
            </li>
            <li className="py-2">
              <a
                href="merchant-interested"
                className="text-gray-800 font-medium hover:text-teal-500"
              >
                Comerciantes
              </a>
            </li>
            <li className="py-2">
              <a
                href="productor-mensajes.html"
                className="text-gray-800 font-medium hover:text-teal-500"
              >
                Mensajes
              </a>
            </li>
            {currentUser && (
              <li className="py-2 border-t border-gray-200 mt-2 pt-4">
                <button
                  onClick={logout}
                  className="flex items-center text-gray-800 font-medium hover:text-teal-500"
                >
                  <LogOut size={18} className="mr-2" />
                  <span>Cerrar Sesión</span>
                </button>
              </li>
            )}
          </ul>

          {!currentUser && (
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
          )}
        </div>
      )}
    </header>
  )
}

export default ProducerHeader