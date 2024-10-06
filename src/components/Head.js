import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col shadow-md'>
    <div className='flex col-span-1'>
     <img alt="Hamburger" onClick={toggleMenuHandler} className=' cursor-pointer h-16 pt-4 pl-3' src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"></img>
  <a href="/"> <img alt="Youtube Logo" className='h-16 mt-3 pl-1' src="https://tse2.mm.bing.net/th/id/OIP.RrqSsfKTUBWXgxd0Uf8LcwHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
  </a></div>
    <div className='mt-5  col-span-10'>
      <input type="text" className='border p-1 border-gray-400 mt-1 mb-6 w-2/4 ml-16 rounded-l-full' aria-label="search"></input>
      <button className='pb-2 px-2 rounded-r-full bg-gray-100'>
        <img alt="" className='h-6 w-6 pt-2 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"></img>
      </button>
    </div>
    <div className='col-span-1'>
    <img alt="user" className='h-7 mt-6' src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"></img>
    </div>
    </div>
  )
}

export default Head


