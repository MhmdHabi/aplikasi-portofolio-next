"use client";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "SMA Negeri 2 Sarolangun",
    jurusan: "Ilmu Pengetahuan Alam",
    tahun: "2018 - 2021",
    description: "Complete general education with a focus on scientific material.",
  },
  {
    title: "Universitas Indonesia",
    jurusan: "Teknik Informatika",
    tahun: "2021 - 2025",
    description: "Study various aspects of computer science, including algorithms, data structures, software engineering, web programming and computer networks.",
    gpa: "3.95 / 4.00",
  },
];

const experienceData = [
  {
    title: "Study of Independent Web Developer",
    pt: "PT Amanah Karya Indonesia",
    pekerjaan: "WFH",
    tahun: "February - June 2024",
    description: "During this program, I learned the latest technologies and tools in web development, including HTML, CSS, JavaScript, and frameworks like Laravel.",
  },
  {
    title: "Study of Independent Frontend and Backend Bevelopment ",
    pt: "Dicoding Indonesia",
    pekerjaan: "WFH",
    tahun: "September - December 2024",
    description:
      "Participant of the Independent Study Program at Dicoding Indonesia - Frontend & Backend Development. Learned JavaScript ES6, React JS, Express JS, and the Frontend Web Expert module. This program strengthened my skills in building modern web applications from both the frontend and backend sides.",
  },
];

export default function EducationExperience() {
  return (
    <div id="education" className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <h2 className="text-3xl font-bold text-center mb-4 text-cyan-400">
            <span className="flex items-center justify-center gap-2">
              <FaGraduationCap /> Education & Experience Timeline
            </span>
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">This page showcases my educational background and professional experience, highlighting the milestones and growth throughout my journey.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center gap-2">
              <FaGraduationCap /> Education
            </h3>
            <div className="relative">
              <div className="absolute left-3 top-0 w-1 h-full bg-cyan-600/30"></div>
              {educationData.map((item, index) => (
                <motion.div key={index} className="mb-10 pl-10 relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
                  <div className="absolute left-0 top-1 w-6 h-6 bg-cyan-500 rounded-full border-4 border-black shadow-cyan-400/20 shadow"></div>
                  <h4 className="text-lg font-bold text-cyan-300">{item.title}</h4>
                  <p className="text-sm italic text-gray-400">
                    {item.jurusan} • {item.tahun}
                  </p>
                  {item.gpa && <p className="text-sm text-cyan-200 mt-1">GPA: {item.gpa}</p>}
                  <p className="mt-2 text-white/90 text-justify">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400 flex items-center gap-2">
              <FaBriefcase /> Experience
            </h3>
            <div className="relative">
              <div className="absolute left-3 top-0 w-1 h-full bg-yellow-600/30"></div>
              {experienceData.map((item, index) => (
                <motion.div key={index} className="mb-10 pl-10 relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
                  <div className="absolute left-0 top-1 w-6 h-6 bg-yellow-500 rounded-full border-4 border-black shadow-yellow-400/20 shadow"></div>
                  <h4 className="text-lg font-bold text-yellow-300">{item.title}</h4>
                  <p className="text-sm  text-white">
                    {item.pt} - <span className="italic text-sm text-gray-400">{item.pekerjaan}</span>
                  </p>
                  <p className="text-sm italic text-gray-400">{item.tahun}</p>
                  <p className="mt-2 text-white/90 text-justify">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
