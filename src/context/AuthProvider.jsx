"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthContextCore"
import { authService } from "../services/auth"

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Verificar si hay un token almacenado
    const token = localStorage.getItem("token")
    if (token) {
      fetchUserProfile()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchUserProfile = async () => {
    try {
      setLoading(true)
      const response = await authService.getProfile()

      if (response.success) {
        setCurrentUser(response.user)
      } else {
        // Si hay un error, limpiar el token
        localStorage.removeItem("token")
        setCurrentUser(null)
      }
    } catch (error) {
      console.error("Error fetching user profile:", error)
      localStorage.removeItem("token")
      setCurrentUser(null)
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      setLoading(true)
      setError(null)

      const response = await authService.register(userData)

      if (response.success) {
        const { user } = response
        setCurrentUser(user)

        // Redirigir según el tipo de usuario
        if (user.userType === "merchant") {
          navigate("/")
        } else {
          navigate("/productorview")
        }

        return { success: true }
      }
      return { success: false, error: response.message || "Error al registrar usuario" }
    } catch (error) {
      console.error("Registration error:", error)
      setError(error.response?.data?.message || "Error al registrar usuario")
      return { success: false, error: error.response?.data?.message || "Error al registrar usuario" }
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      setLoading(true)
      setError(null)

      const response = await authService.login(email, password)

      if (response.success) {
        const { user } = response
        setCurrentUser(user)

        // Redirigir según el tipo de usuario
        if (user.userType === "merchant") {
          navigate("/")
        } else {
          navigate("/productorview")
        }

        return { success: true }
      }
      return { success: false, error: response.message || "Credenciales inválidas" }
    } catch (error) {
      console.error("Login error:", error)
      setError(error.response?.data?.message || "Credenciales inválidas")
      return { success: false, error: error.response?.data?.message || "Credenciales inválidas" }
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      await authService.logout()
      
      // Limpiar datos locales
      setCurrentUser(null)
      navigate("/login")

      return { success: true }
    } catch (error) {
      console.error("Logout error:", error)
      return { success: false, error: "Error al cerrar sesión" }
    } finally {
      setLoading(false)
    }
  }

  const value = {
    currentUser,
    loading,
    error,
    register,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}