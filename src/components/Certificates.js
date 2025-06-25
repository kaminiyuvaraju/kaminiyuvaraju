import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "GATE DS & AI 2025 – Qualified",
    link: null,
  },
  {
    title: "Data Science & ML – GeeksforGeeks",
    link: "https://media.geeksforgeeks.org/courses/certificates/b0ee312c2a512b1a852a7dd1ca68d056.pdf",
  },
  {
    title: "Machine Learning, Deep Learning & NLP – Udemy",
    link: null,
  },
  {
    title: "Data Structures & Algorithms (Python) – GeeksforGeeks",
    link: "https://media.geeksforgeeks.org/courses/certificates/2f58d6e0639707055c180ac5cd360368.pdf",
  },
  {
    title: "Python (Basic) – HackerRank",
    link: "https://www.hackerrank.com/certificates/b977cb51981e",
  },
  {
    title: "SQL (Basic) – HackerRank",
    link: "https://www.hackerrank.com/certificates/14e552531dce",
  },
  {
    title: "5⭐ Problem Solving, SQL, Python – HackerRank",
    link: "https://www.hackerrank.com/profile/kaminiyuvaraju",
  },
];

const Certificates = () => {
  return (
    <motion.section
      id="certificates"
      className="py-16 bg-gradient-to-r from-sky-100 to-orange-100"
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
          🏆 Certificates & Achievements
        </motion.h2>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ul className="list-disc list-inside text-gray-800 space-y-3">
            {certificates.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium underline"
                  >
                    {cert.title}
                  </a>
                ) : (
                  <span>{cert.title}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certificates;
