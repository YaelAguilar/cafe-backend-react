import { forwardRef } from "react"

const FormTextarea = forwardRef(({ label, id, className = "", ...props }, ref) => {
  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <label htmlFor={id} className="block mb-2 font-semibold text-gray-800">
          {label}
        </label>
      )}
      <textarea
        id={id}
        ref={ref}
        className="w-full py-3 px-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none"
        {...props}
      />
    </div>
  )
})

FormTextarea.displayName = "FormTextarea"

export default FormTextarea

