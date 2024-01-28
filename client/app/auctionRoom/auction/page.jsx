import BiddingSection from '@/app/components/auctionRoom/auction/BiddingSection/BiddingSection'
import PlayerStatsSection from '@/app/components/auctionRoom/auction/PlayerStatsSection/PlayerStatsSection'
import SideNavbar from '@/app/components/auctionRoom/auction/SideNavbar/SideNavbar'
import TeamsWallet from '@/app/components/auctionRoom/auction/TeamsWallet/TeamsWallet'
import React from 'react'

function page() {
  return (
    <div className='flex h-screen  bg-gray-300'>
        <div className='w-1/6 '>
        <SideNavbar/>
        </div>
       
        <div className='flex gap-8 justify-center items-center w-5/6 bg-gray-300 text-black'>
            <div className='w-1/4 '>
            <TeamsWallet/>
            </div>
            <div className='w-1/4'>
            <BiddingSection />
            </div>
            <div className='w-1/4'>
            <PlayerStatsSection />
            </div>
           
           
           
        </div>
    </div>
  )
}

export default page