"use client"
import { useEffect, useState, useCallback } from "react"
import Header from "../../components/common/layout/Header"
import Footer from "../../components/common/layout/Footer"
import SectionTitle from "../../components/common/ui/SectionTitle"
import SearchFilters from "../../components/features/search/SearchFilters"
import ProviderCard from "../../components/features/search/ProviderCard"
import { userService } from "../../services/api"
import useNotification from "../../components/common/ui/useNotification";

function Search() {
  const [providers, setProviders] = useState([])
  const [pendingRequests, setPendingRequests] = useState([])
  const [connections, setConnections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("explore")
  const { showNotification } = useNotification()

  const fetchProviders = useCallback(async () => {
    try {
      setLoading(true)
      const response = await userService.getProducersList()
      if (response.success) {
        setProviders(response.providers)
      } else {
        setError(response.message || "Error al cargar proveedores.")
      }
    } catch (err) {
      console.error("Error al obtener proveedores:", err)
      setError("Error al obtener proveedores.")
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchPendingRequests = useCallback(async () => {
    try {
      setLoading(true)
      const response = await userService.getSentRequests()
      if (response.success) {
        // Filtrar solo las solicitudes pendientes
        const pendingReqs = response.requests.filter(req => req.status === "pending")
        setPendingRequests(pendingReqs)
      }
    } catch (err) {
      console.error("Error al obtener solicitudes pendientes:", err)
      showNotification("Error al cargar solicitudes pendientes", "error")
    } finally {
      setLoading(false)
    }
  }, [showNotification])

  const fetchConnections = useCallback(async () => {
    try {
      setLoading(true)
      const response = await userService.getConnections()
      if (response.success) {
        // Filtrar solo las conexiones con productores
        const producerConnections = response.connections.filter(
          conn => conn.user.userType === "producer"
        )
        setConnections(producerConnections)
      }
    } catch (err) {
      console.error("Error al obtener conexiones:", err)
      showNotification("Error al cargar conexiones", "error")
    } finally {
      setLoading(false)
    }
  }, [showNotification])

  const fetchInterested = useCallback(async () => {
    try {
      setLoading(true)
      const response = await userService.getReceivedRequests()
      if (response.success) {
        // Filtrar solo las solicitudes pendientes de productores
        const interestedProducers = response.requests.filter(
          req => req.status === "pending" && req.Sender.userType === "producer"
        )
        setPendingRequests(interestedProducers)
      }
    } catch (err) {
      console.error("Error al obtener productores interesados:", err)
      showNotification("Error al cargar productores interesados", "error")
    } finally {
      setLoading(false)
    }
  }, [showNotification])

  useEffect(() => {
    const loadData = async () => {
      switch (activeTab) {
        case "explore":
          await fetchProviders()
          break
        case "pending":
          await fetchPendingRequests()
          break
        case "matches":
          await fetchConnections()
          break
        case "interested":
          await fetchInterested()
          break
        default:
          break
      }
    }

    loadData()
  }, [activeTab, fetchProviders, fetchPendingRequests, fetchConnections, fetchInterested])

  const handleRequestUpdate = useCallback(() => {
    // Recargar los datos según la pestaña activa
    switch (activeTab) {
      case "explore":
        fetchProviders()
        break
      case "pending":
        fetchPendingRequests()
        break
      case "matches":
        fetchConnections()
        break
      case "interested":
        fetchInterested()
        break
      default:
        break
    }
  }, [activeTab, fetchProviders, fetchPendingRequests, fetchConnections, fetchInterested])

  // Renderizado condicional basado en la pestaña activa
  const renderTabContent = () => {
    switch (activeTab) {
      case "matches":
        return (
          <>
            {loading ? (
              <div className="text-center p-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Cargando conexiones...</p>
              </div>
            ) : connections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {connections.map((connection) => (
                  <ProviderCard 
                    key={connection.id} 
                    provider={connection.user} 
                    onRequestUpdate={handleRequestUpdate}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 bg-white rounded-lg shadow text-center">
                <p className="text-gray-600">
                  No tienes conexiones con productores aún.
                </p>
              </div>
            )}
          </>
        )
      case "pending":
        return (
          <>
            {loading ? (
              <div className="text-center p-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Cargando solicitudes pendientes...</p>
              </div>
            ) : pendingRequests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {pendingRequests.map((request) => (
                  <ProviderCard 
                    key={request.id} 
                    provider={request.Receiver} 
                    onRequestUpdate={handleRequestUpdate}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 bg-white rounded-lg shadow text-center">
                <p className="text-gray-600">
                  No tienes solicitudes pendientes.
                </p>
              </div>
            )}
          </>
        )
      case "interested":
        return (
          <>
            {loading ? (
              <div className="text-center p-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Cargando productores interesados...</p>
              </div>
            ) : pendingRequests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {pendingRequests.map((request) => (
                  <ProviderCard 
                    key={request.id} 
                    provider={request.Sender} 
                    onRequestUpdate={handleRequestUpdate}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 bg-white rounded-lg shadow text-center">
                <p className="text-gray-600">
                  No hay productores interesados en proveerte en este momento.
                </p>
              </div>
            )}
          </>
        )
      case "explore":
        return (
          <>
            <SearchFilters />
            {loading ? (
              <div className="text-center p-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Cargando proveedores...</p>
              </div>
            ) : error ? (
              <div className="text-center p-8 bg-white rounded-lg shadow">
                <p className="text-red-500">{error}</p>
              </div>
            ) : providers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {providers.map((provider) => (
                  <ProviderCard 
                    key={provider.id} 
                    provider={provider} 
                    onRequestUpdate={handleRequestUpdate}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center p-8 bg-white rounded-lg shadow">
                <p className="text-gray-600">No se encontraron proveedores.</p>
              </div>
            )}
          </>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <section className="search-section py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <SectionTitle>Encuentra tu Proveedor Ideal</SectionTitle>
          
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
                  {activeTab === "matches" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></span>
                  )}
                </button>
                <button
                  className={`px-6 py-3 font-medium text-sm transition-colors duration-200 relative ${
                    activeTab === "pending"
                      ? "text-teal-600 bg-white"
                      : "text-gray-600 hover:text-teal-500"
                  }`}
                  onClick={() => setActiveTab("pending")}
                >
                  Pendientes
                  {activeTab === "pending" && (
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
                  Interesados en Proveerte
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
                  Explorar Productores
                  {activeTab === "explore" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></span>
                  )}
                </button>
              </div>

              <div className="p-4 bg-white">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Search