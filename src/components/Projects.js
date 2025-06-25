import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Doctor Appointment Booking System (PEP)",
      tech: "FastAPI, GraphQL, MongoDB, Redis, JWT, React",
      description:
        "A production-level Patient Engagement Platform for AIG Hospitals with JWT auth, doctor availability, GraphQL APIs, and Redis caching.",
      link: "N/A",
    },
    {
      title: "Rice Crop Disease Detection",
      tech: "Python, ResNet-50, Flask, OpenCV",
      description:
        "Built a ResNet-50 based deep learning model to classify major rice leaf diseases and deployed it using Flask.",
      link: "https://github.com/kaminiyuvaraju/Rice_Crop_Disease_Detection",
    },
    {
      title: "IPL Score & Win Probability Predictor",
      tech: "Python, Flask, Regression Models, Scikit-learn",
      description:
        "Predicted live IPL match scores and win probabilities using regression models and Flask APIs.",
      link: "https://github.com/kaminiyuvaraju/IPL_Score_And_Win_Probability_Predictor",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-16 bg-gradient-to-r from-indigo-100 to-blue-100"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-indigo-700 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🚀 Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white border-t-4 border-purple-500 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
              <p className="text-sm text-purple-600 mb-2">{project.tech}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              {project.link !== "N/A" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 font-medium underline"
                >
                  View on GitHub →
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
