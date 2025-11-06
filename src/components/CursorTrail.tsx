import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor dot */}
          <motion.div
            className="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen"
            animate={{
              x: mousePosition.x - 8,
              y: mousePosition.y - 8,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 500 }}
          />
          
          {/* Outer ring */}
          <motion.div
            className="fixed w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-[9999] mix-blend-screen"
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
          />

          {/* Glow effect */}
          <motion.div
            className="fixed w-32 h-32 bg-primary/10 rounded-full pointer-events-none z-[9998] blur-2xl"
            animate={{
              x: mousePosition.x - 64,
              y: mousePosition.y - 64,
            }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
          />
        </>
      )}
    </>
  );
};
