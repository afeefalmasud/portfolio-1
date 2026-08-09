'use client';

import React from 'react';
import { IoGameControllerOutline, IoHardwareChipOutline, IoRocketOutline, IoBulbOutline } from 'react-icons/io5';

export default function AboutSection() {
  const cards = [
    {
      icon: <IoGameControllerOutline className="text-[#ff6b2b] text-xl" />,
      title: 'Gaming',
      description: 'Competitive gaming, especially Valorant. A good way to reset after long coding sessions.',
    },
    {
      icon: <IoHardwareChipOutline className="text-[#ff6b2b] text-xl" />,
      title: 'Machine Learning',
      description: 'Exploring machine learning and AI, learning how intelligent systems work and experimenting with new ideas.',
    },
    {
      icon: <IoRocketOutline className="text-[#ff6b2b] text-xl" />,
      title: 'Building',
      description: 'Turning ideas into real projects, breaking things along the way, and learning by building.',
    },
    {
      icon: <IoBulbOutline className="text-[#ff6b2b] text-xl" />,
      title: 'Curiosity',
      description: 'Always wondering how things work and constantly exploring something new.',
    },
  ];

  return (
    <section id="about" className="bg-[#0b0a0a] min-h-screen py-24 text-white font-sans flex items-center">
      <div className="px-6 md:px-12 container mx-auto">
        
        {/* Left Column */}
        <div className="my-4 max-w-180">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#ff6b2b] uppercase block mb-4">
              ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-white">
              A developer who enjoys turning ideas into real products
            </h2>
          </div>
        </div>
        <div className='mt-15 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-15'>
            <div className="space-y-6 text-[#9e9d9a] text-sm sm:text-base leading-relaxed font-normal max-w-180">
            <p>
              I'm a web developer passionate about building modern, responsive, and user-friendly applications. I started with an interest in how websites work and gradually turned that curiosity into a journey through frontend development, backend systems, and UI/UX.
            </p>
            <p>
              I work mainly with React, Next.js, Tailwind CSS, Node.js, Express, and MongoDB, while continuously exploring new technologies and improving my full-stack development skills.
            </p>
            <p>
              What I enjoy most is bringing design and functionality together — creating interfaces that look clean, feel intuitive, and actually work. I'm also exploring machine learning and expanding my knowledge beyond web development.
            </p>
            <p>
              When I'm away from coding, you'll probably find me gaming, exploring new ideas, or working on something just because I want to see if I can build it.
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card, index) => (
                <div
                key={index}
                className="bg-[#181615] border border-white/5 rounded-2xl p-6 min-h-47.5 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#ff6b2b]/60 hover:shadow-lg hover:shadow-[#ff6b2b]/5"
                >
                <div className="space-y-4">
                    <div>{card.icon}</div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">
                    {card.title}
                    </h3>
                    <p className="text-xs text-[#8c8a87] leading-relaxed">
                    {card.description}
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