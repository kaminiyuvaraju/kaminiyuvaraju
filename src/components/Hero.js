import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { prodStats, profile, socials } from "../data/portfolio";
import { fadeUp, stagger } from "./Section";

const ProdPanel = () => (
  <motion.div
    variants={fadeUp}
    className="relative rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-indigo-950/50 backdrop-blur"
    role="figure"
    aria-label="Production impact"
  >
    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
      <div className="flex items-center gap-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      </div>
      <span className="font-mono text-xs text-slate-400">production.status</span>
      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> live
      </span>
    </div>

    <motion.dl className="divide-y divide-white/5 px-5 py-2" variants={stagger}>
      {prodStats.map((s) => (
        <motion.div
          key={s.key}
          variants={fadeUp}
          className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 py-3 sm:grid-cols-[9.5rem_4.5rem_1fr]"
        >
          <dt className="font-mono text-sm text-indigo-300">{s.key}</dt>
          <dd className="text-right text-xl font-bold tabular-nums text-white sm:text-left">{s.value}</dd>
          <dd className="col-span-2 text-sm text-slate-400 sm:col-span-1">{s.note}</dd>
        </motion.div>
      ))}
    </motion.dl>

    <div className="border-t border-white/10 px-5 py-3 font-mono text-xs text-slate-400">
      <span className="text-emerald-300">kamini@prod</span>:~$ shipping the next release
      <span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-slate-300" aria-hidden />
    </div>
  </motion.div>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden pb-6 pt-28 md:pb-10 lg:pt-36">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-indigo-600/25 blur-[120px]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-fuchsia-600/15 blur-[100px]"
    />

    <motion.div
      className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr]"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.current}
          </span>
          <span className="inline-flex items-center gap-1.5 text-slate-400">
            <FiMapPin aria-hidden /> {profile.location}
          </span>
        </motion.div>

        <motion.p variants={fadeUp} className="font-mono text-sm text-indigo-300 md:text-base">
          {profile.name} · {profile.role}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          <span className="sr-only">
            {profile.name}, {profile.role}:{" "}
          </span>
          {profile.headline} <span className="text-gradient">{profile.headlineAccent}</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          {profile.summary}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-primary">
            See my work <FiArrowRight aria-hidden />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <FiDownload aria-hidden /> Resume
          </a>
          <div className="ml-1 flex gap-1 text-2xl">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
              <FaGithub />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      <ProdPanel />
    </motion.div>
  </section>
);

export default Hero;
