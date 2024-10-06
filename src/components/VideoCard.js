import React from 'react'

const VideoCard = ( { info }) => {
  const { snippet, statistics }=info;
 const { channelTitle,thumbnails,title}=snippet;
  return (
    <div className='p-2 m-2 w-60 shadow-lg'>
      {console.log({info})}
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
