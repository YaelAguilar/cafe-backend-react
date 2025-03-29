"use client"

import { User, ClipboardList, Filter, FileText, History, Camera } from "lucide-react"

function ProfileSidebar({ activeTab, onTabChange }) {
  const tabs = [
    { id: "info-general", label: "Información General", icon: User },
    { id: "necesidades", label: "Necesidades de Abastecimiento", icon: ClipboardList },
    { id: "criterios", label: "Criterios de Compra", icon: Filter },
    { id: "documentos", label: "Documentos", icon: FileText },
    { id: "historial", label: "Historial de Transacciones", icon: History },
  ]

  return (
    <div className="md:w-80 bg-gray-100 p-8 flex flex-col items-center">
      <div className="relative w-40 mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Perfil de comerciante"
            className="w-full h-full object-cover"
          />
        </div>

        <button className="absolute bottom-0 right-0 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-teal-600 transition-colors border-2 border-white">
          <Camera size={18} />
        </button>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-1">Café Gourmet S.A.</h3>
      <p className="text-teal-500 font-semibold mb-8">Comerciante Verificado</p>
      <ul className="w-full">
        {tabs.map((tab) => (
          <li key={tab.id} className="mb-2">
            <button
              onClick={() => onTabChange(tab.id)}
              className={`w-full text-left p-4 rounded-md transition-colors ${
                activeTab === tab.id ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <div className="grid grid-cols-[24px_1fr] items-center gap-3">
                <div className="flex justify-center">
                  <tab.icon size={20} />
                </div>
                <span className="leading-tight">{tab.label}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileSidebar

