import React from 'react'


function MiddleComponent(props) {
    
  return (
    <button 
    onClick={props.onClicks}
    className='w-full flex justify-start items-center gap-2 px-3 h-11 rounded bg-blue-pink  active:bg-slate-50'>
        <div className='w-1/6 '>
            <img className='w-full' src={`/resources/logos/leftNavbarLogos/${props.imgUrl}`} alt="" />
        </div>
        <div className='asap  text-white text-lg'>
            {props.name}
        </div>
    </button>
  )
}

export default MiddleComponent