import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
  title: "Patient Engagement System (PEP)",
  tech: "FastAPI, GraphQL, MongoDB, Redis, JWT, React",
  role: "Backend Developer @ Achala IT Solutions",
  period: "June 2025 – Present (Ongoing)",
  description:
    "A production-grade Patient Engagement Platform for AIG Hospitals enabling doctor booking, walk-ins, authentication, and real-time availability.",
  features: [
    "JWT-based login with secure role access",
    "GraphQL APIs for appointments and availability",
    "Redis caching to boost performance by 60%",
  ],
  link: "N/A",
},
    {
      title: "IPL Score & Win Probability Predictor",
      tech: "Python, Flask, Regression Models, Scikit-learn",
      role: "Fullstack Developer",
      period: "Jul 2023",
      description:
        "Live IPL match score and win probability prediction app using regression algorithms served through Flask APIs.",
      features: [
        "Preprocessed 200+ IPL matches for model training",
        "Built multiple regressors to predict final scores",
        "Responsive web interface for live inputs",
      ],
      link: "https://github.com/kaminiyuvaraju/IPL_Score_And_Win_Probability_Predictor",
    },
    {
      title: "Rice Crop Disease Detection",
      tech: "Python, ResNet-50, Flask, OpenCV",
      role: "ML Engineer",
      period: "Oct 2022 – Dec 2022",
      description:
        "Image classification system for detecting rice leaf diseases using deep learning and computer vision.",
      features: [
        "Fine-tuned ResNet-50 for 3 major rice diseases",
        "Achieved 93% test accuracy using transfer learning",
        "Deployed via Flask with real-time image upload",
      ],
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
        >
          🚀 Projects
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-purple-500 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-bold text-indigo-800 mb-1">{project.title}</h3>
              <p className="text-sm text-purple-600 font-medium mb-1">{project.tech}</p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">Role:</span> {project.role}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <span className="font-medium text-gray-700">Timeline:</span> {project.period}
              </p>
              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>

              <ul className="text-gray-700 text-sm mb-4 pl-4 list-disc space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-[2px]" />
                    {feature}
                  </li>
                ))}
              </ul>

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
                <span className="text-gray-400 italic text-sm">🔒 Private Project</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
