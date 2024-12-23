import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openMenu } from '../utils/appSlice';

const VideoContainer = () => {
   const [videos,setVideos]=useState([]);
   const value=useSelector(store=>store.Search.searchClickeditems);
   const dispatch=useDispatch();
   useEffect(()=>{
    dispatch(openMenu());
   },[])
  useEffect(()=>{
    getVideos();
   },[value])
   const getVideos=async ()=>{
    if(value?.length===0){
    const data=await fetch(YOUTUBE_VIDEO_API);
    const json= await data.json();
    setVideos(json.items);
     }else{
      setVideos(value);
     }
  }

  return (
    <div className='flex flex-wrap'>
      {
        videos?.map(video=>
         <Link key={video.id} to={"/watch?v="+video.id}> <VideoCard key={video.id} info={video}/></Link>
        )
      }
    
    </div>
  )
}

export default VideoContainer
