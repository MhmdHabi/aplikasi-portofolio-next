import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaLaravel, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiJavascript, SiPostman, SiPrisma } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-400" />, color: "from-blue-500/20 to-blue-600/20" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" />, color: "from-blue-400/20 to-cyan-500/20" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />, color: "from-blue-300/20 to-blue-400/20" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, color: "from-blue-600/20 to-blue-700/20" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, color: "from-blue-400/20 to-blue-500/20" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, color: "from-blue-500/20 to-blue-600/20" },
  { name: "Express.js", icon: <SiJavascript className="text-gray-300" />, color: "from-blue-300/20 to-blue-500/20" },
  { name: "Prisma ORM", icon: <SiPrisma className="text-white" />, color: "from-blue-200/20 to-blue-400/20" },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" />, color: "from-blue-500/20 to-blue-600/20" },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" />, color: "from-blue-400/20 to-blue-600/20" },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" />, color: "from-blue-400/20 to-blue-500/20" },
  { name: "Postman", icon: <SiPostman className="text-orange-400" />, color: "from-blue-500/20 to-blue-600/20" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function SkillsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div id="skills" className="min-h-screen bg-black text-white py-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="mb-16">
          <motion.div className="inline-block mb-4" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <div className="w-20 h-20 border-2 border-blue-500/30 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">Tech Stack</span>
          </h1>

          <motion.p
            className="text-blue-200/80 mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Crafting digital experiences with cutting-edge technologies and modern development practices
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="group perspective-1000"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.2}s` }}
                className="relative rounded-2xl bg-black border border-gray-800 hover:border-blue-400 p-6 md:p-8 flex flex-col items-center justify-center transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 transform-gpu group-hover:bg-gradient-to-br group-hover:from-blue-950/20 group-hover:to-blue-900/10"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-800 ease-out"></div>
                </div>

                {/* Icon */}
                <motion.div
                  className="text-4xl md:text-5xl mb-4 relative z-10"
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill name */}
                <h3 className="text-sm md:text-base font-bold text-white/90 tracking-wide text-center relative z-10 group-hover:text-blue-200 transition-colors duration-300">{skill.name}</h3>

                {/* Simple hover border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/60 transition-all duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
