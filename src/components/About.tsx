import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4"
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-light text-foreground mb-2 sm:text-5xl"
        >
          A Brief Introduction
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px line-gold mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 font-body text-base font-light leading-[1.9] text-secondary-foreground"
        >
          <p>
            I am a research scientist specializing in artificial intelligence, with a focus on developing systems that can reason, learn, and generalize beyond their training distribution. My work sits at the intersection of deep learning theory, neural architecture design, and AI safety.
          </p>
          <p>
            With over a decade of experience spanning academia and industry, I have contributed to foundational advances in transformer architectures, reinforcement learning from human feedback, and scalable alignment methods. I hold a Ph.D. in Computer Science from MIT and have published extensively in top-tier venues including NeurIPS, ICML, and Nature Machine Intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
