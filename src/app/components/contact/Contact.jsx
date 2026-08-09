'use client';

import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
    const contactMethods = [
        {
        type: 'EMAIL',
        value: 'its.afeefalmasud@gmail.com', // Replace with your email
        href: 'mailto:its.afeefalmasud@gmail.com',
        icon: HiOutlineMail,
        },
        {
        type: 'PHONE',
        value: '+880 1869 540334', // Replace with your phone number
        href: 'tel:+8801869540334',
        icon: FiPhoneCall,
        },
        {
        type: 'WHATSAPP',
        value: '+880 1869 540334', // Replace with your WhatsApp number
        href: 'https://wa.me/8801869540334',
        icon: FaWhatsapp,
        },
    ];

  return (
    <section id="contact" className="bg-[#0b0a0a] py-24 text-white font-sans relative overflow-hidden">
      {/* 1. Dotted Background Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* 2. Animated Infinite Pulse Orange Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-80 bg-[#ff6b2b]/15 blur-[120px] pointer-events-none rounded-full animate-pulse transition-all duration-1000" />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#ff6b2b] uppercase block">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white">
            Got something to build? Let’s talk.
          </h2>
          <p className="text-sm sm:text-base text-[#8c8a87] font-normal pt-1">
            I reply to every message within a day — usually much faster.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.type === 'WHATSAPP' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group bg-[#181615]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#ff6b2b]/50 hover:bg-[#1f1c1b] hover:shadow-[0_0_25px_rgba(255,107,43,0.15)] cursor-pointer"
              >
                {/* Icon */}
                <div className="text-[#ff6b2b] text-xl transition-transform duration-300">
                  <Icon />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono tracking-widest text-[#8c8a87] uppercase font-semibold block">
                    {method.type}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#ff6b2b] transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href="mailto:its.afeefalmasud@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-linear-to-r from-[#ff6b2b] to-[#ff8c42] text-black font-semibold text-xs tracking-wide shadow-lg shadow-[#ff6b2b]/20 transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[#ff6b2b]/40 active:scale-95"
          >
            <HiOutlineMail className="text-base" />
            Send me an email
          </a>
        </div>

      </div>
    </section>
  );
}