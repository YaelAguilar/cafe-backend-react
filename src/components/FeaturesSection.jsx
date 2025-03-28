import { UserCircle, Search, Handshake, MessageSquare, CheckCircle, TrendingUp } from "lucide-react"

function FeaturesSection() {
  const features = [
    {
      icon: <UserCircle className="w-10 h-10 text-teal-500" />,
      title: "Perfil Personalizado",
      description:
        "Crea y gestiona tu perfil comercial con toda la información relevante sobre tu negocio y necesidades.",
    },
    {
      icon: <Search className="w-10 h-10 text-teal-500" />,
      title: "Búsqueda Avanzada",
      description: "Explora productores según variedad, calidad y volumen requerido para tu negocio.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-teal-500" />,
      title: "Sistema de Emparejamiento",
      description: "Conecta automáticamente con productores que cumplen exactamente con tus requisitos.",
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-teal-500" />,
      title: "Mensajería Integrada",
      description: "Negocia directamente con los productores a través de nuestro sistema de mensajería segura.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-teal-500" />,
      title: "Verificación de Perfiles",
      description: "Genera confianza con la validación y verificación de tu perfil comercial.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-teal-500" />,
      title: "Análisis de Mercado",
      description: "Accede a información actualizada sobre tendencias y precios del mercado del café.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-500 after:rounded">
          ¿Por qué elegir CaféCollect?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

