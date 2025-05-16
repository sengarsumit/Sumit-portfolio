import React from 'react'
import rocet from '../assets/rocet.png'

function Footer() {
  return (
    <>
        <div className="relative min-h-screen flex flex-col   items-center bg-black text-white">
    
        <div className="absolute top-1/4 left-2/3 flex items-center justify-center">
             <div className="absolute w-50 h-50 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-45 h-45 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-40 h-40 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-35 h-35 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-30 h-30 rounded-full border border-[#2A6F4A] "></div>
        </div>
            <img src={rocet} alt="rocet" className="absolute bottom-1/2 left-1/4 h-1/3 md:h-1/2 lg:h-2/3 transform -translate-x-1/3 translate-y-1/2" />
            
      
            <div className='absolute top-1/5 left-1/2  justify-around hidden sm:block '  >
            <p className='text-lg'>Skilled in building RESTful APIs with Spring<br></br> Boot, implementing authentication with Spring <br></br>Security, and database integration using Hibernate.<br></br><br></br> Developed responsive web applications using HTML,<br></br> CSS, and JavaScript.<br></br><br></br>
            Gained cybersecurity insights during an internship with <br></br>Gurugram Police Cyber Security. Passionate about scalable<br></br> software development and continuous learning.</p>
            <div className='pt-20'>
            <h1 className="text-9xl   bg-gradient-to-r from-gray-50  to-[#50D58E] bg-clip-text text-transparent">
          HIRE ME ?
        </h1>
            </div>
            </div>
            <div className="absolute top-1/8 left-1/2 transform -translate-x-1/2 text-center md:text-left block lg:hidden">
          <p className="text-sm md:text-lg leading-relaxed max-w-xs md:max-w-md">
            Skilled in building RESTful APIs with Spring Boot, implementing authentication
            with Spring Security, and database integration using Hibernate.
            <br />
            <br />
            Developed responsive web applications using HTML, CSS, and JavaScript.
            <br />
            <br />
            Gained cybersecurity insights during an internship with Gurugram Police Cyber Security. 
            Passionate about scalable software development and continuous learning.
          </p>

          <div className=" md:pt-20">
            <h1 className="text-4xl md:text-8xl bg-gradient-to-r from-gray-50 to-[#50D58E] bg-clip-text text-transparent">
              HIRE ME ?
            </h1>
          </div>
        </div>
            
            <div className="absolute top-70 left-40 w-1/6 h-1/6 bg-[#140CBA]  blur-3xl rounded-full transform -translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-40 left-35 w-1/5 h-1/3 bg-[#2A6F4A]  blur-3xl rounded-full transform -translate-x-1/3 -translate-y-1/3"></div>
            
            

<footer class="absolute bottom-0 w-full  rounded-lg shadow-sm  ">
    <div class="w-full max-w-screen-xl mx-auto  md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
           
           
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025  All Rights Reserved. Sumit Sengar  </span>
    </div>
</footer>


        </div>
    </>
  )
}

export default Footer