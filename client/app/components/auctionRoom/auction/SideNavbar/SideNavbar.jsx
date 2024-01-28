import { useEffect, useState } from "react";
import MiddleComponent from "./MiddleComponent";

function SideNavbar() {
  const clickHandler = () => {
    console.log("hello");
}
const startTime = Date.now();

const [hours , setHours] = useState(0);
const [minutes , setMinutes] = useState(0);
const [seconds , setSeconds] = useState(0);

const displayTime = () => {
  const currTime = Date.now();
  const totalSeconds = (currTime - startTime)/1000;
  setSeconds(Math.floor(totalSeconds % 60));
  setMinutes(Math.floor((totalSeconds/60) % 60) );
  setHours(Math.floor((totalSeconds/(60*60)) % 24));
};

useEffect(() => {
  const interval = setInterval(() => {
    displayTime();

  }, 1000);

  return () => clearInterval(interval);
} , [])

  return (
    <div className=" absolute inset-8 bg-white  text-black px-4 py-4 w-1/6 justify-between rounded-md flex flex-col ">
      {/* top section - logo + heading */}
      <div className="flex space-x-3">
        <img src="/resources/logos/leftNavbarLogos/auctionHeroLogo.svg" alt="" />
        <div className="gabriela font-bold text-xl text-center">
          Auction Heroes
        </div>
      </div>

      {/* middle section - navMenu */}
      <div>
        <div className="w-full flex flex-col gap-2">
        <MiddleComponent onClicks={clickHandler} name = "Team Dashboard" imgUrl = "teamDashboard.svg"/>
        <MiddleComponent onClicks={clickHandler} name = "Auction" imgUrl = "auction.svg"/>
        <MiddleComponent onClicks={clickHandler} name = "Rules" imgUrl = "rules.svg"/>
        <MiddleComponent onClicks={clickHandler} name = "My Team" imgUrl = "myteam.svg"/>
        <MiddleComponent onClicks={clickHandler} name = "Player Cards" imgUrl = "playerCards.svg"/>
        </div>
      </div>

      {/* timer section */}


      <div className="h-11  flex w-full justify-center gap-2  rounded-md items-center bg-black text-white text-2xl">
        <span>{String(hours).length < 2 ? "0"+String(hours) : hours}</span>
        <span>:</span>
        <span>{String(minutes).length < 2 ? "0"+String(minutes) : minutes}</span>
        <span>:</span>
        <span>{String(seconds).length < 2 ? "0"+String(seconds) : seconds}</span>

      </div>

    </div>
  );
}

export default SideNavbar;
