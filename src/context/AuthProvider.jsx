"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "./AuthContextCore"

const API_URL = "http://localhost:2010/api"

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Verificar si hay un token almacenado
    const token = localStorage.getItem("token")
    if (token) {
      fetchUserProfile(token)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchUserProfile = async (token) => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (response.data.success) {
        setCurrentUser(response.data.user)
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

      const response = await axios.post(`${API_URL}/users/register`, userData)

      if (response.data.success) {
        const { token, user } = response.data
        localStorage.setItem("token", token)
        setCurrentUser(user)

        // Redirigir según el tipo de usuario
        if (user.userType === "merchant") {
          navigate("/")
        } else {
          navigate("/producer-coming-soon")
        }

        return { success: true }
      }
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

      const response = await axios.post(`${API_URL}/users/login`, { email, password })

      if (response.data.success) {
        const { token, user } = response.data
        localStorage.setItem("token", token)
        setCurrentUser(user)

        // Redirigir según el tipo de usuario
        if (user.userType === "merchant") {
          navigate("/")
        } else {
          navigate("/producer-coming-soon")
        }

        return { success: true }
      }
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

      // Llamar al endpoint de logout
      const token = localStorage.getItem("token")
      if (token) {
        await axios.post(
          `${API_URL}/users/logout`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        )
      }

      // Limpiar datos locales
      localStorage.removeItem("token")
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