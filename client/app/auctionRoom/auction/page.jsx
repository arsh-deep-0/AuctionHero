"use client";
import BiddingSection from "@/app/components/auctionRoom/auction/BiddingSection/BiddingSection";
import BiddingSectionMobile from "@/app/components/auctionRoom/auction/BiddingSection/BiddingSectionMobile";
import ProfileLogo from "@/app/components/auctionRoom/auction/Miscellaneous/ProfileLogo";
import RoomID from "@/app/components/auctionRoom/auction/Miscellaneous/RoomID";
import PSS from "@/app/components/auctionRoom/auction/PlayerStatsSection/PSS";
import PlayerStatsSection from "@/app/components/auctionRoom/auction/PlayerStatsSection/PlayerStatsSection";
import BottomBar from "@/app/components/auctionRoom/auction/SideNavbar/BottomBar";
import MiddleComponentMobile from "@/app/components/auctionRoom/auction/SideNavbar/MiddleComponentMobile";
import SideNavbar from "@/app/components/auctionRoom/auction/SideNavbar/SideNavbar";
import TeamsWallet from "@/app/components/auctionRoom/auction/TeamsWallet/TeamsWallet";
import React from "react";

function page() {
  return (
    <div className="min-h-screen w-screen">
      <div className="absolute z--10 w-full min-h-screen flex flex-col justify-between">
        <img
          className="max-w-[100%] w-[100%] translate-x-[0%]  z--10  lg:max-w-[100%] lg:w-[100%] lg:translate-x-0"
          src="/resources/misc/upper-blob.svg"
          alt=""
        />
        <img
          className="hidden lg:block max-w-[200%]  z--10  "
          src="/resources/misc/lower-blob.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col min-h-screen  bg-white px-4 py-4 bg-wire z-10">
        <div className="flex px-2 lg:px-4 gap-4 justify-between bg-white py-1 rounded-md black-shadow z-10">
          <div className="flex gap-1 lg:gap-2 items-center">
            <img
              className="h-[60%]"
              src="/resources/logos/leftNavbarLogos/auctionHeroLogo.svg"
              alt=""
            />
            <p className="gabriela font-bold text-sm lg:text-lg text-center p-0">
              Auction Heroes
            </p>
          </div>
          <div className="gap-1 lg:gap-4 flex">
            <RoomID />
            <ProfileLogo />
          </div>
        </div>
        <div className="flex-col  flex  lg:flex-row  lg:align-bottom min-h-screen h-full z-10">
          <div className="hidden lg:flex w-[15%] py-4 ">
            <SideNavbar />
          </div>

          <div className="flex flex-col w-full h-full lg:w-5/6 items-center">
            <div className="lg:hidden h-[30%] flex flex-row px-4 justify-between flex-wrap lg:flex-row gap-4   lg:gap-12 lg:justify-around lg:align-top pt-4 w-full  text-black lg:inset-8 z-10">
              <div className="w-[40%] lg:w-1/4 h-[40%]">
                <PSS />
              </div>
              <div className="w-[45%] lg:w-1/4 h-[40%]">
                <TeamsWallet />
              </div>
            </div>
            <div className="lg:hidden flex justify-center h-[30%] w-4/5">
              <div className="lg:hidden w-[40%] lg:w-1/4 max-h-[30%] scale-75 ">
                <BiddingSectionMobile />
              </div>
            </div>

            <div className="lg:hidden w-4/5 h-10  bottom-6 flex justify-center">
              <BottomBar />
            </div>

            <div className="hidden lg:flex  flex-row-reverse  flex-wrap lg:flex-row gap-4  lg:gap-12 justify-around align-top py-4 w-full  text-black lg:inset-8 z-10 h-full">
              <div className="hidden lg:flex lg:w-1/4 h-1/2 lg:min-h-full">
                <TeamsWallet />
              </div>
              <div className="hidden lg:flex lg:w-1/4 h-1/2 lg:min-h-[90%]">
                <BiddingSection />
              </div>
              <div className="hidden lg:flex lg:w-1/4 h-1/2 lg:min-h-[90%]">
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
