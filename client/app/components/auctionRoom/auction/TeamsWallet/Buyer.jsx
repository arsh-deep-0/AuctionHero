import React from 'react'
import CirclePart from '../BiddingSection/CirclePart'

function Buyer({ teamName, currentWallet, totalWallet, playersBought, playerName}) {
  const spendingData ={
    value:currentWallet.toFixed(1),
    valueBefore:"₹",
    valueAfter:"Cr",
    percentage:((currentWallet/totalWallet)*100),
    circleColor:"white",
    progressBarColor:"black",
    textColor:"black",
    radius:1.5
    
}

const playersBoughtData ={
  value:playersBought,
  valueAfter:"Players",
  percentage:(playersBought/14*100),
  circleColor:"black",
  progressBarColor:"white",
  textColor:"white",
  radius:1.5
}

  return (
    <div className='flex gap-2 items-center justify-between'>
        <div className={'w-1/4 h-20   flex items-center justify-center rounded-full shadow-lg border-2 border-white border-solid min-w-20 '+teamName}>
            <img src={"/resources/logos/teamLogos/"+teamName+"logo.webp"} alt="" 
             className='h-12'/>
        </div>
        <div className={'w-3/4  rounded-md fredoka text-white px-2 py-1 text-center flex-flex-col min-w-40 shadow-lg border-2 border-white border-solid '+teamName}>
            <p className=''>{playerName}</p>
            <div className='flex gap-2 justify-center '>
              <CirclePart {...spendingData}/>
              <CirclePart {...playersBoughtData}/>
            </div>
        </div>
    </div>
  )
}

export default Buyer
