import React from "react";
import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
};

const Section = ({ id, eyebrow, title, intro, children, className = "" }) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`relative scroll-mt-20 py-20 md:py-28 ${className}`}>
    <div className="mx-auto max-w-6xl px-6">
      <motion.header className="mb-12 max-w-2xl" variants={fadeUp} {...inView}>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-indigo-300">{eyebrow}</p>
        <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-slate-400">{intro}</p>}
      </motion.header>
      {children}
    </div>
  </section>
);

export default Section;
