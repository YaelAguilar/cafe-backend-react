import FormInput from "../ui/FormInput"
import FormSelect from "../ui/FormSelect"
import FormTextarea from "../ui/FormTextarea"
import Button from "../ui/Button"

function ProfileSupplyNeeds() {
  const frequencyOptions = [
    { value: "weekly", label: "Semanal" },
    { value: "biweekly", label: "Quincenal" },
    { value: "monthly", label: "Mensual" },
    { value: "quarterly", label: "Trimestral" },
  ]

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Necesidades de Abastecimiento</h3>
      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-800">Tipos de Café Requeridos</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-500" />
              <span>Arábica</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-500" />
              <span>Robusta</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-teal-500" />
              <span>Libérica</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-500" />
              <span>Excelsa</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-800">Calidades Requeridas</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-500" />
              <span>Premium</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-500" />
              <span>Especialidad</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-teal-500" />
              <span>Comercial</span>
            </label>
          </div>
        </div>

        <FormInput id="volume-needed" label="Volumen Mensual Requerido (kg)" type="number" defaultValue="500" />

        <FormSelect id="frequency" label="Frecuencia de Compra" options={frequencyOptions} defaultValue="biweekly" />

        <FormTextarea
          id="additional-needs"
          label="Requisitos Adicionales"
          rows="4"
          defaultValue="Necesitamos proveedores que puedan garantizar la trazabilidad del producto y que cuenten con certificaciones de calidad. Preferimos trabajar con cooperativas que tengan prácticas sostenibles."
        />

        <div>
          <Button type="submit">Guardar Cambios</Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileSupplyNeeds

