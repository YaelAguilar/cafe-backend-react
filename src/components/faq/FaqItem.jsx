"use client"

function FaqItem({ question, answer, isActive, onClick }) {
  return (
    <div className="border-b border-gray-300 mb-4">
      <div className="py-6 flex justify-between items-center cursor-pointer" onClick={onClick}>
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
        <i className={`fas fa-chevron-down text-teal-500 transition-transform ${isActive ? "rotate-180" : ""}`}></i>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

export default FaqItem

