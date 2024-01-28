import React from 'react';
import Buyer from './Buyer';

function WalletContainer() {
    const buyersData = [
        {
            teamName: 'mi',
            currentWallet: 23.6,
            totalWallet: 50,
            playersBought: 7,
            playerName: 'Arshdeep Singh'
        }, {
            teamName: 'csk',
            currentWallet: 33.6,
            totalWallet: 50,
            playersBought: 4,
            playerName: 'Bhavya Vohra'
        },
        {
            teamName: 'rcb',
            currentWallet: 12.6,
            totalWallet: 50,
            playersBought: 9,
            playerName: 'Bhaskar Mishra'
        },
        {
            teamName: 'rr',
            currentWallet: 40.2,
            totalWallet: 50,
            playersBought: 3,
            playerName: 'Manik Raj'
        },
        {
            teamName: 'kkr',
            currentWallet: 7.7,
            totalWallet: 50,
            playersBought: 10,
            playerName: 'Anurag Bansal'
        }
    ];

    return (
        <div className="w-full flex flex-col p-2 bg-white gap-2 rounded-md blue-shadow">
            {buyersData.map((buyer) => {
                const buyerData = {
                    teamName: buyer.teamName,
                    currentWallet: buyer.currentWallet,
                    totalWallet: buyer.totalWallet,
                    playersBought: buyer.playersBought,
                    playerName: buyer.playerName
                }
                return < Buyer key={buyer.teamName} {...buyerData} />
            })}
        </div>
    );
}

export default WalletContainer;
