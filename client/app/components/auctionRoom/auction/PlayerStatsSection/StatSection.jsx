import React from "react";

const StatSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="aoboshi text-2xl text-black font-bold text-center drop-shadow-lg	">
        Virat Kohli
      </div>
      <div className="flex gap-1">
            <div className="flex bg-golden px-3 py-2 gap-4 -skew-x-[20deg] items-center align-middle border-2 border-solid border-white blue-shadow">
                  <img className="w-4" src="/resources/images/Group 268.svg" alt="" />
                  <p className="text-xl skew-x-[20deg]">94</p>
            </div>
            <div className="flex bg-golden px-3 py-2 gap-2 -skew-x-[20deg] border-2 border-solid border-white blue-shadow">
                  <img className="w-4" src="/resources/images/Group 268.svg" alt="" />
                  <p className="text-xl skew-x-[20deg]">0</p>
            </div>
            <div className="flex bg-golden px-3 py-2 gap-2 -skew-x-[20deg] border-2 border-solid border-white blue-shadow">
                  <img className="w-4" src="/resources/images/Group 268.svg" alt="" />
                  <p className="text-xl skew-x-[20deg]">0</p>
            </div>
      </div>
    </div>
  );
};

export default StatSection;
