import React, { useState } from "react";
import PHeader from "../components/PHeader";
import PFooter from "../components/PFooter";

const ProductorPerfil = () => {
  // Estado para controlar la pestaña activa (por defecto "info-general")
  const [activeTab, setActiveTab] = useState("info-general");

  // Determina si una pestaña está activa para aplicar estilos
  const isActive = (tabId) => activeTab === tabId;

  return (
    <div className="bg-gray-50">
      <PHeader />

      {/* Sección de Perfil y Gestión */}
      <section id="perfil" className="profile-section page-section py-8">
        <div className="flex mx-auto">
          {/* Sidebar */}
          <div className="w-72 bg-white shadow-sm">
            <div className="profile-avatar relative w-[150px] h-[150px] mx-auto my-6">
              <img
                src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Perfil de productor"
                className="w-full h-full object-cover rounded-full"
              />
              <button className="edit-avatar-btn absolute bottom-2 right-2 bg-white text-teal-500 w-10 h-10 rounded-full shadow-md flex items-center justify-center">
                <i className="fas fa-camera"></i>
              </button>
            </div>

            <h3 className="profile-name text-xl font-bold text-center">
              Finca El Paraíso
            </h3>
            <p className="profile-type text-teal-500 font-semibold text-center mb-6">
              Productor Verificado
            </p>

            {/* Menú de Tabs */}
            <ul className="profile-menu">
              {/* Información General */}
              <li
                className={`transition-colors ${
                  isActive("info-general")
                    ? "bg-teal-500 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                <button
                  onClick={() => setActiveTab("info-general")}
                  className="w-full text-left flex items-center gap-2 p-4"
                >
                  <i className="fas fa-user"></i> Información General
                </button>
              </li>

              {/* Datos de la Finca */}
              <li
                className={`transition-colors ${
                  isActive("finca")
                    ? "bg-teal-500 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                <button
                  onClick={() => setActiveTab("finca")}
                  className="w-full text-left flex items-center gap-2 p-4"
                >
                  <i className="fas fa-mountain"></i> Datos de la Finca
                </button>
              </li>

              {/* Producción */}
              <li
                className={`transition-colors ${
                  isActive("produccion")
                    ? "bg-teal-500 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                <button
                  onClick={() => setActiveTab("produccion")}
                  className="w-full text-left flex items-center gap-2 p-4"
                >
                  <i className="fas fa-seedling"></i> Producción
                </button>
              </li>

              {/* Fotos y Media */}
              <li
                className={`transition-colors ${
                  isActive("fotos")
                    ? "bg-teal-500 text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                <button
                  onClick={() => setActiveTab("fotos")}
                  className="w-full text-left flex items-center gap-2 p-4"
                >
                  <i className="fas fa-images"></i> Fotos y Media
                </button>
              </li>
            </ul>
          </div>

          {/* Contenido de Tabs */}
          <div className="flex-1 bg-white shadow-sm p-8">
            {/* Información General */}
            {activeTab === "info-general" && (
              <div id="info-general" className="profile-tab">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Información General
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="farm-name"
                      className="block font-semibold mb-2 text-gray-700"
                    >
                      Nombre de la Finca/Cooperativa
                    </label>
                    <input
                      type="text"
                      id="farm-name"
                      defaultValue="Finca El Paraíso"
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="producer-type"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Tipo de Productor
                      </label>
                      <select
                        id="producer-type"
                        defaultValue="individual"
                        className="w-full p-3 border border-gray-300 rounded"
                      >
                        <option value="individual">Productor Individual</option>
                        <option value="cooperative">Cooperativa</option>
                        <option value="association">Asociación</option>
                        <option value="company">Empresa</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="years"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Años de Experiencia
                      </label>
                      <input
                        type="number"
                        id="years"
                        defaultValue="15"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block font-semibold mb-2 text-gray-700"
                    >
                      Descripción
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      defaultValue="Finca familiar con más de 15 años de experiencia en la producción de café de especialidad. Nos especializamos en variedades de Arábica cultivadas en altura con métodos sostenibles y respetuosos con el medio ambiente."
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="city"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Ciudad/Municipio
                      </label>
                      <input
                        type="text"
                        id="city"
                        defaultValue="San Cristóbal de las Casas"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="state"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Estado
                      </label>
                      <input
                        type="text"
                        id="state"
                        defaultValue="Chiapas"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block font-semibold mb-2 text-gray-700"
                    >
                      Sitio Web
                    </label>
                    <input
                      type="url"
                      id="website"
                      defaultValue="https://www.fincaelparaiso.mx"
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600"
                  >
                    Guardar Cambios
                  </button>
                </form>
              </div>
            )}

            {/* Datos de la Finca */}
            {activeTab === "finca" && (
              <div id="finca" className="profile-tab">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Datos de la Finca
                </h3>
                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="altitude"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Altitud (msnm)
                      </label>
                      <input
                        type="number"
                        id="altitude"
                        defaultValue="1500"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="area"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Área Total (hectáreas)
                      </label>
                      <input
                        type="number"
                        id="area"
                        defaultValue="25"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="coffee-area"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Área de Café (hectáreas)
                      </label>
                      <input
                        type="number"
                        id="coffee-area"
                        defaultValue="18"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="soil-type"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Tipo de Suelo
                      </label>
                      <select
                        id="soil-type"
                        defaultValue="volcanic"
                        className="w-full p-3 border border-gray-300 rounded"
                      >
                        <option value="volcanic">Volcánico</option>
                        <option value="clay">Arcilloso</option>
                        <option value="sandy">Arenoso</option>
                        <option value="loam">Franco</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="microclimate"
                      className="block font-semibold mb-2 text-gray-700"
                    >
                      Microclima
                    </label>
                    <textarea
                      id="microclimate"
                      rows={3}
                      defaultValue="Clima templado con lluvias abundantes durante 8 meses del año. Temperatura promedio de 18-22°C..."
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">
                      Fuentes de Agua
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />{" "}
                        Río/Arroyo
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />{" "}
                        Manantial
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" /> Pozo
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" /> Sistema de
                        Captación de Lluvia
                      </label>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="infrastructure"
                      className="block font-semibold mb-2 text-gray-700"
                    >
                      Infraestructura
                    </label>
                    <textarea
                      id="infrastructure"
                      rows={3}
                      defaultValue="Beneficio húmedo propio, área de secado en patios y camas africanas, bodega de almacenamiento..."
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600"
                  >
                    Guardar Cambios
                  </button>
                </form>
              </div>
            )}

            {/* Producción */}
            {activeTab === "produccion" && (
              <div id="produccion" className="profile-tab">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Producción
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">
                      Variedades Cultivadas
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />{" "}
                        Typica
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />{" "}
                        Bourbon
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />{" "}
                        Caturra
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" /> Catuaí
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" /> Geisha
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" /> Pacamara
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="annual-production"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Producción Anual (kg)
                      </label>
                      <input
                        type="number"
                        id="annual-production"
                        defaultValue="35000"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="harvest-season"
                        className="block font-semibold mb-2 text-gray-700"
                      >
                        Temporada de Cosecha
                      </label>
                      <select
                        id="harvest-season"
                        defaultValue="nov-feb"
                        className="w-full p-3 border border-gray-300 rounded"
                      >
                        <option value="nov-feb">Noviembre - Febrero</option>
                        <option value="dec-mar">Diciembre - Marzo</option>
                        <option value="jan-apr">Enero - Abril</option>
                        <option value="feb-may">Febrero - Mayo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">
                      Métodos de Procesamiento
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />{" "}
                        Lavado
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />{" "}
                        Natural
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />{" "}
                        Honey
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" /> Fermentación
                        Anaeróbica
                      </label>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="farming-practices"
                      className="block font-semibold mb-2 text-gray-700"
                    >
                      Prácticas Agrícolas
                    </label>
                    <textarea
                      id="farming-practices"
                      rows={3}
                      defaultValue="Cultivo bajo sombra con árboles nativos. Uso de composta orgánica y control biológico de plagas..."
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cupping-notes"
                      className="block font-semibold mb-2 text-gray-700"
                    >
                      Notas de Catación Típicas
                    </label>
                    <textarea
                      id="cupping-notes"
                      rows={3}
                      defaultValue="Notas cítricas, caramelo, chocolate con cuerpo medio-alto y acidez brillante..."
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600"
                  >
                    Guardar Cambios
                  </button>
                </form>
              </div>
            )}

            {/* Fotos y Media */}
            {activeTab === "fotos" && (
              <div id="fotos" className="profile-tab">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Fotos y Media
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block font-semibold mb-2 text-gray-700">
                      Subir Archivos
                    </label>
                    <input
                      type="file"
                      multiple
                      className="block w-full text-sm text-gray-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600"
                  >
                    Guardar
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <PFooter />
    </div>
  );
};

export default ProductorPerfil;
