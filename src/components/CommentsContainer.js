import React from 'react'
const commentsData=[{
    name:"Vasavi",
    text: "This is vasavi's comment",
    replies:[],
},
{
    name:"Vasavi",
    text: "This is vasavi's 2nd comment",
    replies:[{
        name:"Vasavi",
        text: "This is vasavi's comment",
        replies:[{
            name:"Vasavi",
            text: "This is vasavi's comment",
            replies:[],
        },
        {
            name:"Vasavi",
            text: "This is vasavi's comment",
            replies:[{
                name:"Vasavi",
                text: "This is vasavi's comment",
                replies:[],
            },],
        }]
    },]
},
];
const Comment=({ data })=>{
    const { name , text, replies }=data;
    return (<div className='p-4 flex shadow-md bg-gray-100'>
        <img  className="h-7" alt="user" src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"/>
         <div className='px-2'>
         <div>{name}</div>
         <div>{text}</div>
         {replies.map((reply)=><Comment data={reply}/>)}
         </div>
    </div>)
};
const AllComments =({Allcommentsdata})=>{
    return Allcommentsdata.map((comment)=> <Comment data={comment}/>)
    
}
const CommentsContainer = () => {
  return (
    <div className='w'>
      <h2 className='font-bold px-4'>Comments: </h2>
     <AllComments Allcommentsdata={commentsData}/>
      {console.log({commentsData})}
    </div>
  )
}

export default CommentsContainer
