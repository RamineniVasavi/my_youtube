import React from 'react'
import { USERICON } from "../utils/constants"
const ChatMessage = ({ name, message }) => {
  return (
    <div className='p-2 flex shadow-md m-1 w-full bg-gray-100'>
        <img  className="h-5" alt="user" src={USERICON}/>
         <div className='px-1'>
         <span className='px-2 font-bold'>{name}</span>
         <span>{message}</span>
         </div>
    </div>
  )
}

export default ChatMessage
