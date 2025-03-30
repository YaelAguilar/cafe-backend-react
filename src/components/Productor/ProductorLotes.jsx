import { useState } from "react";
const ProductorLotes = () => {
  const [activeLotsTab, setActiveLotsTab] = useState("all");
  const [activeMerchantsTab, setActiveMerchantsTab] = useState("all");

  const lots = [
    {
      id: 1,
      title: "Café Arábica Lavado",
      status: "available",
      location: "Chiapas, México",
      harvest: "Octubre 2024",
      quantity: "1,500 kg",
      price: "$4.50 USD/kg",
      description:
        "Café de altura cultivado a 1,500 msnm con notas a chocolate, caramelo y cítricos. Proceso lavado con fermentación controlada de 18 horas.",
    },
    {
      id: 2,
      title: "Café Bourbon Natural",
      status: "reserved",
      location: "Veracruz, México",
      harvest: "Diciembre 2024",
      quantity: "800 kg",
      price: "$5.20 USD/kg",
      description:
        "Variedad Bourbon con proceso natural. Notas a frutos rojos, chocolate y caña de azúcar. Secado en camas africanas por 21 días.",
    },
    {
      id: 3,
      title: "Café Geisha Honey",
      status: "sold",
      location: "Oaxaca, México",
      harvest: "Noviembre 2024",
      quantity: "350 kg",
      price: "$12.80 USD/kg",
      description:
        "Variedad Geisha con proceso honey. Perfil de taza floral con notas a jazmín, bergamota y miel. Puntuación SCA: 88.",
    },
  ];

  const statusConfig = {
    available: {
      color: "bg-green-500",
      text: "Disponible",
      icon: <Check size={16} />,
    },
    reserved: {
      color: "bg-yellow-400",
      text: "Reservado",
      icon: <Clock size={16} />,
    },
    sold: {
      color: "bg-red-500",
      text: "Vendido",
      icon: <DollarSign size={16} />,
    },
  };

  const merchants = [
    {
      id: 1,
      name: "Global Coffee Traders",
      location: "Seattle, Estados Unidos",
      email: "contact@globalcoffee.com",
      phone: "+1 (206) 555-1234",
      description:
        "Importador de café especializado en cafés de origen único. Buscamos establecer relaciones directas con productores comprometidos con la calidad y sostenibilidad.",
      interests: ["Arábica", "Especialidad", "Orgánico", "Comercio Justo"],
      isVerified: true,
      isMatch: true,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "European Coffee Roasters",
      location: "Berlín, Alemania",
      email: "info@europeancoffee.de",
      phone: "+49 30 12345678",
      description:
        "Tostadores artesanales con presencia en varios países europeos. Nos especializamos en microlotes de alta calidad con trazabilidad completa.",
      interests: ["Especialidad", "Microlotes", "Procesos Experimentales"],
      isVerified: true,
      isMatch: false,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Café Importers México",
      location: "Ciudad de México, México",
      email: "contacto@cafeimporters.mx",
      phone: "+52 55 1234 5678",
      description:
        "Distribuidores nacionales con enfoque en cafés mexicanos de alta calidad. Conectamos productores locales con tostadores en todo el país.",
      interests: ["Arábica", "Robusta", "Convencional", "Volumen"],
      isVerified: false,
      isMatch: true,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  const filteredLots =
    activeLotsTab === "all"
      ? lots
      : lots.filter((lot) => lot.status === activeLotsTab);

  const filteredMerchants =
    activeMerchantsTab === "all"
      ? merchants
      : activeMerchantsTab === "matches"
      ? merchants.filter((m) => m.isMatch)
      : merchants.filter((m) => m.isVerified);

  return (
    <>
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Gestión de Lotes</h2>
              <button className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800">
                Nuevo Lote
              </button>
            </div>

            <div className="border-b border-gray-300 mb-8">
              <div className="flex">
                {["all", "available", "reserved", "sold"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-8 py-4 font-semibold relative ${
                      activeLotsTab === tab ? "text-teal-500" : "text-gray-500"
                    }`}
                    onClick={() => setActiveLotsTab(tab)}
                  >
                    {tab === "all"
                      ? "Todos"
                      : tab === "available"
                      ? "Disponibles"
                      : tab === "reserved"
                      ? "Reservados"
                      : "Vendidos"}
                    {activeLotsTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {filteredLots.map((lot) => {
                const { color, text, icon } = statusConfig;

                return (
                  <div
                    key={lot.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="flex justify-between items-center p-6 border-b border-gray-200">
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl text-gray-800">{lot.title}</h3>
                        <span
                          className={`${color} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}
                        >
                          {icon}
                          {text}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-gray-500 font-semibold">
                            Ubicación
                          </span>
                          <span className="text-gray-800 flex items-center gap-1">
                            <MapPin size={16} />
                            {lot.location}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-gray-500 font-semibold">
                            Cosecha
                          </span>
                          <span className="text-gray-800 flex items-center gap-1">
                            <Calendar size={16} />
                            {lot.harvest}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-gray-500 font-semibold">
                            Cantidad
                          </span>
                          <span className="text-gray-800 flex items-center gap-1">
                            <BarChart2 size={16} />
                            {lot.quantity}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-gray-500 font-semibold">
                            Precio
                          </span>
                          <span className="text-gray-800 flex items-center gap-1">
                            <DollarSign size={16} />
                            {lot.price}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{lot.description}</p>
                      <div className="flex gap-8 mb-4 flex-wrap md:flex-nowrap">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar size={16} />
                          Publicado: 15 Mar 2025
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock size={16} />
                          Disponible hasta: 15 Jun 2025
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
                      <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                        Ver Detalles
                      </button>
                      <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
                        Contactar Interesados
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    page === 3
                      ? "bg-teal-500 text-white border-teal-600"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-100">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

  
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              Búsqueda de Comerciantes
            </h2>

            <div className="border-b border-gray-300 mb-8">
              <div className="flex">
                {[
                  { id: "all", label: "Todos" },
                  { id: "matches", label: "Matches" },
                  { id: "verified", label: "Verificados" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-8 py-4 font-semibold relative ${
                      activeMerchantsTab === tab.id
                        ? "text-teal-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveMerchantsTab(tab.id)}
                  >
                    {tab.label}
                    {activeMerchantsTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-100 p-6 rounded-lg mb-8">
              <input
                type="text"
                placeholder="Buscar por nombre"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option value="">País</option>
                <option value="mexico">México</option>
                <option value="usa">Estados Unidos</option>
                <option value="canada">Canadá</option>
                <option value="europe">Europa</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-md">
                <option value="">Interés de compra</option>
                <option value="arabica">Arábica</option>
                <option value="robusta">Robusta</option>
                <option value="specialty">Café de especialidad</option>
                <option value="organic">Orgánico</option>
              </select>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
                Filtrar
              </button>
            </div>

            <div className="space-y-6">
              {filteredMerchants.map((merchant) => (
                <div
                  key={merchant.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="flex flex-row items-center p-6 border-b border-gray-200">
                    <div className="w-15 h-15 rounded-full overflow-hidden mr-4">
                      <img
                        src={merchant.avatar || "/placeholder.svg"}
                        alt={merchant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-800 mb-2">
                        {merchant.name}
                      </h3>
                      <div className="flex gap-3">
                        {merchant.isVerified && (
                          <span className="bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                            <Check size={16} />
                            Verificado
                          </span>
                        )}
                        {merchant.isMatch && (
                          <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                            <Star size={16} />
                            Match
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin size={16} />
                        {merchant.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Mail size={16} />
                        {merchant.email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Phone size={16} />
                        {merchant.phone}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{merchant.description}</p>
                    <div>
                      <h4 className="text-gray-800 mb-3">
                        Intereses de compra
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {merchant.interests.map((interest, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                      Ver Perfil
                    </button>
                    <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
                      Contactar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-100">
                1
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-500 text-white border-teal-600">
                2
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-100">
                3
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-100">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>
    </>
  )
}

export default ProductorLotes