import MessageBubble from "./MessageBubble"

function MessageList({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
      <div className="text-center my-4">
        <span className="inline-block bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-600">Hoy</span>
      </div>

      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  )
}

export default MessageList

