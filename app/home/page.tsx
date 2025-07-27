"use client";

import { motion } from "framer-motion";
import TrueFocus from "../components/TrueFocus/TrueFocus";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function HomePage() {
  return (
    <div id="home" className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      <BackgroundBeams />

      <motion.div className="relative z-10 text-center px-6" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        {/* Name and Role */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Muhammad Habi</span>
        </h1>

        <div className="mb-8">
          <TrueFocus sentence="Fullstack Developer" manualMode={true} blurAmount={2} borderColor="cyan" animationDuration={0.7} pauseBetweenAnimations={1} />
        </div>
      </motion.div>
    </div>
  );
}
