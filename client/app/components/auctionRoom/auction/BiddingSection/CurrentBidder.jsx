import React from 'react'

function CurrentBidder(props) {
  return (
    <div className='flex flex-col items-center '>
        <p className='tenor-sans'>Current Bidder</p>
        <div className='flex  border-white border-2 border-solid rounded-md bg-blue-pink flex-col gap-1 items-center justify-center p-2 w-36 h-28'>
            <img className='h-16' src={"/resources/logos/teamlogos/"+props.currentBidderTeam+"logo.webp"} alt="" />
            <p className='fredoka text-white'>{props.currentBidderName}</p>
        </div>
    </div>
  )
}

export default CurrentBidder