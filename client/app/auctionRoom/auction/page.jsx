"use client";
import BiddingSection from "@/app/components/auctionRoom/auction/BiddingSection/BiddingSection";
import RoomID from "@/app/components/auctionRoom/auction/Miscellaneous/RoomID";
import PlayerStatsSection from "@/app/components/auctionRoom/auction/PlayerStatsSection/PlayerStatsSection";
import SideNavbar from "@/app/components/auctionRoom/auction/SideNavbar/SideNavbar";
import TeamsWallet from "@/app/components/auctionRoom/auction/TeamsWallet/TeamsWallet";
import React from "react";

function page() {
  return (
    <div className="flex h-screen  bg-gray-300  align-bottom">
      <div className="w-1/6 py-8 pl-4">
        <SideNavbar />
      </div>
      <div className="flex flex-col  w-5/6">
        <div className="flex justify-end px-4 py-2">
          <RoomID />
        </div>
        <div className="flex gap-12 justify-center align-top py-4 w-full bg-gray-300 text-black inset-8">
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
  );
}

export default page;
