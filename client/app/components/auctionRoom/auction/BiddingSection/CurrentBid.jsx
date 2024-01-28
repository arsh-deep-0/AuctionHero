
function CurrentBid(props) {
  return (
    <div className='border-4 blue-shadow  border-white border-solid bg-blue-pink text-white fredoka w-36 flex flex-col justify-center items-center p-4 rounded-md'>
        <p className=''>Current Bid</p>
        <p>&#8377;<span className='text-3xl '>{props.currentBidValue}</span>Cr</p>
    </div>
  )
}

export default CurrentBid