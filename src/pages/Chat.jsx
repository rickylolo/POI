import React from 'react'
import Sidebar from '../components/Sidebar'
import Chats from '../components/Chat'

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