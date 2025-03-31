import React from "react";
import Button from "../../../common/ui/Button";

const ProducerProduccion = ({ profile, handleChange, handleSubmit, loading, handleCheckboxChange }) => {
  return (
    <div id="produccion" className="profile-tab">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Producción</h3>
      <form className="space-y-6" onSubmit={(e) => handleSubmit(e, "produccion")}>
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Variedades Cultivadas</label>
          <div className="flex flex-wrap gap-4">
            {["Typica", "Bourbon", "Caturra", "Catuaí", "Geisha", "Pacamara"].map((variety) => (
              <div key={variety} className="flex items-center">
                <input
                  type="checkbox"
                  id={`variety-${variety}`}
                  checked={profile.coffeeVarieties.includes(variety)}
                  onChange={() => handleCheckboxChange("coffeeVarieties", variety)}
                  className="mr-2"
                />
                <label htmlFor={`variety-${variety}`}>{variety}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label htmlFor="annualProduction" className="block font-semibold mb-2 text-gray-700">
              Producción Anual (kg)
            </label>
            <input
              type="number"
              id="annualProduction"
              value={profile.annualProduction}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="harvestSeason" className="block font-semibold mb-2 text-gray-700">
              Temporada de Cosecha
            </label>
            <select
              id="harvestSeason"
              value={profile.harvestSeason}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            >
              <option value="Noviembre - Febrero">Noviembre - Febrero</option>
              <option value="Diciembre - Marzo">Diciembre - Marzo</option>
              <option value="Enero - Abril">Enero - Abril</option>
              <option value="Febrero - Mayo">Febrero - Mayo</option>
              <option value="Marzo - Junio">Marzo - Junio</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Métodos de Procesamiento</label>
          <div className="flex flex-wrap gap-4">
            {["Lavado", "Natural", "Honey", "Fermentación Anaeróbica"].map((method) => (
              <div key={method} className="flex items-center">
                <input
                  type="checkbox"
                  id={`processing-${method}`}
                  checked={profile.processingMethods.includes(method)}
                  onChange={() => handleCheckboxChange("processingMethods", method)}
                  className="mr-2"
                />
                <label htmlFor={`processing-${method}`}>{method}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="agriculturalPractices" className="block font-semibold mb-2 text-gray-700">
            Prácticas Agrícolas
          </label>
          <textarea
            id="agriculturalPractices"
            value={profile.agriculturalPractices}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Ej. Cultivo bajo sombra, composta orgánica, etc."
          />
        </div>
        <div>
          <label htmlFor="cuppingNotes" className="block font-semibold mb-2 text-gray-700">
            Notas de Catación Típicas
          </label>
          <textarea
            id="cuppingNotes"
            value={profile.cuppingNotes}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Ej. Notas cítricas, caramelo, etc."
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar Cambios"}
        </Button>
      </form>
    </div>
  );
};

export default ProducerProduccion;
