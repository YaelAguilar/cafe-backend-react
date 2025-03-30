"use client"

import { useState } from 'react'
import { User, Mountain, Sprout, Award, Images, History, Camera, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import HeaderProductor from './HeaderProductor'

const ProductorPerfil = () => {
  const [activeTab, setActiveTab] = useState('info-general')

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <>
      <HeaderProductor />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Gestiona tu Perfil de Productor</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-lg shadow-md overflow-hidden">
            {/* Sidebar */}
            <div className="lg:w-1/4 bg-gray-50 p-6 border-r border-gray-200">
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-32 h-32 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Perfil de productor" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  <button className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors">
                    <Camera size={18} />
                  </button>
                </div>
                <h3 className="text-xl font-bold">Finca El Paraíso</h3>
                <p className="text-teal-500 font-medium">Productor Verificado</p>
              </div>
              
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => handleTabChange('info-general')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'info-general' 
                        ? 'bg-teal-500 text-white' 
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <User size={18} />
                    <span>Información General</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabChange('finca')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'finca' 
                        ? 'bg-teal-500 text-white' 
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Mountain size={18} />
                    <span>Datos de la Finca</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabChange('produccion')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'produccion' 
                        ? 'bg-teal-500 text-white' 
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Sprout size={18} />
                    <span>Producción</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabChange('certificaciones')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'certificaciones' 
                        ? 'bg-teal-500 text-white' 
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Award size={18} />
                    <span>Certificaciones</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabChange('fotos')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'fotos' 
                        ? 'bg-teal-500 text-white' 
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Images size={18} />
                    <span>Fotos y Media</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTabChange('historial')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'historial' 
                        ? 'bg-teal-500 text-white' 
                        : 'hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <History size={18} />
                    <span>Historial de Ventas</span>
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Content */}
            <div className="lg:w-3/4 p-6">
              {/* Información General */}
              {activeTab === 'info-general' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Información General</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="farm-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre de la Finca/Cooperativa
                      </label>
                      <input 
                        type="text" 
                        id="farm-name" 
                        defaultValue="Finca El Paraíso" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="producer-type" className="block text-sm font-medium text-gray-700 mb-1">
                          Tipo de Productor
                        </label>
                        <select 
                          id="producer-type" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="individual" selected>Productor Individual</option>
                          <option value="cooperative">Cooperativa</option>
                          <option value="association">Asociación</option>
                          <option value="company">Empresa</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="years" className="block text-sm font-medium text-gray-700 mb-1">
                          Años de Experiencia
                        </label>
                        <input 
                          type="number" 
                          id="years" 
                          defaultValue="15" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Descripción
                      </label>
                      <textarea 
                        id="description" 
                        rows="4" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        defaultValue="Finca familiar con más de 15 años de experiencia en la producción de café de especialidad. Nos especializamos en variedades de Arábica cultivadas en altura con métodos sostenibles y respetuosos con el medio ambiente."
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          Ciudad/Municipio
                        </label>
                        <input 
                          type="text" 
                          id="city" 
                          defaultValue="San Cristóbal de las Casas" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          Estado
                        </label>
                        <input 
                          type="text" 
                          id="state" 
                          defaultValue="Chiapas" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Sitio Web
                      </label>
                      <input 
                        type="url" 
                        id="website" 
                        defaultValue="https://www.fincaelparaiso.mx" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        type="submit" 
                        className="px-6 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors"
                      >
                        Guardar Cambios
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Datos de la Finca */}
              {activeTab === 'finca' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Datos de la Finca</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="altitude" className="block text-sm font-medium text-gray-700 mb-1">
                          Altitud (msnm)
                        </label>
                        <input 
                          type="number" 
                          id="altitude" 
                          defaultValue="1500" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                          Área Total (hectáreas)
                        </label>
                        <input 
                          type="number" 
                          id="area" 
                          defaultValue="25" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="coffee-area" className="block text-sm font-medium text-gray-700 mb-1">
                          Área de Café (hectáreas)
                        </label>
                        <input 
                          type="number" 
                          id="coffee-area" 
                          defaultValue="18" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="soil-type" className="block text-sm font-medium text-gray-700 mb-1">
                          Tipo de Suelo
                        </label>
                        <select 
                          id="soil-type" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="volcanic" selected>Volcánico</option>
                          <option value="clay">Arcilloso</option>
                          <option value="sandy">Arenoso</option>
                          <option value="loam">Franco</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="microclimate" className="block text-sm font-medium text-gray-700 mb-1">
                        Microclima
                      </label>
                      <textarea 
                        id="microclimate" 
                        rows="3" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        defaultValue="Clima templado con lluvias abundantes durante 8 meses del año. Temperatura promedio de 18-22°C con variaciones significativas entre día y noche, ideal para el desarrollo lento del grano."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fuentes de Agua
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Río/Arroyo</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Manantial</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Pozo</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Sistema de Captación de Lluvia</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="infrastructure" className="block text-sm font-medium text-gray-700 mb-1">
                        Infraestructura
                      </label>
                      <textarea 
                        id="infrastructure" 
                        rows="3" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        defaultValue="Beneficio húmedo propio, área de secado en patios y camas africanas, bodega de almacenamiento con control de humedad, laboratorio básico de catación."
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        type="submit" 
                        className="px-6 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors"
                      >
                        Guardar Cambios
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Producción */}
              {activeTab === 'produccion' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Producción</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Variedades Cultivadas
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Typica</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Bourbon</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Caturra</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Catuaí</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Geisha</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Pacamara</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="annual-production" className="block text-sm font-medium text-gray-700 mb-1">
                          Producción Anual (kg)
                        </label>
                        <input 
                          type="number" 
                          id="annual-production" 
                          defaultValue="35000" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="harvest-season" className="block text-sm font-medium text-gray-700 mb-1">
                          Temporada de Cosecha
                        </label>
                        <select 
                          id="harvest-season" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="nov-feb" selected>Noviembre - Febrero</option>
                          <option value="dec-mar">Diciembre - Marzo</option>
                          <option value="jan-apr">Enero - Abril</option>
                          <option value="feb-may">Febrero - Mayo</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Métodos de Procesamiento
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Lavado</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Natural</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Honey</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded text-teal-500 focus:ring-teal-500" />
                          <span>Fermentación Anaeróbica</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="farming-practices" className="block text-sm font-medium text-gray-700 mb-1">
                        Prácticas Agrícolas
                      </label>
                      <textarea 
                        id="farming-practices" 
                        rows="3" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        defaultValue="Cultivo bajo sombra con árboles nativos. Uso de composta orgánica y control biológico de plagas. Renovación periódica de cafetales con variedades resistentes a la roya."
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="cupping-notes" className="block text-sm font-medium text-gray-700 mb-1">
                        Notas de Catación Típicas
                      </label>
                      <textarea 
                        id="cupping-notes" 
                        rows="3" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        defaultValue="Notas cítricas, caramelo, chocolate con cuerpo medio-alto y acidez brillante. Nuestro café Bourbon presenta notas a frutas rojas y caramelo con un final prolongado."
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        type="submit" 
                        className="px-6 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors"
                      >
                        Guardar Cambios
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Certificaciones */}
              {activeTab === 'certificaciones' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Certificaciones</h3>
                  <p className="text-gray-500 italic">Esta sección está en desarrollo.</p>
                </div>
              )}
              
              {/* Fotos y Media */}
              {activeTab === 'fotos' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Fotos y Media</h3>
                  <p className="text-gray-500 italic">Esta sección está en desarrollo.</p>
                </div>
              )}
              
              {/* Historial de Ventas */}
              {activeTab === 'historial' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Historial de Ventas</h3>
                  <p className="text-gray-500 italic">Esta sección está en desarrollo.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20desde%202025-03-27%2005-13-48-e2hTCeME7SE3XoLxy1UpQxqNRgWNa7.png" 
                  alt="Logo" 
                  className="h-10 mr-3"
                />
                <h2 className="text-2xl font-bold text-teal-400">CaféConnect</h2>
              </div>
              <p className="text-gray-400 mb-4">Conectando productores con los mejores comerciantes de café.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Plataforma</h3>
              <ul className="space-y-2">
                <li><a href="/productor-inicio" className="text-gray-400 hover:text-teal-400 transition-colors">Inicio</a></li>
                <li><a href="/productor-perfil" className="text-gray-400 hover:text-teal-400 transition-colors">Mi Perfil</a></li>
                <li><a href="/productor-lotes" className="text-gray-400 hover:text-teal-400 transition-colors">Mis Lotes</a></li>
                <li><a href="/productor-comerciantes" className="text-gray-400 hover:text-teal-400 transition-colors">Comerciantes</a></li>
                <li><a href="/productor-mensajes" className="text-gray-400 hover:text-teal-400 transition-colors">Mensajes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Guías</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Eventos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Equipo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Carreras</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 CaféConnect. Todos los derechos reservados.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default ProductorPerfil
