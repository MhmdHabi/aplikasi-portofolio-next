"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaLaravel, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiTypescript, SiExpress } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Link from "next/link";
import projects from "./ProjectData";
import { Project } from "./ProjectTypes";

const getTechIcon = (tag: string) => {
  const icons: Record<string, JSX.Element> = {
    React: <FaReact className="text-cyan-400" />,
    Laravel: <FaLaravel className="text-red-600" />,
    Tailwind: <SiTailwindcss className="text-sky-400" />,
    MySQL: <SiMysql className="text-blue-600" />,
    PostgreSQL: <SiPostgresql className="text-blue-400" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    ExpressJs: <SiExpress className="text-gray-200" />,
    Frammer: <TbBrandFramerMotion className="text-yellow-200" />,
  };
  return icons[tag] || <span className="text-white text-sm">{tag}</span>;
};

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  return (
    <div id="projects" className="min-h-screen bg-black text-white px-5 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      <div className="flex justify-center mb-8 flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${selectedCategory === cat ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-blue-500 hover:shadow-[0_0_10px_#3b82f6]"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const isExpanded = expandedProjectId === project.id;

          return (
            <motion.div
              key={project.id}
              className="bg-black group relative rounded-md overflow-hidden transition-all duration-300 border border-gray-800 shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500 backdrop-blur-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Gambar dan Hover */}
              <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full" />
                {project.featured && <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded-full z-30 shadow">★ Featured</div>}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500 z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
                    <FaGithub />
                  </Link>
                </div>
              </div>

              {/* Konten */}
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-blue-700/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">{project.category}</span>
                </div>

                <div className="flex items-center justify-between flex-wrap">
                  <div className="flex flex-wrap gap-3 text-2xl">
                    {project.tags.map((tag) => (
                      <div key={tag} className="hover:scale-110 transition-transform">
                        {getTechIcon(tag)}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 mt-2 sm:mt-0">
                    {new Date(project.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div>
                  <AnimatePresence mode="wait">
                    {!isExpanded ? (
                      <motion.p
                        key="collapsed"
                        className="text-gray-300 text-sm line-clamp-3 text-justify"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                    ) : (
                      <motion.p key="expanded" className="text-gray-300 text-sm text-justify" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                        {project.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <button onClick={() => setExpandedProjectId(isExpanded ? null : project.id)} className="text-blue-400 text-xs hover:underline mt-2 inline-block">
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectShowcase;
