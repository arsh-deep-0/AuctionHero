import React from 'react'

function ProgressBar(props) {

    return (
        <div className='bg-golden rounded-md text-white border-2 border-solid border-white p-2 px-4 w-full flex-col flex  items-center'>
            <div className='text-black w-full  rounded-md flex'>
                <div className='flex justify-center flex-col items-center' style={{ width: props.soldPlayers / props.totalPlayers * 100 + "%" }}>
                    <p>Sold</p>
                    <p>{props.soldPlayers}</p>
                </div>
                <div className='flex justify-center  flex-col items-center' style={{ width: props.unsoldPlayers / props.totalPlayers * 100 + "%" }}>
                    
                    <p>Unsold</p>
                    <p>{props.unsoldPlayers}</p>
                </div>
            </div>
            <div className='bg-black w-full h-2 rounded-md flex overflow-hidden'>
                <div className='bg-pink h-2' style={{ width: props.soldPlayers / props.totalPlayers * 100 + "%" }}>

                </div>
                <div className='bg-blue border-r-4 border-l-4 border-solid border-white  h-2' style={{ width: props.unsoldPlayers / props.totalPlayers * 100 + "%" }}>

                </div>

            </div>
        </div>
    )
}

export default ProgressBar