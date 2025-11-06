import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Code, Bug, Lock, Network, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const paths = [
  {
    icon: Shield,
    title: "Introduction to Cybersecurity",
    description: "Learn the fundamentals of information security and cyber threats",
    level: "Beginner",
    challenges: 24,
    progress: 0,
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Bug,
    title: "Web Application Security",
    description: "Master OWASP Top 10 and web exploitation techniques",
    level: "Intermediate",
    challenges: 32,
    progress: 45,
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Terminal,
    title: "Penetration Testing",
    description: "Learn professional penetration testing methodologies",
    level: "Advanced",
    challenges: 28,
    progress: 12,
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Understand network protocols and security mechanisms",
    level: "Intermediate",
    challenges: 20,
    progress: 78,
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Code,
    title: "Secure Coding",
    description: "Write secure code and identify vulnerabilities",
    level: "Intermediate",
    challenges: 18,
    progress: 0,
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Lock,
    title: "Cryptography",
    description: "Master encryption algorithms and cryptographic protocols",
    level: "Advanced",
    challenges: 16,
    progress: 22,
    color: "from-cyan-500 to-teal-500",
  },
];

export const LearningPaths = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <section id="paths" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="neon-text">Paths</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured courses to take you from beginner to expert
          </p>
        </motion.div>

        {/* Loading animation */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute inset-0 border-4 border-muted rounded-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <p className="mt-4 text-muted-foreground">Loading paths...</p>
          </motion.div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <Card className="relative overflow-hidden bg-card border-primary/30 hover:border-primary/60 transition-all duration-300 group h-full">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={false}
                    animate={{
                      scale: hoveredIndex === index ? 1 : 0.8,
                    }}
                  />

                  {/* Scan line effect */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent scan-line"
                      initial={{ y: "-100%" }}
                      animate={{ y: "300%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  <div className="relative z-10 p-6">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${path.color} flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <path.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-medium text-primary mb-3">
                      {path.level}
                    </div>

                    {/* Title and description */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {path.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span>{path.challenges} Challenges</span>
                      <span>{path.progress}% Complete</span>
                    </div>

                    {/* Progress bar */}
                    <Progress value={path.progress} className="h-2 bg-muted">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${path.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${path.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </Progress>

                    {/* Hover effect corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    >
                      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${path.color} opacity-20 blur-xl`} />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
