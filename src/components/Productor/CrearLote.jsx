import { useState } from "react"
import { Upload, X, Check } from "lucide-react"
import HeaderProductor from "./HeaderProductor"
import { Link, useNavigate } from "react-router-dom"

const CrearLote = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const [formData, setFormData] = useState({
    nombre_productor: "",
    nombre: "",
    descripcion: "",
    categoria: "",
    tipo: "",
    proceso: "",
    volumen: "",
    region: "",
    altitud: "",
    precio: "",
    stock: "",
    puntuacion: "",
    imagen_url: "",
    fecha_publicacion: new Date().toISOString().split("T")[0],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Crear una URL para previsualizar la imagen
      const imageUrl = URL.createObjectURL(file)
      setPreviewImage(imageUrl)

      // En un caso real, aquí se subiría la imagen a un servidor y se obtendría la URL
      // Por ahora, solo guardamos el nombre del archivo
      setFormData({
        ...formData,
        imagen_url: file.name,
      })
    }
  }

  const removeImage = () => {
    setPreviewImage(null)
    setFormData({
      ...formData,
      imagen_url: "",
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")
    setSuccessMessage("")

    try {
      // Aquí iría la lógica para enviar los datos a la API
      // Por ejemplo:
      // const response = await fetch('/api/lotes', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })

      // Simulamos una respuesta exitosa después de 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // if (!response.ok) throw new Error('Error al crear el lote')
      // const data = await response.json()

      setSuccessMessage("¡Lote creado exitosamente!")

      // Redirigir después de 2 segundos
      setTimeout(() => {
        navigate("/productor-lotes")
      }, 2000)
    } catch (error) {
      console.error("Error:", error)
      setErrorMessage("Ocurrió un error al crear el lote. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <HeaderProductor />

      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-teal-500 p-6">
              <h1 className="text-2xl font-bold text-white">Crear Nuevo Lote de Café</h1>
            </div>

            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 mx-6 mt-6 flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>{successMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 mx-6 mt-6 flex items-center">
                <X className="h-5 w-5 mr-2" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre_productor" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre del Productor
                  </label>
                  <input
                    type="text"
                    id="nombre_productor"
                    name="nombre_productor"
                    value={formData.nombre_productor}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Finca El Paraíso"
                  />
                </div>

                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre del Lote
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Bourbon Lavado Cosecha 2025"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Describe las características de tu café, notas de cata, proceso, etc."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
                    Categoría
                  </label>
                  <select
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Seleccionar categoría</option>
                    <option value="Arabica">Arábica</option>
                    <option value="Robusta">Robusta</option>
                    <option value="Mezcla">Mezcla</option>
                    <option value="Especialidad">Especialidad</option>
                    <option value="Otra">Otra</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Seleccionar tipo</option>
                    <option value="Grano entero">Grano entero</option>
                    <option value="Molido">Molido</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="proceso" className="block text-sm font-medium text-gray-700 mb-1">
                    Proceso
                  </label>
                  <select
                    id="proceso"
                    name="proceso"
                    value={formData.proceso}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Seleccionar proceso</option>
                    <option value="Lavado">Lavado</option>
                    <option value="Honey">Honey</option>
                    <option value="Natural">Natural</option>
                    <option value="Descafeinado MC">Descafeinado MC</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="volumen" className="block text-sm font-medium text-gray-700 mb-1">
                    Volumen (kg)
                  </label>
                  <input
                    type="number"
                    id="volumen"
                    name="volumen"
                    value={formData.volumen}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="1000"
                  />
                </div>

                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                    Región
                  </label>
                  <input
                    type="text"
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Chiapas"
                  />
                </div>

                <div>
                  <label htmlFor="altitud" className="block text-sm font-medium text-gray-700 mb-1">
                    Altitud
                  </label>
                  <input
                    type="text"
                    id="altitud"
                    name="altitud"
                    value={formData.altitud}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="1,500 - 1,800 msnm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-1">
                    Precio (USD/kg)
                  </label>
                  <input
                    type="number"
                    id="precio"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    required
                    min="0.01"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="4.50"
                  />
                </div>

                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                    Stock Disponible (kg)
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="1000"
                  />
                </div>

                <div>
                  <label htmlFor="puntuacion" className="block text-sm font-medium text-gray-700 mb-1">
                    Puntuación (SCA)
                  </label>
                  <input
                    type="number"
                    id="puntuacion"
                    name="puntuacion"
                    value={formData.puntuacion}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    step="0.1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="85.5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Imagen del Lote</label>

                {!previewImage ? (
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="imagen_file"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none"
                        >
                          <span>Subir una imagen</span>
                          <input
                            id="imagen_file"
                            name="imagen_file"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">o arrastra y suelta</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-1 relative">
                    <img
                      src={previewImage || "/placeholder.svg"}
                      alt="Vista previa"
                      className="h-64 w-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <Link
                  to="/productor-lotes"
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors inline-block"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors flex items-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creando...
                    </>
                  ) : (
                    "Crear Lote"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default CrearLote