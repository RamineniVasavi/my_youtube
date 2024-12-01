import React from 'react'
import Button from './Button'
const Buttonlist = () => {
  const listitems=["All","Big Boss","Kapil sharma","Movies","Live","Telugu songs","Cricket","Cooking","Israel war"];
  return (
    <div className='flex-wrap'>
    {  listitems?.map(i=>{
        return <Button key={i} name={i}/>
      })

    }
     </div>
  )
}

export default Buttonlist
