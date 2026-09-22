import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";

const Footer = () => (
  <footer className="border-t border-white/10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
      </p>
      <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-indigo-300">
        Back to top <FiArrowUp />
      </a>
    </div>
  </footer>
);

export default Footer;
