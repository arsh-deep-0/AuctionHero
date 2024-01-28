import React from "react";

const StatSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="aoboshi text-4xl text-black font-bold text-center">
        Virat Kohli
      </div>
      <div className="flex gap-1">
            <div className="flex bg-golden px-3 py-2 gap-2 -skew-x-[20deg] items-center align-middle border-2 border-solid border-white">
                  <img className="w-4" src="/resources/images/Group 268.svg" alt="" />
                  <p className="text-xl skew-x-[20deg] font-medium">94</p>
            </div>
            <div className="flex bg-golden px-3 py-2 gap-1 -skew-x-[20deg] border-2 border-solid border-white">
                  <img className="w-6 skew-x-[20deg]" src="/resources/images/Group 295.svg" alt="" />
                  <p className="text-xl skew-x-[20deg] font-medium">94</p>
            </div>
            <div className="flex bg-golden px-3 py-2 gap-2 -skew-x-[20deg] border-2 border-solid border-white">
                  <img className="w-4 skew-x-[20deg]" src="/resources/images/Group 273.svg" alt="" />
                  <p className="text-xl skew-x-[20deg] font-medium">94</p>
            </div>
      </div>
    </div>
  );
};

export default StatSection;
