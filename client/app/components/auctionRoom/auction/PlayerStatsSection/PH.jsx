import React from "react";

const PH = () => {
  return (
    <div className="relative w-full flex flex-col justify-end lg:h-80 items-center mt-24">
      <div className="relative w-full lg:w-4/5 h-32 lg:h-60 bg-white rounded-md black-shadow">
        <div className="absolute w-10 lg:w-12 scale-75 lg:scale-100 rounded-md right-1 top-1 lg:-left-5 lg:-top-4 z-20 black-shadow border-black border-solid border-2  flex items-center justify-center">
          <img className="rounded-md" src="/resources/misc/India.webp" alt="" />
        </div>
        <div className=" hidden lg:flex absolute max-w-[100%] scale-100 lg:scale-100  bg-black rounded-md   lg:-left-10  -bottom-8 lg:-bottom-2 z-20 black-shadow border-white border-solid border-2 lg:flex flex-col text-white text-center aoboshi py-2 px-1 justify-center gap-2">
          <div className="">
            <p>Virat Kohli</p>
          </div>
          <div className="flex justify-center lg:justify-between  items-center text-xs fredoka gap-4 ">
            <p className="border-white border-solid border-[1px] lg:px-1 py-[0.05rem] rounded-md whitespace-nowrap">
              All-Rounder
            </p>
            <p className="hidden lg:flex border-white border-solid border-[1px] lg:px-1 py-[0.05rem] rounded-md">
              Domestic
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-[160%] max-w-[200%] absolute inset-x-[-30%]  bottom-0 lg:w-[24rem] lg:max-w-[100%] lg:inset-x-0"
          src="/resources/playerImages/Virat Kohli.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default PH;
