import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaHackerrank, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { FiDownload, FiMail, FiPhone } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";
import Section, { fadeUp, stagger } from "./Section";

const profiles = [
  { icon: <FaGithub />, label: "GitHub", href: socials.github },
  { icon: <FaLinkedin />, label: "LinkedIn", href: socials.linkedin },
  { icon: <SiLeetcode />, label: "LeetCode", href: socials.leetcode },
  { icon: <FaHackerrank />, label: "HackerRank", href: socials.hackerrank },
  { icon: <SiGeeksforgeeks />, label: "GeeksforGeeks", href: socials.gfg },
  { icon: <FaWhatsapp />, label: "WhatsApp", href: socials.whatsapp },
  { icon: <FaInstagram />, label: "Instagram", href: socials.instagram },
];

const Contact = () => (
  <Section id="contact" eyebrow="07. Contact" title="Let's work together">
    <motion.div
      className="card relative overflow-hidden p-8 md:p-12"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-[100px]"
      />

      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div variants={fadeUp}>
          <p className="max-w-md text-lg leading-relaxed text-slate-400">
            I'm open to backend and AI engineering roles, collaborations, or just a friendly hello. My inbox is
            always open.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <FiMail /> Say hello
            </a>
            <a href={profile.resume} download className="btn-ghost">
              <FiDownload /> Download resume
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-xl border border-white/10 p-4 transition hover:border-indigo-400/40"
          >
            <FiMail className="text-xl text-indigo-300" />
            <span className="break-all text-slate-200">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-xl border border-white/10 p-4 transition hover:border-indigo-400/40"
          >
            <FiPhone className="text-xl text-indigo-300" />
            <span className="text-slate-200">{profile.phone}</span>
          </a>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="relative mt-10 border-t border-white/10 pt-8">
        <p className="mb-4 font-mono text-sm text-slate-500">Find me on</p>
        <div className="flex flex-wrap gap-3">
          {profiles.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-indigo-400/40 hover:text-white"
            >
              <span className="text-lg">{p.icon}</span>
              {p.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </Section>
);

export default Contact;
