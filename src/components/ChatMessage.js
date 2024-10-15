import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='p-2 flex shadow-md m-1 bg-gray-100'>
        <img  className="h-5" alt="user" src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"/>
         <div className='px-1'>
         <span className='px-2 font-bold'>{name}</span>
         <span>{message}</span>
         </div>
    </div>
  )
}

export default ChatMessage
