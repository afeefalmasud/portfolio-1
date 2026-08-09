'use client';

import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectsSection() {
  const projects = [
    {
      id: '01',
      title: 'NexFit',
      subtitle: 'Gym Management Platform',
      description:
        'A modern gym management platform designed to help gyms manage members, trainers, memberships, schedules, and day-to-day operations through a centralized dashboard.',
      tags: ['Next.js', 'Express.js', 'MongoDB', 'BetterAuth', 'Tailwind CSS'],
      image: '/assets/1.png', // Replace with your image path
    },
    {
      id: '02',
      title: 'SportNest',
      subtitle: 'Sports Facility Booking Management System',
      description:
        'A full-stack platform for discovering, booking, and managing sports facilities with role-based features and authentication.',
      tags: ['Next.js', 'Express.js', 'MongoDB', 'BetterAuth', 'Tailwind CSS'],
      image: '/assets/2.png', // Replace with your image path
    },
    {
      id: '03',
      title: 'Readify',
      subtitle: 'Online Book Borrowing Platform',
      description:
        'A modern platform for browsing and borrowing books with user authentication and a clean, responsive interface.',
      tags: ['Next.js', 'MongoDB', 'BetterAuth', 'Tailwind CSS'],
      image: '/assets/3.png', // Replace with your image path
    },
    {
      id: '04',
      title: 'Job Application Tracker',
      subtitle: 'Job Search Management Platform',
      description:
        'A simple application for organizing job applications, tracking their progress, and managing application details in one place.',
      tags: ['JavaScript', 'Tailwind CSS', 'API'],
      image: '/assets/4.png', // Replace with your image path
    },
    
  ];

  return (
    <section id="projects" className="bg-[#0b0a0a] py-24 text-white font-sans">
      <div className="container mx-auto px-6 md:px-12 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#ff6b2b] uppercase block">
            PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white">
            Work I'd happily walk you through line by line
          </h2>
          <p className="text-sm sm:text-base text-[#8c8a87] font-normal pt-1">
            Each case study covers the stack, the parts that fought back, and what I'd build next.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#181615] border-2 border-white/5 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff6b2b]/60 hover:shadow-[0_0_30px_rgba(255,107,43,0.15)]"
            >
              <div>
                {/* Project Image Box */}
                <div className="relative w-full h-[220px] bg-[#121010] overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#ff6b2b] font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#8c8a87] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-medium text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View details Button */}
              <div className="p-6 pt-0">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-gray-200 border border-white/10 transition-all duration-300 group-hover:bg-[#ff6b2b] group-hover:text-black group-hover:border-[#ff6b2b] group-hover:shadow-md">
                  View details
                  <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}