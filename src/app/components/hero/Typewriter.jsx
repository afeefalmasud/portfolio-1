"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Typewriter({
  words,
  typingSpeed = 80,
  backspaceSpeed = 40,
  delay = 2000,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[wordIndex];

    if (!isDeleting && currentText === targetWord) {
      const timeout = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText((prev) => prev.slice(0, -1));
        } else {
          setCurrentText((prev) => targetWord.slice(0, prev.length + 1));
        }
      },
      isDeleting ? backspaceSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    backspaceSpeed,
    delay,
  ]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[0.85em] bg-[#ff6b2b] ml-1 rounded-full"
      />
    </span>
  );
}
