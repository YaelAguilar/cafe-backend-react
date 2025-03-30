"use client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionTitle from "../components/ui/SectionTitle"
import SearchFilters from "../components/buscar/SearchFilters"
import ProviderCard from "../components/buscar/ProviderCard"
import { useEffect, useState } from "react"
import axios from "axios"

function Search() {
  const [providers, setProviders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const API_URL = "http://localhost:2010/api"
  const token = localStorage.getItem("token")

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await axios.get(`${API_URL}/users/producer/list`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (response.data.success) {
          setProviders(response.data.providers)
        } else {
          setError(response.data.message || "Error al cargar proveedores.")
        }
      } catch (err) {
        console.error("Error al obtener proveedores:", err)
        setError("Error al obtener proveedores.")
      } finally {
        setLoading(false)
      }
    }

    fetchProviders()
  }, [API_URL, token])

  return (
    <>
      <Header />
      <section className="search-section py-20 bg-gray-100">
        <div className="container mx-auto px-5">
          <SectionTitle>Encuentra tu Proveedor Ideal</SectionTitle>
          <SearchFilters />
          {loading ? (
            <div className="text-center">Cargando proveedores...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : providers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {providers.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          ) : (
            <div className="text-center">No se encontraron proveedores.</div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Search
