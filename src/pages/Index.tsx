import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LearningPaths } from "@/components/LearningPaths";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Companies } from "@/components/Companies";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { CursorTrail } from "@/components/CursorTrail";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorTrail />
      <Navbar />
      <Hero />
      <LearningPaths />
      <Features />
      <Stats />
      <Companies />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
