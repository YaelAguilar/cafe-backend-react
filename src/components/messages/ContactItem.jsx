"use client"

function ContactItem({ contact, isActive, onClick }) {
  return (
    <div
      className={`flex items-center p-4 border-b border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors ${isActive ? "bg-gray-100" : ""}`}
      onClick={onClick}
    >
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-4">
        <img src={contact.avatar || "/placeholder.svg"} alt={contact.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold text-gray-800 mb-1">{contact.name}</h4>
        <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-gray-500">{contact.time}</span>
        {contact.unread > 0 && (
          <span className="w-5 h-5 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
            {contact.unread}
          </span>
        )}
      </div>
    </div>
  )
}

export default ContactItem

