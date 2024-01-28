import React from 'react'
import CirclePart from '../BiddingSection/CirclePart'

function Buyer({ teamName, currentWallet, totalWallet, playersBought, playerName}) {
  const spendingData ={
    percentage:((currentWallet/(totalWallet*1.0))*50.0).toFixed(2),
    circleColor:"black",
    progressBarColor:"white",
    textColor:"white",
}

const playersBoughtData ={
  percentage:Math.round(playersBought/14*100)*15/100,
  
  circleColor:"white",
  progressBarColor:"black",
  textColor:"black",
}

  return (
    <div className='flex gap-2'>
        <div className={'w-1/3  h-24 flex items-center justify-center rounded-md '+teamName}>
            <img src={"/resources/logos/teamLogos/"+teamName+"logo.webp"} alt="" 
             className='h-16'/>
        </div>
        <div className={'w-2/3  rounded-md fredoka text-white px-2 py-1 text-center flex-flex-col '+teamName}>
            <p className=''>{playerName}</p>
            <div className='flex ga-2 justify-center'>
              <CirclePart {...spendingData}/>
              <CirclePart {...playersBoughtData}/>
            </div>
        </div>
    </div>
  )
}

export default Buyer
