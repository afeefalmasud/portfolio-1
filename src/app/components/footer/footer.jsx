'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/afeefalmasud' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/afeef-al-masud' },
    { name: 'Facebook', href: 'https://www.facebook.com/afeef.masud.07' },
  ];

  return (
    <footer className="bg-[#0b0a0a] text-[#8c8a87] font-sans border-t border-white/10 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        
        {/* Left: Copyright */}
        <p className="text-center sm:text-left font-normal text-gray-400">
          © {currentYear} Afeef. Built with care in Bangladesh.
        </p>

        {/* Right: Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#ff6b2b] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}