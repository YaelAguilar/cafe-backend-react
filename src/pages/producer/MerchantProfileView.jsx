import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/common/layout/Layout";
import ProducerHeader from "../../components/common/layout/ProducerHeader";
import ProducerFooter from "../../components/common/layout/ProducerFooter";

const MerchantProfileView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [merchant, setMerchant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMerchant = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      
      const response = await fetch(`http://localhost:2010/api/merchants/${id}`, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      const data = await response.json();
      
      if (data.success) {
        setMerchant(data.merchant);
      } else {
        setError(data.message || "Error al cargar el perfil del comerciante.");
      }
    } catch (err) {
      console.error("Error al obtener comerciante:", err);
      setError("Error al cargar el perfil del comerciante.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMerchant();
  }, [fetchMerchant]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600"></div>
      </div>
    );
  }

  if (error || !merchant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <p className="text-red-500 text-xl font-semibold mb-2">
            {error || "Comerciante no encontrado."}
          </p>
          <button
            onClick={() => navigate("/merchant-interested")}
            className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Volver a la lista de comerciantes
          </button>
        </div>
      </div>
    );
  }

  const supplyNeeds = merchant.MerchantSupplyNeeds || {};

  return (
    <Layout
      header={<ProducerHeader />}
      footer={<ProducerFooter />}
    >
      <div className="container mx-auto my-8 px-4 flex-grow">
        <div className="mb-6">
          <button
            onClick={() => navigate("/merchant-interested")}
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-gray-700"
          >
            <span className="mr-2">←</span> Regresar a la lista
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-8">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={merchant.imageUrl || "/placeholder.svg"}
                alt={merchant.businessName}
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl"
              />
              <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">{merchant.businessName}</h1>
                <p className="text-xl opacity-90">
                  {merchant.city && merchant.state
                    ? `${merchant.city}, ${merchant.state}`
                    : "Sin ubicación"}
                </p>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                  {merchant.businessType && (
                    <span className="inline-block px-3 py-1 bg-teal-800 bg-opacity-40 rounded-full text-sm">
                      {merchant.businessType}
                    </span>
                  )}
                  {merchant.yearsInMarket && (
                    <span className="inline-block px-3 py-1 bg-teal-800 bg-opacity-40 rounded-full text-sm">
                      {merchant.yearsInMarket} años en el mercado
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {merchant.description && (
              <div className="mb-8 p-6 bg-teal-50 rounded-xl border border-teal-100">
                <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                  Acerca de nosotros
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {merchant.description}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 mr-2 bg-teal-100 rounded-full items-center justify-center text-teal-600">
                      <i className="fas fa-info-circle"></i>
                    </span>
                    Información de Contacto
                  </h2>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    {merchant.phone && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-32">Teléfono:</span>
                        <span className="font-medium text-gray-800">{merchant.phone}</span>
                      </div>
                    )}
                    {merchant.website && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-32">Sitio Web:</span>
                        <a 
                          href={merchant.website.startsWith('http') ? merchant.website : `https://${merchant.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-medium text-teal-600 hover:text-teal-800"
                        >
                          {merchant.website}
                        </a>
                      </div>
                    )}
                    <div className="flex justify-center mt-4">
                      <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-md flex items-center">
                        <span className="mr-2">
                          <i className="fas fa-envelope"></i>
                        </span>
                        Contactar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 mr-2 bg-teal-100 rounded-full items-center justify-center text-teal-600">
                      <i className="fas fa-coffee"></i>
                    </span>
                    Necesidades de Abastecimiento
                  </h2>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    {supplyNeeds.coffeeTypes && supplyNeeds.coffeeTypes.length > 0 && (
                      <div className="py-3 border-b border-gray-100">
                        <span className="block text-gray-500 mb-2">Tipos de Café que Busca:</span>
                        <div className="flex flex-wrap gap-2">
                          {supplyNeeds.coffeeTypes.map((type, index) => (
                            <span
                              key={index}
                              className="inline-block px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {supplyNeeds.qualities && supplyNeeds.qualities.length > 0 && (
                      <div className="py-3 border-b border-gray-100">
                        <span className="block text-gray-500 mb-2">Calidades Requeridas:</span>
                        <div className="flex flex-wrap gap-2">
                          {supplyNeeds.qualities.map((quality, index) => (
                            <span
                              key={index}
                              className="inline-block px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm"
                            >
                              {quality}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {supplyNeeds.volumeRequired && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Volumen Requerido:</span>
                        <span className="font-medium text-gray-800">{supplyNeeds.volumeRequired} kg/mes</span>
                      </div>
                    )}
                    {supplyNeeds.purchaseFrequency && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Frecuencia de Compra:</span>
                        <span className="font-medium text-gray-800">{supplyNeeds.purchaseFrequency}</span>
                      </div>
                    )}
                    {supplyNeeds.additionalRequirements && (
                      <div className="py-3">
                        <span className="block text-gray-500 mb-2">Requisitos Adicionales:</span>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-gray-700">
                          {supplyNeeds.additionalRequirements}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MerchantProfileView;