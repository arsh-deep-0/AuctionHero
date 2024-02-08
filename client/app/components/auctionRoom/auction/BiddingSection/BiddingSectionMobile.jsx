import Heading from "./Heading";
import CurrentBid from "./CurrentBid";
import CurrentBidder from "./CurrentBidder";
import BidTimer from "./BidTimer";
import BidButton from "./BidButton";
import ProgressBar from "./ProgressBar";
import { useState } from "react";

function BiddingSectionMobile() {
    const bidData = {
        currentBidValue: 8.2,
        currentBidderName: "Bhaskar Mishra",
        currentBidderTeam: "rcb",
        totalPlayers: 31,
        soldPlayers: 17,
        unsoldPlayers: 4,
      };
    
      const [currentBidVal, setCurrentBidVal] = useState(0);
    
      const bidButtonHandler = () => {
        if (currentBidVal === 0) setCurrentBidVal(2.0);
        else if (
          (currentBidVal * 10) % 10 == 0 || (currentBidVal * 10) % 10 == 8
        ) {
    
          setCurrentBidVal(currentBidVal + 0.2);
        }
        else {
    
          setCurrentBidVal(currentBidVal + 0.3);
        }
      };
  return (
    <div className="flex flex-col justify-between h-full gap-4 items-center">
    <div className="flex flex-col gap-8 items-center">
      <Heading />
    
      <ProgressBar totalPlayers={bidData.totalPlayers} soldPlayers={bidData.soldPlayers} unsoldPlayers={bidData.unsoldPlayers}/>
    </div>

    <BidButton onClick={bidButtonHandler} />

    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <CurrentBidder currentBidderName={bidData.currentBidderName} currentBidderTeam={bidData.currentBidderTeam}/>
        <CurrentBid currentBidValue={currentBidVal} />
        <BidTimer />
      </div>
     
    </div>

  </div>
  )
}

export default BiddingSectionMobile