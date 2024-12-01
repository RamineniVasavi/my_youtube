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
      //setLiveMessage("");
    },1000);
    return ()=>clearInterval(i);
    },[])
  return (
    <>
        <h1 className='-mb-5 font-bold text-xl grid justify-center'>Live Chat</h1>
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
      }));
      setLiveMessage("");
     }}>
       <input value={Livemessage}
       onChange={(e)=>
        setLiveMessage(e.target.value)
       }
        className='border border-black rounded-sm mx-1 p-1' placeholder='Type a message'></input>
       <button type="submit" className='bg-sky-300 mx-1 rounded-sm py-1 px-3'>Send</button>
     </form>
     </>
  )
}

export default LiveChat
