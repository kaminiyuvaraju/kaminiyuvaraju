import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Patient Engagement System (PEP)",
      tech: "FastAPI, GraphQL, MongoDB, Redis, JWT, React",
      description:
        "A production-level Patient Engagement Platform for AIG Hospitals with JWT auth, doctor availability, GraphQL APIs, and Redis caching.",
      link: "N/A",
    },
    {
      title: "IPL Score & Win Probability Predictor",
      tech: "Python, Flask, Regression Models, Scikit-learn",
      description:
        "Predicted live IPL match scores and win probabilities using regression models and Flask APIs.",
      link: "https://github.com/kaminiyuvaraju/IPL_Score_And_Win_Probability_Predictor",
    },
    {
      title: "Rice Crop Disease Detection",
      tech: "Python, ResNet-50, Flask, OpenCV",
      description:
        "Built a ResNet-50 based deep learning model to classify major rice leaf diseases and deployed it using Flask.",
      link: "https://github.com/kaminiyuvaraju/Rice_Crop_Disease_Detection",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-800 mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🚀 Projects
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-t-4 border-purple-400"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm text-purple-600 font-medium mb-3">{project.tech}</p>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              {project.link !== "N/A" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 font-medium underline"
                >
                  🔗 View on GitHub
                </a>
              ) : (
                <span className="text-gray-400 italic text-sm">Private Project</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
