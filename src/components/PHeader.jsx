import React, { useState } from "react";

const PHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

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
              <a
                href="productorview"
                className="text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all hover:after:w-full"
              >
                Inicio
              </a>
            </li>
            <li className="mx-4">
              <a
                href="productorprofile"
                className="text-gray-800 font-medium hover:text-teal-500 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all hover:after:w-full"
              >
                Mi Perfil
              </a>
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
                href="productor-comerciantes.html"
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
        <div className="hidden md:flex gap-2.5">
          <a
            href="login.html"
            className="px-4 py-2 border-2 border-teal-500 text-teal-500 font-semibold rounded hover:bg-teal-500 hover:text-white transition-colors"
          >
            Iniciar Sesión
          </a>
          <a
            href="register.html"
            className="px-4 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors"
          >
            Registrarse
          </a>
        </div>
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col absolute top-[80px] left-0 w-full bg-white p-4 shadow-md z-50">
            <li className="py-2">
              <a
                href="productorview"
                className="text-gray-800 font-medium hover:text-teal-500"
              >
                Inicio
              </a>
            </li>
            <li className="py-2">
              <a
                href="productorprofile"
                className="text-gray-800 font-medium hover:text-teal-500"
              >
                Mi Perfil
              </a>
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
                href="productor-comerciantes.html"
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
            <li className="py-2 border-t border-gray-200 mt-2 pt-4">
              <a
                href="login.html"
                className="px-4 py-2 border-2 border-teal-500 text-teal-500 font-semibold rounded text-center hover:bg-teal-500 hover:text-white transition-colors"
              >
                Iniciar Sesión
              </a>
            </li>
            <li className="py-2">
              <a
                href="register.html"
                className="px-4 py-2 bg-teal-500 text-white font-semibold rounded text-center hover:bg-teal-600 transition-colors"
              >
                Registrarse
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default PHeader;
