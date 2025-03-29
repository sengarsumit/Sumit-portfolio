import React,{useRef} from 'react'
import { motion,useInView } from "framer-motion";
const experiences = [
    {
      id: 1,
      date: "May 2024 - Sept 2024",
      role: "Packaging App Development Associate",
      company: "Accenture India",
      type: "Full Time",
      description: "In-depth training in JAVA Full Stack Development, mastering both front-end and back-end technologies."
    },
    {
      id: 2,
      date: "Feb 2023 - May 2023",
      role: "Software Engineer Trainee",
      company: "TO THE NEW India",
      type: "Apprenticeship",
      description: "Developed applications using Java Spring Framework, implemented RESTful APIs using Spring Boot, and used Hibernate ORM."
    },
    {
      id: 3,
      date: "Jan 2022 - Apr 2022",
      role: "Web Developer",
      company: "Basil Infotech Limited",
      type: "Internship",
      description: "Designed and developed user-friendly web pages for a payment gateway website."
    }
  ];
function Experience() {
   
      const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <>
   
        <div className="relative min-h-screen flex flex-col   items-center bg-black text-white">
        <div className="absolute top-0 left-0 w-1/6 h-1/6 bg-[#140CBA]  blur-3xl rounded-full transform translate-x-1/3 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-40 w-1/6 h-1/6 bg-[#140CBA]  blur-3xl rounded-full transform translate-x-1/3 translate-y-1/2"></div>
        <div className="absolute top-30 left-190 flex items-center justify-center hidden sm:flex">
             <div className="absolute w-40 h-40 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-35 h-35 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-30 h-30 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-25 h-25 rounded-full border border-[#2A6F4A] "></div>
             <div className="absolute w-20 h-20 rounded-full border border-[#2A6F4A] "></div>
        </div>
        <div className="absolute top-20   text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
        Got the opportunity to put these <br className="hidden sm:block" />
      skills to work, previously at:
      </h1>
      </div>

     
      
    <div ref={ref} className="absolute top-1/3 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  {experiences.map((exp, index) => (
    <motion.div
      key={exp.id}
      className="grid grid-cols-1 sm:grid-cols-12 p-6 sm:p-10 gap-4 sm:gap-10 border-b border-gray-700 sm:border-none relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.3 }}
    >
      {/* Date (Full width on mobile, 3 columns on larger screens) */}
      <div className="sm:col-span-3 text-[#50D58E] text-sm sm:text-base">{exp.date}</div>

      {/* Role & Company (Full width on mobile, 4 columns on larger screens) */}
      <div className="sm:col-span-4">
        <h3 className="text-[#50D58E] text-lg sm:text-xl">{exp.role}</h3>
        <p className="text-gray-400 text-sm sm:text-base">{exp.company} | {exp.type}</p>
      </div>

      {/* Description (Full width on mobile, 5 columns on larger screens) */}
      <div className="sm:col-span-5 text-gray-300 text-sm sm:text-base">{exp.description}</div>

      {/* Dashed separator (Only for non-last elements) */}
      {index < experiences.length - 1 && (
        <div className="absolute bottom-0 left-4 w-[90%] sm:w-[80%] border-t border-dashed border-gray-600"></div>
      )}
    </motion.div>
  ))}
</div>

       </div>
    </>
  )
}

export default Experience