import React from 'react'
import TopChatBar from './chatbody/TopChatBar'
import TypeChat from './chatbody/TypeChat'

function ChatBox() {
  return (
    <div className='bg-gray-900 w-4/6 relative'>
      <TopChatBar />
      <TypeChat />
    </div>
  )
}

export default ChatBox