import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiLayout, FiPackage, FiServer } from "react-icons/fi";
import { skills } from "../data/portfolio";
import Section, { fadeUp, stagger } from "./Section";

const icons = {
  Languages: <FiCode />,
  Backend: <FiServer />,
  Databases: <FiDatabase />,
  "AI / LLM": <FiCpu />,
  DevOps: <FiPackage />,
  Frontend: <FiLayout />,
};

const Skills = () => (
  <Section id="skills" eyebrow="04. Skills" title="My toolkit">
    <motion.div
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {skills.map(({ group, items }) => (
        <motion.div key={group} variants={fadeUp} className="card card-hover p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
              {icons[group]}
            </span>
            <h3 className="font-semibold text-white">{group}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {items.map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-sm text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

export default Skills;
