import React from 'react'

const VideoCard = ( { info }) => {
  const { snippet, statistics }=info;
 const { channelTitle,thumbnails,title}=snippet; // inside snippet we have these properties
  return (
    <div className='p-2 m-2 w-60 max-[500px]:w-40 h-[300px] overflow-scroll shadow-lg' style={{"scrollbar-width":"none"}}>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnails"/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard
