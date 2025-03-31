"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { User, Mail, Lock, Building } from 'lucide-react'
import { useAuth } from "../../context/useAuth"
import CustomAlert from "../../components/common/feedback/CustomAlert"

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "merchant", // Por defecto comerciante
    businessName: "",
  })

  const [showAlert, setShowAlert] = useState(false)
  const [alertData, setAlertData] = useState({
    title: "",
    message: "",
    icon: "",
    redirectUrl: "",
  })

  const { register } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setAlertData({
        title: "Error de Validación",
        message: "Las contraseñas no coinciden",
        icon: "alert-circle",
        redirectUrl: "",
      })
      setShowAlert(true)
      return
    }

    const userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      userType: formData.userType === "merchant" ? "merchant" : "producer",
      businessName: formData.businessName,
    }

    const result = await register(userData)

    if (result.success) {
      setAlertData({
        title: "Registro Exitoso",
        message:
          "¡Bienvenido a CaféConnect! Tu cuenta ha sido creada correctamente. Redirigiendo...",
        icon: "check-circle",
        redirectUrl: formData.userType === "comerciante" ? "/" : "/producer-coming-soon",
      })
      setShowAlert(true)
    } else {
      setAlertData({
        title: "Error de Registro",
        message:
          result.error ||
          "Ha ocurrido un error al registrar tu cuenta. Por favor, intenta nuevamente.",
        icon: "alert-circle",
        redirectUrl: "",
      })
      setShowAlert(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {showAlert && (
        <CustomAlert
          title={alertData.title}
          message={alertData.message}
          icon={alertData.icon}
          redirectUrl={alertData.redirectUrl}
        />
      )}

      <div className="container mx-auto px-5">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20desde%202025-03-27%2005-13-48-e2hTCeME7SE3XoLxy1UpQxqNRgWNa7.png"
              alt="Logo"
              className="h-[50px] mr-2.5"
            />
            <h1 className="text-2xl font-bold text-teal-500">CaféConnect</h1>
          </Link>
        </div>

        <div className="flex bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
          <div className="flex-1 p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Crear Cuenta</h2>
            <p className="text-gray-600 text-center mb-8">
              Únete a la comunidad de comerciantes y productores de café
            </p>

            <form onSubmit={handleSubmit} className="mb-8">
              <div className="mb-6">
                <label htmlFor="firstName" className="block mb-2 font-semibold text-gray-800">
                  Nombre
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <User size={20} />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="lastName" className="block mb-2 font-semibold text-gray-800">
                  Apellido
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <User size={20} />
                  </div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                    placeholder="Tu apellido"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Mail size={20} />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 font-semibold text-gray-800">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Lock size={20} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                    placeholder="********"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 font-semibold text-gray-800"
                >
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Lock size={20} />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                    placeholder="********"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="user-type" className="block mb-2 font-semibold text-gray-800">
                  Tipo de Usuario
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <User size={20} />
                  </div>
                  <select
                    id="user-type"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none appearance-none"
                    required
                  >
                    <option value="merchant">Comerciante</option>
                    <option value="producer">Productor</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="businessName" className="block mb-2 font-semibold text-gray-800">
                  Empresa / Negocio
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Building size={20} />
                  </div>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                    placeholder="Nombre de tu empresa o negocio"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors"
              >
                Crear Cuenta
              </button>
            </form>

            <p className="text-center text-gray-600">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-teal-500 font-semibold hover:underline">
                Inicia Sesión
              </Link>
            </p>
          </div>

          <div className="hidden md:block flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1497935586047-9397d4dc844c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt="Café"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-2xl font-bold mb-4">Únete a la red de café más grande</h3>
              <p>Conecta con comerciantes y productores de todo el mundo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register