import React from 'react'

function Great() {
    
  return (
    <>
         <div className="relative min-h-screen flex flex-col   items-center bg-black text-white">
         <div className="absolute top-0 left-0 w-1/5 h-1/3 bg-[#2A6F4A]  blur-3xl rounded-full transform -translate-x-1/3 -translate-y-1/3"></div>
         <div className="absolute top-10 left-10 w-1/8 h-1/8 bg-[#140CBA]  blur-3xl rounded-full transform -translate-x-1 -translate-y-1"></div>
        
         
         <div className="absolute top-30 left-180 flex items-center justify-center">
         <h1 className='text-7xl'>&</h1>
             <div className="absolute w-40 h-40 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-35 h-35 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-30 h-30 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-25 h-25 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-20 h-20 rounded-full border border-[#2A6F4A] "></div>
        </div>
       <div className='absolute text-6xl top-30 left-200'>
       <h1 className=' font-light'>great at 3 things </h1>
            </div>
            <div className="absolute  top-25 right-1/3 w-1 h-31 bg-blue-500 mx-auto">
         <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-12 border-transparent border-t-blue-500"></div>
       </div>
       <div className=" absolute  top-1/2 text-2xl space-y-10  ">
        <p className='tracking-[.20em] leading-relaxed'>01 &lt;I <span className='text-[#2A6F4A]'>Build</span> web apps that actually <br></br>scale, so you don't have to panic<br></br> when users actually show up&gt;</p>
        <p className='tracking-[.20em] leading-relaxed'>02 &lt;<span className='text-[#2A6F4A]'>Backend Development</span> is my <br></br>playground!&gt;</p>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80">
          <circle cx="60" cy="60" r="50" stroke="#2A6F4A"  fill="none" />
          <circle cx="60" cy="60" r="40" stroke="#2A6F4A"  fill="none" />
          <circle cx="60" cy="60" r="30" stroke="#2A6F4A"  fill="none" />
          <circle cx="60" cy="60" r="20" stroke="#2A6F4A"  fill="none" />
          <circle cx="60" cy="60" r="10" stroke="#2A6F4A"  fill="none" />
        </svg>
      </div>
        <p className='tracking-[.20em] leading-relaxed'>03 &lt;<span className='text-[#2A6F4A]'>Fix</span> tech issues and support with <br></br>a smile, solutions with speed&gt;</p>
      </div>
     
         </div> 
        
       
    </>
  )
}

export default Great