import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gradient-to-r from-pink-100 to-purple-100"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-indigo-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🧠 About Me
        </motion.h2>

        <motion.div
          className="bg-white shadow-lg rounded-xl p-8 text-gray-800 text-lg leading-relaxed"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            I’m an aspiring{" "}
            <span className="font-semibold text-indigo-500">Software Engineer</span> with a passion
            for building intelligent, scalable solutions. I have a strong foundation in Python, Machine Learning, and
            Web Development.
          </p>
          <p className="mt-4">
            Qualified in <span className="font-semibold text-purple-600">GATE 2025 (Data Science & AI)</span>, I enjoy
            solving real-world problems through technology and innovation. I'm enthusiastic about learning and contributing
            to impactful projects.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
