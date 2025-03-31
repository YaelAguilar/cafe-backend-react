"use client"

import { useAuth } from "../../context/useAuth"
import Button from "../../components/common/ui/Button"

function ProducerComingSoon() {
  const { logout, currentUser } = useAuth()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Sección para Productores</h1>

        <div className="mb-8">
          <p className="text-xl text-gray-600 mb-4">¡Hola, {currentUser?.firstName}!</p>
          <p className="text-gray-600 mb-6">
            La sección para productores estará disponible muy pronto. Estamos trabajando para ofrecerte la mejor
            experiencia.
          </p>
          <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
            <div className="w-3/4 h-full bg-teal-500 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-500">Progreso: 75%</p>
        </div>

        <Button onClick={logout} className="w-full">
          Cerrar Sesión
        </Button>
      </div>
    </div>
  )
}

export default ProducerComingSoon