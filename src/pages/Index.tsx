import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <Experience />
      <Projects />
      <Publications />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Dr. Alex Morgan. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
