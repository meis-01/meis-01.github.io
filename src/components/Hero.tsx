import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle background gradient orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-body text-sm tracking-[0.3em] uppercase text-muted-foreground"
        >
          AI Research Scientist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-6xl font-light tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="text-foreground">Dr. Alex</span>
          <br />
          <span className="text-gradient-gold">Morgan</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mx-auto mt-8 h-px line-gold"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-md mx-auto font-body text-base font-light text-muted-foreground leading-relaxed"
        >
          Advancing the frontiers of machine intelligence through foundational research in deep learning, reasoning, and alignment.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          Scroll
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
