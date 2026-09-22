import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import Section, { fadeUp, stagger } from "./Section";

const Education = () => (
  <Section id="education" eyebrow="05. Education" title="Where I studied">
    <motion.div
      className="grid gap-5 md:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {education.map((e, i) => (
        <motion.div
          key={e.degree}
          variants={fadeUp}
          className={`card card-hover p-6 ${i === 0 ? "border-indigo-400/30 bg-indigo-500/[0.06]" : ""}`}
        >
          <p className="font-mono text-sm text-slate-500">{e.period}</p>
          <h3 className="mt-3 text-lg font-semibold text-white">{e.degree}</h3>
          <p className="text-slate-400">{e.institution}</p>
          <p className="mt-4 inline-block rounded-md bg-indigo-400/10 px-2.5 py-1 text-sm font-semibold text-indigo-200">
            {e.score}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

export default Education;
