import React from "react";

const ProducerSidebar = ({
  activeTab,
  setActiveTab,
  profile,
  handleProfileImageClick,
  profileImageInputRef,
  uploadingImage,
  handleProfileImageChange,
}) => {
  const isActive = (tabId) => activeTab === tabId;

  return (
    <div className="w-72 bg-white shadow-sm p-8">
      <div className="profile-avatar relative w-[150px] h-[150px] mx-auto my-6">
        <div
          className="w-full h-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center cursor-pointer"
          onClick={handleProfileImageClick}
        >
          {profile.imageUrl ? (
            <img
              src={profile.imageUrl}
              alt="Perfil de productor"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Perfil de productor"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <label className="edit-avatar-btn absolute bottom-2 right-2 bg-white text-teal-500 w-10 h-10 rounded-full shadow-md flex items-center justify-center cursor-pointer">
          {uploadingImage ? (
            <div className="w-4 h-4 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <i className="fas fa-camera"></i>
          )}
          <input
            type="file"
            ref={profileImageInputRef}
            className="hidden"
            accept="image/jpeg,image/jpg,image/png,image/gif"
            onChange={handleProfileImageChange}
          />
        </label>
      </div>
      <h3 className="profile-name text-xl font-bold text-center">
        {profile.businessName || "Sin Nombre"}
      </h3>
      <p className="profile-type text-teal-500 font-semibold text-center mb-6">
        Productor Verificado
      </p>
      <ul className="profile-menu">
        <li
          className={`transition-colors rounded ${
            isActive("info-general") ? "bg-teal-500 text-white" : "text-gray-800 hover:bg-gray-100"
          }`}
        >
          <button
            onClick={() => setActiveTab("info-general")}
            className="w-full text-left flex items-center gap-2 p-4"
          >
            <i className="fas fa-user"></i> Información General
          </button>
        </li>
        <li
          className={`transition-colors rounded ${
            isActive("finca") ? "bg-teal-500 text-white" : "text-gray-800 hover:bg-gray-100"
          }`}
        >
          <button onClick={() => setActiveTab("finca")} className="w-full text-left flex items-center gap-2 p-4">
            <i className="fas fa-mountain"></i> Datos de la Finca
          </button>
        </li>
        <li
          className={`transition-colors rounded ${
            isActive("produccion") ? "bg-teal-500 text-white" : "text-gray-800 hover:bg-gray-100"
          }`}
        >
          <button
            onClick={() => setActiveTab("produccion")}
            className="w-full text-left flex items-center gap-2 p-4"
          >
            <i className="fas fa-seedling"></i> Producción
          </button>
        </li>
        <li
          className={`transition-colors rounded ${
            isActive("fotos") ? "bg-teal-500 text-white" : "text-gray-800 hover:bg-gray-100"
          }`}
        >
          <button onClick={() => setActiveTab("fotos")} className="w-full text-left flex items-center gap-2 p-4">
            <i className="fas fa-images"></i> Fotos
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProducerSidebar;
