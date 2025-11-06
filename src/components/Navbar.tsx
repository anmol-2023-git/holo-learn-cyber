import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Shield, Code, Target, Zap } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { GlitchText } from "@/components/GlitchText";
import cyberLogo from "@/assets/cyber-logo.png";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-lg shadow-lg shadow-primary/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={cyberLogo}
              alt="CyberLearn"
              className="h-10 w-10 group-hover:animate-glow"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <GlitchText 
              text="CYBERLEARN"
              className="text-2xl font-bold neon-text tracking-wider"
            />
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { icon: Target, label: "Paths" },
              { icon: Code, label: "Challenges" },
              { icon: Shield, label: "Labs" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={`#${item.label.toLowerCase()}`}
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <item.icon className="h-4 w-4 group-hover:animate-glow" />
                <span className="font-medium">{item.label}</span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <MagneticButton
              className="ripple relative bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 glow-border group overflow-hidden"
              size="lg"
            >
              <Zap className="h-4 w-4 mr-2 group-hover:animate-glow" />
              Get Started
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </motion.nav>
    </>
  );
};
