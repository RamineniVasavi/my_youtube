import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
const WatchPage = () => {
    const dispatch=useDispatch();
    const [searchParams]=useSearchParams();
// once page loads we need to close the sidebar thats why we have to use useeffect
    useEffect(()=>{
    dispatch(closeMenu());
    },[])
  return (
    <div className='rounded-lg px-5 py-2'>
     <iframe  className='w-8/12 h-96 rounded-sm' src={"https://www.youtube.com/embed/"+searchParams.get("v")} // from params we get v parameter value . here v is a like a variable name getting from url
     title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    {/* get this iframe code from youtube video , click on share video and open embed and copy paste and change the id dynmaically in src */}
    </div>
  )
}

export default WatchPage
