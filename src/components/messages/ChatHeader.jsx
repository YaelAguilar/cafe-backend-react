import { Phone, Video, Info } from "lucide-react"

function ChatHeader({ contact }) {
  return (
    <div className="p-4 border-b border-gray-300 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-4">
          <img src={contact.avatar || "/placeholder.svg"} alt={contact.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{contact.name}</h4>
          <p className="flex items-center gap-2 text-sm">
            <span
              className={`inline-block w-2 h-2 rounded-full ${contact.online ? "bg-green-500" : "bg-gray-400"}`}
            ></span>
            <span>{contact.online ? "En línea" : "Desconectado"}</span>
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="text-gray-600 hover:text-teal-500 transition-colors">
          <Phone size={20} />
        </button>
        <button className="text-gray-600 hover:text-teal-500 transition-colors">
          <Video size={20} />
        </button>
        <button className="text-gray-600 hover:text-teal-500 transition-colors">
          <Info size={20} />
        </button>
      </div>
    </div>
  )
}

export default ChatHeader

