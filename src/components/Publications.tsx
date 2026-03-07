import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const publications = [
  {
    title: "On the Emergence of Reasoning in Large Language Models",
    venue: "NeurIPS 2024",
    type: "Conference Paper",
  },
  {
    title: "Scalable Methods for Alignment Without Human Labels",
    venue: "ICML 2023",
    type: "Conference Paper",
  },
  {
    title: "Theoretical Bounds on Transformer Generalization",
    venue: "Nature Machine Intelligence, 2023",
    type: "Journal Article",
  },
  {
    title: "RLHF at Scale: Lessons from Production Systems",
    venue: "ICLR 2022 (Spotlight)",
    type: "Conference Paper",
  },
  {
    title: "Dynamic Computation Graphs for Efficient Inference",
    venue: "NeurIPS 2021",
    type: "Conference Paper",
  },
];

const interests = [
  "Mechanistic Interpretability",
  "Constitutional AI",
  "Multi-Agent Systems",
  "Formal Verification of Neural Networks",
  "Cognitive Architectures",
  "Neurosymbolic Reasoning",
];

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4"
        >
          Scholarship
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-light text-foreground mb-2 sm:text-5xl"
        >
          Publications
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px line-gold mb-16"
        />

        <div className="space-y-0">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="group border-b border-border py-6 first:pt-0 last:border-b-0 cursor-pointer"
            >
              <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                {pub.title}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="font-body text-xs text-primary">{pub.venue}</span>
                <span className="font-body text-xs text-muted-foreground">· {pub.type}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="font-display text-2xl font-light text-foreground mb-6">Research Interests</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="font-body text-xs tracking-wider border border-border rounded-full px-4 py-2 text-secondary-foreground hover:border-gold-dim hover:text-primary transition-all duration-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
