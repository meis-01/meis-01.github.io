import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2021 — Present",
    role: "Senior Research Scientist",
    org: "DeepMind",
    description: "Leading research on scalable alignment methods and emergent reasoning in large language models.",
  },
  {
    period: "2018 — 2021",
    role: "Research Scientist",
    org: "OpenAI",
    description: "Contributed to foundational work on RLHF and instruction-following in GPT-family models.",
  },
  {
    period: "2015 — 2018",
    role: "Ph.D. in Computer Science",
    org: "MIT CSAIL",
    description: "Thesis on theoretical analysis of deep network optimization and generalization bounds.",
  },
  {
    period: "2013 — 2015",
    role: "Research Engineer",
    org: "Google Brain",
    description: "Developed large-scale distributed training infrastructure for neural network research.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4"
        >
          Career
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-light text-foreground mb-2 sm:text-5xl"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px line-gold mb-16"
        />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative border-l border-border pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-1 h-2 w-2 -translate-x-[4.5px] rounded-full border border-primary bg-background transition-colors duration-300 group-hover:bg-primary" />
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">{exp.period}</p>
              <h3 className="font-display text-xl text-foreground">{exp.role}</h3>
              <p className="font-body text-sm text-primary mb-3">{exp.org}</p>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
