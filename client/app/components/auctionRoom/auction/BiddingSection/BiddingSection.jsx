import Heading from "./Heading"
import CurrentBid from "./CurrentBid"
import CurrentBidder from "./CurrentBidder"
import BidTimer from "./BidTimer"
import BidButton from "./BidButton"
import ProgressBar from "./ProgressBar"

function BiddingSection() {

  const bidData={
    currentBidValue:8.2,
    currentBidderName:'Bhaskar Mishra',
    currentBidderTeam:'rcb',
    totalPlayers:31,
    soldPlayers:17,
    unsoldPlayers:4
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      <Heading/>
      <CurrentBid currentBidValue={bidData.currentBidValue}/>
      <BidButton/>
      <div className="flex gap-4">
      <CurrentBidder currentBidderName={bidData.currentBidderName} currentBidderTeam={bidData.currentBidderTeam}/>
      <BidTimer/>
      </div>
      <ProgressBar totalPlayers={bidData.totalPlayers} soldPlayers={bidData.soldPlayers} unsoldPlayers={bidData.unsoldPlayers}/>
      
    </div>
  )
}

export default BiddingSection