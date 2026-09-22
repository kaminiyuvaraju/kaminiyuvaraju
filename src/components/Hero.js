import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile, socials, stats } from "../data/portfolio";
import { fadeUp, stagger } from "./Section";

const Hero = () => (
  <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
    {/* Background: grid + glows */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[120px]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[100px]"
    />

    <motion.div
      className="relative mx-auto w-full max-w-6xl px-6 py-20"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.available}
        </span>
        <span className="inline-flex items-center gap-1.5 text-slate-400">
          <FiMapPin /> {profile.location}
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
      >
        Hi, I'm <span className="text-gradient inline-block pb-2 pr-1">{profile.name}</span>
      </motion.h1>

      <motion.p variants={fadeUp} className="mt-4 font-mono text-lg text-indigo-300 md:text-xl">
        {profile.role} · Python · FastAPI · RAG &amp; Multi-Agent AI
      </motion.p>

      <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        {profile.tagline}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
        <a href="#projects" className="btn-primary">
          View my work <FiArrowRight />
        </a>
        <a href={profile.resume} download className="btn-ghost">
          <FiDownload /> Resume
        </a>
        <div className="ml-1 flex gap-2 text-2xl">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-slate-400 transition hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-slate-400 transition hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      <motion.dl variants={fadeUp} className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card flex flex-col-reverse p-5">
            <dt className="mt-1 text-sm text-slate-400">{s.label}</dt>
            <dd className="text-3xl font-bold text-white">{s.value}</dd>
          </div>
        ))}
      </motion.dl>
    </motion.div>
  </section>
);

export default Hero;
