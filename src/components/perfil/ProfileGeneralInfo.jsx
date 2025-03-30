import { useState, useEffect } from "react"
import FormInput from "../ui/FormInput"
import FormSelect from "../ui/FormSelect"
import FormTextarea from "../ui/FormTextarea"
import Button from "../ui/Button"
import axios from "axios"

function ProfileGeneralInfo() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    yearsInMarket: "",
    description: "",
    city: "",
    state: "",
    website: "",
    phone: ""
  })

  const businessTypeOptions = [
    { value: "", label: "Seleccionar" },
    { value: "cafeteria", label: "Cafetería" },
    { value: "restaurante", label: "Restaurante" },
    { value: "distribuidor", label: "Distribuidor" },
    { value: "tostador", label: "Tostador" },
    { value: "otro", label: "Otro" }
  ]

  useEffect(() => {
    const fetchMerchantProfile = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem("token")
        const response = await axios.get("http://localhost:2010/api/users/merchant/profile", {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (response.data.success && response.data.profile.Merchant) {
          const merchant = response.data.profile.Merchant
          setFormData({
            businessName: merchant.businessName || "",
            businessType: merchant.businessType || "",
            yearsInMarket: merchant.yearsInMarket || "",
            description: merchant.description || "",
            city: merchant.city || "",
            state: merchant.state || "",
            website: merchant.website || "",
            phone: merchant.phone || ""
          })
        }
      } catch (error) {
        console.error("Error al obtener perfil:", error)
        setError("Error al cargar los datos del perfil")
      } finally {
        setLoading(false)
      }
    }

    fetchMerchantProfile()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validar campos obligatorios
    if (!formData.businessName || !formData.businessType || !formData.description || !formData.city || !formData.state || !formData.phone) {
      setError("Por favor complete todos los campos obligatorios")
      return
    }
    
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)
      
      const token = localStorage.getItem("token")
      const response = await axios.put(
        "http://localhost:2010/api/users/merchant/profile",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      
      if (response.data.success) {
        setSuccess(true)
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Error al actualizar perfil:", error)
      setError(error.response?.data?.message || "Error al actualizar el perfil")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Información General</h3>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Información actualizada correctamente
        </div>
      )}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormInput 
          id="businessName" 
          name="businessName"
          label="Nombre del Negocio" 
          value={formData.businessName}
          onChange={handleChange}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect
            id="businessType"
            name="businessType"
            label="Tipo de Negocio"
            options={businessTypeOptions}
            value={formData.businessType}
            onChange={handleChange}
            required
          />

          <FormInput 
            id="yearsInMarket" 
            name="yearsInMarket"
            label="Años en el Mercado" 
            type="number" 
            value={formData.yearsInMarket}
            onChange={handleChange}
            required
          />
        </div>

        <FormTextarea
          id="description"
          name="description"
          label="Descripción del Negocio"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput 
            id="city" 
            name="city"
            label="Ciudad" 
            value={formData.city}
            onChange={handleChange}
            required
          />

          <FormInput 
            id="state" 
            name="state"
            label="Estado" 
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <FormInput 
          id="website" 
          name="website"
          label="Sitio Web" 
          type="url" 
          value={formData.website}
          onChange={handleChange}
        />
        
        <FormInput 
          id="phone" 
          name="phone"
          label="Teléfono" 
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <div>
          <Button type="submit" disabled={loading}>
            {loading ? "Guardando..." : "Guardar Cambios"}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileGeneralInfo