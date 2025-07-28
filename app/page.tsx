"use client";

import { useState } from "react";
import AboutPage from "./about/page";
import HomePage from "./home/page";
import { FaComments } from "react-icons/fa";
import SkillsPage from "./skills/page";
import ChatModal from "./chat/ChatModal";
import Footer from "./components/Footer";
import EducationExperience from "./education/page";
import ProjectShowcase from "./project/page";
import Navbar from "./components/Navbar";
import ScrollPage from "./scroll-velocity/Scroll-Velocity";
import ContactPage from "./contact/page";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Navbar />
      <HomePage />
      <ScrollPage />
      <AboutPage />
      <SkillsPage />
      <ProjectShowcase />
      <EducationExperience />
      <ContactPage />
      <Footer />

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setIsChatOpen(true)} className="bg-black border cursor-pointer border-white text-white p-3 rounded-full shadow-lg transition duration-300 hover:scale-105 hover:animate-[wiggle_0.3s_ease-in-out]">
          <FaComments className="text-2xl" />
        </button>
      </div>

      {/* Chat Modal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
