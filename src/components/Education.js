import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "RGUKT RK Valley",
    duration: "2021 – 2025",
    score: "CGPA: 9.0",
  },
  {
    degree: "Pre-University Course (MPC)",
    institution: "RGUKT RK Valley",
    duration: "2019 – 2021",
    score: "CGPA: 9.58",
  },
  {
    degree: "Secondary School",
    institution: "ZPHS RV Palli",
    duration: "2018 – 2019",
    score: "GPA: 10.0",
  },
];

const Education = () => {
  return (
    <motion.section
      id="education"
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
          🎓 Education
        </motion.h2>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
              <p className="text-gray-700">{item.institution}</p>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>{item.duration}</span>
                <span>{item.score}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
