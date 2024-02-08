import React from 'react'

function MiddleComponentMobile({name  ,imgUrl ,onclick,clicked}) {
  
  
    
  return (
    <button 
    onClick={onclick}
    className={`w-full flex justify-start items-center gap-2 px-3 py-1 rounded-md ${clicked?"bg-golden text-black":"bg-blue-pink text-white"}  active:bg-black active:drop-shadow-2xl  black-shadow  border-2 border-white border-solid`}>
        <div className='w-full '>
            <img className='w-full' src={`/resources/logos/leftNavbarLogos/${imgUrl}`} alt="" />
        </div>
      
    </button>
  )
}

export default MiddleComponentMobile