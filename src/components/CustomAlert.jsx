"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle, AlertCircle, Info } from "lucide-react"

function CustomAlert({ title, message, icon, redirectUrl }) {
  const [isActive, setIsActive] = useState(false)
  const [progressActive, setProgressActive] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Mostrar la alerta
    setTimeout(() => {
      setIsActive(true)
      setProgressActive(true)
    }, 10)

    // Redirección después de 2 segundos
    const redirectTimer = setTimeout(() => {
      navigate(redirectUrl)
    }, 2000)

    return () => clearTimeout(redirectTimer)
  }, [redirectUrl, navigate])

  const renderIcon = () => {
    switch (icon) {
      case "check-circle":
        return <CheckCircle className="w-10 h-10" />
      case "alert-circle":
        return <AlertCircle className="w-10 h-10" />
      case "info":
        return <Info className="w-10 h-10" />
      default:
        return <Info className="w-10 h-10" />
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300 ${isActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-8 max-w-md w-[90%] text-center relative transition-transform duration-300 ${isActive ? "translate-y-0" : "-translate-y-5"}`}
      >
        <div className="w-[70px] h-[70px] rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto mb-6">
          {renderIcon()}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>

        <p className="text-gray-600 mb-6">{message}</p>

        <div className="h-1 bg-gray-200 rounded overflow-hidden mb-4">
          <div
            className={`h-full bg-teal-500 transition-all duration-[3000ms] ${progressActive ? "w-full" : "w-0"}`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default CustomAlert

