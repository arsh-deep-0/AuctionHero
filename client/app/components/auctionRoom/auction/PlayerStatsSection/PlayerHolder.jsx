import React from "react";

const PlayerHolder = () => {
  return (
    <div className="relative w-full flex flex-col justify-end h-80 items-center scale-110">
      <div className="relative w-4/5 h-60 bg-white rounded-md black-shadow">
        <div className="absolute w-12  rounded-md -left-5 -top-4 z-20 black-shadow border-black border-solid border-2  flex items-center justify-center">
          <img className="rounded-md" src="/resources/misc/ndia.webp" alt="" />
        </div>
        <div className="absolute  bg-black rounded-md -left-10 -bottom-2 z-20 black-shadow border-white border-solid border-2 flex flex-col text-white text-center aoboshi py-2 px-1 justify-center gap-2">
          <div className="">
            <p>Virat Kohli</p>
          </div>
          <div className="flex justify-between text-xs fredoka gap-4 ">
            <p className="border-white border-solid border-[1px] px-1 py-[0.05rem] rounded-md">
              All-Rounder
            </p>
            <p className="border-white border-solid border-[1px] px-1 py-[0.05rem] rounded-md">
              Domestic
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-[24rem] absolute inset-x-0  bottom-0 "
          src="/resources/playerImages/Virat Kohli.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default PlayerHolder;
