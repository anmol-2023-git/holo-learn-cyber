import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = "!<>-_\\/[]{}—=+*^?#________";

  const getRandomChar = () => glitchChars[Math.floor(Math.random() * glitchChars.length)];

  useEffect(() => {
    if (!isGlitching) return;

    const timer = setTimeout(() => {
      setIsGlitching(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [isGlitching]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      whileHover={{ scale: 1.05 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={
            isGlitching && Math.random() > 0.7
              ? {
                  x: [0, -2, 2, -2, 0],
                  opacity: [1, 0.8, 1, 0.8, 1],
                }
              : {}
          }
          transition={{ duration: 0.2 }}
        >
          {isGlitching && Math.random() > 0.8 ? getRandomChar() : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
