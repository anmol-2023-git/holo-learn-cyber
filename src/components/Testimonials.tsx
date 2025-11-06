import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Security Analyst",
    company: "TechCorp",
    rating: 5,
    text: "CyberLearn transformed my career. The hands-on labs are incredibly realistic and prepared me for real-world scenarios. I landed my dream job within 3 months!",
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Penetration Tester",
    company: "SecureNet",
    rating: 5,
    text: "The gamified approach keeps me engaged and motivated. I've completed over 200 challenges and each one taught me something valuable. Best investment in my education.",
    initials: "MR",
  },
  {
    name: "Emily Johnson",
    role: "SOC Manager",
    company: "DataGuard",
    rating: 5,
    text: "I use CyberLearn to train my entire team. The structured paths and instant feedback make it easy to track progress and identify areas for improvement.",
    initials: "EJ",
  },
  {
    name: "Alex Kim",
    role: "Ethical Hacker",
    company: "CyberShield",
    rating: 5,
    text: "From beginner to advanced, the learning paths are well-designed. The community is supportive and the challenges are addictive. Highly recommend!",
    initials: "AK",
  },
  {
    name: "David Thompson",
    role: "IT Security Consultant",
    company: "InfoSec Pro",
    rating: 5,
    text: "The practical approach to learning cybersecurity is what sets CyberLearn apart. No fluff, just real skills that employers value.",
    initials: "DT",
  },
  {
    name: "Lisa Park",
    role: "Security Engineer",
    company: "CloudSafe",
    rating: 5,
    text: "I've tried many platforms, but CyberLearn is by far the best. The content is always up-to-date with the latest threats and techniques.",
    initials: "LP",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="neon-text">Students</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied learners who've advanced their careers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="relative overflow-hidden bg-card border-primary/30 hover:border-primary/60 transition-all duration-300 p-6 h-full group">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

                <div className="relative z-10">
                  {/* Avatar and info */}
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/30">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
