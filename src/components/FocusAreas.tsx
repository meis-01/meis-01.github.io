import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Shield, Cpu, Sparkles } from "lucide-react";

const areas = [
  {
    icon: Brain,
    title: "Deep Learning Theory",
    description: "Investigating the mathematical foundations of neural network generalization and optimization landscapes.",
  },
  {
    icon: Shield,
    title: "AI Alignment & Safety",
    description: "Developing methods to ensure AI systems remain aligned with human values as they scale in capability.",
  },
  {
    icon: Cpu,
    title: "Neural Architecture Design",
    description: "Creating novel architectures that improve efficiency, reasoning, and long-context understanding.",
  },
  {
    icon: Sparkles,
    title: "Emergent Reasoning",
    description: "Studying how complex reasoning capabilities emerge from scale and how to reliably elicit them.",
  },
];

const FocusAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="focus" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4"
        >
          Research
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-light text-foreground mb-2 sm:text-5xl"
        >
          Focus Areas
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px line-gold mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group rounded-lg border border-border bg-card p-8 transition-all duration-500 hover:border-gold-dim hover:glow-gold"
            >
              <area.icon className="h-5 w-5 text-primary mb-5" />
              <h3 className="font-display text-xl font-medium text-foreground mb-3">{area.title}</h3>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
