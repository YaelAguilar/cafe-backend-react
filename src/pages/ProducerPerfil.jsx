import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import PHeader from "../components/PHeader";
import PFooter from "../components/PFooter";
import ProducerSidebar from "../components/producerPerfil/ProducerSidebar";
import ProducerInfoGeneral from "../components/producerPerfil/ProducerInfoGeneral";
import ProducerDatosFinca from "../components/producerPerfil/ProducerDatosFinca";
import ProducerProduccion from "../components/producerPerfil/ProducerProduccion";
import ProducerFotos from "../components/producerPerfil/ProducerFotos";

const ProducerPerfil = () => {
  const [activeTab, setActiveTab] = useState("info-general");
  const [profile, setProfile] = useState({
    // Información General
    businessName: "",
    producerType: "individual",
    experienceYears: "",
    description: "",
    city: "",
    state: "",
    website: "",
    phone: "",
    imageUrl: null,
    // Datos de la Finca
    altitude: "",
    totalArea: "",
    coffeeArea: "",
    soilType: "Volcánico",
    microclimate: "",
    waterSources: ["Río/Arroyo", "Manantial"],
    infrastructure: "",
    // Producción
    coffeeVarieties: ["Typica", "Bourbon", "Caturra"],
    annualProduction: "",
    harvestSeason: "Noviembre - Febrero",
    processingMethods: ["Lavado", "Natural", "Honey"],
    agriculturalPractices: "",
    cuppingNotes: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadingImage, setUploadingImage] = useState(false);

  const profileImageInputRef = useRef(null);
  // photosInputRef ya no se usa, por lo que se elimina

  const API_URL = "http://localhost:2010/api";
  const token = localStorage.getItem("token");

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/users/producer/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        const user = response.data.profile;
        setProfile({
          businessName: user.businessName || "",
          producerType: user.Producer?.producerType || "individual",
          experienceYears: user.Producer?.experienceYears || "",
          description: user.Producer?.description || "",
          city: user.Producer?.city || "",
          state: user.Producer?.state || "",
          website: user.Producer?.website || "",
          phone: user.Producer?.phone || "",
          imageUrl: user.Producer?.imageUrl || null,
          altitude: user.Producer?.altitude || "",
          totalArea: user.Producer?.totalArea || "",
          coffeeArea: user.Producer?.coffeeArea || "",
          soilType: user.Producer?.soilType || "Volcánico",
          microclimate: user.Producer?.microclimate || "",
          waterSources: user.Producer?.waterSources || ["Río/Arroyo", "Manantial"],
          infrastructure: user.Producer?.infrastructure || "",
          coffeeVarieties: user.Producer?.coffeeVarieties || ["Typica", "Bourbon", "Caturra"],
          annualProduction: user.Producer?.annualProduction || "",
          harvestSeason: user.Producer?.harvestSeason || "Noviembre - Febrero",
          processingMethods: user.Producer?.processingMethods || ["Lavado", "Natural", "Honey"],
          agriculturalPractices: user.Producer?.agriculturalPractices || "",
          cuppingNotes: user.Producer?.cuppingNotes || "",
        });
      } else {
        setError(response.data.message || "Error al cargar el perfil");
      }
    } catch (err) {
      console.error("Error al obtener perfil:", err);
      setError("Error al cargar el perfil");
    } finally {
      setLoading(false);
    }
  }, [API_URL, token]);

  const fetchPhotos = useCallback(async () => {
    if (activeTab !== "fotos") return;
    try {
      setLoadingPhotos(true);
      const response = await axios.get(`${API_URL}/users/producer/photos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setPhotos(response.data.photos);
      } else {
        console.error("Error al cargar fotos:", response.data.message);
      }
    } catch (err) {
      console.error("Error al obtener fotos:", err);
    } finally {
      setLoadingPhotos(false);
    }
  }, [API_URL, token, activeTab]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos, activeTab]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (field, value) => {
    setProfile((prev) => {
      const currentValues = prev[field] || [];
      return currentValues.includes(value)
        ? { ...prev, [field]: currentValues.filter((item) => item !== value) }
        : { ...prev, [field]: [...currentValues, value] };
    });
  };

  const handleSubmit = async (e, tabName) => {
    e.preventDefault();
    try {
      setLoading(true);
      setSaveSuccess(false);
      let dataToSend = {};
      if (tabName === "info-general") {
        dataToSend = {
          businessName: profile.businessName,
          phone: profile.phone,
          city: profile.city,
          state: profile.state,
          website: profile.website,
          producerType: profile.producerType,
          experienceYears: profile.experienceYears,
          description: profile.description,
        };
      } else if (tabName === "finca") {
        dataToSend = {
          altitude: profile.altitude,
          totalArea: profile.totalArea,
          coffeeArea: profile.coffeeArea,
          soilType: profile.soilType,
          microclimate: profile.microclimate,
          waterSources: profile.waterSources,
          infrastructure: profile.infrastructure,
        };
      } else if (tabName === "produccion") {
        dataToSend = {
          coffeeVarieties: profile.coffeeVarieties,
          annualProduction: profile.annualProduction,
          harvestSeason: profile.harvestSeason,
          processingMethods: profile.processingMethods,
          agriculturalPractices: profile.agriculturalPractices,
          cuppingNotes: profile.cuppingNotes,
        };
      }
      const response = await axios.put(`${API_URL}/users/producer/profile`, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
        fetchProfile();
      } else {
        setError("Error al guardar cambios: " + (response.data.message || "Error desconocido"));
      }
    } catch (err) {
      console.error("Error al guardar cambios:", err);
      setError("Error al guardar cambios: " + (err.response?.data?.message || err.message || "Error desconocido"));
    } finally {
      setLoading(false);
    }
  };

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };

  const handleProfileImageChange = async (e) => {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      setError("Solo se permiten imágenes (JPEG, JPG, PNG, GIF)");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("La imagen no debe superar los 5MB");
      return;
    }
    try {
      setUploadingImage(true);
      setError(null);
      const formData = new FormData();
      formData.append("image", file);
      const response = await axios.post(`${API_URL}/users/upload-profile-image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
        setProfile((prev) => ({
          ...prev,
          imageUrl: response.data.imageUrl,
        }));
      } else {
        setError("Error al subir imagen: " + (response.data.message || "Error desconocido"));
      }
    } catch (err) {
      console.error("Error al subir imagen:", err);
      setError("Error al subir imagen: " + (err.response?.data?.message || err.message || "Error desconocido"));
    } finally {
      setUploadingImage(false);
    }
  };

  const handlePhotosChange = (e) => {
    if (!e.target.files) return;
    setSelectedFiles(Array.from(e.target.files));
  };

  const handlePhotosSubmit = async (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      setError("No se ha seleccionado ningún archivo");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("photos", file);
      });
      const response = await axios.post(`${API_URL}/users/producer/upload-photos`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
        setSelectedFiles([]);
        fetchPhotos();
      } else {
        setError("Error al subir fotos: " + (response.data.message || "Error desconocido"));
      }
    } catch (err) {
      console.error("Error al subir fotos:", err);
      setError("Error al subir fotos: " + (err.response?.data?.message || err.message || "Error desconocido"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PHeader />
      <section id="perfil" className="profile-section page-section py-8">
        <div className="container mx-auto px-5 flex flex-col lg:flex-row gap-8">
          <ProducerSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            profile={profile}
            handleProfileImageClick={handleProfileImageClick}
            profileImageInputRef={profileImageInputRef}
            uploadingImage={uploadingImage}
            handleProfileImageChange={handleProfileImageChange}
          />
          <div className="flex-1 bg-white shadow-sm p-8">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            {saveSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Cambios guardados correctamente.
              </div>
            )}
            {activeTab === "info-general" && (
              <ProducerInfoGeneral
                profile={profile}
                handleChange={handleChange}
                handleSubmit={(e) => handleSubmit(e, "info-general")}
                loading={loading}
              />
            )}
            {activeTab === "finca" && (
              <ProducerDatosFinca
                profile={profile}
                handleChange={handleChange}
                handleSubmit={(e) => handleSubmit(e, "finca")}
                loading={loading}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
            {activeTab === "produccion" && (
              <ProducerProduccion
                profile={profile}
                handleChange={handleChange}
                handleSubmit={(e) => handleSubmit(e, "produccion")}
                loading={loading}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
            {activeTab === "fotos" && (
              <ProducerFotos
                photos={photos}
                loadingPhotos={loadingPhotos}
                selectedFiles={selectedFiles}
                handlePhotosChange={handlePhotosChange}
                handlePhotosSubmit={handlePhotosSubmit}
                loading={loading}
              />
            )}
          </div>
        </div>
      </section>
      <PFooter />
    </div>
  );
};

export default ProducerPerfil;
