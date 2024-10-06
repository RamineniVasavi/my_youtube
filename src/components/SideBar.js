import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  //Early return  
  if(!isMenuOpen) return null;
  return (
    <div className='w-48 shadow-lg col-span-2 p-4'>
      <h4 className='font-bold pt-4'>Subscriptions</h4>
      <ul>
       <li><Link to='/'>Home</Link></li> 
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h4 className='font-bold pt-4'>You</h4>
      <ul>
        <li>History</li>
        <li>playlists</li>
        <li>Your videos</li>
        <li>Liked Videos</li>
      </ul>
      <h4 className='font-bold pt-4'>Explore</h4>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Live</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar
