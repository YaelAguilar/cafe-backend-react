"use client"

import { useState } from "react"
import Header from "../../components/common/layout/Header"
import Footer from "../../components/common/layout/Footer"
import SectionTitle from "../../components/common/ui/SectionTitle"
import ProfileSidebar from "../../components/features/profile/merchant/ProfileSidebar"
import ProfileGeneralInfo from "../../components/features/profile/merchant/ProfileGeneralInfo"
import ProfileSupplyNeeds from "../../components/features/profile/merchant/ProfileSupplyNeeds"

function Perfil() {
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Perfil