import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../services/api";
import { useAuth } from "../../../context/useAuth";
import useNotification from "../../common/ui/useNotification";

const MerchantCard = ({ merchant, onRequestUpdate }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { showNotification } = useNotification();
  const [requestStatus, setRequestStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const needs = merchant.MerchantSupplyNeeds || {};

  useEffect(() => {
    const checkRequestStatus = async () => {
      try {
        const response = await userService.checkContactRequestStatus(merchant.User.id);
        if (response.success) {
          setRequestStatus(response.status);
        }
      } catch (error) {
        console.error("Error al verificar estado de solicitud:", error);
      }
    };

    if (currentUser && merchant.User?.id) {
      checkRequestStatus();
    }
  }, [currentUser, merchant.User?.id]);

  const handleContact = async () => {
    try {
      setLoading(true);
      const response = await userService.createContactRequest(merchant.User.id);
      if (response.success) {
        showNotification("Solicitud de contacto enviada exitosamente", "success");
        setRequestStatus({ exists: true, status: "pending", direction: "sent" });
        if (onRequestUpdate) onRequestUpdate();
      }
    } catch (error) {
      console.error("Error al enviar solicitud:", error);
      showNotification(
        error.response?.data?.message || "Error al enviar solicitud de contacto",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptRequest = async () => {
    try {
      setLoading(true);
      const response = await userService.updateContactRequestStatus(
        requestStatus.id,
        "accepted"
      );
      if (response.success) {
        showNotification("Solicitud de contacto aceptada", "success");
        setRequestStatus({ ...requestStatus, status: "accepted" });
        if (onRequestUpdate) onRequestUpdate();
      }
    } catch (error) {
      console.error("Error al aceptar solicitud:", error);
      showNotification(
        error.response?.data?.message || "Error al aceptar solicitud",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRejectRequest = async () => {
    try {
      setLoading(true);
      const response = await userService.updateContactRequestStatus(
        requestStatus.id,
        "rejected"
      );
      if (response.success) {
        showNotification("Solicitud de contacto rechazada", "success");
        setRequestStatus({ exists: false });
        if (onRequestUpdate) onRequestUpdate();
      }
    } catch (error) {
      console.error("Error al rechazar solicitud:", error);
      showNotification(
        error.response?.data?.message || "Error al rechazar solicitud",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const renderContactButton = () => {
    if (!requestStatus || !requestStatus.exists) {
      return (
        <button
          onClick={handleContact}
          disabled={loading}
          className="flex-1 px-3 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
        >
          {loading ? "Enviando..." : "Contactar"}
        </button>
      );
    }

    if (requestStatus.direction === "sent") {
      if (requestStatus.status === "pending") {
        return (
          <button
            disabled
            className="flex-1 px-3 py-2 text-sm font-medium text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-md focus:outline-none transition-colors duration-200"
          >
            Pendiente
          </button>
        );
      } else if (requestStatus.status === "accepted") {
        return null; // No mostrar botón de contacto si ya está aceptado
      }
    } else if (requestStatus.direction === "received") {
      if (requestStatus.status === "pending") {
        return (
          <div className="flex gap-2 flex-1">
            <button
              onClick={handleAcceptRequest}
              disabled={loading}
              className="flex-1 px-3 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              Aceptar
            </button>
            <button
              onClick={handleRejectRequest}
              disabled={loading}
              className="flex-1 px-3 py-2 text-sm font-medium text-red-600 bg-white border border-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              Rechazar
            </button>
          </div>
        );
      }
    }

    return (
      <button
        onClick={handleContact}
        disabled={loading}
        className="flex-1 px-3 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
      >
        Contactar
      </button>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-200">
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
            {merchant.description || "Sin descripción disponible"}
          </p>

          <div className="grid grid-cols-1 gap-3 mb-4">
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                Tipos de Café
              </h4>
              <div className="flex flex-wrap gap-1">
                {needs.coffeeTypes && needs.coffeeTypes.length > 0 ? (
                  needs.coffeeTypes.map((type, idx) => (
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
                {needs.qualities && needs.qualities.length > 0 ? (
                  needs.qualities.map((quality, idx) => (
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
                {needs.volumeRequired || "No especificado"}
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
          {renderContactButton()}
        </div>
      </div>
    </div>
  );
};

export default MerchantCard;