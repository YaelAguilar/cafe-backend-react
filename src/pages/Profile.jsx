"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionTitle from "../components/ui/SectionTitle"
import ProfileSidebar from "../components/profile/ProfileSidebar"
import ProfileGeneralInfo from "../components/profile/ProfileGeneralInfo"
import ProfileSupplyNeeds from "../components/profile/ProfileSupplyNeeds"

function Profile() {
  const [activeTab, setActiveTab] = useState("info-general")

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <>
      <Header />
      <section className="profile-section py-20 bg-white">
        <div className="container mx-auto px-5">
          <SectionTitle>Gestiona tu Perfil Comercial</SectionTitle>
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <ProfileSidebar activeTab={activeTab} onTabChange={handleTabChange} />
            <div className="flex-1 p-8">
              {activeTab === "info-general" && <ProfileGeneralInfo />}
              {activeTab === "necesidades" && <ProfileSupplyNeeds />}
              {activeTab === "criterios" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Criterios de Compra</h3>
                  <p className="text-gray-600 mb-4">
                    Esta sección está en desarrollo. Pronto podrás definir tus criterios específicos de compra.
                  </p>
                </div>
              )}
              {activeTab === "documentos" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Documentos</h3>
                  <p className="text-gray-600 mb-4">
                    Esta sección está en desarrollo. Pronto podrás gestionar tus documentos comerciales.
                  </p>
                </div>
              )}
              {activeTab === "historial" && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Historial de Transacciones</h3>
                  <p className="text-gray-600 mb-4">
                    Esta sección está en desarrollo. Pronto podrás ver tu historial de transacciones.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Profile

