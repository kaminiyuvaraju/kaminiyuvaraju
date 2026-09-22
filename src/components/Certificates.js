import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { certificates } from "../data/portfolio";
import Section, { fadeUp, stagger } from "./Section";

const CertCard = ({ cert }) => {
  const body = (
    <>
      <FiAward className="mt-0.5 shrink-0 text-xl text-amber-300" />
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-white">{cert.title}</h3>
        <p className="text-sm text-slate-500">{cert.issuer}</p>
      </div>
      {cert.link && (
        <FiArrowUpRight className="shrink-0 text-slate-500 transition group-hover:text-indigo-300" />
      )}
    </>
  );

  const className = "card flex items-start gap-4 p-5";
  return cert.link ? (
    <motion.a
      variants={fadeUp}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} card-hover group`}
    >
      {body}
    </motion.a>
  ) : (
    <motion.div variants={fadeUp} className={className}>
      {body}
    </motion.div>
  );
};

const Certificates = () => (
  <Section id="certificates" eyebrow="06. Certifications" title="Certificates & achievements">
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {certificates.map((c) => (
        <CertCard key={c.title + c.issuer} cert={c} />
      ))}
    </motion.div>
  </Section>
);

export default Certificates;
