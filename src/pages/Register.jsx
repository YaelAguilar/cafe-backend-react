"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { User, Mail, Lock, Building } from "lucide-react"
import CustomAlert from "../components/CustomAlert"

function Register() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userType, setUserType] = useState("comerciante")
  const [company, setCompany] = useState("")
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación básica
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }

    console.log("Registro de usuario:", {
      fullname,
      email,
      userType,
      company,
    })

    setShowAlert(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {showAlert && (
        <CustomAlert
          title="Registro Exitoso"
          message="¡Bienvenido a CaféCollect! Tu cuenta ha sido creada correctamente. Redirigiendo..."
          icon="check-circle"
          redirectUrl="/"
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
            <h1 className="text-2xl font-bold text-teal-500">CaféCollect</h1>
          </Link>
        </div>

        <div className="flex bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
          <div className="flex-1 p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Crear Cuenta</h2>
            <p className="text-gray-600 text-center mb-8">Únete a la comunidad de comerciantes y productores de café</p>

            <form onSubmit={handleSubmit} className="mb-8">
              <div className="mb-6">
                <label htmlFor="fullname" className="block mb-2 font-semibold text-gray-800">
                  Nombre Completo
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <User size={20} />
                  </div>
                  <input
                    id="fullname"
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                    placeholder="Tu nombre completo"
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
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
                    placeholder="********"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="confirm-password" className="block mb-2 font-semibold text-gray-800">
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Lock size={20} />
                  </div>
                  <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none appearance-none"
                    required
                  >
                    <option value="comerciante">Comerciante</option>
                    <option value="productor">Productor</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block mb-2 font-semibold text-gray-800">
                  Empresa / Negocio
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Building size={20} />
                  </div>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Granos de café"
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
