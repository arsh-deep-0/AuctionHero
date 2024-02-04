import React from 'react'
import { useEffect, useState } from "react";

function Timer() {
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
  }, [])

    
  return (
    <div className="flex w-full justify-center gap-2  rounded-md items-center bg-black text-white text-md px-3 py-1 border-2 border-white border-solid blue-shadow aoboshi ">
    <span>{String(hours).length < 2 ? "0"+String(hours) : hours}</span>
    <span>:</span>
    <span>{String(minutes).length < 2 ? "0"+String(minutes) : minutes}</span>
    <span>:</span>
    <span>{String(seconds).length < 2 ? "0"+String(seconds) : seconds}</span>

  </div>
  )
}

export default Timer