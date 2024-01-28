import React from 'react'


function MiddleComponent({name , onclick ,imgUrl}) {
    
  return (
    <button 
    onClick={onclick}
    className='w-full flex justify-start items-center gap-2 px-3 py-1 rounded-md bg-blue-pink  active:bg-slate-50'>
        <div className='w-1/6 '>
            <img className='w-6' src={`/resources/logos/leftNavbarLogos/${imgUrl}`} alt="" />
        </div>
        <div className='asap  text-white text-md'>
            {name}
        </div>
    </button>
  )
}

export default MiddleComponent