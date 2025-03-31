import React from "react";
import Button from "../../../common/ui/Button";

const ProducerFotos = ({
  photos,
  loadingPhotos,
  selectedFiles,
  handlePhotosChange,
  handlePhotosSubmit,
  loading,
}) => {
  return (
    <div id="fotos" className="profile-tab">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Fotos</h3>
      <form className="space-y-6 mb-10" onSubmit={handlePhotosSubmit}>
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Subir Archivos
          </label>
          <div className="flex items-center">
            <label className="flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Elegir archivos
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                multiple
                onChange={handlePhotosChange}
              />
            </label>
            <span className="ml-4 text-gray-500">
              {selectedFiles.length > 0
                ? `${selectedFiles.length} archivo(s) seleccionado(s)`
                : "Ningún archivo seleccionado"}
            </span>
          </div>
        </div>
        <Button type="submit" disabled={loading || selectedFiles.length === 0}>
          {loading ? "Guardando..." : "Guardar"}
        </Button>
      </form>
      <div>
        <h4 className="text-xl font-semibold mb-4 text-gray-700">
          Galería de Fotos
        </h4>
        {loadingPhotos ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-teal-500"></div>
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <i className="fas fa-images text-4xl mb-3"></i>
            <p>No hay fotos disponibles. Sube algunas para mostrarlas aquí.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="overflow-hidden rounded-lg">
                <img
                  src={photo.imageUrl || "/placeholder.svg"}
                  alt={photo.title || "Foto"}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  style={{ opacity: 1 }}
                  onError={(e) => {
                    console.error("Error loading image:", photo.imageUrl);
                    e.target.src = "/placeholder.svg";
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProducerFotos;
