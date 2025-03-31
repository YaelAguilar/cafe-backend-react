import { Link } from "react-router-dom"
import { MapPin, Coffee } from "lucide-react"
import Button from "../../common/ui/Button"

function ProviderCard({ provider }) {
  const producer = provider.Producer

  const location =
    producer && producer.city && producer.state
      ? `${producer.city}, ${producer.state}`
      : "Sin ubicación"
  const description =
    producer && producer.description
      ? producer.description
      : "Sin descripción"
  const coffeeVarieties =
    producer && producer.coffeeVarieties && producer.coffeeVarieties.length > 0
      ? producer.coffeeVarieties.join(", ")
      : "No especificadas"
  const imageUrl =
    producer && producer.imageUrl ? producer.imageUrl : "/placeholder.svg"

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 relative self-center">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={imageUrl}
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
          <Link to="/mensajes">
            <Button>Contactar</Button>
          </Link>
          <Link to={`/provider/${provider.Producer?.id}`}>
            <Button variant="outline">Ver Perfil</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProviderCard
