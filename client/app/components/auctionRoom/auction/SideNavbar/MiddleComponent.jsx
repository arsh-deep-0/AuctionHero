import React from 'react'

function MiddleComponent({name  ,imgUrl ,onclick,clicked}) {
  
  
    
  return (
    <button 
    onClick={onclick}
    className={`w-full flex justify-start items-center gap-2 px-3 py-1 rounded-md ${clicked?"bg-golden text-black":"bg-blue-pink text-white"}  active:bg-black active:drop-shadow-2xl  blue-shadow border-2 border-white border-solid`}>
        <div className='w-1/6 '>
            <img className='w-6' src={`/resources/logos/leftNavbarLogos/${imgUrl}`} alt="" />
        </div>
        <div className='asap   text-md'>
            {name}
        </div>
    </button>
  )
}

export default MiddleComponent