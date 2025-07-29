"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const scrollToWithDuration = (targetY: number, duration = 500) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 80;
      scrollToWithDuration(offsetTop, 500);
    }

    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed left-0 px-4 bg-white/0 backdrop-blur-sm right-0 z-50 mt-4 transition-[top] duration-500 flex justify-center pointer-events-none will-change-transform`}
    >
      <div className={`w-full max-w-5xl mx-auto px-4 lg:px-6 rounded-2xl pointer-events-auto bg-white/20 backdrop-blur-sm`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection("#home")} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-300 transition-all duration-300">
              <img src="/assets/logo.png" alt="Logo" width={40} height={40} className="hover:opacity-80 transition-all duration-300" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer text-white hover:text-cyan-400 hover:underline hover:decoration-cyan-400 hover:decoration-2 hover:underline-offset-8 ${
                      isActive ? "text-cyan-400 underline decoration-cyan-400 decoration-2 underline-offset-8 font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Download CV */}
          <div className="hidden md:flex items-center">
            <a
              href="https://drive.google.com/file/d/14939OlW5rUi3_F93pAyI0rv8OMRGg0WC/view?usp=drive_link"
              target="_blank"
              className="relative px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:200%_100%] bg-left hover:bg-right rounded-lg transition-all duration-500"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-300">
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 rounded-b-2xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left py-3 rounded-lg text-base font-medium transition-all duration-300 text-white hover:text-cyan-400 hover:bg-white/10 ${
                    isActive ? "text-cyan-400 underline decoration-cyan-400 decoration-2 underline-offset-8 font-bold" : ""
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
