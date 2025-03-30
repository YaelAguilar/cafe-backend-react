import { useState, useEffect } from "react"
import FormInput from "../ui/FormInput"
import FormSelect from "../ui/FormSelect"
import FormTextarea from "../ui/FormTextarea"
import Button from "../ui/Button"
import axios from "axios"

function ProfileSupplyNeeds() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    coffeeTypes: [],
    qualities: [],
    volumeRequired: "",
    purchaseFrequency: "",
    additionalRequirements: ""
  })

  const frequencyOptions = [
    { value: "", label: "Seleccionar" },
    { value: "weekly", label: "Semanal" },
    { value: "biweekly", label: "Quincenal" },
    { value: "monthly", label: "Mensual" },
    { value: "quarterly", label: "Trimestral" }
  ]

  useEffect(() => {
    fetchSupplyNeeds()
  }, [])

  const fetchSupplyNeeds = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("token")
      const response = await axios.get("http://localhost:2010/api/users/merchant/profile", {
        headers: { Authorization: `Bearer ${token}` }
      })

      console.log("Datos recibidos del perfil:", response.data)

      if (response.data.success && response.data.profile.Merchant && response.data.profile.Merchant.MerchantSupplyNeeds) {
        const supplyNeeds = response.data.profile.Merchant.MerchantSupplyNeeds
        console.log("Necesidades de abastecimiento recibidas:", supplyNeeds)
        
        setFormData({
          coffeeTypes: Array.isArray(supplyNeeds.coffeeTypes) ? supplyNeeds.coffeeTypes : [],
          qualities: Array.isArray(supplyNeeds.qualities) ? supplyNeeds.qualities : [],
          volumeRequired: supplyNeeds.volumeRequired?.toString() || "",
          purchaseFrequency: supplyNeeds.purchaseFrequency || "",
          additionalRequirements: supplyNeeds.additionalRequirements || ""
        })
      } else {
        console.log("No se encontraron datos de necesidades de abastecimiento")
      }
    } catch (error) {
      console.error("Error al obtener necesidades de abastecimiento:", error)
      setError("Error al cargar los datos de abastecimiento")
    } finally {
      setLoading(false)
    }
  }

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        [category]: [...prev[category], value]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [category]: prev[category].filter(item => item !== value)
      }))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validar campos obligatorios
    if (formData.coffeeTypes.length === 0 || formData.qualities.length === 0 || !formData.volumeRequired || !formData.purchaseFrequency) {
      setError("Por favor complete todos los campos obligatorios")
      return
    }
    
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)
      
      const token = localStorage.getItem("token")
      
      console.log("Enviando datos:", formData)
      
      const response = await axios.put(
        "http://localhost:2010/api/users/merchant/supply-needs",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      
      console.log("Respuesta del servidor:", response.data)
      
      if (response.data.success) {
        setSuccess(true)
        await fetchSupplyNeeds()
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Error al actualizar necesidades de abastecimiento:", error)
      setError(error.response?.data?.message || "Error al actualizar las necesidades de abastecimiento")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Necesidades de Abastecimiento</h3>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Necesidades de abastecimiento actualizadas correctamente
        </div>
      )}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 font-semibold text-gray-800">Tipos de Café Requeridos</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                value="Arábica"
                checked={formData.coffeeTypes.includes("Arábica")}
                onChange={(e) => handleCheckboxChange(e, "coffeeTypes")}
                className="w-4 h-4 text-teal-500" 
              />
              <span>Arábica</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                value="Robusta"
                checked={formData.coffeeTypes.includes("Robusta")}
                onChange={(e) => handleCheckboxChange(e, "coffeeTypes")}
                className="w-4 h-4 text-teal-500" 
              />
              <span>Robusta</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                value="Libérica"
                checked={formData.coffeeTypes.includes("Libérica")}
                onChange={(e) => handleCheckboxChange(e, "coffeeTypes")}
                className="w-4 h-4 text-teal-500" 
              />
              <span>Libérica</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                value="Excelsa"
                checked={formData.coffeeTypes.includes("Excelsa")}
                onChange={(e) => handleCheckboxChange(e, "coffeeTypes")}
                className="w-4 h-4 text-teal-500" 
              />
              <span>Excelsa</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800">Calidades Requeridas</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                value="Premium"
                checked={formData.qualities.includes("Premium")}
                onChange={(e) => handleCheckboxChange(e, "qualities")}
                className="w-4 h-4 text-teal-500" 
              />
              <span>Premium</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                value="Especialidad"
                checked={formData.qualities.includes("Especialidad")}
                onChange={(e) => handleCheckboxChange(e, "qualities")}
                className="w-4 h-4 text-teal-500" 
              />
              <span>Especialidad</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                value="Comercial"
                checked={formData.qualities.includes("Comercial")}
                onChange={(e) => handleCheckboxChange(e, "qualities")}
                className="w-4 h-4 text-teal-500" 
              />
              <span>Comercial</span>
            </label>
          </div>
        </div>

        <FormInput 
          id="volumeRequired" 
          name="volumeRequired"
          label="Volumen Mensual Requerido (kg)" 
          type="number" 
          value={formData.volumeRequired}
          onChange={handleChange}
          required
        />

        <FormSelect 
          id="purchaseFrequency" 
          name="purchaseFrequency"
          label="Frecuencia de Compra" 
          options={frequencyOptions} 
          value={formData.purchaseFrequency}
          onChange={handleChange}
          required
        />

        <FormTextarea
          id="additionalRequirements"
          name="additionalRequirements"
          label="Requisitos Adicionales"
          rows="4"
          value={formData.additionalRequirements}
          onChange={handleChange}
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

export default ProfileSupplyNeeds