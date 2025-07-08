import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="py-16 bg-gradient-to-r from-purple-100 to-pink-100"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-indigo-700 mb-4 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaFilePdf className="text-indigo-600" />
            Resume
          </motion.h2>

          <motion.p
            className="mb-6 text-gray-700 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            You can download or view my latest resume including experience, education,
            skills, and projects.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 justify-center items-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* 📥 Download Button */}
            <a
              href="/Kamini-Resume.pdf"
              download
              className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
            >
              📥 Download Resume
            </a>

            {/* 🔎 View Online Button */}
            <a
              href="/Kamini-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full shadow-md hover:bg-indigo-50 transition duration-300"
            >
              🔎 View Online
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
