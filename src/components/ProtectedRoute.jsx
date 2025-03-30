"use client"

import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/useAuth"

function ProtectedRoute({ allowedUserTypes, children }) {
  const { currentUser, loading } = useAuth()
  const location = useLocation()

  // Rutas públicas
  const publicRoutes = ["/", "/login", "/register"]

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  // Si no hay usuario y la ruta es pública, se permite el acceso
  if (!currentUser) {
    if (publicRoutes.includes(location.pathname)) {
      return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Si se especifica allowedUserTypes y el usuario no pertenece a ninguno, redirigir
  if (allowedUserTypes && !allowedUserTypes.includes(currentUser.userType)) {
    const redirectTo = currentUser.userType === "producer" ? "/productorview" : "/"
    return <Navigate to={redirectTo} replace />
  }

  return children
}

export default ProtectedRoute
