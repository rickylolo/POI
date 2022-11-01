import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chats from '../Components/Chat'

const Chat = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chats/>
      </div>
    </div>
  )
}

export default Chat;