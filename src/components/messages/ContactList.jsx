"use client"

import { Search } from "lucide-react"
import ContactItem from "./ContactItem"

function ContactList({ contacts, activeContactIndex, onContactSelect }) {
  return (
    <div className="md:w-[350px] border-r border-gray-300 flex flex-col">
      <div className="p-4 border-b border-gray-300 relative">
        <input
          type="text"
          placeholder="Buscar contactos..."
          className="w-full py-3 px-4 pr-10 border border-gray-300 rounded-full text-base"
        />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={18} />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact, index) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            isActive={activeContactIndex === index}
            onClick={() => onContactSelect(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ContactList

