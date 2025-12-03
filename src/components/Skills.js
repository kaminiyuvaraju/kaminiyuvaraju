import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Python", "JavaScript", "TypeScript",
  "FastAPI", "Node.js", "NestJS", "REST APIs", "GraphQL",
  "HTML", "CSS", "JavaScript", "React",
  "MongoDB", "PostgreSQL", "SQL",
  "Docker", "GitHub", "VSCode", "PgAdmin", "Jupyter Notebook", "MongoDB Compass",
  "Model Development & Evaluation"
];


const Skills = () => {
  return (
    <motion.section
      id="skills"
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
          🛠 Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 transition"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
