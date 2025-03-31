function Button({ children, variant = "primary", size = "default", className = "", ...props }) {
    const baseClasses = "inline-block font-semibold rounded text-center transition-colors"
  
    const variantClasses = {
      primary: "bg-teal-500 text-white hover:bg-teal-600",
      outline: "bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white",
      text: "bg-transparent text-teal-500 hover:text-teal-600 hover:underline",
    }
  
    const sizeClasses = {
      small: "px-3 py-1.5 text-sm",
      default: "px-4 py-2",
      large: "px-6 py-3 text-lg",
    }
  
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    )
  }
  
  export default Button