import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import { MY_GOOGLE_API_KEY } from '../utils/constants'
import LiveChat from './LiveChat';
import RecommendedVideo from './RecommendedVideo';
const WatchPage = () => {
    const dispatch=useDispatch();
    const [searchParams]=useSearchParams();
    const [detail,setDetail]=useState({});
// once page loads we need to close the sidebar thats why we have to use useeffect
 const Videodetails=async()=>{
   const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+searchParams.get("v")+"&key="+MY_GOOGLE_API_KEY);
   const json=await data?.json();
  setDetail(json?.items);  
  console.log(json?.items);
}
useEffect(()=>{
    dispatch(closeMenu());
    Videodetails();
    },[])
  return (
    <div className='flex w-full flex-col'>
    <div className='lg:flex min-[300px]:flex-wrap '>
    <div className=' rounded-lg w-[70%] max-[1100px]:w-full px-5 py-2'>
     <iframe  className=' h-96 rounded-sm w-full'  src={"https://www.youtube.com/embed/"+searchParams.get("v")} // from params we get v parameter value . here v is a like a variable name getting from url
      height="700" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    {/* get this iframe code from youtube video , click on share video and open embed and copy paste and change the id dynmaically in src */}
    </div>
    <div className='border border-black rounded-sm w-[30%] max-[1100px]:w-full my-2'>
     <LiveChat />
    </div>
    </div>
    <h1 className='ml-5 font-bold text-2xl'>{detail[0]?.snippet?.title}Devara new movie</h1>
   <div className='ml-5 p-1 flex flex-wrap '>
   <div className='w-5/12'>{detail[0]?.statistics.viewCount} Views  </div>
   <div className='flex'><img className='h-6 pr-2 pt-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAj5JREFUaAXtmd9twjAQxpNQIR5ZoRtkhHSDrtANyAt/nsorvKQbNJ2gbEDYgBFgg/QNkIB+h2RkUgyJcwZc2VJrK7Hv7ufv7Liu57niZsDNwKUZ8C+9NPEuSZL2er3+DoIg7na7cy4fNwUhiM1mM0XwIX5y3/dfuGBuBlKAEELkzWbzOY7jXDzQrQPdgVXGKSDIBCnUqWJL1dc4yAUIEVMkGnVqoyAlILz9fs+y4I2BlIEgBR4apCwEgTQaDRZF2HetKhAE0uv1WGJgTa2qEOCYEQxHYQPRgGBbHzQRLCA6EOQcX/aMao5SG0QXgoLf7XYsC51s1VpodSCw7f70+/02BcFRaikiHQArx4K0YlODnGsrMhqNOhifVCbgGTBHWsaDwSAT5rQVQWpEwsgd6hB/z0wxma/C9xM18GCI6p3aqlL8cCE12PJb5bPE80/0mVA/bUVKOLlFl/Z4PA7/A4i33W4PmWG7IkfVHchxKh6k4RR5ECEojAX9sl2RGb7u9oPgmJKSGlRsVmQJNdIDheUgRwiCsVYRXLV+EIAotoJ8Fe+LrQTByftEDVLFRpDZuX9FWAcib7lifdioyMmWazNIKgcvt61KreKWayvIny2XBQS3KLlsyHT73JYr+9ROLRjOZEOG22e3XNmnNgjyNaVrT9mYqTa23OE129ogdETAJVkEB8trTnTf00QB4k2+UVTZOlzQoXOGoFR9lM/pC4uL7HC1WtHNX6TsqPECMS1ardakeKbSMOWGuBmoMwO/mxHeGRTjsuUAAAAASUVORK5CYII=" alt="Likes">
   </img> {detail[0]?.statistics.likeCount}</div>
    <div className='flex mx-4'><img className='h-6 pr-2 pt-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA4tJREFUaAXtmEtIFGEcwPeltC0RRAeh8NrjUNShgjp5iMpAQ7OXhmBFdAnW1V09GSzsrogGHTr0oodBEtGLIjxFQXToFBRBodIhOhRkhwpdt9+fXFk/Z8aZ2ZndleaDYed7/B+///97zfp8XvEi4EXAi4AXgf8lAiMjI8F0Op1wkjfgpDIruvx+fyqTycStyBiNLRvIrFMkJn3WyEGzfeUG8ZGZ807AlB1EIu4ETEWAOAFTMSB5GDaA0/JutVQUyKzzF+3AVCKI8FiGqVQQyzD+2XS6+sP2ujIQCBzK5XLbMLSeZwPPKjNGkTmVSCQuLTbWNZC+vr5llGYcOMz2Wr+YI0b9yJ/s7u6+bDjGqNNOHwt1B1Fsx3gr8hE7OnRkTsTj8Ss6fT7HMsL0OY7zchGUaeNKmZmZ6ejp6bmqpbxokP7+/hoMXAdit5YBh9tIdq6VNXNb1VvUrpVKpQ4A8aFEEOK7BP4m2T+qgtjKyODgYHhqauoCyjpUhaWqk5k2MnMrb88yCNGoJQOPULApr6Rcv6FQqLazs/Oz2A9ZcSKZTK4B4jUyNVbkXBibw48jeQjRb3qNcC4sr6qqGkWm3BBZgeBcuVMYIFMg8o3N4SbTybWttdApg/csfc0qhIw3NbXGxsauEYU6AwMl6cKHY0Dc1zK2KAhbbDuCbVrCJWzLZ0ITQvww3LW4bqxlzDueFTK4jOUg15O7RvYNM8JenSGdTkH8RN8k+ib5/cbvLiPHCvqagLhXUNd81c0IV4+tGHyjKaXf+AuZFzj5kiHjvE+w10/EYrEJVYRs59Q2tY58I4feA7Vdq66bEZSc0xJQ2xg3juPDPKMsxOdqfxH1BiAempXXBOH03oyC/XpKcP4HfTe4Zw339vbKAel0aWA6mYYQ45ogtMf0PANiqLq6OhmNRr/rjSmmnczWk9knVnUsABkYGFidzWblo0gtj5nvZwqvBeqAYut2IcTuApDp6Wn5upvnE/UoURqa1+hwhUzvYzo9tat2AQiK5u76KP8SDAaburq6Xtk1YEZOIFjYtiHExjwQtsR1tG2RDpR/5JJY5+ZUwsZvTMkW+0xsFlPUS2OjKMPAWxb0drcg5BKKmT/8RbTHCQjxWQXZS9t71sROt3YlMdrS0iJ3J9mdHDt35lY13xuBcDj8FYgdGPgkBpdSmctIJBLZyJRqX4oQSyngnq9eBLwIeBH4F4G/vhEjm1hU05UAAAAASUVORK5CYII=" alt="Share">
   </img> Share</div>
    <div className='flex mx-4'><img className='h-6 pr-2 pt-1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAplJREFUaAXtWF1ugkAQrqaJr9yg3KDeQI5gTyC9gbxofGr75M+L3qDeQDxB9Qb0BvYG+GZiov0mYRsDA7LIALGQkGWH5Zvvm53ZBR4e6qOOQB2BfxGBxi0qZ7NZ53Q6tRuNhnELzrVnz+ez12q1to7j+HFjMwkZj8dms9lcAbQdByxgJxGvw+HQ5bCbnPGarQQRRMnAuUIWsMHTFoLZsADIgsEufiCVbc6JthDMhsUBFWVDPbJB1BZSFGFdP4+6D+Qw/gcYywQcE/d6CffZW2UI2WHleWfZwEg1iPS9XUgA1FGOUFzb0Wi0Uf2qtpEZCYr5TRFG/wPXG9WvahsRUhTR+XxuHI/H57A/ZEDEFh7D9UsTcjgc2pjtrzApLK9hU6r+3Sy/tZBU813goLuZEfFix7fENwrYR2ugzbQipZlYMSEkAKuSjV3cU0SC75iu6ufZigghEfiis8JfdHhD2IH8Ik8BCkukRiCkGxahHEq1uQuh2QgiL8WZxc1dCAr6ryZYj0LG3IWAp5mGKxaCdppxacdICEm7xFZeiDGdTvtJkQz+hPSSxujek5gR4jDHnmFzZEgEFoTIWy83Vscmso8QAdTA52Qy6aH4lzh3+M4wYO5ChE338z7EhBBRCLDQWCBP12QSO6RSS4xwHHAWIV4cWBF2zK7P+dEWglz3ALbnwIqwwbfL+dEWQq8fAOtzYNI2+F3D/5Lzk6nYCQzLKM0MCTI54Dxt8OPjdONEkK9MQujBwWDgobHpugqHdmpVgTTH4W6EXE0t5OYT6qHDRUHItg/SVgueE+JfImBHtiHGvrQJX2+Bb+n6iKQW9glXF6QK4yNCaJ8AMacK5HQ4RITQw/iFs0DzgpRa4yxtF9cRUo+tI1BHIDkCv1Z/yCc2PXrxAAAAAElFTkSuQmCC" alt="Save">
   </img> Save</div>
   </div>
   <div className='ml-5 p-1 flex'>
   <div className='w-[55%] flex'>
   <img className=' rounded-[50%] h-12' src={detail[0]?.snippet?.thumbnails?.default?.url}></img>
   <h1 className='ml-2 mt-2 font-bold text-2xl'>{detail[0]?.snippet?.channelTitle}</h1>
   </div>
   <button className='rounded-md bg-red-700 px-2 py-1 text-white border' type="button">Subscribe</button>
   </div>
   <div className='lg:flex min-[300px]:flex-wrap max-[500px]:w-[400px] max-[400px]:w-[300px]'>
   <CommentsContainer />
    <RecommendedVideo/>
    </div>
    </div>
  )
}

export default WatchPage
