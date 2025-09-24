import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    id: 1,
    date: "Feb 2025 - July 2025",
    role: "Technical Support Engineer",
    company: "Learnyst",
    type: "Full Time",
    description:
      "Delivered end-to-end technical support for a SaaS platform, handling APIs, integrations, and client configurations to ensure seamless user experience and SLA compliance.",
  },
  {
    id: 2,
    date: "May 2024 - Sept 2024",
    role: "Packaging App Development Associate",
    company: "Accenture India",
    type: "Full Time",
    description:
      "In-depth training in JAVA Full Stack Development, mastering both front-end and back-end technologies.",
  },
  {
    id: 3,
    date: "Feb 2023 - May 2023",
    role: "Software Engineer Trainee",
    company: "TO THE NEW India",
    type: "Apprenticeship",
    description:
      "Developed applications using Java Spring Framework, implemented RESTful APIs using Spring Boot, and used Hibernate ORM.",
  },
  {
    id: 4,
    date: "Jan 2022 - Apr 2022",
    role: "Web Developer",
    company: "Basil Infotech Limited",
    type: "Internship",
    description:
      "Designed and developed user-friendly web pages for a payment gateway website.",
  },
];

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative h-screen flex flex-col items-center bg-black text-white">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-1/6 h-1/6 bg-[#140CBA] blur-3xl rounded-full transform translate-x-1/3 translate-y-1/2"></div>
      <div className="absolute top-1/2 right-40 w-1/6 h-1/6 bg-[#140CBA] blur-3xl rounded-full transform translate-x-1/3 translate-y-1/2"></div>

      {/* Section title */}
      <div className="pt-10 pb-6 text-center px-4 z-10">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
          Got the opportunity to put these <br className="hidden sm:block" />
          skills to work, previously at:
        </h1>
      </div>

      {/* Scrollable container */}
      <div
        ref={ref}
        className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto no-scrollbar"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-6 py-6 sm:py-10 border-b border-gray-700 sm:border-none relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            {/* Date */}
            <div className="text-[#50D58E] text-sm sm:text-base sm:col-span-3">
              {exp.date}
            </div>

            {/* Role & Company */}
            <div className="sm:col-span-4">
              <h3 className="text-[#50D58E] text-base sm:text-xl">
                {exp.role}
              </h3>
              <p className="text-gray-400 text-xs sm:text-base">
                {exp.company} | {exp.type}
              </p>
            </div>

            {/* Description */}
            <div className="text-gray-300 text-xs sm:text-base sm:col-span-5">
              {exp.description}
            </div>

            {/* Dashed separator (mobile only, except last item) */}
            {index < experiences.length - 1 && (
              <div className="sm:hidden mt-4 border-t border-dashed border-gray-600 w-full"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
