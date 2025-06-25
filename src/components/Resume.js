import React from "react";
import { motion } from "framer-motion";

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
            className="text-3xl font-bold text-indigo-700 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            📄 Resume
          </motion.h2>

          <motion.p
            className="mb-6 text-gray-700 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            You can download my latest resume in PDF format. It includes my experience,
            education, skills, and project details.
          </motion.p>

          <motion.a
            href="/Kamini-Resume.pdf"
            download
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
