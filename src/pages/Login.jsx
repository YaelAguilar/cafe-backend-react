"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Mail, Lock } from "lucide-react"
import CustomAlert from "../components/CustomAlert"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Intento de inicio de sesión:", { email, password })
    setShowAlert(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {showAlert && (
        <CustomAlert
          title="Inicio de Sesión Exitoso"
          message="Bienvenido de nuevo a CaféCollect. Redirigiendo..."
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Iniciar Sesión</h2>
            <p className="text-gray-600 text-center mb-8">Accede a tu cuenta para conectar con proveedores de café</p>

            <form onSubmit={handleSubmit} className="mb-8">
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

              <div className="flex justify-between items-center mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="remember" className="text-gray-600">
                    Recordarme
                  </label>
                </div>
                <Link to="#" className="text-teal-500 hover:underline text-sm">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors"
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="relative text-center mb-8">
              <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
              <span className="relative bg-white px-4 text-gray-600 text-sm">O continúa con</span>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="flex-1 py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#DB4437">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.472-.447-1.107-.725-1.846-.725-1.512 0-2.736 1.225-2.736 2.736s1.224 2.736 2.736 2.736c1.476 0 2.39-.851 2.588-2.077h-2.588v-1.407h4.319c.057.323.092.646.092.979 0 2.259-1.522 3.866-4.193 3.866z" />
                </svg>
                <span className="text-gray-800">Google</span>
              </button>
              <button className="flex-1 py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
                <span className="text-gray-800">Facebook</span>
              </button>
            </div>

            <p className="text-center text-gray-600">
              ¿No tienes una cuenta?{" "}
              <Link to="/register" className="text-teal-500 font-semibold hover:underline">
                Regístrate
              </Link>
            </p>
          </div>

          <div className="hidden md:block flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Café"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-2xl font-bold mb-4">Conecta con los mejores productores de café</h3>
              <p>Encuentra proveedores que se ajusten a tus necesidades específicas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

