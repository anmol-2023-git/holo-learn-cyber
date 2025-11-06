import { motion } from "framer-motion";
import { Trophy, Target, Users, BookOpen, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Gamified Learning",
    description: "Earn badges, climb leaderboards, and unlock achievements as you progress",
  },
  {
    icon: Target,
    title: "Real-World Scenarios",
    description: "Practice with challenges based on actual security vulnerabilities",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join thousands of learners and share knowledge in our forums",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Labs",
    description: "Access virtual machines and isolated environments for safe practice",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get immediate validation and detailed explanations for each challenge",
  },
  {
    icon: Shield,
    title: "Industry Certified",
    description: "Earn certificates recognized by leading security organizations",
  },
];

export const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="neon-text">CyberLearn</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a cybersecurity professional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-lg blur-xl group-hover:via-primary/10 transition-all duration-300" />
              
              <div className="relative bg-card border border-primary/20 rounded-lg p-6 h-full hover:border-primary/50 transition-colors">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-6 w-6 text-primary group-hover:animate-glow" />
                </motion.div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
