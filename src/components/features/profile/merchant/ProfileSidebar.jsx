"use client"

import { useState, useEffect, useRef } from 'react'
import { User, ClipboardList, Camera } from 'lucide-react'
import { userService } from '../../../../services/api'

function ProfileSidebar({ activeTab, onTabChange }) {
  const [profileImage, setProfileImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [businessName, setBusinessName] = useState("")
  const fileInputRef = useRef(null)

  const tabs = [
    { id: "info-general", label: "Información General", icon: User },
    { id: "necesidades", label: "Necesidades de Abastecimiento", icon: ClipboardList },
  ]

  useEffect(() => {
    const fetchMerchantProfile = async () => {
      try {
        const response = await userService.getMerchantProfile()
        if (response.success && response.profile.Merchant) {
          const merchant = response.profile.Merchant
          setProfileImage(merchant.imageUrl || null)
          setBusinessName(merchant.businessName || "")
        }
      } catch (error) {
        console.error("Error al obtener perfil:", error)
        setError("Error al cargar los datos del perfil")
      }
    }

    fetchMerchantProfile()
  }, [])

  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleImageChange = async (e) => {
    if (!e.target.files || !e.target.files[0]) return

    const file = e.target.files[0]
    
    // Validar tipo de archivo
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    if (!validTypes.includes(file.type)) {
      setError("Solo se permiten imágenes (JPEG, JPG, PNG, GIF)")
      return
    }
    
    if (file.size > 5 * 1024 * 1024) {
      setError("La imagen no debe superar los 5MB")
      return
    }
    
    try {
      setLoading(true)
      setError(null)
      
      const formData = new FormData()
      formData.append('image', file)
      
      const response = await userService.uploadProfileImage(formData)
      
      if (response.success) {
        setProfileImage(response.imageUrl)
      }
    } catch (error) {
      console.error("Error al subir imagen:", error)
      setError(error.response?.data?.message || "Error al subir la imagen")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="md:w-80 bg-gray-100 p-8 flex flex-col items-center">
      <div className="relative w-40 mb-6">
        <div 
          className="w-40 h-40 rounded-full overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center cursor-pointer"
          onClick={handleImageClick}
        >
          {profileImage ? (
            <img
              src={profileImage || "/placeholder.svg"}
              alt="Perfil de comerciante"
              className="w-full h-full object-cover"
            />
          ) : (
            <User size={60} className="text-gray-400" />
          )}
        </div>

        <input 
          type="file" 
          ref={fileInputRef}
          className="hidden"
          accept="image/jpeg,image/jpg,image/png,image/gif"
          onChange={handleImageChange}
        />

        <button 
          type="button"
          onClick={handleImageClick}
          disabled={loading}
          className="absolute bottom-0 right-0 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-600 transition-colors border-2 border-white"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Camera size={18} />
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm w-full">
          {error}
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-800 mb-1">{businessName || "Mi Negocio"}</h3>
      <p className="text-teal-500 font-semibold mb-8">Comerciante Verificado</p>
      <ul className="w-full">
        {tabs.map((tab) => (
          <li key={tab.id} className="mb-2">
            <button
              onClick={() => onTabChange(tab.id)}
              className={`w-full text-left p-4 rounded-md transition-colors ${
                activeTab === tab.id ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <div className="grid grid-cols-[24px_1fr] items-center gap-3">
                <div className="flex justify-center">
                  <tab.icon size={20} />
                </div>
                <span className="leading-tight">{tab.label}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileSidebar