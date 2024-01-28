'use client'
import React, { useEffect, useState } from 'react';

const CirclePart = (props) => {
  const [percent, setPercent] = useState(0);
  const circumference = 30 * 2 * Math.PI;
 
  useEffect(()=>{
    setPercent(props.percentage);
  },[props.percentage])


  return (
    <div className="inline-flex items-center justify-center overflow-hidden rounded-full ">
      <svg className="w-20 h-20 ">
        <circle className="" style={{color:props.circleColor}}strokeWidth="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40" />
        <circle className=""style={{color:props.progressBarColor}}  strokeWidth="5" strokeDasharray={circumference} strokeDashoffset={circumference - (percent / 100) * circumference} strokeLinecap="round" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40" />
      </svg>
      <span className="absolute text-xl" style={{color:props.textColor}}>{`${percent}`}</span>
    </div>
  );
};

export default CirclePart;
