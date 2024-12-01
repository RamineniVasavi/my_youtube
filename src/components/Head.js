import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API,YOUTUBE_SEARCH_API_exte,YOUTUBE_ONSEARCHCLICK_VIDEOS,USERICON } from '../utils/constants';
import { CacheSearch,searchClick } from '../utils/searchSlice';
const Head = () => {
  const dispatch=useDispatch();
  const [searchInput,setSearchInput]=useState("");
  const [searchValues,setSearchValues]=useState([]);
  const [searchSuggestions,setSearchSuggestions]=useState(false);
  const searchCache=useSelector((store)=>store.Search);
  useEffect(
    ()=>{// Debouncing
      const timer=setTimeout(()=>{
        if(searchCache[searchInput]){// fetching from cache
          setSearchSuggestions(searchCache[searchInput]);
        }
        else{
        SearchHandler();
        }
      }
        ,200);
     // until another key event happens(another search key) return wont get called 
     // so if the time diff is >200ms btw 2 key events searchHandler will get called otherwise it clears timeout and again useeffect will starts
      return ()=>{
        clearInterval(timer);// behaves like unmounting
      }
    },[searchInput]);
    useEffect(()=>{
    setTimeout(()=>{
      setSearchSuggestions(false);// after 1.5 mins search values will be closed 
    },150000)
    },[searchSuggestions])
    const OnsearchVideos=async (value)=>{
      const data=await fetch(YOUTUBE_ONSEARCHCLICK_VIDEOS+value+YOUTUBE_SEARCH_API_exte);
      const json=await data.json();
      dispatch(searchClick(json.items));
      setSearchSuggestions(false);

    }
  const SearchHandler=async ()=>{
    // If we are not getting data go to this url and get key and paste new key in constants https://console.cloud.google.com/apis/credentials?pli=1&project=snappy-cosine-437711-k8
   const data=await fetch(YOUTUBE_SEARCH_API+searchInput+YOUTUBE_SEARCH_API_exte);
   const json=await data?.json();
   setSearchValues(json?.items);
   // updating cache
   dispatch(CacheSearch({
    [searchInput]:json?.items,// to store as key value pair
   }))
  }
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }

  return (
    <>
    <nav className='grid grid-flow-col shadow-md sticky top-0 bg-white'>
    <div className='flex col-span-2'>
     <img alt="Hamburger" onClick={toggleMenuHandler} className=' cursor-pointer h-16 pt-4 pl-3' src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"></img>
  <a href="/"> <img alt="Youtube Logo" className='h-16 mt-3 pl-1' src="https://tse2.mm.bing.net/th/id/OIP.RrqSsfKTUBWXgxd0Uf8LcwHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
  </a></div>
    <div className='mt-6  col-span-8  grid grid-flow-col'>
      <div className='flex h-[40px]'>
      <input type="text" value={searchInput} 
      onFocus={()=>setSearchSuggestions(true)}
     // onBlurCapture={()=>setSearchSuggestions(false)}
      onChange={(e)=>setSearchInput(e.target.value)}
      className='border p-1 pl-3 ml-1 w-1/2 border-gray-400 mt-1 mb-1  ml-16 rounded-l-full' aria-label="search"></input>
      <button className='pl-1 border  border-gray-400 mt-1 mb-1  rounded-r-full bg-gray-100'>
        <img alt="" className='h-[25px] p-0.5 pr-1 rounded-r-full' src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"></img>
      </button>
      </div>
      
    </div>
    <div className='col-span-2'>
    <img alt="user" className='h-7 mt-6' src={USERICON}></img>
    </div>
    </nav>
    <div className='grid grid-flow-col'>
    <div className='flex col-span-2'></div>
    {searchInput===""?"":searchSuggestions && <div className='ml-16 w-1/2 col-span-10 flex flex-col'>
        <ul  className='fixed bg-white p-1 h-screen overflow-scroll  flex-1 border-gray-400  mb-1 w-[32%] lg:ml-[6rem] sm:ml-[6rem] md:ml-[6.5rem] max-[700px]:ml-[15%] max-[500px]:ml-[10%] shadow-lg rounded-lg'>
          { searchValues?.map(value=> {return <li  key={value.id.videoId} onClick={()=>OnsearchVideos(value.id.videoId)} className=' py-1 hover:bg-gray-300'>{value.snippet.title}</li>})}
        </ul>
      </div>}
      </div>
    </>
  )
}

export default Head


