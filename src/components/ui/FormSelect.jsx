import { forwardRef } from "react"

const FormSelect = forwardRef(({ label, id, icon: Icon, options = [], className = "", ...props }, ref) => {
  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <label htmlFor={id} className="block mb-2 font-semibold text-gray-800">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <Icon size={20} />
          </div>
        )}
        <select
          id={id}
          ref={ref}
          className={`w-full py-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none appearance-none ${Icon ? "pl-10 pr-3" : "px-3"}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
})

FormSelect.displayName = "FormSelect"

export default FormSelect

