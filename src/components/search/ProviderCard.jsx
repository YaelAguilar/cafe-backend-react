import { Link } from "react-router-dom"
import { MapPin, Coffee, Award, Leaf, Handshake, BadgeCheck } from "lucide-react"
import Button from "../ui/Button"

function ProviderCard({ provider }) {
  const getCertificationIcon = (certification) => {
    switch (certification) {
      case "Orgánico":
        return <Leaf size={18} className="mr-2" />
      case "Comercio Justo":
        return <Handshake size={18} className="mr-2" />
      case "Rainforest Alliance":
        return <BadgeCheck size={18} className="mr-2" />
      default:
        return <BadgeCheck size={18} className="mr-2" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mb-6">
      <div className="md:w-1/3 h-64 md:h-auto">
        <img src={provider.image || "/placeholder.svg"} alt={provider.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{provider.name}</h3>
          <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
            <span className="mr-1">✓</span> Verificado
          </span>
        </div>
        <p className="text-gray-600 mb-4 flex items-center">
          <MapPin size={18} className="mr-2" /> {provider.location}
        </p>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="text-gray-600 flex items-center">
            <Coffee size={18} className="mr-2" /> {provider.types}
          </span>
          <span className="text-gray-600 flex items-center">
            <Award size={18} className="mr-2" /> {provider.quality}
          </span>
          <span className="text-gray-600 flex items-center">
            {getCertificationIcon(provider.certification)}
            {provider.certification}
          </span>
        </div>
        <p className="text-gray-600 mb-6">{provider.description}</p>
        <div className="flex gap-4">
          <Link to="/mensajes">
            <Button>Contactar</Button>
          </Link>
          <Button variant="outline">Ver Perfil</Button>
        </div>
      </div>
    </div>
  )
}

export default ProviderCard

