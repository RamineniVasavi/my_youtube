import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { generateRandomName,generateRandomMsg } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/LivechatSlice'

const LiveChat = () => {
    const [Livemessage, setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.messages);
    useEffect(()=>{
    //APi Polling 
    const i=setInterval(()=>{
        dispatch(addMessages({
            name:generateRandomName(),
            messages:generateRandomMsg(20),
        })
      );
      setLiveMessage("");
    },2000);
    return ()=>clearInterval(i);
    },[])
  return (
    <>
    <div className='flex flex-col-reverse h-80 overflow-y-scroll'>
     {chatMessages.map(i=>
         <ChatMessage name={i.name} message={i.messages}/>
     )}
    
     </div>
     <form className='m-2' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessages({
        name:"Anu",
        messages:Livemessage,
      }))
     }}>
       <input value={Livemessage}
       onChange={(e)=>
        setLiveMessage(e.target.value)
       }
        className='border border-black mx-1'></input>
       <button type="submit" className='bg-green-200 mx-3'>Send</button>
     </form>
     </>
  )
}

export default LiveChat
