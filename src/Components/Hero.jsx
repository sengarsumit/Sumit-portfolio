import { useState,useEffect } from 'react'
import "@fontsource/figtree";
import { motion, AnimatePresence } from "framer-motion";
import '../App.css';

function Hero() {

  const roles = [" Full Stack Developer", " Software Engineer", " Backend Engineer"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
       <div className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="relative text-center">
      <div className="absolute top-0 left-0 w-1/5 h-1/2 bg-[#2A6F4A]  blur-3xl rounded-full transform -translate-x-1/3 -translate-y-1/5"></div>
        <p className="text-xl mb-4 font-bold w-1/2 transform -translate-x-1/3 text-gray-300">Hi! That’s Me,</p>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-green-500 opacity-20 blur-3xl rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
        <h1 className="text-9xl font-bold bg-gradient-to-r from-gray-50  to-[#50D58E] bg-clip-text text-transparent">
          SUMIT SENGAR
        </h1>
        <div className="absolute bottom-25 right-25 flex items-center justify-center">
          <div className="absolute w-40 h-40 rounded-full border border-white opacity-40"></div>
          <div className="absolute w-30 h-30 rounded-full border border-white opacity-30"></div>
          <div className="absolute w-20 h-20 rounded-full border border-white opacity-20"></div>
          <div className="absolute w-10 h-10 rounded-full border border-white opacity-10"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-[#140CBA]  blur-3xl rounded-full transform translate-x-1/3 translate-y-1"></div>
      </div>
      <div className="text-3xl font-bold flex items-center gap-2 m-5">
      <span className="text-white">I am a</span>
      <div className="relative w-80 h-8">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y:-20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute text-green-400"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
      <div className="absolute bottom-1/4 text-xl left-50 mt-6 flex flex-col sm:flex-row text-gray-400 text-sm gap-10">
        <p>I think deep<br></br>
        critique smart,and solve<br></br>
        better.</p>
      </div>
      <div className="absolute bottom-1/4 text-xl right-50 mt-6 flex flex-col sm:flex-row text-gray-400 text-sm gap-10">
      <p>When idle:<br></br>
      Cricket, current affairs, and<br></br>
      and good debates.</p>
      </div>

      <div className="absolute bottom-0 m-8 left-50 flex gap-25 text-xl">
        <a href="https://www.linkedin.com/in/-sumit-sengar/" target="_blank" className="text-gray-300 hover:text-white transition">LINKEDIN ↗</a>
        <a href="https://github.com/sengarsumit/" target="_blank" className="text-gray-300 hover:text-white transition">GITHUB ↗</a>
        <a href="mailto:sengarsumit45@gmail.com" className="text-gray-300 hover:text-white transition">GMAIL ↗</a>
      </div>

      <a href='https://drive.google.com/file/d/12nHvi75HU0Tus9rp9HnK_Cew53qkqybf/view?usp=sharing' target="_blank">
      <button className="absolute top-8 right-8 px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-700 transition">
        Get Resume
      </button>
      </a>
      <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-[#2A6F4A]  blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1"></div>
    </div>
    </>
  )
}

export default Hero
