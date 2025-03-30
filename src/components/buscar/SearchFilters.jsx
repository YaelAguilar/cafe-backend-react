"use client"

import { useState } from "react"
import Card from "../ui/Card"
import Button from "../ui/Button"

function SearchFilters() {
  const [volumeValue, setVolumeValue] = useState(100)

  const handleVolumeChange = (e) => {
    setVolumeValue(e.target.value)
  }

  return (
    <Card className="p-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div>
          <label htmlFor="coffee-type" className="block mb-2 font-semibold text-gray-800">
            Tipo de Café
          </label>
          <select
            id="coffee-type"
            className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
          >
            <option value="">Todos los tipos</option>
            <option value="arabica">Arábica</option>
            <option value="robusta">Robusta</option>
            <option value="liberica">Libérica</option>
            <option value="excelsa">Excelsa</option>
          </select>
        </div>
        <div>
          <label htmlFor="quality" className="block mb-2 font-semibold text-gray-800">
            Calidad
          </label>
          <select
            id="quality"
            className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
          >
            <option value="">Todas las calidades</option>
            <option value="premium">Premium</option>
            <option value="specialty">Especialidad</option>
            <option value="commercial">Comercial</option>
          </select>
        </div>
        <div>
          <label htmlFor="volume" className="block mb-2 font-semibold text-gray-800">
            Volumen (kg)
          </label>
          <div className="flex flex-col">
            <input
              type="range"
              id="volume"
              min="10"
              max="1000"
              step="10"
              value={volumeValue}
              onChange={handleVolumeChange}
              className="w-full"
            />
            <span className="text-sm text-gray-600 mt-1">{volumeValue} kg</span>
          </div>
        </div>
        <div>
          <label htmlFor="region" className="block mb-2 font-semibold text-gray-800">
            Región
          </label>
          <select
            id="region"
            className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
          >
            <option value="">Todas las regiones</option>
            <option value="chiapas">Chiapas</option>
            <option value="veracruz">Veracruz</option>
            <option value="oaxaca">Oaxaca</option>
            <option value="puebla">Puebla</option>
          </select>
        </div>
        <div>
          <label htmlFor="certification" className="block mb-2 font-semibold text-gray-800">
            Certificación
          </label>
          <select
            id="certification"
            className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
          >
            <option value="">Todas las certificaciones</option>
            <option value="organic">Orgánico</option>
            <option value="fairtrade">Comercio Justo</option>
            <option value="rainforest">Rainforest Alliance</option>
          </select>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Button>Buscar Proveedores</Button>
      </div>
    </Card>
  )
}

export default SearchFilters
