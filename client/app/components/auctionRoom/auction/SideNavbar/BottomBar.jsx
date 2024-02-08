import { useState } from "react";

import Timer from "./Timer";
import MiddleComponentMobile from "./MiddleComponentMobile";

function BottomBar() {
  const [clickedArray, setClickedArray] = useState([false, true, false, false, false]);
  const headings = ["Team Dashboard", "rules", "Player Cards", "auction", "My Team"];


  const changeClickedState = (index) => {
    const newClickedArray = Array(5).fill(false);
    newClickedArray[index] = true;
    setClickedArray(newClickedArray);
    
  };




  return (
    <div className="  w-4/5 h-full  bg-white black-shadow  text-black px-1 py-1  justify-between rounded-md flex flex-col ">
    
     
        <div className=" flex h-8 gap-1">

          {headings.map((heading, index) =>
            <MiddleComponentMobile key={heading} onclick={() =>  changeClickedState(index)} clicked={clickedArray[index]} name={heading} imgUrl={heading+"-icon.svg"} />)
          }


        </div>


   


    </div>
  );
}

export default BottomBar;
