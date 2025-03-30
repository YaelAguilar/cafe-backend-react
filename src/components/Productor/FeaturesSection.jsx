import { UserCircle, Tags, Handshake, MessageSquare, CheckCircle, LineChart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <UserCircle className="w-12 h-12 text-teal-500" />,
      title: "Perfil Destacado",
      description: "Crea un perfil detallado de tu finca, destacando tus métodos de producción, certificaciones y la calidad de tu café."
    },
    {
      icon: <Tags className="w-12 h-12 text-teal-500" />,
      title: "Publica tus Lotes",
      description: "Ofrece tus lotes de café con todos los detalles: variedad, proceso, notas de cata y disponibilidad."
    },
    {
      icon: <Handshake className="w-12 h-12 text-teal-500" />,
      title: "Emparejamiento Inteligente",
      description: "Conecta automáticamente con comerciantes que buscan exactamente el tipo de café que produces."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-teal-500" />,
      title: "Negociación Directa",
      description: "Comunícate directamente con los compradores sin intermediarios a través de nuestro sistema de mensajería."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-teal-500" />,
      title: "Verificación de Calidad",
      description: "Obtén verificación de tus certificaciones y calidad para generar mayor confianza con los compradores."
    },
    {
      icon: <LineChart className="w-12 h-12 text-teal-500" />,
      title: "Análisis de Mercado",
      description: "Accede a información actualizada sobre tendencias y precios para tomar mejores decisiones comerciales."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir CaféConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
