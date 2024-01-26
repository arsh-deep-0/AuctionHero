import BiddingSection from '@/app/components/auctionRoom/auction/BiddingSection/BiddingSection'
import PlayerStatsSection from '@/app/components/auctionRoom/auction/PlayerStatsSection/PlayerStatsSection'
import SideNavbar from '@/app/components/auctionRoom/auction/SideNavbar/SideNavbar'
import TeamsWallet from '@/app/components/auctionRoom/auction/TeamsWallet/TeamsWallet'
import React from 'react'

function page() {
  return (
    <div className='flex h-screen'>
        <div className='w-'>
        <SideNavbar/>
        </div>
       
        <div className='flex gap-8 justify-center items-center'>
            <TeamsWallet/>
            <BiddingSection />
            <PlayerStatsSection />
        </div>
    </div>
  )
}

export default page