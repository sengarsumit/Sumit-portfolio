import React from 'react'
import { motion } from "framer-motion";
import { useRef } from "react";
import landing from '../assets/landing.png'
import spring from '../assets/spring.jpeg'
import vidtube from '../assets/vidtube.png'
import java from '../assets/java.png'
const cards = [
    {
      id: 1,
      title: "Saas Landing  Page",
      image: landing,
      description: 'Developed a landing page for a SaaS product using Taiwlind CSS, typescript, Next.js and Framer motion.',
      link:"https://landing-page-sigma-seven-91.vercel.app/",
    },
    {
      id: 2,
      title: "Smart contact management",
      image: spring,
      description: " Efficient Contact Management: Developed a contact management application with a secure and smart way of storing and managing contacts.uthentication & Authorization: Implemented Spring Security for secure user authentication and authorization using JWT tokens.",
      link:"https://github.com/sengarsumit/scm",
    },
    {
      id: 3,
      title: "Vidtube",
      image: vidtube,
      description: " Tech Stack: Node.js, Express.js, MongoDB, JWT, bcrypt (Backend for VidTube, similar to YouTube) Features: CRUD operations, user authentication, JWT security, bcrypt hashing, MongoDB integration, error handling & validation.",
      link:"https://github.com/sengarsumit/vidtube"
    },
    {
      id: 4,
      title: "Coming soon",
      image: java,
      description: "Java.",
    },
  ];
  
function Projects() {
    const containerRef = useRef(null);

  return (
   <>
   <div className="relative min-h-screen flex flex-col   items-center bg-black text-white">
       
        <div className="absolute top-20 left-200 flex items-center justify-center hidden sm:flex">
             <div className="absolute w-30 h-30 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-25 h-25 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-20 h-20 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-15 h-15 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-10 h-10 rounded-full border border-[#2A6F4A] "></div>
        </div>
       <div className='absolute text-4xl top-15 text-centre'>
       <h1>Dive into my work </h1>
       </div>
       <div className="absolute top-1/3 right-50 flex items-center justify-center gap-3">
                <div className="absolute w-100 h-100 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-90 h-90 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-80 h-80 rounded-full border border-[#2A6F4A]"></div>
             <div className="absolute w-70 h-70 rounded-full border border-[#2A6F4A]"></div>
             <div className="absolute w-60 h-60 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-50 h-50 rounded-full border border-[#2A6F4A]"></div>
             <div className="absolute w-40 h-40 rounded-full border border-[#2A6F4A]"></div>
             <div className="absolute w-30 h-30 rounded-full border border-[#2A6F4A]"></div>
        </div>
       <div className=" absolute top-1/3 overflow-hidden w-full flex items-center px-4">
      <motion.div
        ref={containerRef}
        className="flex gap-6 md:gap-10 flex-nowrap"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <motion.div
            key={index}
            className="w-64 md:w-72 lg:w-80 bg-gradient-to-b from-black via-black to-gray-900 border border-[#abbbb2] rounded-xl shadow-lg flex flex-col items-center text-white p-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Image */}
            <img src={card.image} alt={card.title} className=" border border-[#abbbb2] w-full h-32 md:h-40 lg:h-48 object-cover rounded-t-lg" />

            {/* Text */}
            <h3 className="text-sm md:text-lg font-serif mt-3">{card.title}</h3>
            <p className="text-xs md:text-sm mt-2 text-white text-center">{card.description}</p>

            {/* Buttons */}
            <div className="flex mt-4">
            <a href={card.link} target="_blank"><button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg border border-gray-700 shadow-md hover:shadow-lg transition-all hover:bg-gray-900">Checkout
            </button></a>
              
            
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>




       </div>
   </>
  )
}

export default Projects