"use client"
import BiddingSection from '@/app/components/auctionRoom/auction/BiddingSection/BiddingSection'
import PlayerStatsSection from '@/app/components/auctionRoom/auction/PlayerStatsSection/PlayerStatsSection'
import SideNavbar from '@/app/components/auctionRoom/auction/SideNavbar/SideNavbar'
import TeamsWallet from '@/app/components/auctionRoom/auction/TeamsWallet/TeamsWallet'
import React from 'react'

function page() {
  return (
    <div className='flex h-screen  bg-gray-300  align-bottom'>
        <div className='w-1/6 '>
        <SideNavbar/>
        </div>
       
        <div className='flex gap-12 justify-center  w-5/6 bg-gray-300 text-black items-center inset-8'>
            <div className='w-1/4 h-5/6'>
            <TeamsWallet/>
            </div>
            <div className='w-1/4 h-5/6'>
            <BiddingSection />
            </div>
            <div className='w-1/4 h-5/6'>
            <PlayerStatsSection />
            </div>          
           
        </div>
    </div>
  )
}

export default page