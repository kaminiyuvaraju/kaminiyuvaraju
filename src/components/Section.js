import React from "react";
import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const Section = ({ id, eyebrow, title, children, className = "" }) => (
  <section id={id} className={`relative py-24 ${className}`}>
    <div className="mx-auto max-w-6xl px-6">
      <motion.div
        className="mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <p className="mb-2 font-mono text-sm text-indigo-300">{eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

export default Section;
