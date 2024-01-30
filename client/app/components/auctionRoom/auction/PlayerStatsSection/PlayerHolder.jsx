import React from "react";

const PlayerHolder = () => {
  return (
    
      <div className="relative w-full flex flex-col justify-end h-80 items-center scale-110" >
       
        <div >
          <img
            className="w-[24rem] absolute inset-x-0 bottom-0"
            src="/resources/playerImages/Virat Kohli.svg"
            alt=""
          />
        </div>
       
        
        <div className="w-4/5 h-60 bg-white rounded-md blue-shadow">
        </div>

      </div>

   
  );
};

export default PlayerHolder;
