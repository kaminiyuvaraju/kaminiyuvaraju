import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";
import Section, { fadeUp, inView, stagger } from "./Section";

const profiles = [
  { icon: <FaGithub />, label: "GitHub", href: socials.github },
  { icon: <FaLinkedin />, label: "LinkedIn", href: socials.linkedin },
  { icon: <SiLeetcode />, label: "LeetCode", href: socials.leetcode },
  { icon: <FaHackerrank />, label: "HackerRank", href: socials.hackerrank },
  { icon: <SiGeeksforgeeks />, label: "GeeksforGeeks", href: socials.gfg },
];

const Contact = () => (
  <Section id="contact" eyebrow="Contact" title="Let's talk">
    <motion.div className="card relative overflow-hidden p-8 md:p-12" variants={stagger} {...inView}>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-[100px]"
      />
      <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <motion.div variants={fadeUp}>
          <p className="max-w-xl text-2xl font-semibold leading-snug text-white md:text-3xl">
            Building something real-time, multi-tenant or AI-powered?
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
            I'm always happy to talk about backend architecture, real-time systems and AI agents. Email is the fastest
            way to reach me.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary break-all">
              <FiMail className="shrink-0" aria-hidden /> {profile.email}
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FaLinkedin aria-hidden /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.nav variants={fadeUp} aria-label="Profiles">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-400">Find me on</p>
          <ul className="divide-y divide-white/10 rounded-xl border border-white/10">
            {profiles.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
                >
                  <span className="text-lg text-slate-400 group-hover:text-indigo-300" aria-hidden>
                    {p.icon}
                  </span>
                  {p.label}
                  <FiArrowUpRight className="ml-auto text-slate-400 group-hover:text-indigo-300" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </motion.div>
  </Section>
);

export default Contact;
