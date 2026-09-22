import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiCheck, FiLock } from "react-icons/fi";
import { otherProjects, projects } from "../data/portfolio";
import Section, { fadeUp, stagger } from "./Section";

const Projects = () => (
  <Section id="projects" eyebrow="03. Projects" title="Things I've built">
    <motion.div
      className="grid gap-6 lg:grid-cols-2"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {projects.map((p) => (
        <motion.article
          key={p.title}
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="card card-hover group relative flex flex-col overflow-hidden p-6 md:p-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20"
          />
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">{p.subtitle}</span>
            {p.live ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <FiLock /> Private
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-white">{p.title}</h3>
          <p className="mt-3 leading-relaxed text-slate-400">{p.description}</p>

          <ul className="mt-5 space-y-2.5">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-3 text-sm text-slate-300">
                <FiCheck className="mt-0.5 shrink-0 text-indigo-400" />
                {pt}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {p.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </motion.div>

    <motion.h3
      className="mb-6 mt-16 text-lg font-semibold text-white"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      Other projects
    </motion.h3>
    <motion.div
      className="grid gap-4 md:grid-cols-2"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {otherProjects.map((p) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          className="card card-hover group flex flex-col p-6"
        >
          <div className="flex items-center justify-between text-slate-400">
            <FaGithub className="text-2xl" />
            <FiArrowUpRight className="text-xl transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" />
          </div>
          <h4 className="mt-4 font-semibold text-white group-hover:text-indigo-200">{p.title}</h4>
          <p className="mt-2 text-sm text-slate-400">{p.description}</p>
          <p className="mt-4 font-mono text-xs text-slate-500">{p.tags.join(" · ")}</p>
        </motion.a>
      ))}
    </motion.div>
  </Section>
);

export default Projects;
