"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaLaravel, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiJavascript, SiPostman, SiPrisma } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiJavascript className="text-gray-300" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-white" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

// Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function SkillsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="skills" className="min-h-screen bg-black text-white py-5 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
          My Tech Stack
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-14 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          These are the technologies I frequently use to build fast, scalable, and modern web applications.
        </motion.p>

        <motion.div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" animate={isInView ? "show" : "hidden"}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-cyan-500 backdrop-blur-md p-6 flex flex-col items-center justify-center transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
              <h3 className="text-base font-semibold text-white tracking-wide">{skill.name}</h3>
              <span className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400 group-hover:animate-pulse pointer-events-none"></span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
