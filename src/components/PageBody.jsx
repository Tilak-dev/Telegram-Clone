import React from 'react'
import SideBar from './body/SideBar'
import ChatBox from './body/ChatBox'

function PageBody() {
  return (
    <div className='flex'>
      <SideBar />
      <ChatBox />
    </div>
  )
}

export default PageBody