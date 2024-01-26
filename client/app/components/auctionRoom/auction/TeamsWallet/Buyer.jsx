import React from 'react'

function Buyer(props) {
  return (
    <div className='flex gap-2'>
        <div className='w-1/3 bg-black h-24 flex items-center justify-center rounded-md'>
            <img src={"/resources/logos/teamLogos/"+props.teamName+"logo.webp"} alt="" 
             className='h-16'/>
        </div>
        <div className='w-2/3 bg-black rounded-md fredoka text-white px-2 py-1 text-center'>
            <p className=''>{props.playerName}</p>
        </div>
    </div>
  )
}

export default Buyer
