import { useState } from "react";
import MiddleComponent from "./MiddleComponent";
import Timer from "./Timer";

function SideNavbar() {
  const [clickedArray, setClickedArray] = useState([false, true, false, false, false]);
  const headings = ["Team Dashboard", "Rules", "Player Cards", "Auction", "My Team"];


  const changeClickedState = (index) => {
    const newClickedArray = Array(5).fill(false);
    newClickedArray[index] = true;
    setClickedArray(newClickedArray);
    
  };




  return (
    <div className="  w-full h-full  bg-white black-shadow  text-black px-4 py-4  justify-between rounded-md flex flex-col ">
      {/* top section - logo + heading */}
      <div className="flex space-x-3">
        <img src="/resources/logos/leftNavbarLogos/auctionHeroLogo.svg" alt="" />
        <div className="gabriela font-bold text-lg text-center">
          Auction Heroes
        </div>
      </div>

      {/* middle section - navMenu */}
      <div>
        <div className="w-full flex flex-col gap-2">

          {headings.map((heading, index) =>
            <MiddleComponent key={heading} onclick={() =>  changeClickedState(index)} clicked={clickedArray[index]} name={heading} imgUrl={heading+"-icon.svg"} />)
          }


        </div>
      </div>

      {/* timer section */}
      <Timer />


    </div>
  );
}

export default SideNavbar;
