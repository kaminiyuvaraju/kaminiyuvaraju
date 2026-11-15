import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { otherProjects, work } from "../data/portfolio";
import Section, { fadeUp, inView, stagger } from "./Section";

const Status = ({ status }) =>
  status === "live" ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden /> Live in production
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-xs font-semibold text-slate-300">
      Personal project
    </span>
  );

const Flow = ({ steps }) => (
  <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs" aria-label="Architecture flow">
    {steps.map((step, i) => (
      <li key={step} className="flex items-center gap-1.5">
        <span className="rounded-md border border-white/10 bg-slate-950/60 px-2 py-1 text-slate-300">{step}</span>
        {i < steps.length - 1 && <FiArrowRight className="text-indigo-400" aria-hidden />}
      </li>
    ))}
  </ol>
);

const CaseStudy = ({ item }) => (
  <motion.article variants={fadeUp} className="card card-hover group relative flex flex-col overflow-hidden p-6 md:p-8">
    <div
      aria-hidden
      className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl transition duration-500 group-hover:bg-indigo-500/20"
    />
    <div className="flex flex-wrap items-center justify-between gap-3">
      <span className="font-mono text-xs uppercase tracking-wider text-indigo-300">{item.kicker}</span>
      <Status status={item.status} />
    </div>

    <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">{item.title}</h3>
    <p className="mt-3 leading-relaxed text-slate-400">{item.summary}</p>

    <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 border-y border-white/10 py-5 sm:flex sm:flex-wrap">
      {item.metrics.map((m) => (
        <div key={m.label} className="flex flex-col-reverse">
          <dt className="text-xs uppercase tracking-wide text-slate-400">{m.label}</dt>
          <dd className="text-2xl font-bold text-white">{m.value}</dd>
        </div>
      ))}
    </dl>

    <ul className="mt-6 space-y-2.5">
      {item.points.map((pt) => (
        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-slate-300">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" aria-hidden />
          {pt}
        </li>
      ))}
    </ul>

    <div className="mt-auto space-y-4 pt-7">
      <Flow steps={item.flow} />
      <p className="font-mono text-xs text-slate-400">{item.stack.join(" · ")}</p>
    </div>
  </motion.article>
);

const Work = () => (
  <Section
    id="work"
    eyebrow="Selected work"
    title="Systems I've shipped"
    intro="Production systems with real users. Each one shows what I built, how it fits together and what it changed."
  >
    <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} {...inView}>
      {work.map((item) => (
        <CaseStudy key={item.id} item={item} />
      ))}
    </motion.div>

    <motion.h3 className="mb-5 mt-16 text-lg font-semibold text-white" variants={fadeUp} {...inView}>
      Earlier projects
    </motion.h3>
    <motion.div className="grid gap-4 md:grid-cols-2" variants={stagger} {...inView}>
      {otherProjects.map((p) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          className="card card-hover group flex items-start gap-4 p-5"
        >
          <FaGithub className="mt-0.5 shrink-0 text-2xl text-slate-400" aria-hidden />
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-white group-hover:text-indigo-200">{p.title}</h4>
            <p className="mt-1 text-sm text-slate-400">{p.description}</p>
            <p className="mt-3 font-mono text-xs text-slate-400">{p.tags.join(" · ")}</p>
          </div>
          <FiArrowUpRight
            className="shrink-0 text-xl text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300"
            aria-hidden
          />
        </motion.a>
      ))}
    </motion.div>
  </Section>
);

export default Work;
