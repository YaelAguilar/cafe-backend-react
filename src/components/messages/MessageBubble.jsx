function MessageBubble({ message }) {
    const isSent = message.sender === "me"
  
    return (
      <div className={`flex flex-col max-w-[70%] ${isSent ? "self-end" : "self-start"}`}>
        <div
          className={`p-4 rounded-lg ${
            isSent ? "bg-teal-500 text-white rounded-tr-none" : "bg-gray-100 text-gray-800 rounded-tl-none"
          }`}
        >
          <p>{message.text}</p>
        </div>
        <span className={`text-xs text-gray-500 mt-1 ${isSent ? "self-end" : "self-start"}`}>{message.time}</span>
      </div>
    )
  }
  
  export default MessageBubble
  
  