import FormInput from "../ui/FormInput"
import FormSelect from "../ui/FormSelect"
import FormTextarea from "../ui/FormTextarea"
import Button from "../ui/Button"

function ProfileGeneralInfo() {
  const businessTypeOptions = [
    { value: "cafe", label: "Cafetería" },
    { value: "restaurant", label: "Restaurante" },
    { value: "distributor", label: "Distribuidor" },
    { value: "roaster", label: "Tostador" },
  ]

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Información General</h3>
      <form className="space-y-6">
        <FormInput id="business-name" label="Nombre del Negocio" defaultValue="Café Gourmet S.A." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect
            id="business-type"
            label="Tipo de Negocio"
            options={businessTypeOptions}
            defaultValue="distributor"
          />

          <FormInput id="years" label="Años en el Mercado" type="number" defaultValue="8" />
        </div>

        <FormTextarea
          id="description"
          label="Descripción del Negocio"
          rows="4"
          defaultValue="Distribuidora de café gourmet para cafeterías de especialidad y restaurantes de alta cocina. Nos especializamos en seleccionar los mejores granos para nuestros clientes exigentes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput id="city" label="Ciudad" defaultValue="Ciudad de México" />

          <FormInput id="state" label="Estado" defaultValue="CDMX" />
        </div>

        <FormInput id="website" label="Sitio Web" type="url" defaultValue="https://www.cafegourmetsa.mx" />

        <div>
          <Button type="submit">Guardar Cambios</Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileGeneralInfo

