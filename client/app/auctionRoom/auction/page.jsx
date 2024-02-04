"use client";
import BiddingSection from "@/app/components/auctionRoom/auction/BiddingSection/BiddingSection";
import ProfileLogo from "@/app/components/auctionRoom/auction/Miscellaneous/ProfileLogo";
import RoomID from "@/app/components/auctionRoom/auction/Miscellaneous/RoomID";
import PlayerStatsSection from "@/app/components/auctionRoom/auction/PlayerStatsSection/PlayerStatsSection";
import SideNavbar from "@/app/components/auctionRoom/auction/SideNavbar/SideNavbar";
import TeamsWallet from "@/app/components/auctionRoom/auction/TeamsWallet/TeamsWallet";
import React from "react";

function page() {
  return (
    <div className="h-screen w-screen">
      <div className="absolute z--10 w-full h-screen flex flex-col justify-between">
        <img className="w-[100%] z--10  " src="/resources/misc/upper-blob.svg" alt="" />
        <img className="w-[100%] z--10  " src="/resources/misc/lower-blob.svg" alt="" />
      </div>
 <div className="flex flex-col h-screen  bg-white px-4 py-4 bg-wire z-10">
    
    <div className="flex px-4 gap-4 justify-between bg-white py-1 rounded-md black-shadow z-10">
      <div className="flex w-56 gap-2 items-center">
        <img className="h-6"
          src="/resources/logos/leftNavbarLogos/auctionHeroLogo.svg"
          alt=""
        />
        <div className="gabriela font-bold text-lg text-center">
          Auction Heroes
        </div>
      </div>
      <div className="gap-4 flex">
        <RoomID />
        <ProfileLogo />
      </div>
    </div>
    <div className="flex align-bottom  z-10">
      <div className="w-[15%] py-4 ">
        <SideNavbar />
      </div>
      <div className="flex flex-col  w-5/6">
        <div className="flex gap-12 justify-around align-top py-4 w-full  text-black inset-8 z-10">
          <div className="w-1/4 h-full">
            <TeamsWallet />
          </div>
          <div className="w-1/4 h-full">
            <BiddingSection />
          </div>
          <div className="w-1/4 h-full">
            <PlayerStatsSection />
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
   
  );
}

export default page;
