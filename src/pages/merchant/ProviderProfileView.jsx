import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { userService } from "../../services/api";
import Layout from "../../components/common/layout/Layout";
import Header from "../../components/common/layout/Header";
import Footer from "../../components/common/layout/Footer";

const ProviderProfileView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // Usar el hook useApi para las llamadas a la API
  const { execute: fetchProviderApi } = useApi(userService.getProducerById);
  const { execute: fetchPhotosApi } = useApi(userService.getProducerPhotos);

  const fetchProvider = useCallback(async () => {
    try {
      const response = await fetchProviderApi(id);
      if (response.success) {
        setProvider(response.provider);
      } else {
        setError(response.message || "Error al cargar el perfil");
      }
    } catch (err) {
      console.error(err);
      setError("Error al cargar el perfil");
    }
  }, [id, fetchProviderApi]);

  const fetchPhotos = useCallback(async () => {
    try {
      const response = await fetchPhotosApi(id);
      if (response.success) {
        setPhotos(response.photos);
      }
    } catch (err) {
      console.error("Error al cargar fotos:", err);
    }
  }, [id, fetchPhotosApi]);

  useEffect(() => {
    Promise.all([fetchProvider(), fetchPhotos()]).then(() => setLoading(false));
  }, [fetchProvider, fetchPhotos]);

  const openImageModal = (photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeImageModal();
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600"></div>
      </div>
    );
  }

  if (error || !provider) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <p className="text-red-500 text-xl font-semibold mb-2">
            {error || "Proveedor no encontrado."}
          </p>
          <button
            onClick={() => navigate("/buscar")}
            className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Volver a la búsqueda
          </button>
        </div>
      </div>
    );
  }

  const producer = provider.Producer;

  return (
    <Layout
      header={<Header />}
      footer={<Footer />}
    >
      <div className="container mx-auto my-8 px-4 flex-grow">
        <div className="mb-6">
          <button
            onClick={() => navigate("/buscar")}
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-gray-700"
          >
            <span className="mr-2">←</span> Regresar a búsqueda
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-8">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={producer.imageUrl || "/placeholder.svg"}
                alt={producer.businessName}
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl"
              />
              <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">{producer.businessName}</h1>
                <p className="text-xl opacity-90">
                  {producer.city && producer.state
                    ? `${producer.city}, ${producer.state}`
                    : "Sin ubicación"}
                </p>
                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                  {producer.producerType && (
                    <span className="inline-block px-3 py-1 bg-teal-800 bg-opacity-40 rounded-full text-sm">
                      {producer.producerType}
                    </span>
                  )}
                  {producer.experienceYears && (
                    <span className="inline-block px-3 py-1 bg-teal-800 bg-opacity-40 rounded-full text-sm">
                      {producer.experienceYears} años de experiencia
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {producer.description && (
              <div className="mb-8 p-6 bg-teal-50 rounded-xl border border-teal-100">
                <h2 className="text-2xl font-semibold text-teal-800 mb-3">
                  Acerca de nosotros
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {producer.description}
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
                    {producer.phone && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-32">Teléfono:</span>
                        <span className="font-medium text-gray-800">{producer.phone}</span>
                      </div>
                    )}
                    {producer.website && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-32">Sitio Web:</span>
                        <a 
                          href={producer.website.startsWith('http') ? producer.website : `https://${producer.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="font-medium text-teal-600 hover:text-teal-800"
                        >
                          {producer.website}
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

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 mr-2 bg-teal-100 rounded-full items-center justify-center text-teal-600">
                      <i className="fas fa-seedling"></i>
                    </span>
                    Datos de la Finca
                  </h2>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    {producer.altitude && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Altitud:</span>
                        <span className="font-medium text-gray-800">{producer.altitude}</span>
                      </div>
                    )}
                    {producer.totalArea && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Área Total:</span>
                        <span className="font-medium text-gray-800">{producer.totalArea}</span>
                      </div>
                    )}
                    {producer.coffeeArea && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Área de Café:</span>
                        <span className="font-medium text-gray-800">{producer.coffeeArea}</span>
                      </div>
                    )}
                    {producer.soilType && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Tipo de Suelo:</span>
                        <span className="font-medium text-gray-800">{producer.soilType}</span>
                      </div>
                    )}
                    {producer.microclimate && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Microclima:</span>
                        <span className="font-medium text-gray-800">{producer.microclimate}</span>
                      </div>
                    )}
                    {producer.waterSources && producer.waterSources.length > 0 && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Fuentes de Agua:</span>
                        <div className="font-medium text-gray-800">
                          {producer.waterSources.join(", ")}
                        </div>
                      </div>
                    )}
                    {producer.infrastructure && (
                      <div className="flex items-center py-3">
                        <span className="text-gray-500 w-40">Infraestructura:</span>
                        <span className="font-medium text-gray-800">{producer.infrastructure}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 mr-2 bg-teal-100 rounded-full items-center justify-center text-teal-600">
                      <i className="fas fa-coffee"></i>
                    </span>
                    Producción
                  </h2>
                  <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    {producer.coffeeVarieties && producer.coffeeVarieties.length > 0 && (
                      <div className="py-3 border-b border-gray-100">
                        <span className="block text-gray-500 mb-2">Variedades Cultivadas:</span>
                        <div className="flex flex-wrap gap-2">
                          {producer.coffeeVarieties.map((variety, index) => (
                            <span
                              key={index}
                              className="inline-block px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-sm"
                            >
                              {variety}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {producer.annualProduction && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Producción Anual:</span>
                        <span className="font-medium text-gray-800">{producer.annualProduction}</span>
                      </div>
                    )}
                    {producer.harvestSeason && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Temporada de Cosecha:</span>
                        <span className="font-medium text-gray-800">{producer.harvestSeason}</span>
                      </div>
                    )}
                    {producer.processingMethods && producer.processingMethods.length > 0 && (
                      <div className="py-3 border-b border-gray-100">
                        <span className="block text-gray-500 mb-2">Métodos de Procesamiento:</span>
                        <div className="flex flex-wrap gap-2">
                          {producer.processingMethods.map((method, index) => (
                            <span
                              key={index}
                              className="inline-block px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-sm"
                            >
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {producer.agriculturalPractices && (
                      <div className="flex items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 w-40">Prácticas Agrícolas:</span>
                        <span className="font-medium text-gray-800">{producer.agriculturalPractices}</span>
                      </div>
                    )}
                    {producer.cuppingNotes && (
                      <div className="py-3">
                        <span className="block text-gray-500 mb-2">Notas de Catación:</span>
                        <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100 italic text-gray-700">
                          "{producer.cuppingNotes}"
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="inline-block w-8 h-8 mr-2 bg-teal-100 rounded-full items-center justify-center text-teal-600">
                  <i className="fas fa-images"></i>
                </span>
                Galería de Fotos
              </h2>

              {photos.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                  <i className="fas fa-images text-5xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500">No hay fotos disponibles.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="group overflow-hidden rounded-xl shadow-md bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      onClick={() => openImageModal(photo)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={photo.imageUrl || "/placeholder.svg"}
                          alt={photo.title || "Foto"}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {photo.title && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white font-medium">{photo.title}</p>
                          </div>
                        )}
                        <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <i className="fas fa-search-plus text-white"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center modal-overlay"
          onClick={handleModalClick}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors z-10"
              onClick={closeImageModal}
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div 
              className="bg-white p-2 rounded-lg shadow-2xl"
              onClick={handleImageClick}
            >
              <img
                src={selectedImage.imageUrl || "/placeholder.svg"}
                alt={selectedImage.title || "Foto ampliada"}
                className="max-h-[80vh] mx-auto rounded"
              />
              
              {selectedImage.title && (
                <div className="p-4 bg-white text-center">
                  <h3 className="text-xl font-medium text-gray-800">{selectedImage.title}</h3>
                  {selectedImage.description && (
                    <p className="text-gray-600 mt-1">{selectedImage.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProviderProfileView;