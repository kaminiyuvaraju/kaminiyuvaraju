import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiCpu, FiServer } from "react-icons/fi";
import { about } from "../data/portfolio";
import Section, { fadeUp, stagger } from "./Section";

const highlights = [
  { icon: <FiServer />, title: "Backend systems", text: "Async FastAPI, GraphQL, PostgreSQL, Redis, Celery" },
  { icon: <FiCpu />, title: "Applied AI", text: "RAG, LangChain, NL-to-SQL, multi-agent pipelines" },
  { icon: <FiBriefcase />, title: "Shipped to production", text: "Multi-tenant SaaS live across 5 brands" },
  { icon: <FiAward />, title: "GATE 2025", text: "Qualified in Data Science & AI" },
];

const About = () => (
  <Section id="about" eyebrow="01. About" title="A bit about me">
    <div className="grid gap-12 lg:grid-cols-5">
      <motion.div
        className="space-y-5 text-lg leading-relaxed text-slate-400 lg:col-span-3"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {about.map((p) => (
          <motion.p key={p} variants={fadeUp}>
            {p}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {highlights.map((h) => (
          <motion.div key={h.title} variants={fadeUp} className="card card-hover flex gap-4 p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-xl text-indigo-300">
              {h.icon}
            </div>
            <div>
              <h3 className="font-semibold text-white">{h.title}</h3>
              <p className="text-sm text-slate-400">{h.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </Section>
);

export default About;
