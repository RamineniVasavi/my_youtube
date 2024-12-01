import React, { useEffect, useState } from 'react'
import { RecommendedVideos } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const RecommendedVideo = () => {
    const [videos,setVideos]=useState([]);
    const Recommended=async()=>{
        const data=await fetch(RecommendedVideos);
        const json=await data.json();
        setVideos(json.items);
    }
    useEffect(()=>{
        Recommended();
    },[])
  return (
    <div className='w-[30%]'>
      <div className='mt-4'>
      <h1 className='font-2xl font-bold'>Recommended videos</h1>
      <div className='flex flex-wrap'>
     {
        videos?.map(video=>
         <Link key={video.id} to={"/watch?v="+video.id}> <VideoCard key={video.id} info={video}/></Link>
        )
      }
     </div>
      </div>
    </div>
  )
}

export default RecommendedVideo
