import React from 'react'

function BidButton(props) {
  return (
    <button onClick={props.onClick} className='bg-black px-6 my-16 hover:scale-105 hover hover:animate-pulse  py-1 rounded-md text-white border-2 border-solid border-white blue-shadow  hover:cursor-pointer'>
        <p className='text-lg'>Place Bid</p>
    </button>
  )
}

export default BidButton