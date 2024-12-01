import React, { useEffect, useState } from 'react'
import { COMMENTSDATA,MY_GOOGLE_API_KEY,USERICON } from '../utils/constants'
import { useSearchParams } from 'react-router-dom';

const Comment=({ data })=>{
   let { authorDisplayName,authorProfileImageUrl,textDisplay }=data?.snippet;

   if(data?.snippet?.topLevelComment){
    authorDisplayName=data?.snippet?.topLevelComment.snippet.authorDisplayName;
    authorProfileImageUrl=data?.snippet?.topLevelComment.snippet.authorProfileImageUrl;
    textDisplay=data?.snippet?.topLevelComment.snippet.textDisplay;

   }
    return (<div className='p-4 flex bg-gray-100'>
        <img  className="h-7" alt="user" src={authorProfileImageUrl?authorProfileImageUrl:USERICON}/>
         <div className='px-2 w-[76%]'>
         <div>{authorDisplayName}</div>
         <div className='break-words'>{textDisplay}</div>
         {data?.replies?.comments.map((reply)=><Comment data={reply} />)}
         </div>
    </div>)
};
const AllComments =({ Allcommentsdata })=>{
    return Allcommentsdata?.map((comment)=> <Comment data={comment} />)
    
}
const CommentsContainer = () => {
   const [commentsData,setCommentsData]=useState([]);
   const [ paramdata ]=useSearchParams();
   const FetchComments=async()=>{
   const data=await fetch(COMMENTSDATA+paramdata.get("v")+"&key="+MY_GOOGLE_API_KEY);
   const json=await data.json();
   setCommentsData(json.items);
   }
   useEffect(()=>{
    FetchComments();
   },[]);
    
  return (
    <div className='w-[70%] p-5 max-[1100px]:w-[100%]'>
      <h2 className='font-bold px-4'>Comments: </h2>
     <AllComments Allcommentsdata={commentsData}/>
    </div>
  )
}

export default CommentsContainer
