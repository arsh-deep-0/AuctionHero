'use client'
import React from 'react'
import CirclePart from './CirclePart'

function BidTimer() {
    const props ={
        value:13,
        valueAfter:"sec",
        percentage:13/15*100,
        circleColor:"black",
        progressBarColor:"white",
        textColor:"white",
    }
    return (

        <div className='flex flex-col items-center '>
            <p className='aoboshi'>Countdown</p>
            <div className='flex blue-shadow border-white border-2 border-solid rounded-md bg-blue-pink flex-col gap-1 items-center justify-center p-2 w-36 h-28'>
            <CirclePart {...props}/>
            </div>
        </div>

    )
}

export default BidTimer