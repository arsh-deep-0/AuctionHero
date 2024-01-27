import React from 'react';
import Buyer from './Buyer'; 

function WalletContainer() {
    const buyerData = [
        {
            teamName: 'mi',
            currentWallet: 23.6,
            playersBought: 7,
            playerName: 'Arshdeep Singh'
        }, {
            teamName: 'csk',
            currentWallet: 33.6,
            playersBought: 4,
            playerName: 'Bhavya Vohra'
        },
        {
            teamName: 'rcb',
            currentWallet: 12.6,
            playersBought: 9,
            playerName: 'Bhaskar Mishra'
        },
        {
            teamName: 'rr',
            currentWallet: 40.2,
            playersBought: 3,
            playerName: 'Manik Raj'
        },
        {
            teamName: 'kkr',
            currentWallet: 7.7,
            playersBought: 10,
            playerName: 'Anurag Bansal'
        }
    ];

    return (
        <div className="w-full flex flex-col p-2 bg-white gap-2 rounded-md blue-shadow">
            {buyerData.map((buyer) => (
                <Buyer key={buyer.teamName} teamName={buyer.teamName} playerName={buyer.playerName}/> 
            ))}
        </div>
    );
}

export default WalletContainer;
