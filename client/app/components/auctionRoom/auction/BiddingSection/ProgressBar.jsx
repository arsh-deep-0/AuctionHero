import React from 'react'

function ProgressBar(props) {
   
  return ( 
    <div className='bg-golden rounded-md text-white border-2 border-solid border-white p-2 w-full'>
        <div className='bg-black w-full h-2 rounded-md flex overflow-hidden'>
            <div className='bg-pink h-2' style={{width:props.soldPlayers/props.totalPlayers*100+"%"}}></div>
            <div className='bg-blue border-r-4 border-l-4 border-solid border-white  h-2' style={{width:props.unsoldPlayers/props.totalPlayers*100+"%"}}></div>
        </div>
    </div>
  )
}

export default ProgressBar