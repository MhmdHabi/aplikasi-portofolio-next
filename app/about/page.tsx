"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Lanyard from "../components/Lanyard/Lanyard";

const paragraph =
  "🎓 I am a graduate with a Bachelor's degree (S1) in Informatics Engineering from Universitas Dinamika Bangsa Jambi.I have a strong passion for 💻 web development, particularly Fullstack Developer. I am skilled in programming languages such as 🐘 PHP and ⚡ JavaScript, and proficient in using frameworks like 🛠️ Laravel for backend and ⚛️ React JS for frontend development. Beyond technical expertise, I am also experienced in working in teams 🤝 and highly value collaboration to achieve shared goals.";

const AboutPage = () => {
  return (
    <div id="about" className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-7 max-w-6xl w-full">
        {/* Lanyard Animation */}
        <div className="w-full md:w-1/2 flex justify-center items-center hidden md:block">
          <div className="w-full max-h-[300px] md:max-h-[400px] aspect-square flex items-center justify-center">
            <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
          </div>
        </div>

        {/* Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 flex items-center space-x-2">About Me</h2>

          <p className="text-lg leading-relaxed text-justify break-words overflow-hidden mb-6">
            {paragraph.split(" ").map((word, index) => (
              <motion.span key={index} initial={{ color: "#6B7280" }} whileInView={{ color: "#ffffff" }} transition={{ duration: 0.3, delay: index * 0.02 }} viewport={{ once: false, amount: 0.5 }} className="inline">
                {word + " "}
              </motion.span>
            ))}
          </p>

          {/* Download CV Button */}
          <Link
            href="/cv.pdf"
            download
            className="inline-block text-md font-medium text-white rounded-xl bg-zinc-900/60 border border-white hover:border-cyan-400 hover:text-cyan-300 backdrop-blur-md px-5 py-2 transition-all duration-300 shadow-md hover:shadow-cyan-400/20"
          >
            📄 Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
