'use client';

import React from 'react';

export default function SkillsSection() {
  const skillGroups = [
    {
      category: 'Frontend',
      id: '01',
      skills: [
        { name: 'React', percentage: 92 },
        { name: 'Next.js', percentage: 88 },
        { name: 'Tailwind CSS', percentage: 90 },
        { name: 'Hero UI', percentage: 85 },
      ],
    },
    {
      category: 'Backend',
      id: '02',
      skills: [
        { name: 'Node.js & Express', percentage: 86 },
        { name: 'MongoDB', percentage: 82 },
        { name: 'REST API', percentage: 85 },
        { name: 'Better Auth', percentage: 80 },
      ],
    },
    {
      category: 'Tools',
      id: '03',
      skills: [
        { name: 'Git & GitHub', percentage: 90 },
        { name: 'Vite', percentage: 84 },
        { name: 'Figma', percentage: 78 },
        { name: 'VS Code', percentage: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#0b0a0a] py-24 text-white font-sans">
      <div className="container mx-auto px-6 md:px-12 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#ff6b2b] uppercase block">
            SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white">
            The toolkit, grouped by where it lives
          </h2>
          <p className="text-sm sm:text-base text-[#8c8a87] font-normal pt-1">
            Percentages are how confident I am shipping production work with each, not a scoreboard.
          </p>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="bg-[#181615] border-2 border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b2b]/40 hover:shadow-xl hover:shadow-[#ff6b2b]/5"
            >
              <div>
                {/* Card Title & Number */}
                <div className="flex items-center justify-between pb-6 mb-2">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-[#8c8a87]">
                    {group.id}
                  </span>
                </div>

                {/* Skill Items */}
                <div className="space-y-6">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                        <span className="text-gray-200">{skill.name}</span>
                        <span className="text-[#8c8a87] font-mono text-xs">{skill.percentage}%</span>
                      </div>
                      
                      {/* Custom Progress Bar */}
                      <div className="w-full bg-[#262422] h-[3px] rounded-full overflow-hidden">
                        <div
                          className="bg-[#ff6b2b] h-full rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}