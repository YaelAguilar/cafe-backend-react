import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Coffee } from 'lucide-react';
import Button from "../../common/ui/Button";
import { userService } from "../../../services/api";
import { useAuth } from "../../../context/useAuth";
import useNotification from "../../common/ui/useNotification";

function ProviderCard({ provider, onRequestUpdate }) {
  const producer = provider.Producer;
  const { currentUser } = useAuth();
  const { showNotification } = useNotification();
  const [requestStatus, setRequestStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const location =
    producer && producer.city && producer.state
      ? `${producer.city}, ${producer.state}`
      : "Sin ubicación";
  const description =
    producer && producer.description
      ? producer.description
      : "Sin descripción";
  const coffeeVarieties =
    producer && producer.coffeeVarieties && producer.coffeeVarieties.length > 0
      ? producer.coffeeVarieties.join(", ")
      : "No especificadas";
  const imageUrl =
    producer && producer.imageUrl ? producer.imageUrl : "/placeholder.svg";

  useEffect(() => {
    const checkRequestStatus = async () => {
      try {
        const response = await userService.checkContactRequestStatus(provider.id);
        if (response.success) {
          setRequestStatus(response.status);
        }
      } catch (error) {
        console.error("Error al verificar estado de solicitud:", error);
      }
    };

    if (currentUser && provider.id) {
      checkRequestStatus();
    }
  }, [currentUser, provider.id]);

  const handleContact = async () => {
    try {
      setLoading(true);
      const response = await userService.createContactRequest(provider.id);
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
        <Button onClick={handleContact} disabled={loading}>
          {loading ? "Enviando..." : "Contactar"}
        </Button>
      );
    }

    if (requestStatus.direction === "sent") {
      if (requestStatus.status === "pending") {
        return (
          <Button variant="warning" disabled>
            Pendiente
          </Button>
        );
      } else if (requestStatus.status === "accepted") {
        return null; // No mostrar botón de contacto si ya está aceptado
      }
    } else if (requestStatus.direction === "received") {
      if (requestStatus.status === "pending") {
        return (
          <div className="flex gap-2">
            <Button onClick={handleAcceptRequest} disabled={loading}>
              Aceptar
            </Button>
            <Button variant="outline" onClick={handleRejectRequest} disabled={loading}>
              Rechazar
            </Button>
          </div>
        );
      }
    }

    return (
      <Button onClick={handleContact} disabled={loading}>
        Contactar
      </Button>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 relative self-center">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={producer.businessName}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            style={{ objectPosition: "left center" }}
          />
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{producer.businessName}</h3>
        </div>
        <p className="text-gray-600 mb-4 flex items-center">
          <MapPin size={18} className="mr-2" /> {location}
        </p>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="text-gray-600 flex items-center">
            <Coffee size={18} className="mr-2" /> Variedades: {coffeeVarieties}
          </span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex gap-4">
          {renderContactButton()}
          <Link to={`/provider/${provider.Producer?.id}`}>
            <Button variant="outline">Ver Perfil</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProviderCard;