import React, { useEffect, useState, useCallback } from "react";
import ProducerHeader from "../../components/common/layout/ProducerHeader";
import ProducerFooter from "../../components/common/layout/ProducerFooter";
import { userService } from "../../services/api";
import useNotification from "../../components/common/ui/useNotification";
import MerchantCard from "../../components/features/merchant/MerchantCard";

const MerchantInterested = () => {
  const { showNotification } = useNotification();
  const [activeTab, setActiveTab] = useState("explore");
  const [merchants, setMerchants] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [connections, setConnections] = useState([]);
  const [interestedMerchants, setInterestedMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMerchants = useCallback(async () => {
    try {
      setLoading(true);
      const response = await userService.getMerchantsList();

      if (response.success) {
        setMerchants(response.merchants);
      } else {
        setError(response.message || "Error al cargar los comerciantes.");
      }
    } catch (err) {
      console.error("Error al obtener comerciantes:", err);
      setError("Error al cargar los comerciantes.");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPendingRequests = useCallback(async () => {
    try {
      setLoading(true);
      const response = await userService.getSentRequests();
      if (response.success) {
        // Filtrar solo las solicitudes pendientes a comerciantes
        const pendingReqs = response.requests.filter(
          req => req.status === "pending" && req.Receiver.userType === "merchant"
        );
        setPendingRequests(pendingReqs);
      }
    } catch (err) {
      console.error("Error al obtener solicitudes pendientes:", err);
      showNotification("Error al cargar solicitudes pendientes", "error");
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  const fetchConnections = useCallback(async () => {
    try {
      setLoading(true);
      const response = await userService.getConnections();
      if (response.success) {
        // Filtrar solo las conexiones con comerciantes
        const merchantConnections = response.connections.filter(
          conn => conn.user.userType === "merchant"
        );
        setConnections(merchantConnections);
      }
    } catch (err) {
      console.error("Error al obtener conexiones:", err);
      showNotification("Error al cargar conexiones", "error");
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  const fetchInterestedMerchants = useCallback(async () => {
    try {
      setLoading(true);
      const response = await userService.getReceivedRequests();
      if (response.success) {
        // Filtrar solo las solicitudes pendientes de comerciantes
        const interestedMerchants = response.requests.filter(
          req => req.status === "pending" && req.Sender.userType === "merchant"
        );
        setInterestedMerchants(interestedMerchants);
      }
    } catch (err) {
      console.error("Error al obtener comerciantes interesados:", err);
      showNotification("Error al cargar comerciantes interesados", "error");
    } finally {
      setLoading(false);
    }
  }, [showNotification]);

  useEffect(() => {
    const loadData = async () => {
      switch (activeTab) {
        case "explore":
          await fetchMerchants();
          break;
        case "pending":
          await fetchPendingRequests();
          break;
        case "matches":
          await fetchConnections();
          break;
        case "interested":
          await fetchInterestedMerchants();
          break;
        default:
          break;
      }
    };

    loadData();
  }, [activeTab, fetchMerchants, fetchPendingRequests, fetchConnections, fetchInterestedMerchants]);

  const handleRequestUpdate = useCallback(() => {
    // Recargar los datos según la pestaña activa
    switch (activeTab) {
      case "explore":
        fetchMerchants();
        break;
      case "pending":
        fetchPendingRequests();
        break;
      case "matches":
        fetchConnections();
        break;
      case "interested":
        fetchInterestedMerchants();
        break;
      default:
        break;
    }
  }, [activeTab, fetchMerchants, fetchPendingRequests, fetchConnections, fetchInterestedMerchants]);

  if (loading && !merchants.length && !pendingRequests.length && !connections.length && !interestedMerchants.length) {
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
                  <MerchantCard 
                    key={connection.id} 
                    merchant={connection.user.Merchant} 
                    onRequestUpdate={handleRequestUpdate}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 bg-white rounded-lg shadow text-center">
                <p className="text-gray-600">
                  No tienes conexiones con comerciantes aún.
                </p>
              </div>
            )}
          </>
        );
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
                  <MerchantCard 
                    key={request.id} 
                    merchant={request.Receiver.Merchant} 
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
        );
      case "interested":
        return (
          <>
            {loading ? (
              <div className="text-center p-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Cargando comerciantes interesados...</p>
              </div>
            ) : interestedMerchants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {interestedMerchants.map((request) => (
                  <MerchantCard 
                    key={request.id} 
                    merchant={request.Sender.Merchant} 
                    onRequestUpdate={handleRequestUpdate}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 bg-white rounded-lg shadow text-center">
                <p className="text-gray-600">
                  No hay comerciantes interesados en tus lotes en este momento.
                </p>
              </div>
            )}
          </>
        );
      case "explore":
        return (
          <>
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
              </div>
              <button className="w-full md:w-auto px-4 py-2 bg-teal-600 text-white font-medium rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
                Aplicar Filtros
              </button>
            </div>

            {loading ? (
              <div className="text-center p-8">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Cargando comerciantes...</p>
              </div>
            ) : merchants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {merchants.map((merchant) => (
                  <MerchantCard 
                    key={merchant.id} 
                    merchant={merchant} 
                    onRequestUpdate={handleRequestUpdate}
                  />
                ))}
              </div>
            ) : (
              <div className="col-span-3 p-8 bg-white rounded-lg shadow text-center">
                <p className="text-gray-600">
                  No se encontraron comerciantes que coincidan con los criterios.
                </p>
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ProducerHeader />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
          Comerciantes Interesados
        </h1>

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
                Interesados en tus Lotes
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

            {renderTabContent()}
          </div>
        </div>
      </main>
      <ProducerFooter />
    </div>
  );
};

export default MerchantInterested;