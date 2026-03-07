import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ARIA",
    subtitle: "Adaptive Reasoning & Inference Architecture",
    description: "A novel transformer variant with dynamic computation graphs that achieves state-of-the-art on mathematical reasoning benchmarks while using 40% fewer parameters.",
    tags: ["Architecture", "Reasoning", "Efficiency"],
  },
  {
    title: "AlignBench",
    subtitle: "Comprehensive Alignment Evaluation Suite",
    description: "An open-source benchmark for systematically evaluating AI alignment across safety, helpfulness, and honesty dimensions. Adopted by 50+ research labs.",
    tags: ["Alignment", "Benchmarking", "Open Source"],
  },
  {
    title: "NeuroScale",
    subtitle: "Scaling Laws for Emergent Capabilities",
    description: "Empirical and theoretical study of how model capabilities emerge with scale, providing predictive frameworks for capability forecasting.",
    tags: ["Scaling Laws", "Theory", "Emergence"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4"
        >
          Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-light text-foreground mb-2 sm:text-5xl"
        >
          Selected Projects
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px line-gold mb-16"
        />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="group relative rounded-lg border border-border bg-card p-8 transition-all duration-500 hover:border-gold-dim sm:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-foreground group-hover:text-gradient-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-primary/80 mt-1">{project.subtitle}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-2" />
              </div>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground mt-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-body text-xs tracking-wider uppercase border border-border rounded-full px-3 py-1 text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
