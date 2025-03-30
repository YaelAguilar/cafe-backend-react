"use client"

import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/useAuth"

function ProtectedRoute({ allowedUserTypes, children }) {
  const { currentUser, loading } = useAuth()
  const location = useLocation()

  const publicRoutes = ["/", "/login", "/register"]

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  // Si no hay usuario autenticado:
  if (!currentUser) {
    // Si la ruta es pública, permitir el acceso
    if (publicRoutes.includes(location.pathname)) {
      return children
    }
    // Si no, redirigir a login
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (allowedUserTypes && !allowedUserTypes.includes(currentUser.userType)) {
    // Para un productor redirigir a /productorview, para comerciante a "/"
    const redirectTo = currentUser.userType === "producer" ? "/productorview" : "/"
    return <Navigate to={redirectTo} replace />
  }

  return children
}

export default ProtectedRoute
