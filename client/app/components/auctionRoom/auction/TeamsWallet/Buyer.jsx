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
    
}

const playersBoughtData ={
  value:playersBought,
  valueAfter:"Players",
  percentage:(playersBought/14*100),
  circleColor:"black",
  progressBarColor:"white",
  textColor:"white",
}

  return (
    <div className='flex gap-2'>
        <div className={'w-1/3  h-24 flex items-center justify-center rounded-md min-w-20 '+teamName}>
            <img src={"/resources/logos/teamLogos/"+teamName+"logo.webp"} alt="" 
             className='h-16'/>
        </div>
        <div className={'w-2/3  rounded-md fredoka text-white px-2 py-1 text-center flex-flex-col min-w-40 '+teamName}>
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
