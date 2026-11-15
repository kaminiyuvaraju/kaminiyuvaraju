import React from "react";
import { motion } from "framer-motion";
import { about, skills } from "../data/portfolio";
import Section, { fadeUp, inView, stagger } from "./Section";

const About = () => (
  <Section id="about" eyebrow="About" title="How I work, and what with">
    <div className="grid gap-12 lg:grid-cols-5">
      <motion.div
        className="space-y-5 text-lg leading-relaxed text-slate-400 lg:col-span-2"
        variants={stagger}
        {...inView}
      >
        {about.map((p) => (
          <motion.p key={p} variants={fadeUp}>
            {p}
          </motion.p>
        ))}
      </motion.div>

      <motion.dl className="card divide-y divide-white/10 lg:col-span-3" variants={stagger} {...inView}>
        {skills.map(({ group, items }) => (
          <motion.div key={group} variants={fadeUp} className="grid gap-3 p-5 sm:grid-cols-[7rem_1fr] sm:items-start">
            <dt className="pt-1 font-mono text-xs uppercase tracking-wider text-indigo-300">{group}</dt>
            <dd className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-sm text-slate-200"
                >
                  {s}
                </span>
              ))}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </div>
  </Section>
);

export default About;
