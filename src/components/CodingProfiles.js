import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const CodingProfiles = () => {
  return (
    <motion.section
      id="codingprofiles"
      className="py-16 bg-gradient-to-r from-green-100 to-emerald-100"
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
          💻 Coding Profiles
        </motion.h2>

        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-gray-700 text-lg font-medium">
            Explore my coding presence on various platforms:
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-indigo-600 text-3xl"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/kaminiyuvaraju",
                color: "hover:text-indigo-800",
                label: "GitHub",
              },
              {
                icon: <FaHackerrank />,
                href: "https://www.hackerrank.com/profile/kaminiyuvaraju",
                color: "hover:text-green-600",
                label: "HackerRank",
              },
              {
                icon: <SiLeetcode />,
                href: "https://leetcode.com/u/KAMINIYUVARAJU/",
                color: "hover:text-yellow-600",
                label: "LeetCode",
              },
              {
                icon: <SiGeeksforgeeks />,
                href: "https://www.geeksforgeeks.org/user/kaminiyuvaraju/",
                color: "hover:text-green-500",
                label: "GeeksforGeeks",
              },
            ].map((platform, index) => (
              <motion.a
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                title={platform.label}
                className={`transition ${platform.color}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                {platform.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CodingProfiles;
