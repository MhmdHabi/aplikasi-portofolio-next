"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { useCallback } from "react";

export default function Footer() {
  const scrollToWithDuration = useCallback((targetId: string, duration = 500) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const startY = window.scrollY;
    const targetY = element.getBoundingClientRect().top + startY;
    const diff = targetY - startY;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startY + diff * ease);
      if (elapsed < duration) requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  const handleScroll = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    scrollToWithDuration(section.toLowerCase(), 500);
  };

  return (
    <footer className="bg-cyan-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 text-sm">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">MyPortfolio</h2>
            <p className="text-white/90">Membangun solusi digital modern dengan semangat dan kreativitas.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://instagram.com" target="_blank" className="text-white hover:text-cyan-400 transition duration-300">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-cyan-400 transition duration-300">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://github.com" target="_blank" className="text-white hover:text-cyan-400 transition duration-300">
                <FaGithub size={20} />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="text-white hover:text-cyan-400 transition duration-300">
                <FaFacebook size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <button onClick={(e) => handleScroll(e, item)} className="text-white/90 hover:text-cyan-400 transition duration-300">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Kontak</h3>
            <p className="text-white">
              Email:{" "}
              <Link href="mailto:youremail@example.com" className="text-white/90 hover:text-cyan-400 transition duration-300">
                youremail@example.com
              </Link>
            </p>
            <p className="mt-2 text-white">
              Telepon:{" "}
              <Link href="tel:+628123456789" className="text-white/90 hover:text-cyan-400 transition duration-300">
                +62 812-3456-789
              </Link>
            </p>
            <p className="mt-2 text-white/90">Alamat: Jakarta, Indonesia</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-white/60 border-t border-white/10 pt-6">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">MyPortfolio</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
