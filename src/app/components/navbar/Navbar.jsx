"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative z-50 flex items-center justify-between py-8">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-xl bg-[#ff6b2b] text-black font-extrabold flex items-center justify-center text-sm shadow-lg shadow-[#ff6b2b]/20">
          AM
        </span>
        <span className="text-xl font-bold tracking-tight text-white">
          Afeef <span className="text-[#ff6b2b]">.</span>
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 relative">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onMouseEnter={() => setHoveredNav(item.name)}
            onMouseLeave={() => setHoveredNav(null)}
            className="relative py-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            {item.name}
            {hoveredNav === item.name && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff6b2b] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Action CTA & Mobile Hamburger Toggle */}
      <div className="flex items-center gap-4">
        <Button
          as="a"
          href="#resume"
          className="bg-[#ff6b2b] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#e0591f] hover:scale-105 transition-all shadow-md shadow-[#ff6b2b]/20"
        >
          Resume
        </Button>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-gray-300 hover:text-white focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-[#141211]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-2 md:hidden shadow-2xl overflow-hidden z-50"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-[#ff6b2b] font-medium transition-colors py-2 border-b border-white/5 last:border-none"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
