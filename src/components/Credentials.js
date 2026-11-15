import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward, FiBookOpen, FiFileText } from "react-icons/fi";
import { achievements, certificates, education } from "../data/portfolio";
import Section, { fadeUp, inView, stagger } from "./Section";

const Entry = ({ title, detail, href }) => {
  const body = (
    <div className="min-w-0">
      <p className="font-medium text-slate-200">{title}</p>
      <p className="text-sm text-slate-400">{detail}</p>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
      {body}
      <FiArrowUpRight className="ml-auto mt-1 shrink-0 text-slate-400 group-hover:text-indigo-300" aria-hidden />
    </a>
  ) : (
    body
  );
};

const Column = ({ icon, title, children }) => (
  <motion.div variants={fadeUp} className="card p-6">
    <h3 className="mb-5 flex items-center gap-2.5 font-semibold text-white">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300" aria-hidden>
        {icon}
      </span>
      {title}
    </h3>
    <ul className="space-y-4">{children}</ul>
  </motion.div>
);

const Credentials = () => (
  <Section id="credentials" eyebrow="Credentials" title="Education & achievements">
    <motion.div className="grid gap-5 lg:grid-cols-3" variants={stagger} {...inView}>
      <Column icon={<FiBookOpen />} title="Education">
        {education.map((e) => (
          <li key={e.degree}>
            <p className="font-medium text-slate-200">{e.degree}</p>
            <p className="text-sm text-slate-400">{e.institution}</p>
            <p className="mt-1 flex justify-between font-mono text-xs text-slate-400">
              <span>{e.period}</span>
              <span className="text-indigo-200">{e.score}</span>
            </p>
          </li>
        ))}
      </Column>

      <Column icon={<FiAward />} title="Achievements">
        {achievements.map((a) => (
          <li key={a.title}>
            <Entry title={a.title} detail={a.detail} href={a.link} />
          </li>
        ))}
      </Column>

      <Column icon={<FiFileText />} title="Certifications">
        {certificates.map((c) => (
          <li key={c.title}>
            <Entry title={c.title} detail={c.issuer} href={c.link} />
          </li>
        ))}
      </Column>
    </motion.div>
  </Section>
);

export default Credentials;
