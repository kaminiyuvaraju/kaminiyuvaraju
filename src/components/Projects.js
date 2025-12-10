import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "AHS Patient Engagement Platform — AIG Hospitals",
      tech: "Python, FastAPI, GraphQL (Strawberry), React.js, MongoDB, JWT, AsyncIO, Pydantic, Docker, GitHub",
      role: "Software Engineer @ Achala IT Solutions",
      period: "Jun 2025 – Present",
      description:
        "End-to-end Patient Engagement Platform for AIG Hospitals handling patient registration, authentication, and appointment scheduling with real-time doctor availability.",
      features: [
        "Designed and developed backend APIs using FastAPI, GraphQL (Strawberry), and MongoDB for registration, auth, and appointments",
        "Implemented JWT-based authentication and role-based access control for secure access management",
        "Integrated backend with React.js frontend for dynamic booking flows and doctor availability dashboards",
        "Used Pydantic, AsyncIO, and Docker for validation, async performance, and containerized deployments",
      ],
      link: "N/A",
    },
    {
      title: "PEP Leads Conversion",
      tech: "Python, FastAPI, REST APIs, React.js, MongoDB, JWT, AsyncIO, Pydantic, Docker, GitHub",
      role: "Software Engineer @ Achala IT Solutions",
      period: "Jun 2025 – Present",
      description:
        "Lead conversion and analytics system built on top of the Patient Engagement Platform, focused on visit history, follow-ups, and performance insights.",
      features: [
        "Developed and maintained backend services using FastAPI and RESTful APIs for healthcare data workflows",
        "Implemented logic to create and manage patient visit records for better tracking of historical summaries and follow-ups",
        "Built an analytics dashboard to visualize lead conversion metrics and patient insights",
        "Collaborated with data and frontend teams ensuring scalable and accurate API integration across modules",
      ],
      link: "N/A",
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
              <h3 className="text-xl font-bold text-indigo-800 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-purple-600 font-medium mb-1">
                {project.tech}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">Role:</span>{" "}
                {project.role}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <span className="font-medium text-gray-700">Timeline:</span>{" "}
                {project.period}
              </p>
              <p className="text-gray-700 mb-4 text-sm">
                {project.description}
              </p>

              <ul className="text-gray-700 text-sm mb-4 space-y-2">
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
                <span className="text-gray-400 italic text-sm">
                  🔒 Private Project
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-gray-600 mt-12 italic">
          📄 For more details and complete experience, please refer to my resume.
        </p>
      </div>
    </motion.section>
  );
};

export default Projects;
