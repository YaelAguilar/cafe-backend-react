"use client"

import { useState } from "react"
import { Paperclip, Send } from "lucide-react"

function ChatInput({ onSendMessage }) {
  const [messageText, setMessageText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (messageText.trim() === "") return

    onSendMessage(messageText)
    setMessageText("")
  }

  return (
    <form className="p-4 border-t border-gray-300 flex items-center gap-4" onSubmit={handleSubmit}>
      <button type="button" className="text-gray-600 hover:text-teal-500 transition-colors">
        <Paperclip size={20} />
      </button>
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        className="flex-1 py-3 px-4 border border-gray-300 rounded-full text-base focus:outline-none focus:border-teal-500"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
      />
      <button type="submit" className="text-teal-500 hover:text-teal-600 transition-colors">
        <Send size={20} />
      </button>
    </form>
  )
}

export default ChatInput

