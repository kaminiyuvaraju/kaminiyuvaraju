import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-indigo-600 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🧑‍💼 Experience
        </motion.h2>

        <motion.div
          className="bg-pink-50 border-l-4 border-indigo-500 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-800">
            Software Engineer – Achala IT Solutions
          </h3>
          <p className="text-gray-500 italic mb-4">June 2025 – Present</p>

          <motion.ul
            className="list-disc list-inside text-gray-700 space-y-2"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.15 }}
            viewport={{ once: true }}
          >
            {[
              "Working on the PEP (Patient Engagement Platform) - AIG Hospitals product using FastAPI, MongoDB, and Redis.",
              "Implemented the Doctor Appointment Module with GraphQL API integration.",
              "Developed and integrated ticket and availability sections for Supervisor and Agent dashboards.",
              "Handled JWT-based authentication and role-based access for multiple user types.",
              "Worked on production-level debugging and optimized MongoDB queries for faster execution.",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
