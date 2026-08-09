'use client';

import { motion } from 'framer-motion';

export default function ScrollAnimate({ children, direction = 'left', delay = 0 }) {
  const xOffset = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
  const yOffset = direction === 'up' ? 50 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, y: yOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}