'use client'
import React, { useEffect, useState } from 'react';

const CirclePart = ({ value, percentage, circleColor, progressBarColor, textColor, valueAfter = "", valueBefore = "" ,radius=2}) => {
    const [percent, setPercent] = useState(0);
    const [myValue, setmyValue] = useState(0);
    const circumference = radius*16 * 2 * Math.PI; // multiplied by 16 because radius is in rem 

    useEffect(() => {
        setPercent(percentage);
        setmyValue(value);
    }, [percentage])


    return (
        <div className="inline-flex items-center justify-center overflow-hidden rounded-full ">
            <svg className=" -rotate-90" style={{width:radius*2+"rem",aspectRatio:"1"}}>
                <circle className="" style={{ color: circleColor }} strokeWidth="0" stroke="currentColor" fill="currentColor" r={radius*16-2.5} cx={radius*16+""} cy={radius*16+""}  />
                <circle className="" style={{ color: progressBarColor }} strokeWidth="5" strokeDasharray={circumference} strokeDashoffset={circumference - (percent / 100) * circumference} strokeLinecap="round" stroke="currentColor" fill="transparent" r={radius*16} cx={radius*16+""} cy={radius*16+""} />
            </svg>
            <div className='absolute flex flex-col items-center justify-center'>
                <span className=" text-base leading-3" style={{ color: textColor }}><span className='text-xs'>{`${valueBefore}`}</span>{`${myValue}`}</span>
                {valueAfter && <span className=" text-xs leading-3" style={{ color: textColor }}>{`${valueAfter}`}</span>}
            </div>

        </div>
    );
};

export default CirclePart;
