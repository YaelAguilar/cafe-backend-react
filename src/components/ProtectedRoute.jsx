"use client"

import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/useAuth"

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth()
  const location = useLocation()

  // Rutas públicas que no requieren autenticación
  const publicRoutes = ["/", "/login", "/register"]

  if (loading) {
    // Mostrar un indicador de carga mientras se verifica la autenticación
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  // Si el usuario no está autenticado y la ruta no es pública, redirigir a login
  if (!currentUser && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Si el usuario es productor y no está en la página temporal, redirigir
  if (currentUser?.userType === "producer" && location.pathname !== "/producer-coming-soon") {
    return <Navigate to="/producer-coming-soon" replace />
  }

  return children
}

export default ProtectedRoute

