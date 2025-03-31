import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PHeader from "../components/PHeader";
import PFooter from "../components/PFooter";

const MerchantInterested = () => {
  const navigate = useNavigate();
  const API_URL = "http://localhost:2010/api";
  const [activeTab, setActiveTab] = useState("matches");
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Nueva función para obtener comerciantes desde /users/merchant/list
  const fetchMerchants = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      // Importante: aquí la ruta es /users/merchant/list
      const response = await axios.get(`${API_URL}/users/merchant/list`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success && Array.isArray(response.data.merchants)) {
        // Aseguramos que cada uno tenga datos "MerchantSupplyNeeds" o un objeto vacío
        const processed = response.data.merchants.map((m) => {
          const needs = m.MerchantSupplyNeeds || {};
          return {
            id: m.id,  // id_comercializador
            businessName: m.businessName,
            description: m.description || "Sin descripción disponible",
            city: m.city || "",
            state: m.state || "",
            // imagen de perfil
            imageUrl: m.imageUrl || "",

            // De la tabla MerchantSupplyNeeds
            coffeeTypes: needs.coffeeTypes || [],
            qualities: needs.qualities || [],
            monthlyVolume: needs.volumeRequired || "No especificado",
          };
        });
        setMerchants(processed);
      } else {
        setError(response.data.message || "Error al cargar los comerciantes.");
      }
    } catch (err) {
      console.error("Error al obtener comerciantes:", err);
      setError("Error al cargar los comerciantes.");
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchMerchants();
  }, [fetchMerchants]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <p className="text-red-500 text-xl font-semibold mb-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!Array.isArray(merchants)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <p className="text-yellow-500 text-xl font-semibold mb-2">No hay comerciantes disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PHeader />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
          Comerciantes Interesados
        </h1>

        {/* Sección de tabs (filtros de búsqueda) */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex flex-wrap border-b">
              <button
                className={`px-6 py-3 font-medium text-sm transition-colors duration-200 relative ${
                  activeTab === "matches"
                    ? "text-teal-600 bg-white"
                    : "text-gray-600 hover:text-teal-500"
                }`}
                onClick={() => setActiveTab("matches")}
              >
                Emparejamientos
                <span className="ml-2 px-2 py-0.5 text-xs bg-teal-100 text-teal-800 rounded-full">
                  8
                </span>
                {activeTab === "matches" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></span>
                )}
              </button>
              <button
                className={`px-6 py-3 font-medium text-sm transition-colors duration-200 relative ${
                  activeTab === "interested"
                    ? "text-teal-600 bg-white"
                    : "text-gray-600 hover:text-teal-500"
                }`}
                onClick={() => setActiveTab("interested")}
              >
                Interesados en tus Lotes
                <span className="ml-2 px-2 py-0.5 text-xs bg-teal-100 text-teal-800 rounded-full">
                  5
                </span>
                {activeTab === "interested" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></span>
                )}
              </button>
              <button
                className={`px-6 py-3 font-medium text-sm transition-colors duration-200 relative ${
                  activeTab === "explore"
                    ? "text-teal-600 bg-white"
                    : "text-gray-600 hover:text-teal-500"
                }`}
                onClick={() => setActiveTab("explore")}
              >
                Explorar Comerciantes
                {activeTab === "explore" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></span>
                )}
              </button>
            </div>

            {/* Filtros */}
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* ...Tus selectores de filtro... */}
                <div className="space-y-1">
                  <label htmlFor="merchant-type" className="block text-sm font-medium text-gray-700">
                    Tipo de Comerciante
                  </label>
                  <select
                    id="merchant-type"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 text-sm"
                  >
                    <option value="">Todos los tipos</option>
                    <option value="cafe">Cafeterías</option>
                    <option value="roaster">Tostadores</option>
                    <option value="distributor">Distribuidores</option>
                    <option value="exporter">Exportadores</option>
                  </select>
                </div>
                {/* ...Siguientes selects: location, volume, certification... */}
              </div>
              <button className="w-full md:w-auto px-4 py-2 bg-teal-600 text-white font-medium rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* Cards de Comerciante en grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {merchants.length > 0 ? (
            merchants.map((merchant) => (
              <div
                key={merchant.id}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={merchant.imageUrl || "/placeholder.svg"}
                        alt={merchant.businessName}
                        className="w-20 h-20 object-cover rounded-full border border-gray-200"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {merchant.businessName}
                      </h3>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-full">
                        {merchant.city}, {merchant.state}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-4">
                      {merchant.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 mb-4">
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                          Tipos de Café
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {merchant.coffeeTypes.length > 0 ? (
                            merchant.coffeeTypes.map((type, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs bg-amber-50 text-amber-800 rounded">
                                {type}
                              </span>
                            ))
                          ) : (
                            <span className="px-2 py-1 text-xs bg-gray-50 text-gray-500 rounded">
                              No especificado
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                          Calidades
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {merchant.qualities.length > 0 ? (
                            merchant.qualities.map((quality, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs bg-blue-50 text-blue-800 rounded">
                                {quality}
                              </span>
                            ))
                          ) : (
                            <span className="px-2 py-1 text-xs bg-gray-50 text-gray-500 rounded">
                              No especificado
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                          Volumen (kg/mes)
                        </h4>
                        <p className="text-sm font-medium text-gray-700">
                          {merchant.monthlyVolume}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => navigate(`/merchant/${merchant.id}`)}
                      className="flex-1 px-3 py-2 text-sm font-medium text-teal-600 bg-white border border-teal-600 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                    >
                      Ver Perfil
                    </button>
                    <button
                      className="flex-1 px-3 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                    >
                      Contactar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 p-8 bg-white rounded-lg shadow text-center">
              <p className="text-gray-600">
                No se encontraron comerciantes que coincidan con los criterios.
              </p>
            </div>
          )}
        </div>

        {/* Paginación */}
        {merchants.length > 0 && (
          <div className="flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Anterior</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-teal-500 text-sm font-medium text-white"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Siguiente</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4-4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        )}
      </main>
      <PFooter />
    </div>
  );
};

export default MerchantInterested;
