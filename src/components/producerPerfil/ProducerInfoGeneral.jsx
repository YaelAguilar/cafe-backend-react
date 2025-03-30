import React from "react";
import Button from "../ui/Button";

const ProducerInfoGeneral = ({ profile, handleChange, handleSubmit, loading }) => {
  return (
    <div id="info-general" className="profile-tab">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Información General</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="businessName" className="block font-semibold mb-2 text-gray-700">
            Nombre de la Finca/Cooperativa
          </label>
          <input
            type="text"
            id="businessName"
            value={profile.businessName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label htmlFor="producerType" className="block font-semibold mb-2 text-gray-700">
              Tipo de Productor
            </label>
            <select
              id="producerType"
              value={profile.producerType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            >
              <option value="individual">Productor Individual</option>
              <option value="cooperative">Cooperativa</option>
              <option value="association">Asociación</option>
              <option value="company">Empresa</option>
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="experienceYears" className="block font-semibold mb-2 text-gray-700">
              Años de Experiencia
            </label>
            <input
              type="number"
              id="experienceYears"
              value={profile.experienceYears}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block font-semibold mb-2 text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            value={profile.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <label htmlFor="city" className="block font-semibold mb-2 text-gray-700">
              Ciudad/Municipio
            </label>
            <input
              type="text"
              id="city"
              value={profile.city}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="state" className="block font-semibold mb-2 text-gray-700">
              Estado
            </label>
            <input
              type="text"
              id="state"
              value={profile.state}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="website" className="block font-semibold mb-2 text-gray-700">
            Sitio Web
          </label>
          <input
            type="url"
            id="website"
            value={profile.website}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-semibold mb-2 text-gray-700">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Ingresa tu número de teléfono"
            required
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar Cambios"}
        </Button>
      </form>
    </div>
  );
};

export default ProducerInfoGeneral;
