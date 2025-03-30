"use client";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-teal-500 mb-4">404</h1>
      <p className="text-2xl text-gray-800 mb-6">Página no encontrada</p>
      <p className="text-gray-600 mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
