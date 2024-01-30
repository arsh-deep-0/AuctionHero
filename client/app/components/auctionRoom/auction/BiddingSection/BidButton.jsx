import React from 'react'

function BidButton(props) {
  return (
    <button onClick={props.onClick} className='bg-golden px-6 active:translate-y-[2px] hover:scale-[1.02] py-1 rounded-md text-black border-2 border-solid border-white blue-shadow  hover:cursor-pointer'>
        <p className='text-lg aoboshi border-1 border-white border-solid'>Place Bid</p>
    </button>
  )
}

export default BidButton