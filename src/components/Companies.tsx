import { motion } from "framer-motion";

const companies = [
  "TechCorp Global",
  "SecureNet Systems",
  "CyberShield Inc",
  "DataGuard Solutions",
  "InfoSec Pro",
  "NetworkDefense",
  "CloudSafe Systems",
  "DigitalFortress",
];

export const Companies = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="neon-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join professionals from top organizations worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex items-center justify-center h-24 bg-card border border-primary/20 rounded-lg hover:border-primary/50 transition-colors">
                <span className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
