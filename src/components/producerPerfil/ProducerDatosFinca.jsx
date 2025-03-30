import React from "react";
import Button from "../ui/Button";

const ProducerDatosFinca = ({ profile, handleChange, handleSubmit, loading, handleCheckboxChange }) => {
  return (
    <div id="finca" className="profile-tab">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Datos de la Finca</h3>
      <form className="space-y-6" onSubmit={(e) => handleSubmit(e, "finca")}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label htmlFor="altitude" className="block font-semibold mb-2 text-gray-700">
              Altitud (msnm)
            </label>
            <input
              type="number"
              id="altitude"
              value={profile.altitude}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="totalArea" className="block font-semibold mb-2 text-gray-700">
              Área Total (hectáreas)
            </label>
            <input
              type="number"
              id="totalArea"
              value={profile.totalArea}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label htmlFor="coffeeArea" className="block font-semibold mb-2 text-gray-700">
              Área de Café (hectáreas)
            </label>
            <input
              type="number"
              id="coffeeArea"
              value={profile.coffeeArea}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="soilType" className="block font-semibold mb-2 text-gray-700">
              Tipo de Suelo
            </label>
            <select
              id="soilType"
              value={profile.soilType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            >
              <option value="Volcánico">Volcánico</option>
              <option value="Arcilloso">Arcilloso</option>
              <option value="Arenoso">Arenoso</option>
              <option value="Limoso">Limoso</option>
              <option value="Franco">Franco</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="microclimate" className="block font-semibold mb-2 text-gray-700">
            Microclima
          </label>
          <textarea
            id="microclimate"
            value={profile.microclimate}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Clima templado con lluvias abundantes..."
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Fuentes de Agua</label>
          <div className="flex flex-wrap gap-4">
            {["Río/Arroyo", "Manantial", "Pozo", "Sistema de Captación de Lluvia"].map((source) => (
              <div key={source} className="flex items-center">
                <input
                  type="checkbox"
                  id={`waterSource-${source}`}
                  checked={profile.waterSources.includes(source)}
                  onChange={() => handleCheckboxChange("waterSources", source)}
                  className="mr-2"
                />
                <label htmlFor={`waterSource-${source}`}>{source}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="infrastructure" className="block font-semibold mb-2 text-gray-700">
            Infraestructura
          </label>
          <textarea
            id="infrastructure"
            value={profile.infrastructure}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Beneficio húmedo, área de secado, bodega, etc."
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar Cambios"}
        </Button>
      </form>
    </div>
  );
};

export default ProducerDatosFinca;
