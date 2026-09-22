import React from "react";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { experience } from "../data/portfolio";
import Section, { fadeUp, stagger } from "./Section";

const Experience = () => (
  <Section id="experience" eyebrow="02. Experience" title="Where I've worked">
    <motion.ol
      className="relative space-y-10 border-l border-white/10 pl-8 md:pl-10"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {experience.map((job, i) => (
        <motion.li key={job.company} variants={fadeUp} className="relative">
          <span
            className={`absolute -left-[41px] top-7 h-4 w-4 rounded-full border-4 border-slate-950 md:-left-[49px] ${
              i === 0 ? "bg-indigo-400 shadow-[0_0_0_4px_rgba(129,140,248,0.25)]" : "bg-slate-600"
            }`}
          />
          <div className="card card-hover p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <p className="font-medium text-indigo-300">{job.company}</p>
              </div>
              <div className="text-sm text-slate-400 md:text-right">
                <p className="font-mono">{job.period}</p>
                <p className="inline-flex items-center gap-1">
                  <FiMapPin /> {job.location}
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-slate-400">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  </Section>
);

export default Experience;
