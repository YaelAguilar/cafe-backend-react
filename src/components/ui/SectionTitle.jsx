function SectionTitle({ children }) {
    return (
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-teal-500 after:rounded">
        {children}
      </h2>
    )
  }
  
  export default SectionTitle
  
  