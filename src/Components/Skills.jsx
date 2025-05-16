import React from 'react'
import java from '../assets/java.png'
import git from '../assets/git.png'
import linux from '../assets/linux.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import jpa from '../assets/jpa.png'
import springboot from '../assets/springboot.png'
import Rocket from '../assets/Rocket.png'
import Reactlogo from '../assets/Reactlogo.png'
import Javalogo from '../assets/Javalogo.png'
import Linuxlogo from '../assets/Linuxlogo.png'

import Nodejslogo from '../assets/Nodejslogo.png'
import Tailwindlogo from '../assets/Tailwindlogo.png'
import  Springlogo from '../assets/Springlogo.png'
import Postmanlogo from '../assets/Postmanlogo.png'
import JavaScriptlogo from '../assets/JavaScriptlogo.png'
import Gitlogo from '../assets/Gitlogo.png'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

function Skills() {
  const [rotation, setRotation] = useState(0);
  const [orbits, setOrbits] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 20);
    
    return () => clearInterval(interval);
  }, []);
  const [iconSize, setIconSize] = useState(window.innerWidth < 861 ? 35 : 50);

useEffect(() => {
  const handleResize = () => {
    setIconSize(window.innerWidth < 861 ? 35 : 50);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const updateOrbits = () => {
    const screenWidth = window.innerWidth;

    let newOrbits = [
      {
        name: "one",
        distance: screenWidth <= 861 ? 60 : 100, // Adjusted for smaller screens
        color: "blue",
        technologies: [
          { name: "React", logo: Reactlogo, speed: 0.7 },
          { name: "Java", logo: Javalogo, speed: 0.8 },
          { name: "Node.js", logo: Nodejslogo, speed: 0.6 },
        ],
      },
      {
        name: "second",
        distance: screenWidth <= 861 ? 110 : 150,
        color: "green",
        technologies: [
          { name: "Linux", logo: Linuxlogo, speed: 0.5 },
          { name: "Postman", logo: Postmanlogo, speed: 0.4 },
          { name: "Tailwind", logo: Tailwindlogo, speed: 0.55 },
        ],
      },
      {
        name: "Third",
        distance: screenWidth <= 861 ? 160 : 200,
        color: "red",
        technologies: [
          { name: "Spring", logo: Springlogo, speed: 0.3 },
          { name: "JavaScript", logo: JavaScriptlogo, speed: 0.25 },
          { name: "Git", logo: Gitlogo, speed: 0.35 },
        ],
      },
    ];

    setOrbits(newOrbits);
  };

  useEffect(() => {
    updateOrbits(); // Set initial distances
    window.addEventListener("resize", updateOrbits);
    return () => window.removeEventListener("resize", updateOrbits);
  }, []);
  return (
    <>
        <div className="relative min-h-screen flex flex-col   items-center bg-black text-white px-4">
        <div className="absolute top-[15vh] left-[26vw] flex items-center justify-center hidden sm:flex">

             <div className="absolute w-40 h-40 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-35 h-35 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-30 h-30 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-25 h-25 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-20 h-20 rounded-full border border-[#2A6F4A] "></div>
        </div>
       <div className='absolute lg:text-7xl top-20 text-centre hidden sm:flex'>
       <h1>Skills and tools I master</h1>
       </div>
       <div className="text-center mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold block sm:hidden">
          Skills & Tools I Master
        </h1>
      </div>
       <div className="absolute  top-15 right-[20vw] w-1 h-29 hidden sm:flex bg-blue-500 mx-auto ">
         <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-12 border-transparent border-t-blue-500"></div>
       </div>
      <div className='absolute top-[20%] py-4 sm:py-6 md:py-8 lg:md:py-12 w-full  '>
     <div className='container mx-auto px-4 sm:px-6'>
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,,transparent)]">
      <motion.div className='flex gap-10 flex-none pr-14'
      animate={{ translateX: "-50%", }}
      transition={{ duration:20, repeat: Infinity, ease: "linear",  repeatType: "loop" }}>

        <img className='h-8 w-auto' src={java} alt='Acme logo' />
        <img className='h-8 w-auto' src={express} alt='Quantum logo' />
        <img className='h-8 w-auto' src={springboot} alt='Echo logo' />
        <img className='h-8 w-auto' src={jpa} alt='Celestial logo' />
        <img className='h-8 w-auto' src={javascript} alt='Pulse logo' />
        <img className='h-8 w-auto' src={git} alt='Apex logo' />
        <img className='h-8 w-auto' src={linux} alt='Acme logo' />
        <img className='h-8 w-auto' src={react} alt='Quantum logo' />
        <img className='h-8 w-auto' src={node} alt='Echo logo' />
        <img className='h-8 w-auto' src={nextjs} alt='Celestial logo' />
        <img className='h-8 w-auto' src={tailwind} alt='Pulse logo' />
        <img className='h-8 w-auto' src={java} alt='Acme logo' />
        <img className='h-8 w-auto' src={express} alt='Quantum logo' />
        <img className='h-8 w-auto' src={springboot} alt='Echo logo' />
        <img className='h-8 w-auto' src={jpa} alt='Celestial logo' />
        <img className='h-8 w-auto' src={javascript} alt='Pulse logo' />
        <img className='h-8 w-auto' src={git} alt='Apex logo' />
        <img className='h-8 w-auto' src={linux} alt='Acme logo' />
        <img className='h-8 w-auto' src={react} alt='Quantum logo' />
        <img className='h-8 w-auto' src={node} alt='Echo logo' />
        <img className='h-8 w-auto' src={nextjs} alt='Celestial logo' />
        <img className='h-8 w-auto' src={tailwind} alt='Pulse logo' />
      </motion.div>
      </div>
    </div>
   </div>
   
   <div className="bottom-1/3 absolute bg-black  ">
      <div className="relative w-full max-w-4xl aspect-square">
        {orbits.map((orbit, index) => (
          <div 
            key={`orbit-${index}`}
            className="absolute rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: orbit.distance * 2,
              height: orbit.distance * 2,
              borderColor: orbit.color,
              opacity: 0.6
            }}
          />
        ))}

        
        <img src={Rocket} alt="Rocket" className="h-20 " />
        
        {orbits.map((orbit, orbitIndex) => (
          orbit.technologies.map((tech, techIndex) => {
            const spacing = 360 / orbit.technologies.length;
            const angle = (rotation * tech.speed) + (techIndex * spacing);
            const radians = angle * Math.PI / 180;
            const x = Math.cos(radians) * orbit.distance;
            const y = Math.sin(radians) * orbit.distance;
            
            return (
              <div
  key={`tech-${orbitIndex}-${techIndex}`}
  className="absolute flex items-center justify-center z-20 rounded-full shadow-lg overflow-hidden"
  style={{
    width: `${iconSize}px`,
    height: `${iconSize}px`,
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    top: "50%",
    left: "50%",
    transition: "transform 0.1s linear",
  }}
>
  <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
</div>

            );
          })
        ))}
      </div>
    </div>
        </div>
        
        
    </>
  )
}

export default Skills