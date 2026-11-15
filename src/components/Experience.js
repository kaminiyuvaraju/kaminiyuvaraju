import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiTrendingUp } from "react-icons/fi";
import { experience } from "../data/portfolio";
import Section, { fadeUp, inView, stagger } from "./Section";

const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Where I've worked">
    <motion.div className="space-y-6" variants={stagger} {...inView}>
      {experience.map((job) => (
        <motion.article key={job.company} variants={fadeUp} className="card p-6 md:p-8">
          <header className="flex flex-col gap-1 border-b border-white/10 pb-5 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-semibold text-white">{job.company}</h3>
            <p className="flex items-center gap-3 text-sm text-slate-400">
              <span className="font-mono">{job.period}</span>
              <span className="inline-flex items-center gap-1">
                <FiMapPin aria-hidden /> {job.location}
              </span>
            </p>
          </header>

          <ol className="relative mt-6 space-y-8 border-l border-white/10 pl-6">
            {job.roles.map((role, i) => (
              <li key={role.title} className="relative">
                <span
                  aria-hidden
                  className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-slate-950 ${
                    i === 0 ? "bg-indigo-400 shadow-[0_0_0_4px_rgba(129,140,248,0.2)]" : "bg-slate-600"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h4 className="font-semibold text-indigo-200">{role.title}</h4>
                  {role.promoted && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                      <FiTrendingUp aria-hidden /> Promoted
                    </span>
                  )}
                  <span className="font-mono text-xs text-slate-400">{role.period}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {role.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed text-slate-400">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-500" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </motion.article>
      ))}
    </motion.div>
  </Section>
);

export default Experience;
