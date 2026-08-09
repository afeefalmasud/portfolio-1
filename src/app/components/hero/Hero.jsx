"use client";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaDownload,
  FaEye,
} from "react-icons/fa";

import Typewriter from "./Typewriter";
import Navbar from "../navbar/Navbar";
import { FiDownload, FiEye } from "react-icons/fi";

export default function HeroSection() {
  const titles = [
    "Full Stack Developer",
    "Frontend Developer",
    "ML Enthusiast",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen  bg-[#0d0b0a] text-white overflow-hidden font-sans">
      {/* Background Dot Pattern (Less visible) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Orange Radial Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff6b2b]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ff6b2b]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* NAVBAR COMPONENT */}
        <Navbar />

        {/* HERO SECTION CONTENT */}
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-120px)] py-12"
        >
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium tracking-wide text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                AVAILABLE FOR WORK • CHITTAGONG, BANGLADESH
              </div>
            </motion.div>

            {/* Headline with Typewriter */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
                Hi, I'm Afeef
              </h1>

              <div className="min-h-[80px] sm:min-h-[100px] flex items-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#ff6b2b] tracking-tight leading-tight">
                  <Typewriter
                    words={titles}
                    typingSpeed={80}
                    backspaceSpeed={40}
                    delay={2000}
                  />
                </h2>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              I build modern, responsive web experiences with a strong focus on clean UI and practical functionality. Working with React, Next.js, Tailwind CSS, Node.js, and MongoDB, I turn ideas into polished projects — from thoughtful interfaces to fully deployed applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                size="lg"
                className="bg-[#ff6b2b] text-black font-medium rounded-xl px-6 py-3 flex items-center gap-2 hover:bg-[#e0591f] hover:scale-105 transition-all shadow-lg shadow-[#ff6b2b]/20"
                startContent={<FaDownload className="text-sm" />}
              >
                <FiDownload />
                Download Resume
              </Button>

              {/* View Resume Button with Orange Border Hover (Text stays white) */}
              <Button
                size="lg"
                variant="bordered"
                className="border-white/15 border-2 text-white font-medium rounded-xl px-6 py-3 flex items-center gap-2 border hover:!border-[#ff6b2b] hover:scale-105 transition-all"
                startContent={<FaEye className="text-sm" />}
              >
                <FiEye />
                View Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-4"
            >
              {[
                { icon: <FaGithub />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#ff6b2b] hover:border-[#ff6b2b] hover:scale-110 hover:bg-[#ff6b2b]/10 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column Image Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pr-4 sm:pr-6">
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[400px]"
            >
              <div className="relative rounded-3xl bg-[#141211] border border-white/10 overflow-hidden shadow-2xl group">
                <div className="w-full h-100 md:h-120 bg-linear-to-b from-transparent to-black/60 relative flex items-center justify-center">
                  <img
                    src="/assets/me.jpg" // Place your photo URL here
                    alt="Afeef Al Masud"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badge hanging outside frame */}
              <div className="absolute -bottom-4 -left-4 md:-left-6 px-6 py-4 rounded-2xl bg-[#1d1917]/90 backdrop-blur-md border border-white/10 shadow-2xl min-w-[180px] z-20">
                <p className="text-3xl font-extrabold text-[#ff6b2b]">1+</p>
                <p className="text-xs text-gray-400 font-medium leading-tight mt-1">
                  years building for the web
                </p>
              </div>

              <div className="absolute -inset-1 bg-[#ff6b2b]/10 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
