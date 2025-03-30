"use client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionTitle from "../components/ui/SectionTitle"
import SearchFilters from "../components/buscar/SearchFilters"
import ProviderCard from "../components/buscar/ProviderCard"

function Search() {
  const providers = [
    {
      id: 1,
      name: "Cooperativa El Triunfo",
      image:
        "https://images.unsplash.com/photo-1591287083773-9a52e5e93fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Chiapas, México",
      types: "Arábica",
      quality: "Premium",
      certification: "Orgánico",
      description:
        "Cooperativa con más de 20 años de experiencia en la producción de café de altura. Especialistas en variedades arábicas de alta calidad.",
    },
    {
      id: 2,
      name: "Finca Los Altos",
      image:
        "https://images.unsplash.com/photo-1599639668273-c57372e7a82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Veracruz, México",
      types: "Robusta",
      quality: "Comercial",
      certification: "Comercio Justo",
      description:
        "Finca familiar con producción sostenible y compromiso con el comercio justo. Especialistas en café robusta de alta productividad.",
    },
    {
      id: 3,
      name: "Productores Unidos",
      image:
        "https://images.unsplash.com/photo-1611174797136-5d9f8d2b1f62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      location: "Oaxaca, México",
      types: "Arábica, Excelsa",
      quality: "Especialidad",
      certification: "Rainforest Alliance",
      description:
        "Asociación de pequeños productores comprometidos con la calidad y la sostenibilidad ambiental. Café de especialidad con notas únicas.",
    },
  ]

  return (
    <>
      <Header />
      <section className="search-section py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <SectionTitle>Encuentra tu Proveedor Ideal</SectionTitle>
          <SearchFilters />

          <div className="space-y-6">
            {providers.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Search

