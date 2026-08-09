'use client';

import React from 'react';
import { IoSchoolOutline } from 'react-icons/io5';

export default function EducationSection() {
  const educationList = [
    {
      period: '2020 — 2022',
      degree: 'Secondary School Certificate',
      institution: 'Chattogram Collegiate School',
      details: 'GPA 5.00/5.00 • Science',
    },
    {
      period: '2022 — 2024',
      degree: 'Higher Secondary Certificate',
      institution: 'Govt. Haji Mohammad Mohsin College',
      details: 'GPA 5.00/5.00 • Science',
    },
    {
      period: '2024 — PRESENT',
      degree: 'B.Sc. in Mechatronics & Industrial Engineering',
      institution: 'Chittagong University of Engineering & Technology (CUET)',
      details: 'Currently studying',
    },
  ];

  return (
    <section id="education" className="bg-[#0b0a0a] py-24 text-white font-sans">
      <div className="container mx-auto px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#ff6b2b] uppercase block">
            JOURNEY
          </span>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white">
              Where I studied
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff6b2b]">
              <IoSchoolOutline className="text-lg" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide">
              Education
            </h3>
          </div>

        {/* Horizontal Timeline */}
        <div className="relative pt-6">
          {/* Horizontal Line across all columns */}
          <div className="hidden md:block absolute top-[31px] left-0 w-full h-[1px] bg-white/10 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {educationList.map((item, index) => (
              <div key={index} className="relative group pt-6 md:pt-8">
                {/* Horizontal Bullet Dot */}
                <span className="absolute left-0 md:left-0 -top-1.5 md:top-[1.5px] w-3 h-3 rounded-full bg-[#ff6b2b] ring-4 ring-[#0b0a0a] group-hover:scale-125 transition-transform" />

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-wider text-[#ff6b2b] uppercase font-semibold block">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-gray-300">
                    {item.institution}
                  </p>
                  <p className="text-xs text-[#8c8a87] leading-relaxed pt-1">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}